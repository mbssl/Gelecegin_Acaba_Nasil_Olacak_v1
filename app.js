/* ============================================================
   G.A.N.O? — Ana Uygulama Kontrolcüsü
   Ekran yönetimi, kamera, el takibi, soru akışı
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  const game = new GameController();
  game.init();
});

class GameController {
  constructor() {
    /* ── Ekranlar ── */
    this.screens = {
      welcome: document.getElementById('screen-welcome'),
      category: document.getElementById('screen-category'),
      question: document.getElementById('screen-question'),
      loading: document.getElementById('screen-loading'),
      result: document.getElementById('screen-result')
    };

    /* ── Elementler ── */
    this.el = {
      btnStart: document.getElementById('btn-start'),
      btnReplay: document.getElementById('btn-replay'),
      categoryGrid: document.getElementById('category-grid'),
      optionA: document.getElementById('option-a'),
      optionB: document.getElementById('option-b'),
      questionText: document.getElementById('question-text'),
      progressLabel: document.getElementById('progress-label'),
      progressFill: document.getElementById('progress-fill'),
      cameraMirror: document.getElementById('camera-mirror'),
      cameraVideo: document.getElementById('camera-video'),
      handCursor: document.getElementById('hand-cursor'),
      handStatus: document.getElementById('hand-status'),
      inputModeBadge: document.getElementById('input-mode-badge'),
      resultCategoryLabel: document.getElementById('result-category-label'),
      resultEmoji: document.getElementById('result-emoji'),
      resultName: document.getElementById('result-name'),
      resultReasons: document.getElementById('result-reasons')
    };

    /* ── Oyun Durumu ── */
    this.currentScreen = 'welcome';
    this.selectedCategory = null;
    this.currentQuestionIndex = 0;
    this.userTags = {};
    this.handTracker = null;
    this.cameraStream = null;
    this.useHandTracking = false;
    this.isSelecting = false; // prevent double selection
  }

  /* ═══════════════════════════════════════════
     INIT
     ═══════════════════════════════════════════ */
  init() {
    this.setupParticles();
    this.buildCategoryCards();
    this.bindEvents();
    console.log('🎮 G.A.N.O? başlatıldı');
  }

  /* ═══════════════════════════════════════════
     EVENT BINDING
     ═══════════════════════════════════════════ */
  bindEvents() {
    /* Başla butonu */
    this.el.btnStart.addEventListener('click', () => this.onStartClick());

    /* Tekrar Oyna butonu */
    this.el.btnReplay.addEventListener('click', () => this.resetGame());

    /* Şık kartlarına tıklama (fallback) */
    this.el.optionA.addEventListener('click', () => this.selectOption('left'));
    this.el.optionB.addEventListener('click', () => this.selectOption('right'));
  }

  /* ═══════════════════════════════════════════
     EKRAN GEÇİŞLERİ
     ═══════════════════════════════════════════ */
  showScreen(name) {
    /* Önceki ekranı kapat */
    for (const [key, el] of Object.entries(this.screens)) {
      el.classList.remove('active');
    }
    /* Yeni ekranı göster */
    this.screens[name].classList.add('active');
    this.currentScreen = name;
  }

  /* ═══════════════════════════════════════════
     BAŞLANGIÇ
     ═══════════════════════════════════════════ */
  async onStartClick() {
    /* Kamerayı başlat */
    const cameraOK = await this.startCamera();

    if (cameraOK) {
      /* El takibini yükle */
      this.handTracker = new HandTracker();
      const htOK = await this.handTracker.init(this.el.cameraVideo);
      if (htOK) {
        this.useHandTracking = true;
        this.handTracker.onHandUpdate = (data) => this.onHandUpdate(data);
        this.handTracker.onSelection = (side) => this.selectOption(side);
        this.handTracker.start();
        this.el.inputModeBadge.textContent = '🖐️ El Takibi Aktif';
      } else {
        this.useHandTracking = false;
        this.el.inputModeBadge.textContent = '🖱️ Mouse Modu';
      }
      this.el.cameraMirror.classList.remove('hidden');
    } else {
      this.useHandTracking = false;
      this.el.inputModeBadge.textContent = '🖱️ Mouse Modu — Kamera bulunamadı';
    }

    this.el.inputModeBadge.style.opacity = '1';
    this.showScreen('category');
  }

  /* ═══════════════════════════════════════════
     KAMERA
     ═══════════════════════════════════════════ */
  async startCamera() {
    try {
      this.cameraStream = await navigator.mediaDevices.getUserMedia({
        video: { width: 640, height: 480, facingMode: 'user' },
        audio: false
      });
      this.el.cameraVideo.srcObject = this.cameraStream;
      /* Video yüklenene kadar bekle */
      await new Promise((resolve) => {
        this.el.cameraVideo.onloadeddata = resolve;
      });
      console.log('📷 Kamera başlatıldı');
      return true;
    } catch (err) {
      console.warn('📷 Kamera erişilemedi:', err);
      return false;
    }
  }

  /* ═══════════════════════════════════════════
     KATEGORİ KARTLARI
     ═══════════════════════════════════════════ */
  buildCategoryCards() {
    this.el.categoryGrid.innerHTML = '';
    for (const cat of GAME_DATA.categories) {
      const card = document.createElement('div');
      card.className = 'category-card fade-in-scale';
      card.style.setProperty('--cat-color-1', cat.gradient[0]);
      card.style.setProperty('--cat-color-2', cat.gradient[1]);
      card.innerHTML = `
        <span class="category-icon">${cat.icon}</span>
        <h3 class="category-title">${cat.title}</h3>
        <p class="category-subtitle">${cat.subtitle}</p>
      `;
      card.style.cssText += `--cat-gradient: linear-gradient(135deg, ${cat.gradient[0]}, ${cat.gradient[1]});`;
      card.querySelector('.category-card, .category-icon')  // apply gradient glow on hover
      card.addEventListener('click', () => this.onCategorySelect(cat.id));
      /* Glassmorphism gradient overlay */
      card.firstElementChild && (card.style.background = `linear-gradient(135deg, ${cat.gradient[0]}15, ${cat.gradient[1]}15), var(--bg-card)`);
      this.el.categoryGrid.appendChild(card);
    }
  }

  /* ═══════════════════════════════════════════
     KATEGORİ SEÇİMİ
     ═══════════════════════════════════════════ */
  onCategorySelect(categoryId) {
    this.selectedCategory = categoryId;
    this.currentQuestionIndex = 0;
    this.userTags = {};
    this.showQuestion();
    this.showScreen('question');
  }

  /* ═══════════════════════════════════════════
     SORU GÖSTERİMİ
     ═══════════════════════════════════════════ */
  showQuestion() {
    const cat = GAME_DATA.categories.find(c => c.id === this.selectedCategory);
    if (!cat) return;

    const q = cat.questions[this.currentQuestionIndex];
    if (!q) return;

    /* Soru metni */
    this.el.questionText.textContent = q.text;

    /* Progress */
    const num = this.currentQuestionIndex + 1;
    this.el.progressLabel.textContent = `Soru ${num} / 10`;
    this.el.progressFill.style.width = `${(num - 1) * 10}%`;

    /* Şıkları doldur */
    this.renderOption(this.el.optionA, q.optionA);
    this.renderOption(this.el.optionB, q.optionB);

    /* Seçim kilidini aç */
    this.isSelecting = false;
    this.el.optionA.classList.remove('selected', 'hand-hover', 'hand-fist');
    this.el.optionB.classList.remove('selected', 'hand-hover', 'hand-fist');
  }

  renderOption(cardEl, option) {
    const bg = cardEl.querySelector('.option-bg');
    const emoji = cardEl.querySelector('.option-emoji');
    const label = cardEl.querySelector('.option-label');
    const overlay = cardEl.querySelector('.option-overlay');
    const existingImg = cardEl.querySelector('.option-img');

    /* Önceki resmi temizle */
    if (existingImg) existingImg.remove();

    if (option.image) {
      /* Fotoğraf modu */
      const img = document.createElement('img');
      img.className = 'option-img';
      img.src = option.image;
      img.alt = option.label;
      img.onerror = () => {
        img.remove();
        bg.style.background = `linear-gradient(135deg, ${option.gradient[0]}, ${option.gradient[1]})`;
        emoji.style.display = '';
      };
      cardEl.insertBefore(img, bg.nextSibling);
      bg.style.background = 'transparent';
      overlay.style.display = '';
      emoji.style.display = 'none';
    } else {
      /* CSS kart modu */
      bg.style.background = `linear-gradient(135deg, ${option.gradient[0]}, ${option.gradient[1]})`;
      overlay.style.display = 'none';
      emoji.style.display = '';
    }

    emoji.textContent = option.emoji;
    label.textContent = option.label;
  }

  /* ═══════════════════════════════════════════
     ŞIKK SEÇİMİ
     ═══════════════════════════════════════════ */
  selectOption(side) {
    if (this.isSelecting) return;
    if (this.currentScreen !== 'question') return;
    this.isSelecting = true;

    const cat = GAME_DATA.categories.find(c => c.id === this.selectedCategory);
    const q = cat.questions[this.currentQuestionIndex];

    const chosenOption = side === 'left' ? q.optionA : q.optionB;
    const chosenCard = side === 'left' ? this.el.optionA : this.el.optionB;

    /* Seçim animasyonu */
    chosenCard.classList.add('selected');

    /* Etiketleri biriktir */
    this.userTags = accumulateTags(this.userTags, chosenOption.tags);

    /* Sonraki soru veya sonuç */
    setTimeout(() => {
      this.currentQuestionIndex++;

      if (this.currentQuestionIndex >= 10) {
        /* Tüm sorular bitti → Analiz */
        this.el.progressFill.style.width = '100%';
        this.showAnalysis();
      } else {
        this.showQuestion();
      }
    }, 800);
  }

  /* ═══════════════════════════════════════════
     ANALİZ (YÜKLENİYOR) EKRANI
     ═══════════════════════════════════════════ */
  showAnalysis() {
    this.showScreen('loading');

    /* 3 saniye analiz animasyonu göster */
    setTimeout(() => {
      const result = predictResult(this.selectedCategory, this.userTags);
      if (result) {
        this.showResult(result);
      }
    }, 3000);
  }

  /* ═══════════════════════════════════════════
     SONUÇ EKRANI
     ═══════════════════════════════════════════ */
  showResult(result) {
    /* Kategori etiketi */
    const catLabels = {
      meslek: 'Gelecekteki Mesleğin',
      sirket: 'Gelecekte Çalışacağın Şirket',
      sehir: 'Gelecekte Yaşayacağın Şehir',
      universite: 'Gelecekte Okuyacağın Üniversite'
    };
    this.el.resultCategoryLabel.textContent = catLabels[this.selectedCategory] || '';

    /* Sonuç bilgileri */
    this.el.resultEmoji.textContent = result.emoji;
    this.el.resultName.textContent = result.name;

    /* Gradient background for result card accent */
    const resultCard = document.querySelector('.result-card');
    if (result.gradient) {
      resultCard.style.borderImage = `linear-gradient(135deg, ${result.gradient[0]}, ${result.gradient[1]}) 1`;
      resultCard.style.borderWidth = '2px';
      resultCard.style.borderStyle = 'solid';
    }

    /* 3 cümle açıklama */
    const reasonItems = this.el.resultReasons.querySelectorAll('li');
    result.reasons.forEach((reason, i) => {
      if (reasonItems[i]) reasonItems[i].textContent = reason;
    });

    this.showScreen('result');
  }

  /* ═══════════════════════════════════════════
     TEKRAR OYNA
     ═══════════════════════════════════════════ */
  resetGame() {
    this.selectedCategory = null;
    this.currentQuestionIndex = 0;
    this.userTags = {};
    this.isSelecting = false;

    /* Reset result card border */
    const resultCard = document.querySelector('.result-card');
    resultCard.style.borderImage = '';
    resultCard.style.borderWidth = '';
    resultCard.style.borderStyle = '';

    this.showScreen('category');
  }

  /* ═══════════════════════════════════════════
     EL TAKİBİ — GÜNCELLEME CALLBACK
     ═══════════════════════════════════════════ */
  onHandUpdate(data) {
    const cursor = this.el.handCursor;
    const statusDot = this.el.handStatus;

    if (!data) {
      /* El algılanmadı */
      cursor.classList.remove('visible');
      statusDot.classList.remove('detected');
      this.el.optionA.classList.remove('hand-hover', 'hand-fist');
      this.el.optionB.classList.remove('hand-hover', 'hand-fist');
      return;
    }

    /* El algılandı */
    statusDot.classList.add('detected');
    cursor.classList.add('visible');

    /* İmleci pozisyonla (kamera aynalı, x terslenmiş) */
    const screenX = (1 - data.x) * window.innerWidth;
    const screenY = data.y * window.innerHeight;
    cursor.style.left = `${screenX}px`;
    cursor.style.top = `${screenY}px`;

    /* Yumruk/açık durumu */
    if (data.isOpen) {
      cursor.classList.remove('fist');
    } else {
      cursor.classList.add('fist');
    }

    /* Soru ekranındaysa şık kartlarını vurgula */
    if (this.currentScreen === 'question' && !this.isSelecting) {
      const aHover = data.side === 'left';
      const bHover = data.side === 'right';

      this.el.optionA.classList.toggle('hand-hover', aHover && data.isOpen);
      this.el.optionB.classList.toggle('hand-hover', bHover && data.isOpen);
      this.el.optionA.classList.toggle('hand-fist', aHover && !data.isOpen);
      this.el.optionB.classList.toggle('hand-fist', bHover && !data.isOpen);

      if (!aHover) {
        this.el.optionA.classList.remove('hand-hover', 'hand-fist');
      }
      if (!bHover) {
        this.el.optionB.classList.remove('hand-hover', 'hand-fist');
      }
    }
  }

  /* ═══════════════════════════════════════════
     PARÇACIK ANİMASYONU
     ═══════════════════════════════════════════ */
  setupParticles() {
    const canvas = document.getElementById('particles-canvas');
    const ctx = canvas.getContext('2d');
    let particles = [];
    const PARTICLE_COUNT = 60;

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    /* Parçacık oluştur */
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 2 + 0.5,
        alpha: Math.random() * 0.3 + 0.1,
        color: Math.random() > 0.5 ? '65, 160, 177' : '123, 45, 255'
      });
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;

        /* Sınır kontrolü */
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color}, ${p.alpha})`;
        ctx.fill();
      }

      /* Parçacıklar arası çizgiler (yakın olanlar) */
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(65, 160, 177, ${0.06 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(animate);
    }

    animate();
  }
}
