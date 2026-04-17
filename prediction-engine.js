/* ============================================================
   G.A.N.O? — Tahmin Motoru
   40 Sonuç Profili + Eşleştirme Algoritması
   ============================================================ */

const RESULTS = {
  /* ──────────────────── MESLEK SONUÇLARI ──────────────────── */
  meslek: [
    {
      name: 'Yazılım Mühendisi',
      emoji: '👨‍💻',
      gradient: ['#667eea', '#764ba2'],
      profile: { analytic: 2, tech: 2, detail: 2, logic: 2, individual: 1, machine: 1, office: 1, innovation: 1 },
      reasons: [
        'Analitik düşünme yeteneğin ve teknolojiye olan tutkunun seni kodlama dünyasının yıldızı yapacak.',
        'Detaylara gösterdiğin özen hatasız ve şık yazılımlar üretmeni sağlayacak.',
        'Bireysel çalışma disiplinin ve problem çözme becerilerin bu alanda zirveye taşıyacak.'
      ]
    },
    {
      name: 'Doktor',
      emoji: '👨‍⚕️',
      gradient: ['#11998e', '#38ef7d'],
      profile: { people: 2, empathy: 2, detail: 2, discipline: 1, team: 1, structured: 1, stability: 1, satisfaction: 1 },
      reasons: [
        'İnsanlara yardım etme arzun ve analitik zekân seni sağlık dünyasının vazgeçilmezi yapacak.',
        'Detaylara olan hakimiyetin hayat kurtaracak kararlar almanı sağlayacak.',
        'Takım çalışmasına yatkınlığın ve sorumluluk bilincin tıp dünyasında parlayacak.'
      ]
    },
    {
      name: 'Avukat',
      emoji: '⚖️',
      gradient: ['#b8860b', '#daa520'],
      profile: { people: 1, analytic: 1, leadership: 2, office: 1, logic: 1, ambition: 1, bigpicture: 1, strategy: 1, vision: 1 },
      reasons: [
        'Liderlik ruhun ve analitik düşüncen seni adalet saraylarının en güçlü sesi yapacak.',
        'Büyük resmi görme yeteneğin davaları kazanmanın anahtarı olacak.',
        'İnsanlarla iletişim becerilerin ve ikna gücün hukuk dünyasında fark yaratacak.'
      ]
    },
    {
      name: 'Grafik Tasarımcı',
      emoji: '🎨',
      gradient: ['#f6d365', '#fda085'],
      profile: { creative: 2, art: 2, individual: 1, detail: 1, tech: 1, satisfaction: 1, focus: 1 },
      reasons: [
        'Yaratıcı ruhun ve estetik bakış açın görsel dünyada devrim yaratacak.',
        'Bireysel çalışma tercihin özgün tasarımlar üretmeni kolaylaştıracak.',
        'Detaylara olan duyarlılığın her pikselde mükemmellik aramanı sağlayacak.'
      ]
    },
    {
      name: 'Mimar',
      emoji: '🏗️',
      gradient: ['#2c3e50', '#3498db'],
      profile: { creative: 2, bigpicture: 1, detail: 1, analytic: 1, art: 1, strategy: 1, office: 1 },
      reasons: [
        'Yaratıcılığın ile analitik düşüncenin birleşimi muhteşem yapılar ortaya çıkaracak.',
        'Büyük resmi görebilme yeteneğin şehirlerin silüetini değiştirecek.',
        'Hem detaylara hem de bütüne hakimiyetin mimarlık dünyasının aranan ismi yapacak.'
      ]
    },
    {
      name: 'Pilot',
      emoji: '✈️',
      gradient: ['#0f0c29', '#302b63'],
      profile: { tech: 1, risk: 1, discipline: 1, field: 1, machine: 1, courage: 1, adventure: 1, precision: 1, money: 1 },
      reasons: [
        'Macera ruhun ve teknolojiye olan tutkunun seni gökyüzünün efendisi yapacak.',
        'Disiplinli yapın ve detaylara gösterdiğin özen güvenli uçuşların garantisi olacak.',
        'Risk almaktan kaçınmaman ve soğukkanlılığın kokpitin yıldızı olmanı sağlayacak.'
      ]
    },
    {
      name: 'Öğretmen',
      emoji: '📚',
      gradient: ['#ff758c', '#ff7eb3'],
      profile: { people: 2, team: 1, social: 1, satisfaction: 2, empathy: 1, meaning: 1, leadership: 1 },
      reasons: [
        'İnsanlara olan sevgin ve paylaşma arzun gelecek nesilleri şekillendirecek.',
        'Takım çalışmasına yatkınlığın ve liderlik özelliklerin sınıfta ilham kaynağı olacak.',
        'İş tatminini ön planda tutan yapın öğretmenliğin en anlamlı yanını yaşamanı sağlayacak.'
      ]
    },
    {
      name: 'Girişimci',
      emoji: '🚀',
      gradient: ['#f7971e', '#ffd200'],
      profile: { risk: 2, leadership: 2, creative: 1, bigpicture: 2, money: 1, courage: 1, vision: 1, ambition: 1 },
      reasons: [
        'Risk almayı seven cesur yapın iş dünyasında devrimler yaratacak.',
        'Liderlik ruhun ve vizyoner bakış açın yeni sektörler oluşturacak.',
        'Yaratıcı düşüncen ve büyük hayaller kurma kapasiten girişimcilik dünyasının yıldızı yapacak.'
      ]
    },
    {
      name: 'Veri Bilimci',
      emoji: '📊',
      gradient: ['#6a11cb', '#2575fc'],
      profile: { analytic: 2, tech: 2, detail: 2, logic: 2, individual: 1, machine: 1, innovation: 1, precision: 1 },
      reasons: [
        'Veri okumadaki keskin bakış açın karmaşık problemleri çözecek.',
        'Teknolojiye olan hakimiyetin büyük verileri anlamlı içgörülere dönüştürecek.',
        'Detay odaklı çalışma tarzın ve merakın veri biliminin derinliklerinde keşifler yapacak.'
      ]
    },
    {
      name: 'Psikolog',
      emoji: '🧠',
      gradient: ['#a18cd1', '#fbc2eb'],
      profile: { people: 2, empathy: 2, satisfaction: 2, meaning: 1, individual: 1, depth: 1, creative: 1 },
      reasons: [
        'İnsanları anlama yeteneğin ve empatik yapın ruhların şifacısı olmanı sağlayacak.',
        'Bireysel çalışma tercihin danışanlarına özel ve derin bir destek sunmanı kolaylaştıracak.',
        'İş tatminini önceliklendiren yapın insanlara dokunmanın verdiği huzuru yaşatacak.'
      ]
    }
  ],

  /* ──────────────────── ŞİRKET SONUÇLARI ──────────────────── */
  sirket: [
    {
      name: 'Apple',
      emoji: '🍎',
      gradient: ['#333333', '#666666'],
      profile: { innovation: 2, premium: 2, quality: 2, brand: 2, scale: 1, global: 1, creativity: 1 },
      reasons: [
        'Mükemmeliyetçi yapın ve premium ürünlere olan tutkunun Apple\'ın DNA\'sıyla birebir örtüşüyor.',
        'Yenilikçi düşüncen ve tasarıma verdiğin değer Cupertino\'daki yerini garanti ediyor.',
        'Büyük ölçekte düşünme kapasiten ve global vizyonun Apple\'da parlayacak.'
      ]
    },
    {
      name: 'Google',
      emoji: '🔍',
      gradient: ['#4285F4', '#34A853'],
      profile: { innovation: 2, freedom: 2, fun: 2, scale: 2, global: 2, creativity: 1, accessible: 1 },
      reasons: [
        'Özgür düşüncen ve yenilikçi ruhun Google\'ın yaratıcı ortamında çiçek açacak.',
        'Eğlenceli çalışma ortamı tercihin ve teknolojiye olan tutkun Googleplex\'te seni bekliyor.',
        'Global düşünme kapasiten ve büyük ölçekli proje yeteneğin Google\'ın misyonuyla uyumlu.'
      ]
    },
    {
      name: 'Tesla',
      emoji: '🔋',
      gradient: ['#cc0000', '#1a1a1a'],
      profile: { innovation: 2, mission: 2, speed: 2, future: 2, risk: 1, premium: 1, intensity: 1 },
      reasons: [
        'Dünyayı değiştirme arzun ve yenilikçi vizyonun Tesla\'nın misyonuyla birebir örtüşüyor.',
        'Hızlı tempo sevgin ve risk alma cesaretin Elon Musk\'ın ekibinde seni bekliyor.',
        'Teknolojiye olan tutkunun ve geleceğe dönük bakış açın Tesla\'da devrimlere imza atacak.'
      ]
    },
    {
      name: 'Netflix',
      emoji: '🎬',
      gradient: ['#E50914', '#B20710'],
      profile: { freedom: 2, fun: 2, global: 2, creativity: 2, casual: 1, innovation: 1 },
      reasons: [
        'Yaratıcı ruhun ve eğlenceye olan tutkunun Netflix\'in kültürüyle mükemmel uyum sağlıyor.',
        'Özgür çalışma ortamı tercihin Netflix\'in felsefesinin tam karşılığı.',
        'Global içerik üretme vizyonun ve kültürel farkındalığın Netflix\'te seni öne çıkaracak.'
      ]
    },
    {
      name: 'NASA',
      emoji: '🌌',
      gradient: ['#0B3D91', '#FC3D21'],
      profile: { mission: 2, space: 2, future: 2, prestige: 2, professional: 1, resources: 1, scale: 1 },
      reasons: [
        'Büyük hayaller kurma kapasiten ve bilimsel merakın NASA\'nın uzay keşiflerinde seni bekliyor.',
        'Misyon odaklı çalışma tercihin NASA\'nın disiplinli yapısıyla örtüşüyor.',
        'Teknolojiye olan tutkunun ve insanlığa katkı arzun uzayın kapılarını sana açacak.'
      ]
    },
    {
      name: 'Samsung',
      emoji: '📱',
      gradient: ['#034EA2', '#1C6DD0'],
      profile: { scale: 2, stability: 2, global: 2, traditional: 1, resources: 1, brand: 1, order: 1 },
      reasons: [
        'Büyük ölçekli düşüncen ve stabilite arayışın Samsung\'un güçlü yapısıyla uyumlu.',
        'Global vizyonun ve teknolojiye olan ilgin Samsung\'un ürün yelpazesinde seni bekliyor.',
        'Disiplinli çalışma tarzın Samsung\'un kurumsal kültürüne mükemmel uyum sağlıyor.'
      ]
    },
    {
      name: 'Spotify',
      emoji: '🎵',
      gradient: ['#1DB954', '#191414'],
      profile: { fun: 2, freedom: 2, creativity: 2, global: 1, casual: 1, accessible: 1 },
      reasons: [
        'Müzik ve eğlence tutkun Spotify\'ın dinamik dünyasında seni bekliyor.',
        'Yaratıcı ruhun ve özgür çalışma tercihin Spotify\'ın rahat kültürüyle örtüşüyor.',
        'Sosyal bağlantılara verdiğin değer ve global bakış açın Spotify\'da fark yaratacak.'
      ]
    },
    {
      name: 'Amazon',
      emoji: '📦',
      gradient: ['#FF9900', '#232F3E'],
      profile: { scale: 2, speed: 2, global: 2, growth: 2, resources: 1, profit: 1, intensity: 1 },
      reasons: [
        'Hızlı tempo dayanıklılığın ve büyük ölçekli düşüncen Amazon\'un ekosisteminde parlayacak.',
        'Yenilikçi yaklaşımın ve sonuç odaklı çalışma tarzın Bezos felsefesiyle birebir uyumlu.',
        'Global vizyonun ve büyüme odaklı düşüncen Amazon\'da kariyer basamaklarını hızla çıkaracak.'
      ]
    },
    {
      name: 'SpaceX',
      emoji: '🚀',
      gradient: ['#005288', '#A7A9AC'],
      profile: { innovation: 2, space: 2, future: 2, risk: 2, speed: 2, mission: 1, intensity: 1 },
      reasons: [
        'Risk almayı seven cesur yapın SpaceX\'in Mars misyonunda seni bekliyor.',
        'Yenilikçi düşüncen ve imkansızı başarma arzun SpaceX\'in DNA\'sıyla birebir örtüşüyor.',
        'Hızlı hareket etme yeteneğin ve teknolojiye olan tutkunun roketler kadar güçlü.'
      ]
    },
    {
      name: 'Turkcell',
      emoji: '📶',
      gradient: ['#FFD100', '#003CA6'],
      profile: { stability: 2, local: 2, community: 2, traditional: 1, practical: 1, social_impact: 1, everyday: 1 },
      reasons: [
        'Yerel değerlere olan bağlılığın Turkcell\'in Türkiye vizyonuyla örtüşüyor.',
        'Stabilite arayışın ve topluma katkı arzun Turkcell\'in bağlılığıyla uyumlu.',
        'Teknolojiye olan ilgin ve yerel pazarda fark yaratma potansiyelin Turkcell\'de seni bekliyor.'
      ]
    }
  ],

  /* ──────────────────── ŞEHİR SONUÇLARI ──────────────────── */
  sehir: [
    {
      name: 'İstanbul',
      emoji: '🕌',
      gradient: ['#FF6B35', '#F7C59F'],
      profile: { domestic: 2, bustling: 2, historical: 2, cultural: 2, foodie: 2, lively: 2, warm: 1, social: 1, ambitious: 1 },
      reasons: [
        'Kalabalığı ve enerjisi seni büyüleyen İstanbul, tarih ve modernliğin buluştuğu yerde seni bekliyor.',
        'Zengin mutfak kültürüne olan tutkunun ve büyük şehir yaşamı tercihin İstanbul\'u senin şehrin yapıyor.',
        'Kültürel zenginliğe verdiğin değer ve dinamik yaşam tarzın bu eşsiz şehirle mükemmel uyum sağlıyor.'
      ]
    },
    {
      name: 'Barcelona',
      emoji: '🏖️',
      gradient: ['#FFD166', '#FF6B6B'],
      profile: { international: 1, warm: 2, beach: 2, social: 2, artistic: 2, european: 2, lively: 1, cultural: 1, relaxed: 1 },
      reasons: [
        'Sıcak iklim ve deniz tutkun Barcelona\'nın Akdeniz ruhunu yaşaman için biçilmiş kaftan.',
        'Sosyal yapın ve eğlenceye olan düşkünlüğün La Rambla\'da harika bir hayat vadediyor.',
        'Sanat ve kültüre olan ilgin Gaudí\'nin şehrinde her gün yeni ilhamlar bulmanı sağlayacak.'
      ]
    },
    {
      name: 'Tokyo',
      emoji: '🗼',
      gradient: ['#FF69B4', '#7B68EE'],
      profile: { international: 2, modern: 2, techy: 2, orderly: 2, foodie: 2, exotic: 2, bustling: 1 },
      reasons: [
        'Teknolojiye olan tutkunun ve düzenli yaşam tercihin Tokyo\'nun mükemmel organizasyonuyla örtüşüyor.',
        'Egzotik kültürlere olan merakın ve yemek tutkun Japon mutfağının başkentinde seni bekliyor.',
        'Modern yaşam tarzın ve yenilikçi ruhun Tokyo\'nun fütüristik dünyasında kendini evinde hissettirecek.'
      ]
    },
    {
      name: 'New York',
      emoji: '🗽',
      gradient: ['#4834d4', '#686de0'],
      profile: { international: 2, bustling: 2, modern: 2, nightlife: 2, diverse: 2, ambitious: 2, lively: 1 },
      reasons: [
        'Büyük şehir enerjisi ve gece hayatı tutkun Büyük Elma\'da kendini bulacak.',
        'Çeşitliliğe verdiğin değer ve hırsın Manhattan gökdelenlerinde kariyer yapacak.',
        'Dinamik yaşam tarzın ve kozmopolit ruhun New York\'u senin başkentin yapıyor.'
      ]
    },
    {
      name: 'Londra',
      emoji: '🎡',
      gradient: ['#6c5ce7', '#a29bfe'],
      profile: { international: 1, european: 2, historical: 2, cultural: 2, diverse: 2, prestigious: 2, bustling: 1 },
      reasons: [
        'Tarihe olan saygın ve kültürel derinliğin Thames Nehri kıyısında huzur bulacak.',
        'Büyük şehir yaşamı tercihin ve çeşitliliğe olan açıklığın Londra\'yı yuvana dönüştürüyor.',
        'Avrupa tarzı zarif yaşam anlayışın ve entelektüel merakın Londra\'da karşılığını bulacak.'
      ]
    },
    {
      name: 'Amsterdam',
      emoji: '🚲',
      gradient: ['#e17055', '#fdcb6e'],
      profile: { international: 1, european: 2, relaxed: 2, artistic: 2, free: 2, cozy: 2, alternative: 1, peaceful: 1 },
      reasons: [
        'Özgürlüğe olan tutkunun ve rahat yaşam tarzın Amsterdam\'ın kanalları boyunca seni bekliyor.',
        'Sanata ve kültüre verdiğin değer Van Gogh\'un şehrinde keşifler yapmanı sağlayacak.',
        'Küçük ama etkili bir şehirde yaşama tercihin Amsterdam\'ın samimi atmosferiyle uyumlu.'
      ]
    },
    {
      name: 'Dubai',
      emoji: '🌇',
      gradient: ['#f9ca24', '#f0932b'],
      profile: { international: 2, luxurious: 2, modern: 2, adventurous: 2, warm: 2, ambitious: 2, exotic: 1 },
      reasons: [
        'Lükse olan düşkünlüğün ve modern yaşam tutkun Dubai\'nin gösterişli dünyasında parlayacak.',
        'Macera ruhun ve sıcak iklim tercihin çölün ortasındaki bu oazda seni evinde hissettirecek.',
        'Büyük düşüncelerin ve egzotik deneyimlere olan merakın Dubai\'yi senin şehrin yapıyor.'
      ]
    },
    {
      name: 'Berlin',
      emoji: '🎸',
      gradient: ['#636E72', '#FD79A8'],
      profile: { international: 1, european: 1, artistic: 2, nightlife: 2, alternative: 2, affordable: 2, modern: 1, free: 1, lively: 1 },
      reasons: [
        'Alternatif ruhun ve sanat tutkun Berlin\'in yaratıcı atmosferinde çiçek açacak.',
        'Gece hayatı sevgin ve uygun fiyatlı yaşam tercihin Berlin\'in dinamik semtlerinde seni bekliyor.',
        'Modern düşüncen ve özgür ruhun Berlin\'in kültürel zenginliğiyle buluşacak.'
      ]
    },
    {
      name: 'Kars',
      emoji: '🏔️',
      gradient: ['#74b9ff', '#dfe6e9'],
      profile: { domestic: 2, peaceful: 2, natural: 2, historical: 1, affordable: 2, cozy: 2 },
      reasons: [
        'Doğa tutkun ve huzur arayışın Kars\'ın bembeyaz ovalarında karşılığını bulacak.',
        'Sakin yaşam tercihin ve tarihe olan ilgin Ani Harabeleri\'nin gölgesinde mutlu edecek.',
        'Uygun fiyatlı yaşam anlayışın ve sadelik arayışın Kars\'ı senin huzur limanına dönüştürüyor.'
      ]
    },
    {
      name: 'Antalya',
      emoji: '🏝️',
      gradient: ['#00cec9', '#55efc4'],
      profile: { domestic: 2, warm: 2, beach: 2, relaxed: 2, historical: 1, affordable: 2 },
      reasons: [
        'Deniz ve güneş tutkun Antalya\'nın turkuaz kıyılarında seni bekliyor.',
        'Rahat yaşam tarzın ve sıcak iklim tercihin Akdeniz\'in incisiyle mükemmel uyum sağlıyor.',
        'Tarihi zenginliklere olan ilgin ve uygun yaşam arayışın Antalya\'yı senin cennetin yapıyor.'
      ]
    }
  ],

  /* ──────────────────── ÜNİVERSİTE SONUÇLARI ──────────────────── */
  universite: [
    {
      name: 'MIT',
      emoji: '🔬',
      gradient: ['#a31f34', '#8b1a2b'],
      profile: { research: 2, techy: 2, innovation: 2, competitive: 2, international: 2 },
      reasons: [
        'Teknik zekân ve araştırma tutkunun MIT\'nin laboratuvarlarında devrim niteliğinde keşiflere imza atacak.',
        'Rekabetçi yapın ve yenilikçi düşüncen Cambridge, Massachusetts\'te seni bekliyor.',
        'Uluslararası vizyonun ve teknolojiye olan bağlılığın MIT\'yi senin için ideal kılıyor.'
      ]
    },
    {
      name: 'Stanford',
      emoji: '☀️',
      gradient: ['#8C1515', '#B83A4B'],
      profile: { innovation: 2, entrepreneurial: 2, campus: 2, techy: 2, research: 1 },
      reasons: [
        'Girişimcilik ruhun ve kampüs yaşamına olan tutkunun Stanford\'un California güneşi altında parlayacak.',
        'Yenilikçi düşüncen ve teknolojiye olan ilgin Silikon Vadisi\'nin kalbinde karşılığını bulacak.',
        'Araştırma merakın ve büyük hayaller kurma kapasiten Stanford\'u senin üniversiten yapıyor.'
      ]
    },
    {
      name: 'Oxford',
      emoji: '📚',
      gradient: ['#002147', '#1a3a5c'],
      profile: { tradition: 2, research: 2, prestige: 2, humanities: 2, international: 1 },
      reasons: [
        'Akademik mükemmellik arayışın ve geleneğe olan saygın Oxford\'un asırlık duvarları arasında seni bekliyor.',
        'Araştırma tutkunun ve prestije verdiğin değer Oxford\'un köklü akademik mirasıyla birebir örtüşüyor.',
        'Entelektüel merakın ve uluslararası bakış açın Oxford\'da dünya tarihine iz bırakacak.'
      ]
    },
    {
      name: 'Hacettepe',
      emoji: '🦌',
      gradient: ['#E31837', '#FF4757'],
      profile: { research: 1, campus: 2, turkey: 2, medical: 1, community: 2 },
      reasons: [
        'Türkiye\'deki güçlü akademik temelin ve kampüs yaşamına olan sevgin Hacettepe\'de seni bekliyor.',
        'Topluluk ruhun ve araştırma merakın Hacettepe\'nin dinamik yapısıyla mükemmel uyum sağlıyor.',
        'Bilime olan ilgin ve yerel değerlere bağlılığın Hacettepe\'yi senin akademik yuvana dönüştürüyor.'
      ]
    },
    {
      name: 'ODTÜ',
      emoji: '⚙️',
      gradient: ['#8B0000', '#CC0000'],
      profile: { techy: 2, turkey: 2, campus: 2, competitive: 1, engineering: 2 },
      reasons: [
        'Mühendislik tutkunun ve rekabetçi yapın ODTÜ\'nün efsanevi kampüsünde seni bekliyor.',
        'Teknolojiye olan bağlılığın ve takım çalışması yeteneğin ODTÜ\'de parlatacak.',
        'Türkiye\'nin en iyi teknik üniversitelerinden birinde olmak senin karakterinle birebir örtüşüyor.'
      ]
    },
    {
      name: 'Boğaziçi',
      emoji: '🌊',
      gradient: ['#003591', '#0047BB'],
      profile: { prestige: 2, turkey: 2, urban: 2, international: 1, social: 2 },
      reasons: [
        'Prestije verdiğin değer ve şehir yaşamı tercihin Boğaziçi\'nin eşsiz konumunda seni bekliyor.',
        'Sosyal yapın ve uluslararası bakış açın Boğaziçi\'nin kozmopolit atmosferiyle mükemmel uyumlu.',
        'İstanbul\'un kalbinde akademik mükemmellik arayışın Boğaziçi\'ni senin için ideal kılıyor.'
      ]
    },
    {
      name: 'ETH Zürich',
      emoji: '🇨🇭',
      gradient: ['#1D3557', '#457B9D'],
      profile: { research: 2, engineering: 2, innovation: 1, european: 2, precision: 2 },
      reasons: [
        'Mühendislik zekân ve hassasiyetin ETH Zürich\'in İsviçre disipliniyle birebir örtüşüyor.',
        'Araştırma tutkunun ve yenilikçi düşüncen Avrupa\'nın en prestijli teknik üniversitesinde parlayacak.',
        'Avrupa\'da eğitim alma arzun ve akademik mükemmellik arayışın ETH Zürich\'i senin yolun yapıyor.'
      ]
    },
    {
      name: 'Cambridge',
      emoji: '🏛️',
      gradient: ['#A3C1AD', '#003B2B'],
      profile: { tradition: 2, research: 2, prestige: 2, campus: 1, humanities: 1 },
      reasons: [
        'Geleneğe olan saygın ve akademik tutkun Cambridge\'in asırlık kolejlerinde seni bekliyor.',
        'Araştırma merakın ve entelektüel derinliğin Newton\'un izinde yürümeni sağlayacak.',
        'Kampüs yaşamına olan sevgin ve prestij arayışın Cambridge\'i senin akademik cennetin yapıyor.'
      ]
    },
    {
      name: 'Sorbonne',
      emoji: '🗼',
      gradient: ['#1B1464', '#3D1C6E'],
      profile: { humanities: 2, cultural: 2, european: 2, tradition: 1, urban: 2 },
      reasons: [
        'Kültürel zenginliğe olan tutkunun ve beşeri bilimlere ilgin Sorbonne\'un Paris\'teki kampüsünde bekliyor.',
        'Avrupa tarzı akademik anlayışın ve geleneksel değerlere saygın Sorbonne\'la mükemmel uyum sağlıyor.',
        'Şehir yaşamı tercihin ve entelektüel merakın Paris\'in kalbinde karşılığını bulacak.'
      ]
    },
    {
      name: 'Harvard',
      emoji: '🏆',
      gradient: ['#A41034', '#C90016'],
      profile: { prestige: 2, competitive: 2, diverse: 2, research: 2, global: 2 },
      reasons: [
        'Küresel vizyonun ve rekabetçi ruhun Harvard\'ın efsanevi kampüsünde seni bekliyor.',
        'Araştırma tutkunun ve çeşitliliğe olan açıklığın Harvard\'ın zengin ortamıyla birebir örtüşüyor.',
        'Prestije verdiğin değer ve liderlik potansiyelin Harvard\'ı senin için kaçınılmaz kılıyor.'
      ]
    }
  ]
};

/* ──────────────────── TAHMİN ALGORİTMASI ──────────────────── */

/**
 * Kullanıcının seçimlerinden birikmiş etiketleri (tags) tüm aday sonuçlarla
 * karşılaştırarak en uygun sonucu döndürür.
 *
 * Algoritma: Nokta Çarpımı (Dot Product)
 * Her aday sonucun profil ağırlıkları ile kullanıcının birikmiş etiketleri
 * çarpılır ve toplanır. En yüksek puana sahip aday kazanır.
 */
function predictResult(categoryId, userTags) {
  const candidates = RESULTS[categoryId];
  if (!candidates) return null;

  let bestScore = -Infinity;
  let bestResult = null;
  const scores = [];

  for (const candidate of candidates) {
    let score = 0;
    for (const [tag, weight] of Object.entries(candidate.profile)) {
      if (userTags[tag]) {
        score += userTags[tag] * weight;
      }
    }
    scores.push({ name: candidate.name, score });
    if (score > bestScore) {
      bestScore = score;
      bestResult = candidate;
    }
  }

  // Debug: console.table(scores.sort((a, b) => b.score - a.score));
  return bestResult;
}

/**
 * Kullanıcının birikmiş etiketlerini günceller.
 * Her seçim yapıldığında seçilen şıkkın etiketleri biriktirilir.
 */
function accumulateTags(currentTags, newTags) {
  const result = { ...currentTags };
  for (const [tag, value] of Object.entries(newTags)) {
    result[tag] = (result[tag] || 0) + value;
  }
  return result;
}
