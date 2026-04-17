/* ============================================================
   G.A.N.O? — El Takibi Modülü (MediaPipe HandLandmarker)
   Webcam üzerinden el pozisyonu ve jest algılama
   ============================================================ */

class HandTracker {
  constructor() {
    this.handLandmarker = null;
    this.video = null;
    this.running = false;
    this.lastVideoTime = -1;

    /* Callback'ler */
    this.onHandUpdate = null;   // ({x, y, isOpen, side, screenX, screenY}) → her frame
    this.onSelection = null;    // (side: 'left'|'right') → seçim yapıldığında
    this.onHover = null;        // (screenX, screenY) → her frame, ekran koordinatlarıyla

    /* Durum İzleme */
    this.prevOpen = null;       // önceki frame'de el açık mıydı?
    this.cooldown = false;      // seçim sonrası bekleme
    this.fistStartTime = 0;     // yumruk başlangıç zamanı
    this.wasFist = false;       // yumruk yapılmış mı (geçiş takibi)

    /* ── HIZLANDIRILMIŞ PARAMETRELER ── */
    this.MIN_FIST_DURATION = 80;   // yumruk en az 80ms sürmeli (önceden 250ms)
    this.COOLDOWN_DURATION = 600;   // seçim sonrası bekleme (önceden 1500ms)

    /* MediaPipe modül referansları */
    this._HandLandmarker = null;
    this._DrawingUtils = null;
  }

  /**
   * MediaPipe HandLandmarker'ı CDN'den yükler ve başlatır.
   * @param {HTMLVideoElement} videoElement — Kamera video elementi
   */
  async init(videoElement) {
    this.video = videoElement;

    try {
      /* MediaPipe Tasks Vision modülünü dinamik olarak yükle */
      const vision = await import(
        'https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/vision_bundle.mjs'
      );

      this._HandLandmarker = vision.HandLandmarker;
      this._DrawingUtils = vision.DrawingUtils || null;

      const filesetResolver = await vision.FilesetResolver.forVisionTasks(
        'https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm'
      );

      this.handLandmarker = await this._HandLandmarker.createFromOptions(
        filesetResolver,
        {
          baseOptions: {
            modelAssetPath:
              'https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/1/hand_landmarker.task',
            delegate: 'GPU'
          },
          runningMode: 'VIDEO',
          numHands: 1
        }
      );

      console.log('✅ HandLandmarker başarıyla yüklendi');
      return true;
    } catch (err) {
      console.warn('⚠️ HandLandmarker yüklenemedi:', err);
      return false;
    }
  }

  /**
   * 21 el landmark noktasını analiz ederek elin açık mı kapalı mı olduğunu belirler.
   * Parmak uçları (tip) ile PIP eklemleri karşılaştırılır.
   *
   * Landmark indeksleri:
   *  - Parmak uçları: 8 (işaret), 12 (orta), 16 (yüzük), 20 (serçe)
   *  - PIP eklemleri:  6, 10, 14, 18
   *  - Başparmak ucu: 4, IP: 3
   */
  isHandOpen(landmarks) {
    const fingerTips = [8, 12, 16, 20];
    const fingerPIPs = [6, 10, 14, 18];
    let openFingers = 0;

    for (let i = 0; i < fingerTips.length; i++) {
      /* y ekseni aşağı doğru artar — tip.y < pip.y ise parmak açık */
      if (landmarks[fingerTips[i]].y < landmarks[fingerPIPs[i]].y) {
        openFingers++;
      }
    }

    /* Başparmak kontrolü (x ekseni — kamera ayna efekti nedeniyle) */
    const thumbTip = landmarks[4];
    const thumbIP = landmarks[3];
    const wrist = landmarks[0];
    /* Başparmak bilek yönünden uzaklaşıyorsa açık */
    if (Math.abs(thumbTip.x - wrist.x) > Math.abs(thumbIP.x - wrist.x)) {
      openFingers++;
    }

    return openFingers >= 3; /* 3+ parmak açıksa "açık el" */
  }

  /**
   * Elin ekranın sol mu sağ mı tarafında olduğunu belirler.
   * Video yatay olarak aynalamanıyor (scaleX(-1)), bu yüzden
   * landmark x>0.5 → ekranda SOL taraf
   */
  getHandSide(landmarks) {
    const wrist = landmarks[0];
    const middleTip = landmarks[12];
    const avgX = (wrist.x + middleTip.x) / 2;
    /* Kamera aynalı olduğundan x ekseni ters */
    return avgX > 0.5 ? 'left' : 'right';
  }

  /**
   * Elin ekran koordinatlarını döndürür (aynalı hesaplama dahil)
   */
  getScreenCoords(landmarks) {
    const wrist = landmarks[0];
    const screenX = (1 - wrist.x) * window.innerWidth;
    const screenY = wrist.y * window.innerHeight;
    return { screenX, screenY };
  }

  /**
   * Her video frame'inde el algılama çalıştırır.
   */
  detect() {
    if (!this.running || !this.handLandmarker || !this.video) return;

    const now = performance.now();

    /* Yeni frame gelmiş mi kontrol et */
    if (this.video.currentTime !== this.lastVideoTime) {
      this.lastVideoTime = this.video.currentTime;

      try {
        const results = this.handLandmarker.detectForVideo(this.video, now);

        if (results && results.landmarks && results.landmarks.length > 0) {
          const hand = results.landmarks[0];
          const isOpen = this.isHandOpen(hand);
          const side = this.getHandSide(hand);
          const { screenX, screenY } = this.getScreenCoords(hand);

          /* Her frame için pozisyon güncellemesi gönder */
          if (this.onHandUpdate) {
            this.onHandUpdate({
              x: hand[0].x,
              y: hand[0].y,
              isOpen: isOpen,
              side: side,
              screenX: screenX,
              screenY: screenY,
              landmarks: hand
            });
          }

          /* Hover callback (ekran koordinatlarıyla) */
          if (this.onHover) {
            this.onHover(screenX, screenY, isOpen);
          }

          /* ── GELİŞTİRİLMİŞ SEÇİM JESTİ ──
             Mantık: el kapatılır (yumruk) → yeterince süre tutulur → el açılır = SEÇİM
             Daha hızlı ve güvenilir algılama için:
             - wasFist flag ile geçiş takibi
             - MIN_FIST_DURATION düşürüldü (80ms)
             - Cooldown kısaltıldı (600ms)
          */
          if (!isOpen && (this.prevOpen === true || this.prevOpen === null)) {
            /* El yeni kapandı → yumruk başlangıcını kaydet */
            this.fistStartTime = now;
            this.wasFist = true;
          }

          if (isOpen && this.wasFist && !this.cooldown) {
            /* El açıldı ve öncesinde yumruk yapılmıştı */
            const fistDuration = now - this.fistStartTime;
            if (fistDuration >= this.MIN_FIST_DURATION) {
              /* ✅ Seçim yapıldı! */
              this.cooldown = true;
              this.wasFist = false;
              if (this.onSelection) {
                this.onSelection(side);
              }
              setTimeout(() => {
                this.cooldown = false;
              }, this.COOLDOWN_DURATION);
            }
          }

          /* El açık kaldığı sürece wasFist'i sıfırla (uzun süreli açık el) */
          if (isOpen && this.prevOpen === true) {
            this.wasFist = false;
          }

          this.prevOpen = isOpen;
        } else {
          /* El algılanmadı */
          if (this.onHandUpdate) {
            this.onHandUpdate(null);
          }
          this.prevOpen = null;
          this.wasFist = false;
        }
      } catch (e) {
        /* Zaman zaman frame atlayabilir */
      }
    }

    requestAnimationFrame(() => this.detect());
  }

  /** Algılama döngüsünü başlatır */
  start() {
    this.running = true;
    this.prevOpen = null;
    this.cooldown = false;
    this.wasFist = false;
    this.detect();
    console.log('🖐️ El takibi başladı');
  }

  /** Algılama döngüsünü durdurur */
  stop() {
    this.running = false;
    console.log('🖐️ El takibi durduruldu');
  }
}

/* Global olarak dışa aktar */
window.HandTracker = HandTracker;
