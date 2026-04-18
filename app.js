/* ============================================================
   G.A.N.O? — Ana Uygulama Kontrolcüsü v3
   El takibi karşılama ekranından aktif,
   Havai fişek, dinamik soru akışı, güven kontrolü
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
      resultReasons: document.getElementById('result-reasons'),
      resultLogo: document.getElementById('result-logo'),
      fireworksCanvas: document.getElementById('fireworks-canvas')
    };

    /* ── Oyun Durumu ── */
    this.currentScreen = 'welcome';
    this.selectedCategory = null;
    this.userTags = {};
    this.activeFilters = {};
    this.askedQuestionIds = [];
    this.questionCount = 0;
    this.currentQuestion = null;
    this.handTracker = null;
    this.cameraStream = null;
    this.useHandTracking = false;
    this.isSelecting = false;

    /* ── El Hover Durumları ── */
    this.hoveredCategoryCard = null;
    this.hoveredCategoryId = null;
    this.categoryCooldown = false;
    this.isHoveringReplay = false;
    this.isHoveringStart = false;

    /* ── Havai Fişek ── */
    this.fireworksActive = false;
    this.fireworksAnimId = null;
  }

  /* ═══════════════════════════════════════════
     INIT — Kamera + El Takibi Hemen Başlar
     ═══════════════════════════════════════════ */
  async init() {
    this.setupParticles();
    this.buildCategoryCards();
    this.bindEvents();

    /* Kamerayı ve el takibini sayfa açılır açılmaz başlat */
    await this.startCameraAndHandTracking();

    console.log('🎮 G.A.N.O? v3 başlatıldı');
  }

  /* ═══════════════════════════════════════════
     KAMERA + EL TAKİBİ BAŞLATMA (Sayfa Açılışında)
     ═══════════════════════════════════════════ */
  async startCameraAndHandTracking() {
    const cameraOK = await this.startCamera();

    if (cameraOK) {
      this.handTracker = new HandTracker();
      const htOK = await this.handTracker.init(this.el.cameraVideo);
      if (htOK) {
        this.useHandTracking = true;
        this.handTracker.onHandUpdate = (data) => this.onHandUpdate(data);
        this.handTracker.onSelection = (side) => this.onHandSelection(side);
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
  }

  /* ═══════════════════════════════════════════
     EVENT BINDING
     ═══════════════════════════════════════════ */
  bindEvents() {
    this.el.btnStart.addEventListener('click', () => this.onStartClick());
    this.el.btnReplay.addEventListener('click', () => this.resetGame());
    this.el.optionA.addEventListener('click', () => this.selectOption('left'));
    this.el.optionB.addEventListener('click', () => this.selectOption('right'));
  }

  /* ═══════════════════════════════════════════
     EKRAN GEÇİŞLERİ
     ═══════════════════════════════════════════ */
  showScreen(name) {
    for (const [key, el] of Object.entries(this.screens)) {
      el.classList.remove('active');
    }
    this.screens[name].classList.add('active');
    this.currentScreen = name;
  }

  /* ═══════════════════════════════════════════
     BAŞLA BUTONUNA TIKLANDIĞINDA
     ═══════════════════════════════════════════ */
  onStartClick() {
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
      card.dataset.categoryId = cat.id;
      card.innerHTML = `
        <span class="category-icon">${cat.icon}</span>
        <h3 class="category-title">${cat.title}</h3>
        <p class="category-subtitle">${cat.subtitle}</p>
      `;
      card.style.background = `linear-gradient(135deg, ${cat.gradient[0]}15, ${cat.gradient[1]}15), var(--bg-card)`;
      card.addEventListener('click', () => this.onCategorySelect(cat.id));
      this.el.categoryGrid.appendChild(card);
    }
  }

  /* ═══════════════════════════════════════════
     KATEGORİ SEÇİMİ
     ═══════════════════════════════════════════ */
  onCategorySelect(categoryId) {
    if (this.categoryCooldown) return;
    this.categoryCooldown = true;

    this.selectedCategory = categoryId;
    this.userTags = {};
    this.activeFilters = {};
    this.askedQuestionIds = [];
    this.questionCount = 0;
    this.currentQuestion = null;

    this.showNextQuestion();
    this.showScreen('question');

    setTimeout(() => {
      this.categoryCooldown = false;
    }, 600);
  }

  /* ═══════════════════════════════════════════
     DALLANMALI SORU SEÇİM ALGORİTMASI
     ═══════════════════════════════════════════ */
  getNextQuestion() {
    const cat = GAME_DATA.categories.find(c => c.id === this.selectedCategory);
    if (!cat) return null;

    const available = cat.questions.filter(q => {
      if (this.askedQuestionIds.includes(q.id)) return false;
      try {
        return q.condition(this.userTags, this.activeFilters);
      } catch (e) {
        return false;
      }
    });

    if (available.length === 0) return null;

    /* Faz sıralaması: küçük faz önce */
    available.sort((a, b) => a.phase - b.phase);

    const topPhase = available[0].phase;
    const samePhase = available.filter(q => q.phase === topPhase);
    const randomIndex = Math.floor(Math.random() * samePhase.length);

    return samePhase[randomIndex];
  }

  /* ═══════════════════════════════════════════
     SORU GÖSTERİMİ
     ═══════════════════════════════════════════ */
  showNextQuestion() {
    const nextQ = this.getNextQuestion();
    if (!nextQ) {
      this.finishQuestions();
      return;
    }

    this.currentQuestion = nextQ;
    this.askedQuestionIds.push(nextQ.id);

    this.el.questionText.textContent = nextQ.text;

    /* Progress — dinamik gösterim */
    const num = this.questionCount + 1;
    this.el.progressLabel.textContent = `Soru ${num}`;
    const estimatedTotal = Math.max(MIN_QUESTIONS, Math.min(MAX_QUESTIONS, this.questionCount + 5));
    this.el.progressFill.style.width = `${Math.min((num / estimatedTotal) * 100, 95)}%`;

    /* Şıkları doldur */
    this.renderOption(this.el.optionA, nextQ.optionA);
    this.renderOption(this.el.optionB, nextQ.optionB);

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

    if (existingImg) existingImg.remove();

    if (option.image) {
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
      bg.style.background = `linear-gradient(135deg, ${option.gradient[0]}, ${option.gradient[1]})`;
      overlay.style.display = 'none';
      emoji.style.display = '';
    }

    emoji.textContent = option.emoji;
    label.textContent = option.label;
  }

  /* ═══════════════════════════════════════════
     EL İLE SEÇİM YAPILDIĞINDA
     ═══════════════════════════════════════════ */
  onHandSelection(side) {
    if (this.currentScreen === 'question') {
      this.selectOption(side);
    } else if (this.currentScreen === 'category') {
      if (this.hoveredCategoryId) {
        this.onCategorySelect(this.hoveredCategoryId);
      }
    } else if (this.currentScreen === 'result') {
      if (this.isHoveringReplay) {
        this.resetGame();
      }
    } else if (this.currentScreen === 'welcome') {
      if (this.isHoveringStart) {
        this.onStartClick();
      }
    }
  }

  /* ═══════════════════════════════════════════
     ŞIKK SEÇİMİ — Dallanmalı Akış
     ═══════════════════════════════════════════ */
  selectOption(side) {
    if (this.isSelecting) return;
    if (this.currentScreen !== 'question') return;
    if (!this.currentQuestion) return;
    this.isSelecting = true;

    const q = this.currentQuestion;
    const chosenOption = side === 'left' ? q.optionA : q.optionB;
    const chosenCard = side === 'left' ? this.el.optionA : this.el.optionB;

    chosenCard.classList.add('selected');

    this.userTags = accumulateTags(this.userTags, chosenOption.tags);

    if (chosenOption.setFilter) {
      Object.assign(this.activeFilters, chosenOption.setFilter);
      console.log('🔍 Filtre güncellendi:', this.activeFilters);
    }

    this.questionCount++;

    setTimeout(() => {
      const shouldContinue = shouldContinueAsking(
        this.questionCount,
        this.selectedCategory,
        this.userTags,
        this.activeFilters
      );

      const nextQ = this.getNextQuestion();

      if (!shouldContinue || !nextQ) {
        this.el.progressFill.style.width = '100%';
        this.finishQuestions();
      } else {
        this.showNextQuestion();
      }
    }, 600);
  }

  /* ═══════════════════════════════════════════
     SORU BİTİŞİ → ANALİZ
     ═══════════════════════════════════════════ */
  finishQuestions() {
    this.showScreen('loading');

    console.log('📊 Analiz başlıyor...', {
      category: this.selectedCategory,
      tags: this.userTags,
      filters: this.activeFilters,
      questionsAsked: this.questionCount
    });

    setTimeout(() => {
      const result = predictResult(this.selectedCategory, this.userTags, this.activeFilters);
      if (result) {
        this.showResult(result);
      } else {
        const fallback = predictResult(this.selectedCategory, this.userTags, {});
        if (fallback) {
          this.showResult(fallback);
        }
      }
    }, 3000);
  }

  /* ═══════════════════════════════════════════
     SONUÇ EKRANI
     ═══════════════════════════════════════════ */
  showResult(result) {
    const catLabels = {
      meslek: 'Gelecekteki Mesleğin',
      sirket: 'Gelecekte Çalışacağın Şirket',
      sehir: 'Gelecekte Yaşayacağın Şehir',
      universite: 'Gelecekte Okuyacağın Üniversite'
    };
    this.el.resultCategoryLabel.textContent = catLabels[this.selectedCategory] || '';

    /* Logo */
    const logoEl = this.el.resultLogo;
    if (logoEl) {
      if (result.logo) {
        logoEl.src = result.logo;
        logoEl.alt = result.name + ' logo';
        logoEl.style.display = 'block';
        logoEl.onerror = () => { logoEl.style.display = 'none'; };
      } else {
        logoEl.style.display = 'none';
      }
    }

    /* Emoji gizle, fotoğraf göster */
    this.el.resultEmoji.style.display = 'none';
    this.el.resultName.textContent = result.name;

    /* Hero image */
    const resultCard = document.querySelector('.result-card');
    const existingHeroImg = resultCard.querySelector('.result-hero-img');
    if (existingHeroImg) existingHeroImg.remove();

    if (result.image) {
      const heroImg = document.createElement('img');
      heroImg.className = 'result-hero-img';
      heroImg.src = result.image;
      heroImg.alt = result.name;
      heroImg.onerror = () => {
        heroImg.style.display = 'none';
        /* Emoji'yi fallback olarak göster */
        this.el.resultEmoji.textContent = result.emoji;
        this.el.resultEmoji.style.display = '';
      };
      resultCard.insertBefore(heroImg, resultCard.firstChild);
    } else {
      /* Fotoğraf yoksa emoji göster */
      this.el.resultEmoji.textContent = result.emoji;
      this.el.resultEmoji.style.display = '';
    }

    /* Gradient border */
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

    /* 🎆 Havai fişekleri başlat */
    this.startFireworks();
  }

  /* ═══════════════════════════════════════════
     TEKRAR OYNA
     ═══════════════════════════════════════════ */
  resetGame() {
    this.selectedCategory = null;
    this.userTags = {};
    this.activeFilters = {};
    this.askedQuestionIds = [];
    this.questionCount = 0;
    this.currentQuestion = null;
    this.isSelecting = false;

    const resultCard = document.querySelector('.result-card');
    resultCard.style.borderImage = '';
    resultCard.style.borderWidth = '';
    resultCard.style.borderStyle = '';

    /* Hero image temizle */
    const heroImg = resultCard.querySelector('.result-hero-img');
    if (heroImg) heroImg.remove();

    /* Emoji resetle */
    this.el.resultEmoji.style.display = '';

    /* Logo gizle */
    const logoEl = this.el.resultLogo;
    if (logoEl) logoEl.style.display = 'none';

    /* 🎆 Havai fişekleri durdur */
    this.stopFireworks();

    this.showScreen('category');
  }

  /* ═══════════════════════════════════════════
     🎆 HAVAİ FİŞEK ANİMASYONU
     ═══════════════════════════════════════════ */
  startFireworks() {
    const canvas = this.el.fireworksCanvas;
    if (!canvas) return;
    canvas.style.display = 'block';
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    this.fireworksActive = true;

    const particles = [];
    const rockets = [];
    const colors = ['#FF6B6B','#4ECDC4','#45B7D1','#96CEB4','#FFEAA7','#DDA0DD','#F06292','#BA68C8','#64B5F6','#81C784','#FFD54F','#FF8A65'];

    const createExplosion = (x, y) => {
      const count = 60 + Math.random() * 40;
      const color = colors[Math.floor(Math.random() * colors.length)];
      const color2 = colors[Math.floor(Math.random() * colors.length)];
      for (let i = 0; i < count; i++) {
        const angle = (Math.PI * 2 / count) * i + (Math.random() - 0.5) * 0.3;
        const speed = 2 + Math.random() * 4;
        particles.push({
          x, y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          life: 1,
          decay: 0.008 + Math.random() * 0.012,
          color: Math.random() > 0.5 ? color : color2,
          size: 2 + Math.random() * 2,
          trail: []
        });
      }
    };

    const launchRocket = () => {
      rockets.push({
        x: Math.random() * canvas.width,
        y: canvas.height,
        targetY: canvas.height * 0.1 + Math.random() * canvas.height * 0.35,
        vy: -6 - Math.random() * 4,
        exploded: false,
        trail: []
      });
    };

    let lastLaunch = 0;

    const animate = () => {
      if (!this.fireworksActive) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        canvas.style.display = 'none';
        return;
      }

      ctx.globalCompositeOperation = 'destination-out';
      ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = 'source-over';

      const now = Date.now();
      if (now - lastLaunch > 300 + Math.random() * 700) {
        launchRocket();
        if (Math.random() > 0.5) launchRocket(); // çift roket
        lastLaunch = now;
      }

      /* Roketler */
      for (let i = rockets.length - 1; i >= 0; i--) {
        const r = rockets[i];
        r.trail.push({ x: r.x, y: r.y });
        if (r.trail.length > 8) r.trail.shift();

        r.y += r.vy;
        r.x += (Math.random() - 0.5) * 1.5;

        /* İz çiz */
        for (let t = 0; t < r.trail.length; t++) {
          const alpha = t / r.trail.length * 0.6;
          ctx.beginPath();
          ctx.arc(r.trail[t].x, r.trail[t].y, 2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255,220,180,${alpha})`;
          ctx.fill();
        }

        /* Roket noktası */
        ctx.beginPath();
        ctx.arc(r.x, r.y, 3, 0, Math.PI * 2);
        ctx.fillStyle = '#FFE4B5';
        ctx.fill();

        if (r.y <= r.targetY) {
          createExplosion(r.x, r.y);
          rockets.splice(i, 1);
        }
      }

      /* Parçacıklar */
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.trail.push({ x: p.x, y: p.y });
        if (p.trail.length > 5) p.trail.shift();

        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.05; // yerçekimi
        p.vx *= 0.99;
        p.life -= p.decay;

        /* İz */
        for (let t = 0; t < p.trail.length; t++) {
          const alpha = (t / p.trail.length) * p.life * 0.4;
          ctx.beginPath();
          ctx.arc(p.trail[t].x, p.trail[t].y, p.size * 0.5, 0, Math.PI * 2);
          ctx.fillStyle = p.color.replace(')', `,${alpha})`).replace('rgb', 'rgba');
          ctx.fill();
        }

        /* Ana parçacık */
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.life;
        ctx.fill();
        ctx.globalAlpha = 1;

        /* Glow */
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 3, 0, Math.PI * 2);
        const glow = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 3);
        glow.addColorStop(0, p.color.replace(')', `,${p.life * 0.3})`).replace('rgb', 'rgba'));
        glow.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = glow;
        ctx.fill();

        if (p.life <= 0) particles.splice(i, 1);
      }

      this.fireworksAnimId = requestAnimationFrame(animate);
    };

    animate();

    /* Resize handler */
    this._fireworksResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', this._fireworksResize);
  }

  stopFireworks() {
    this.fireworksActive = false;
    if (this.fireworksAnimId) {
      cancelAnimationFrame(this.fireworksAnimId);
      this.fireworksAnimId = null;
    }
    if (this._fireworksResize) {
      window.removeEventListener('resize', this._fireworksResize);
    }
    const canvas = this.el.fireworksCanvas;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      canvas.style.display = 'none';
    }
  }

  /* ═══════════════════════════════════════════
     EL TAKİBİ — GÜNCELLEME CALLBACK
     ═══════════════════════════════════════════ */
  onHandUpdate(data) {
    const cursor = this.el.handCursor;
    const statusDot = this.el.handStatus;

    if (!data) {
      cursor.classList.remove('visible');
      statusDot.classList.remove('detected');
      this.el.optionA.classList.remove('hand-hover', 'hand-fist');
      this.el.optionB.classList.remove('hand-hover', 'hand-fist');
      this.clearCategoryHover();
      this.clearReplayHover();
      this.clearStartHover();
      return;
    }

    statusDot.classList.add('detected');
    cursor.classList.add('visible');

    const screenX = data.screenX;
    const screenY = data.screenY;
    cursor.style.left = `${screenX}px`;
    cursor.style.top = `${screenY}px`;

    if (data.isOpen) {
      cursor.classList.remove('fist');
    } else {
      cursor.classList.add('fist');
    }

    /* ── KARŞILAMA EKRANINDA EL TAKİBİ (Başla butonu) ── */
    if (this.currentScreen === 'welcome') {
      this.handleStartHandTracking(screenX, screenY, data.isOpen);
    }

    /* ── KATEGORİ EKRANINDA EL TAKİBİ ── */
    if (this.currentScreen === 'category') {
      this.handleCategoryHandTracking(screenX, screenY, data.isOpen);
    }

    /* ── SORU EKRANINDA EL TAKİBİ ── */
    if (this.currentScreen === 'question' && !this.isSelecting) {
      const aHover = data.side === 'left';
      const bHover = data.side === 'right';

      this.el.optionA.classList.toggle('hand-hover', aHover && data.isOpen);
      this.el.optionB.classList.toggle('hand-hover', bHover && data.isOpen);
      this.el.optionA.classList.toggle('hand-fist', aHover && !data.isOpen);
      this.el.optionB.classList.toggle('hand-fist', bHover && !data.isOpen);

      if (!aHover) this.el.optionA.classList.remove('hand-hover', 'hand-fist');
      if (!bHover) this.el.optionB.classList.remove('hand-hover', 'hand-fist');
    }

    /* ── SONUÇ EKRANINDA EL TAKİBİ (Tekrar Oyna) ── */
    if (this.currentScreen === 'result') {
      this.handleReplayHandTracking(screenX, screenY, data.isOpen);
    }
  }

  /* ═══════════════════════════════════════════
     KARŞILAMA EKRANI — BAŞLA BUTONU EL TAKİBİ
     ═══════════════════════════════════════════ */
  handleStartHandTracking(screenX, screenY, isOpen) {
    const btn = this.el.btnStart;
    const rect = btn.getBoundingClientRect();
    const isOver = (
      screenX >= rect.left && screenX <= rect.right &&
      screenY >= rect.top && screenY <= rect.bottom
    );
    if (isOver) {
      this.isHoveringStart = true;
      if (isOpen) {
        btn.classList.add('hand-hover');
        btn.classList.remove('hand-fist');
      } else {
        btn.classList.add('hand-fist');
        btn.classList.remove('hand-hover');
      }
    } else {
      this.isHoveringStart = false;
      btn.classList.remove('hand-hover', 'hand-fist');
    }
  }

  clearStartHover() {
    this.isHoveringStart = false;
    if (this.el.btnStart) {
      this.el.btnStart.classList.remove('hand-hover', 'hand-fist');
    }
  }

  /* ═══════════════════════════════════════════
     KATEGORİ EKRANINDA EL İLE HOVER + SEÇİM
     ═══════════════════════════════════════════ */
  handleCategoryHandTracking(screenX, screenY, isOpen) {
    const cards = this.el.categoryGrid.querySelectorAll('.category-card');
    let foundCard = null;
    let foundId = null;

    for (const card of cards) {
      const rect = card.getBoundingClientRect();
      if (
        screenX >= rect.left && screenX <= rect.right &&
        screenY >= rect.top && screenY <= rect.bottom
      ) {
        foundCard = card;
        foundId = card.dataset.categoryId;
        break;
      }
    }

    for (const card of cards) {
      card.classList.remove('hand-hover', 'hand-fist');
    }

    if (foundCard) {
      if (isOpen) {
        foundCard.classList.add('hand-hover');
      } else {
        foundCard.classList.add('hand-fist');
      }
      this.hoveredCategoryCard = foundCard;
      this.hoveredCategoryId = foundId;
    } else {
      this.hoveredCategoryCard = null;
      this.hoveredCategoryId = null;
    }
  }

  clearCategoryHover() {
    const cards = this.el.categoryGrid.querySelectorAll('.category-card');
    for (const card of cards) {
      card.classList.remove('hand-hover', 'hand-fist');
    }
    this.hoveredCategoryCard = null;
    this.hoveredCategoryId = null;
  }

  /* ═══════════════════════════════════════════
     SONUÇ EKRANINDA EL İLE TEKRAR OYNA BUTONU
     ═══════════════════════════════════════════ */
  handleReplayHandTracking(screenX, screenY, isOpen) {
    const btn = this.el.btnReplay;
    const rect = btn.getBoundingClientRect();
    const isOver = (
      screenX >= rect.left && screenX <= rect.right &&
      screenY >= rect.top && screenY <= rect.bottom
    );
    if (isOver) {
      this.isHoveringReplay = true;
      if (isOpen) {
        btn.classList.add('hand-hover');
        btn.classList.remove('hand-fist');
      } else {
        btn.classList.add('hand-fist');
        btn.classList.remove('hand-hover');
      }
    } else {
      this.isHoveringReplay = false;
      btn.classList.remove('hand-hover', 'hand-fist');
    }
  }

  clearReplayHover() {
    this.isHoveringReplay = false;
    if (this.el.btnReplay) {
      this.el.btnReplay.classList.remove('hand-hover', 'hand-fist');
    }
  }

  /* ═══════════════════════════════════════════
     PARÇACIK ANİMASYONU
     ═══════════════════════════════════════════ */
  setupParticles() {
    const canvas = document.getElementById('particles-canvas');
    const ctx = canvas.getContext('2d');
    let particles = [];
    const PARTICLE_COUNT = 777;

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

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

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color}, ${p.alpha})`;
        ctx.fill();
      }

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
