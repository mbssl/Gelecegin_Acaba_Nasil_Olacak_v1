/* ============================================================
   G.A.N.O? — Gelişmiş Tahmin Motoru v2
   Eliminasyon + Dot-Product + Güven Skoru Algoritması
   100+ Sonuç Profili + Gerçek Görseller
   ============================================================ */

/* ──────────────────── MESLEK SONUÇLARI (25+) ──────────────────── */
const MESLEK_RESULTS = [
  {
    name: 'Yazılım Mühendisi', emoji: '👨‍💻', gradient: ['#667eea','#764ba2'],
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=500&fit=crop',
    filters: {},
    profile: { analytic:2, tech:2, detail:2, logic:2, individual:1, machine:1, office:1, innovation:1, structured:1 },
    reasons: ['Analitik düşünme yeteneğin ve teknolojiye olan tutkunun seni kodlama dünyasının yıldızı yapacak.','Detaylara gösterdiğin özen hatasız ve şık yazılımlar üretmeni sağlayacak.','Bireysel çalışma disiplinin ve problem çözme becerilerin bu alanda zirveye taşıyacak.']
  },
  {
    name: 'Yapay Zeka Mühendisi', emoji: '🤖', gradient: ['#6a11cb','#2575fc'],
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&h=500&fit=crop',
    filters: {},
    profile: { analytic:2, tech:2, innovation:2, logic:2, machine:2, detail:1, individual:1, vision:1 },
    reasons: ['Derin öğrenme ve yapay zeka alanında vizyoner düşüncen geleceği şekillendirecek.','Analitik zekân ve teknoloji tutkunun makinelere zeka katmayı sağlayacak.','Yenilikçi ruhun ve merakın yapay zeka devriminin öncülerinden biri yapacak.']
  },
  {
    name: 'Veri Bilimci', emoji: '📊', gradient: ['#0f0c29','#302b63'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
    filters: {},
    profile: { analytic:2, tech:2, detail:2, logic:2, individual:1, machine:1, innovation:1, precision:1 },
    reasons: ['Veri okumadaki keskin bakış açın karmaşık problemleri çözecek.','Teknolojiye olan hakimiyetin büyük verileri anlamlı içgörülere dönüştürecek.','Detay odaklı çalışma tarzın ve merakın veri biliminin derinliklerinde keşifler yapacak.']
  },
  {
    name: 'Doktor', emoji: '👨‍⚕️', gradient: ['#11998e','#38ef7d'],
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&h=500&fit=crop',
    filters: {},
    profile: { people:2, empathy:2, detail:2, discipline:1, team:1, structured:1, stability:1, satisfaction:1 },
    reasons: ['İnsanlara yardım etme arzun ve analitik zekân seni sağlık dünyasının vazgeçilmezi yapacak.','Detaylara olan hakimiyetin hayat kurtaracak kararlar almanı sağlayacak.','Takım çalışmasına yatkınlığın ve sorumluluk bilincin tıp dünyasında parlayacak.']
  },
  {
    name: 'Eczacı', emoji: '💊', gradient: ['#00b09b','#96c93d'],
    image: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?w=800&h=500&fit=crop',
    filters: {},
    profile: { people:1, detail:2, discipline:1, stability:2, structured:1, satisfaction:1, analytic:1, precision:1 },
    reasons: ['Detaylara olan hakimiyetin ve insanlara yardım arzun eczacılığın temelini oluşturuyor.','Düzenli çalışma tercihin ve stabilite arayışın eczane rutinleriyle mükemmel örtüşüyor.','Sağlık bilimine olan ilgin ve analitik düşüncen doğru ilaçları bulmayı sağlayacak.']
  },
  {
    name: 'Avukat', emoji: '⚖️', gradient: ['#b8860b','#daa520'],
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=500&fit=crop',
    filters: {},
    profile: { people:1, analytic:1, leadership:2, office:1, logic:1, ambition:1, bigpicture:1, strategy:1, vision:1 },
    reasons: ['Liderlik ruhun ve analitik düşüncen seni adalet saraylarının en güçlü sesi yapacak.','Büyük resmi görme yeteneğin davaları kazanmanın anahtarı olacak.','İnsanlarla iletişim becerilerin ve ikna gücün hukuk dünyasında fark yaratacak.']
  },
  {
    name: 'Grafik Tasarımcı', emoji: '🎨', gradient: ['#f6d365','#fda085'],
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&h=500&fit=crop',
    filters: {},
    profile: { creative:2, art:2, individual:1, detail:1, tech:1, satisfaction:1, focus:1 },
    reasons: ['Yaratıcı ruhun ve estetik bakış açın görsel dünyada devrim yaratacak.','Bireysel çalışma tercihin özgün tasarımlar üretmeni kolaylaştıracak.','Detaylara olan duyarlılığın her pikselde mükemmellik aramanı sağlayacak.']
  },
  {
    name: 'Mimar', emoji: '🏗️', gradient: ['#2c3e50','#3498db'],
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&h=500&fit=crop',
    filters: {},
    profile: { creative:2, bigpicture:1, detail:1, analytic:1, art:1, strategy:1, office:1 },
    reasons: ['Yaratıcılığın ile analitik düşüncenin birleşimi muhteşem yapılar ortaya çıkaracak.','Büyük resmi görebilme yeteneğin şehirlerin silüetini değiştirecek.','Hem detaylara hem de bütüne hakimiyetin mimarlık dünyasında aranan ismi yapacak.']
  },
  {
    name: 'Pilot', emoji: '✈️', gradient: ['#0f0c29','#302b63'],
    image: 'https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=800&h=500&fit=crop',
    filters: {},
    profile: { tech:1, risk:1, discipline:1, field:1, machine:1, courage:1, adventure:1, precision:1, money:1 },
    reasons: ['Macera ruhun ve teknolojiye olan tutkunun seni gökyüzünün efendisi yapacak.','Disiplinli yapın ve detaylara gösterdiğin özen güvenli uçuşların garantisi olacak.','Risk almaktan kaçınmaman ve soğukkanlılığın kokpitin yıldızı olmanı sağlayacak.']
  },
  {
    name: 'Öğretmen', emoji: '📚', gradient: ['#ff758c','#ff7eb3'],
    image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&h=500&fit=crop',
    filters: {},
    profile: { people:2, team:1, social:1, satisfaction:2, empathy:1, meaning:1, leadership:1 },
    reasons: ['İnsanlara olan sevgin ve paylaşma arzun gelecek nesilleri şekillendirecek.','Takım çalışmasına yatkınlığın ve liderlik özelliklerin sınıfta ilham kaynağı olacak.','İş tatminini ön planda tutan yapın öğretmenliğin en anlamlı yanını yaşamanı sağlayacak.']
  },
  {
    name: 'Girişimci', emoji: '🚀', gradient: ['#f7971e','#ffd200'],
    image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=500&fit=crop',
    filters: {},
    profile: { risk:2, leadership:2, creative:1, bigpicture:2, money:1, courage:1, vision:1, ambition:1 },
    reasons: ['Risk almayı seven cesur yapın iş dünyasında devrimler yaratacak.','Liderlik ruhun ve vizyoner bakış açın yeni sektörler oluşturacak.','Yaratıcı düşüncen ve büyük hayaller kurma kapasiten girişimcilik dünyasının yıldızı yapacak.']
  },
  {
    name: 'Psikolog', emoji: '🧠', gradient: ['#a18cd1','#fbc2eb'],
    image: 'https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=800&h=500&fit=crop',
    filters: {},
    profile: { people:2, empathy:2, satisfaction:2, meaning:1, individual:1, depth:1, creative:1 },
    reasons: ['İnsanları anlama yeteneğin ve empatik yapın ruhların şifacısı olmanı sağlayacak.','Bireysel çalışma tercihin danışanlarına özel ve derin bir destek sunmanı kolaylaştıracak.','İş tatminini önceliklendiren yapın insanlara dokunmanın verdiği huzuru yaşatacak.']
  },
  {
    name: 'Akademisyen', emoji: '🎓', gradient: ['#4b6cb7','#182848'],
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=500&fit=crop',
    filters: {},
    profile: { analytic:2, detail:2, individual:1, logic:1, depth:2, meaning:1, precision:1, focus:1 },
    reasons: ['Derin düşünce yeteneğin ve araştırma merakın akademi dünyasında iz bırakacak.','Detaylara olan tutkunun ve sabırlı çalışma disiplinin bilimsel keşiflere kapı açacak.','Bireysel çalışmayı seven yapın akademik özgürlüğün tadını çıkaracak.']
  },
  {
    name: 'Diplomat', emoji: '🌐', gradient: ['#1a2a6c','#b21f1f'],
    image: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=800&h=500&fit=crop',
    filters: {},
    profile: { people:2, leadership:1, strategy:2, bigpicture:1, social:1, ambition:1, vision:1 },
    reasons: ['İnsanlarla iletişim becerilerin ve stratejik düşüncen uluslararası arenada parlayacak.','Büyük resmi görme yeteneğin diplomatik müzakerelerde fark yaratacak.','Sosyal zekân ve liderlik ruhun dünya barışına katkı sağlayacak.']
  },
  {
    name: 'Gazeteci', emoji: '📰', gradient: ['#e65c00','#F9D423'],
    image: 'https://images.unsplash.com/photo-1504711434969-e33886168d6c?w=800&h=500&fit=crop',
    filters: {},
    profile: { people:1, creative:1, social:1, courage:1, adventure:1, field:1, meaning:1, depth:1 },
    reasons: ['Merak duygununun seni haberlerin peşinde koşturacak ve gerçekleri gün yüzüne çıkaracak.','Cesur yapın ve saha deneyimi tercihin gazetecilik dünyasında seni öne çıkaracak.','Topluma anlam katma arzun ve ifade yeteneğin güçlü bir kalem olmanı sağlayacak.']
  },
  {
    name: 'Müzisyen', emoji: '🎵', gradient: ['#a8e063','#56ab2f'],
    image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&h=500&fit=crop',
    filters: {},
    profile: { creative:2, art:2, individual:1, satisfaction:1, depth:1, meaning:1, focus:1 },
    reasons: ['Sanatsal ruhun ve yaratıcı dehan müzik dünyasında benzersiz eserler ortaya çıkaracak.','Bireysel çalışma disiplinin ve derinlikli düşüncen bestelerin ruhuna işleyecek.','İş tatminini ön planda tutan yapın müzikle hayata anlam katmayı sağlayacak.']
  },
  {
    name: 'Şef (Aşçıbaşı)', emoji: '👨‍🍳', gradient: ['#FF4B2B','#FF416C'],
    image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&h=500&fit=crop',
    filters: {},
    profile: { creative:2, detail:1, people:1, team:1, art:1, satisfaction:1, adventure:1 },
    reasons: ['Yaratıcı ruhun ve lezzet tutkunun mutfak sahnesinin yıldızı yapacak.','Detaylara olan özenin ve takım yönetimi yeteneğin Michelin yıldızlı restoranların kapısını açacak.','Macera ruhun dünya mutfaklarını keşfetmeni ve yeni tatlar yaratmanı sağlayacak.']
  },
  {
    name: 'Finansçı', emoji: '💹', gradient: ['#134E5E','#71B280'],
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=500&fit=crop',
    filters: {},
    profile: { analytic:2, logic:2, money:2, risk:1, strategy:1, ambition:1, office:1, precision:1 },
    reasons: ['Analitik zekân ve rakamlarla aranın finans dünyasının tepelerine taşıyacak.','Risk analizi yeteneğin ve stratejik düşüncen yatırım kararlarında fark yaratacak.','Hırsın ve para yönetimi becerilerin finans sektöründe parlayacak.']
  },
  {
    name: 'Sporcu', emoji: '🏅', gradient: ['#ed4264','#ffedbc'],
    image: 'https://images.unsplash.com/photo-1461896836934-bd45ba9d1e0b?w=800&h=500&fit=crop',
    filters: {},
    profile: { discipline:2, field:2, risk:1, courage:1, adventure:1, team:1, ambition:1, money:1 },
    reasons: ['Disiplinli yapın ve saha ruhu seni spor dünyasının zirvelerine taşıyacak.','Cesaret ve mücadele gücün her yarışta üstün performans sergilemeni sağlayacak.','Takım çalışması yeteneğin ve hırsın şampiyonluk yolunda fark yaratacak.']
  },
  {
    name: 'Moda Tasarımcısı', emoji: '👗', gradient: ['#C33764','#1D2671'],
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&h=500&fit=crop',
    filters: {},
    profile: { creative:2, art:2, vision:1, bigpicture:1, social:1, ambition:1 },
    reasons: ['Yaratıcı vizyonun ve estetik anlayışın moda dünyasında trendler belirleyecek.','Büyük resmi görme yeteneğin koleksiyonlar yaratmayı sağlayacak.','Sosyal zekân ve stil anlayışın moda endüstrisinin aranan ismi yapacak.']
  },
  {
    name: 'Veteriner', emoji: '🐾', gradient: ['#56ab2f','#a8e063'],
    image: 'https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=800&h=500&fit=crop',
    filters: {},
    profile: { people:1, empathy:2, detail:1, satisfaction:2, meaning:1, field:1, discipline:1 },
    reasons: ['Hayvanlara olan sevgin ve empatik yapın veterinerlik mesleğinin en güzel yanını yaşatacak.','Detaylara olan özenin ve saha deneyimin her canlıya şifa dağıtacak.','İş tatminini ön planda tutan yapın her tedavi ettiğin hayvanla mutluluk bulacak.']
  },
  {
    name: 'Oyun Geliştiricisi', emoji: '🎮', gradient: ['#8E2DE2','#4A00E0'],
    image: 'https://images.unsplash.com/photo-1552820728-8b83bb6b2b28?w=800&h=500&fit=crop',
    filters: {},
    profile: { tech:2, creative:2, detail:1, logic:1, individual:1, machine:1, art:1, innovation:1 },
    reasons: ['Teknoloji ve yaratıcılığın birleşimi oyun dünyasında efsanevi eserler üretecek.','Detaylara olan özenin ve kodlama becerilerin unutulmaz oyun deneyimleri yaratacak.','Yenilikçi düşüncen ve görsel estetik anlayışın oyun endüstrisinde fark yaratacak.']
  },
  {
    name: 'Biyolog', emoji: '🧬', gradient: ['#36D1DC','#5B86E5'],
    image: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=800&h=500&fit=crop',
    filters: {},
    profile: { analytic:2, detail:2, depth:1, meaning:1, individual:1, precision:1, focus:1 },
    reasons: ['Doğaya olan merakın ve analitik düşüncen yaşamın sırlarını çözecek.','Detaylara olan hakimiyetin bilimsel keşiflerde çığır açacak.','Derin araştırma tutkun biyoloji dünyasında önemli buluşlara imza atacak.']
  },
  {
    name: 'Aktör/Aktris', emoji: '🎭', gradient: ['#f12711','#f5af19'],
    image: 'https://images.unsplash.com/photo-1598387993281-cecf8b71a8f8?w=800&h=500&fit=crop',
    filters: {},
    profile: { creative:2, people:1, social:2, art:1, empathy:1, courage:1, satisfaction:1 },
    reasons: ['Sahnedeki karizman ve insanları anlama yeteneğin oyunculuk dünyasında parlayacak.','Sosyal zekân ve kreatif ruhun her rolde benzersiz performanslar sergileyecek.','Cesaretin ve duygu derinliğin seyircileri büyülemeyi sağlayacak.']
  },
  {
    name: 'Askeri Pilot', emoji: '🛩️', gradient: ['#1B1464','#3D1C6E'],
    image: 'https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=800&h=500&fit=crop',
    filters: {},
    profile: { discipline:2, tech:1, risk:2, courage:2, precision:1, machine:1, field:1, structured:1 },
    reasons: ['Disiplinli yapın ve cesaretin seni gökyüzünün en tehlikeli bölgelerinde bile soğukkanlı kılacak.','Teknolojiye olan hakimiyetin ve hassasiyetin savaş uçaklarının en iyi pilotu yapacak.','Risk almadaki cesaretin ve yapısal düşüncen askeri operasyonlarda fark yaratacak.']
  }
];

/* ──────────────────── ŞİRKET SONUÇLARI (25+) ──────────────────── */
const SIRKET_RESULTS = [
  {
    name: 'Apple', emoji: '🍎', gradient: ['#333','#666'],
    logo: 'https://logo.clearbit.com/apple.com',
    image: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=800&h=500&fit=crop',
    filters: {},
    profile: { innovation:2, premium:2, quality:2, brand:2, scale:1, global:1, creativity:1 },
    reasons: ['Mükemmeliyetçi yapın ve premium ürünlere olan tutkunun Apple\'ın DNA\'sıyla örtüşüyor.','Yenilikçi düşüncen ve tasarıma verdiğin değer Cupertino\'daki yerini garanti ediyor.','Büyük ölçekte düşünme kapasiten ve global vizyonun Apple\'da parlayacak.']
  },
  {
    name: 'Google', emoji: '🔍', gradient: ['#4285F4','#34A853'],
    logo: 'https://logo.clearbit.com/google.com',
    image: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=800&h=500&fit=crop',
    filters: {},
    profile: { innovation:2, freedom:2, fun:2, scale:2, global:2, creativity:1, accessible:1 },
    reasons: ['Özgür düşüncen ve yenilikçi ruhun Google\'ın yaratıcı ortamında çiçek açacak.','Eğlenceli çalışma ortamı tercihin Googleplex\'te seni bekliyor.','Global düşünme kapasiten ve proje yeteneğin Google\'ın misyonuyla uyumlu.']
  },
  {
    name: 'Tesla', emoji: '🔋', gradient: ['#cc0000','#1a1a1a'],
    logo: 'https://logo.clearbit.com/tesla.com',
    image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&h=500&fit=crop',
    filters: {},
    profile: { innovation:2, mission:2, speed:2, future:2, risk:1, premium:1, intensity:1 },
    reasons: ['Dünyayı değiştirme arzun ve yenilikçi vizyonun Tesla\'nın misyonuyla örtüşüyor.','Hızlı tempo sevgin ve risk alma cesaretin Tesla ekibinde seni bekliyor.','Geleceğe dönük bakış açın Tesla\'da devrimlere imza atacak.']
  },
  {
    name: 'Netflix', emoji: '🎬', gradient: ['#E50914','#B20710'],
    logo: 'https://logo.clearbit.com/netflix.com',
    image: 'https://images.unsplash.com/photo-1574375927938-d5a98e8d7e28?w=800&h=500&fit=crop',
    filters: {},
    profile: { freedom:2, fun:2, global:2, creativity:2, casual:1, innovation:1 },
    reasons: ['Yaratıcı ruhun ve eğlenceye olan tutkunun Netflix kültürüyle mükemmel uyum sağlıyor.','Özgür çalışma ortamı tercihin Netflix felsefesinin tam karşılığı.','Global içerik üretme vizyonun Netflix\'te seni öne çıkaracak.']
  },
  {
    name: 'NASA', emoji: '🌌', gradient: ['#0B3D91','#FC3D21'],
    logo: 'https://logo.clearbit.com/nasa.gov',
    image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=800&h=500&fit=crop',
    filters: {},
    profile: { mission:2, space:2, future:2, prestige:2, professional:1, resources:1, scale:1 },
    reasons: ['Büyük hayaller kurma kapasiten ve bilimsel merakın NASA\'nın uzay keşiflerinde bekliyor.','Misyon odaklı çalışma tercihin NASA\'nın disiplinli yapısıyla örtüşüyor.','İnsanlığa katkı arzun uzayın kapılarını sana açacak.']
  },
  {
    name: 'SpaceX', emoji: '🚀', gradient: ['#005288','#A7A9AC'],
    logo: 'https://logo.clearbit.com/spacex.com',
    image: 'https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?w=800&h=500&fit=crop',
    filters: {},
    profile: { innovation:2, space:2, future:2, risk:2, speed:2, mission:1, intensity:1 },
    reasons: ['Risk almayı seven cesur yapın SpaceX\'in Mars misyonunda seni bekliyor.','Yenilikçi düşüncen ve imkansızı başarma arzun SpaceX\'in DNA\'sıyla örtüşüyor.','Hızlı hareket etme yeteneğin ve tutkunun roketler kadar güçlü.']
  },
  {
    name: 'Microsoft', emoji: '🪟', gradient: ['#00A4EF','#7FBA00'],
    logo: 'https://logo.clearbit.com/microsoft.com',
    image: 'https://images.unsplash.com/photo-1640158615573-cd28feb1bf4e?w=800&h=500&fit=crop',
    filters: {},
    profile: { scale:2, global:2, innovation:1, professional:1, stability:1, resources:2, quality:1 },
    reasons: ['Büyük ölçekli düşüncen ve stabilite arayışın Microsoft\'un yapısıyla uyumlu.','Global vizyonun ve teknolojiye olan ilgin kurumsal dünyada fark yaratacak.','Profesyonel çalışma ortamı tercihin Microsoft kültürüyle örtüşüyor.']
  },
  {
    name: 'Meta', emoji: '🌐', gradient: ['#0668E1','#00C2FF'],
    logo: 'https://logo.clearbit.com/meta.com',
    image: 'https://images.unsplash.com/photo-1636114673156-052a83459fc1?w=800&h=500&fit=crop',
    filters: {},
    profile: { innovation:2, scale:2, global:2, fun:1, future:2, creativity:1, speed:1 },
    reasons: ['Geleceğin sosyal deneyimlerini şekillendirme arzun Meta\'nın vizyonuyla örtüşüyor.','Yenilikçi düşüncen ve global ölçek ilgin Meta\'da parlayacak.','Sanal gerçeklik ve sosyal medyanın geleceğini inşa edecek vizyonerin sen olacaksın.']
  },
  {
    name: 'OpenAI', emoji: '🧠', gradient: ['#10A37F','#1A1A2E'],
    logo: 'https://logo.clearbit.com/openai.com',
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&h=500&fit=crop',
    filters: {},
    profile: { innovation:2, mission:2, future:2, resources:1, prestige:1, quality:1, speed:1 },
    reasons: ['Yapay zeka devriminin öncüsü olan OpenAI\'da misyon odaklı çalışma ruhun parlayacak.','Yenilikçi düşüncen ve geleceği şekillendirme arzun AGI\'ye giden yolda seni bekliyor.','Prestijli ve hızlı tempolu çalışma ortamı tam sana göre.']
  },
  {
    name: 'NVIDIA', emoji: '💚', gradient: ['#76B900','#1A1A1A'],
    logo: 'https://logo.clearbit.com/nvidia.com',
    image: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?w=800&h=500&fit=crop',
    filters: {},
    profile: { innovation:2, quality:2, scale:1, future:2, resources:1, professional:1 },
    reasons: ['GPU devriminin lideri NVIDIA\'da teknolojiye olan tutkunun parıldayacak.','Yenilikçi donanım ve yazılım geliştirme arzun NVIDIA\'nın DNA\'sıyla örtüşüyor.','Yapay zeka çiplerinin geleceğini inşa etme vizyonun burada karşılığını bulacak.']
  },
  {
    name: 'Samsung', emoji: '📱', gradient: ['#034EA2','#1C6DD0'],
    logo: 'https://logo.clearbit.com/samsung.com',
    image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=800&h=500&fit=crop',
    filters: {},
    profile: { scale:2, stability:2, global:2, traditional:1, resources:1, brand:1, order:1 },
    reasons: ['Büyük ölçekli düşüncen ve stabilite arayışın Samsung\'un güçlü yapısıyla uyumlu.','Global vizyonun Samsung\'un ürün yelpazesinde seni bekliyor.','Disiplinli çalışma tarzın kurumsal kültüre mükemmel uyum sağlıyor.']
  },
  {
    name: 'Spotify', emoji: '🎵', gradient: ['#1DB954','#191414'],
    logo: 'https://logo.clearbit.com/spotify.com',
    image: 'https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=800&h=500&fit=crop',
    filters: {},
    profile: { fun:2, freedom:2, creativity:2, global:1, casual:1, accessible:1 },
    reasons: ['Müzik ve eğlence tutkun Spotify\'ın dinamik dünyasında seni bekliyor.','Yaratıcı ruhun ve özgür çalışma tercihin Spotify kültürüyle örtüşüyor.','Global bakış açın Spotify\'da fark yaratacak.']
  },
  {
    name: 'Amazon', emoji: '📦', gradient: ['#FF9900','#232F3E'],
    logo: 'https://logo.clearbit.com/amazon.com',
    image: 'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=800&h=500&fit=crop',
    filters: {},
    profile: { scale:2, speed:2, global:2, growth:2, resources:1, profit:1, intensity:1 },
    reasons: ['Hızlı tempo dayanıklılığın ve büyük ölçekli düşüncen Amazon\'da parlayacak.','Sonuç odaklı çalışma tarzın Bezos felsefesiyle uyumlu.','Büyüme odaklı düşüncen Amazon\'da kariyer basamaklarını hızla çıkaracak.']
  },
  {
    name: 'BMW', emoji: '🏎️', gradient: ['#1C69D4','#262626'],
    logo: 'https://logo.clearbit.com/bmw.com',
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&h=500&fit=crop',
    filters: {},
    profile: { premium:2, quality:2, brand:2, traditional:1, professional:1, order:1, scale:1 },
    reasons: ['Premium kalite anlayışın ve mühendislik tutkunun BMW\'nin DNA\'sıyla birebir örtüşüyor.','Marka değerine verdiğin önem Münih\'teki kapıları sana açacak.','Profesyonel çalışma ortamı tercihin otomotiv devinde fark yaratacak.']
  },
  {
    name: 'Airbus', emoji: '✈️', gradient: ['#00205B','#009FE3'],
    logo: 'https://logo.clearbit.com/airbus.com',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109db05?w=800&h=500&fit=crop',
    filters: {},
    profile: { mission:1, professional:2, quality:2, scale:2, order:1, resources:1, space:1 },
    reasons: ['Havacılık tutkunun ve mühendislik zekân Airbus\'ın devasa projelerinde parlayacak.','Kalite ve güvenliğe verdiğin değer uçak üretiminin temelini oluşturuyor.','Büyük ölçekli düşüncen ve ekip çalışması yeteneğin Airbus\'ta karşılığını bulacak.']
  },
  {
    name: 'CERN', emoji: '⚛️', gradient: ['#003366','#336699'],
    logo: 'https://logo.clearbit.com/home.cern',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&h=500&fit=crop',
    filters: {},
    profile: { mission:2, prestige:2, resources:2, quality:1, professional:1, future:1 },
    reasons: ['Evrenin sırlarını çözme arzun CERN\'ün parçacık fiziği laboratuvarlarında seni bekliyor.','Bilimsel araştırmaya olan tutkunun dünyanın en prestijli laboratuvarında karşılığını bulacak.','Misyon odaklı çalışma anlayışın ve merakın CERN\'de çığır açan keşiflere imza atacak.']
  },
  {
    name: 'Adobe', emoji: '🎨', gradient: ['#FF0000','#CC0000'],
    logo: 'https://logo.clearbit.com/adobe.com',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&h=500&fit=crop',
    filters: {},
    profile: { creativity:2, quality:2, innovation:1, brand:1, professional:1, scale:1 },
    reasons: ['Yaratıcılığa olan tutkunun Adobe\'un tasarım araçları dünyasında parıldayacak.','Kaliteli ürün geliştirme arzun ve inovasyon ruhun Adobe\'da fark yaratacak.','Dijital yaratıcılığın geleceğini şekillendirme vizyonun tam Adobe\'a göre.']
  },
  {
    name: 'Goldman Sachs', emoji: '🏦', gradient: ['#00263A','#7399C6'],
    logo: 'https://logo.clearbit.com/goldmansachs.com',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=500&fit=crop',
    filters: {},
    profile: { prestige:2, profit:2, professional:2, intensity:2, scale:1, stability:1, order:1 },
    reasons: ['Finansal zekân ve prestij arayışın Goldman Sachs\'ın Wall Street dünyasında parlayacak.','Yoğun ve rekabetçi çalışma ortamına olan dayanıklılığın seni zirveye taşıyacak.','Profesyonel çalışma disiplinin ve hırsın finans dünyasının kalbinde fark yaratacak.']
  },
  {
    name: 'Türk Hava Yolları', emoji: '🛫', gradient: ['#C8102E','#003E74'],
    logo: 'https://logo.clearbit.com/turkishairlines.com',
    image: 'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?w=800&h=500&fit=crop',
    filters: {},
    profile: { stability:2, local:1, global:1, brand:1, professional:1, community:1, order:1, quality:1 },
    reasons: ['Havacılık tutkunun ve global vizyonun THY\'nin yıldızlı filosunda parlayacak.','Profesyonel çalışma ortamı tercihin ve stabilite arayışın THY ile örtüşüyor.','Marka değerine verdiğin önem Türk Hava Yolları\'nda kariyerini garantiliyor.']
  },
  {
    name: 'ASELSAN', emoji: '🛡️', gradient: ['#1B3A5C','#4A7FB5'],
    logo: 'https://logo.clearbit.com/aselsan.com.tr',
    image: 'https://images.unsplash.com/photo-1580752300992-559f8e19950b?w=800&h=500&fit=crop',
    filters: {},
    profile: { mission:2, stability:2, local:2, professional:1, quality:1, resources:1, order:1 },
    reasons: ['Savunma sanayiine olan ilgin ve milli değerlere bağlılığın ASELSAN\'da karşılığını bulacak.','Misyon odaklı çalışma anlayışın ve disiplinli yapın ASELSAN\'ın DNA\'sıyla örtüşüyor.','Teknolojik gelişime olan katkı arzun milli savunmada fark yaratacak.']
  },
  {
    name: 'Epic Games', emoji: '🎮', gradient: ['#2F2F2F','#0078F2'],
    logo: 'https://logo.clearbit.com/epicgames.com',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=500&fit=crop',
    filters: {},
    profile: { creativity:2, fun:2, innovation:1, freedom:1, global:1, speed:1 },
    reasons: ['Oyun dünyasına olan tutkunun Epic Games\'in yaratıcı ortamında çiçek açacak.','Eğlenceli ve yenilikçi çalışma ortamı tercihin Unreal Engine dünyasında parlayacak.','Global oyun endüstrisinin geleceğini şekillendirme vizyonun tam Epic Games\'e göre.']
  },
  {
    name: 'Riot Games', emoji: '⚔️', gradient: ['#D32936','#1A1A2E'],
    logo: 'https://logo.clearbit.com/riotgames.com',
    image: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800&h=500&fit=crop',
    filters: {},
    profile: { creativity:2, fun:2, community:2, global:1, casual:1 },
    reasons: ['Oyuncu topluluğuna olan tutkunun ve yaratıcı ruhun Riot Games\'te seni bekliyor.','Eğlenceli çalışma ortamı tercihin ve topluluk bilincin Riot kültürüyle örtüşüyor.','Esports ve rekabetçi oyun dünyasına olan ilgin Riot Games\'de fark yaratacak.']
  },
  {
    name: 'Red Bull', emoji: '🐂', gradient: ['#DB0A40','#F7DC6F'],
    logo: 'https://logo.clearbit.com/redbull.com',
    image: 'https://images.unsplash.com/photo-1622566420685-cbb1e2143218?w=800&h=500&fit=crop',
    filters: {},
    profile: { fun:2, speed:2, risk:1, brand:2, global:1, creativity:1, casual:1, growth:1 },
    reasons: ['Macera ruhun ve eğlence tutkunun Red Bull\'un adrenalin dolu dünyasında parlayacak.','Marka deneyimi yaratma yeteneğin ve risk alma cesaretin Red Bull\'da fark yaratacak.','Hızlı tempolu ve yaratıcı ortam tam sana göre.']
  },
  {
    name: 'Turkcell', emoji: '📶', gradient: ['#FFD100','#003CA6'],
    logo: 'https://logo.clearbit.com/turkcell.com.tr',
    image: 'https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=800&h=500&fit=crop',
    filters: {},
    profile: { stability:2, local:2, community:2, traditional:1, practical:1, social_impact:1 },
    reasons: ['Yerel değerlere olan bağlılığın Turkcell\'in Türkiye vizyonuyla örtüşüyor.','Stabilite arayışın ve topluma katkı arzun Turkcell\'le uyumlu.','Teknoloji ilgin ve yerel pazarda fark yaratma potansiyelin Turkcell\'de seni bekliyor.']
  }
];

/* ──────────────────── ŞEHİR SONUÇLARI (70+) ──────────────────── */
const SEHIR_RESULTS = [
  /* ── TÜRKİYE ── */
  { name:'İstanbul', emoji:'🕌', gradient:['#FF6B35','#F7C59F'], image:'https://images.unsplash.com/photo-1524231757912-21f4fe3a7571?w=800&h=500&fit=crop', filters:{region:'domestic',continent:'europe'}, profile:{domestic:2,bustling:2,historical:2,cultural:2,foodie:2,lively:2,warm:1,social:1,ambitious:1,coastal:1}, reasons:['Kalabalığı ve enerjisi seni büyüleyen İstanbul, tarih ve modernliğin buluştuğu yerde bekliyor.','Zengin mutfak kültürü ve büyük şehir yaşamı İstanbul\'u senin şehrin yapıyor.','Kültürel zenginliğe verdiğin değer bu eşsiz şehirle uyum sağlıyor.'] },
  { name:'Ankara', emoji:'🏛️', gradient:['#1B1464','#6C63FF'], image:'https://images.unsplash.com/photo-1569400243190-d3e8e60fa178?w=800&h=500&fit=crop', filters:{region:'domestic',continent:'europe'}, profile:{domestic:2,orderly:1,cultural:1,historical:1,affordable:1,inland:2,continental:1,structured:1}, reasons:['Başkentin düzenli yaşamı ve kültürel atmosferi senin karakterinle örtüşüyor.','İç Anadolu\'nun huzuru ve kurumsal yapı seni Ankara\'da bekliyor.','Uygun yaşam maliyeti ve akademik ortam tam sana göre.'] },
  { name:'İzmir', emoji:'🌊', gradient:['#00d2ff','#3a7bd5'], image:'https://images.unsplash.com/photo-1589912137498-e75c2e58d4ce?w=800&h=500&fit=crop', filters:{region:'domestic',continent:'europe'}, profile:{domestic:2,coastal:2,warm:2,relaxed:2,social:1,cultural:1,foodie:1,lively:1}, reasons:['Ege\'nin mavi kıyıları ve rahat yaşam tarzı seni İzmir\'de bekliyor.','Sosyal yapın ve sıcak iklim tercihin İzmir\'le mükemmel uyum sağlıyor.','Deniz kenarında yaşama hayalin İzmir\'de gerçeğe dönüşecek.'] },
  { name:'Antalya', emoji:'🏝️', gradient:['#00cec9','#55efc4'], image:'https://images.unsplash.com/photo-1593238739364-18cfde865112?w=800&h=500&fit=crop', filters:{region:'domestic',continent:'europe'}, profile:{domestic:2,warm:2,beach:2,coastal:2,relaxed:2,tropical:1,affordable:1,historical:1}, reasons:['Deniz ve güneş tutkun Antalya\'nın turkuaz kıyılarında seni bekliyor.','Rahat yaşam tarzın ve sıcak iklim tercihin Akdeniz\'in incisiyle uyumlu.','Tarihi zenginlikler ve uygun yaşam Antalya\'yı senin cennetin yapıyor.'] },
  { name:'Trabzon', emoji:'⛰️', gradient:['#2ed573','#1e90ff'], image:'https://images.unsplash.com/photo-1603228254119-e6a4d095dc59?w=800&h=500&fit=crop', filters:{region:'domestic',continent:'europe'}, profile:{domestic:2,green:2,natural:2,coastal:1,cultural:1,cozy:1,foodie:1,peaceful:1}, reasons:['Karadeniz\'in yeşil doğası ve sıcak insanları Trabzon\'da seni bekliyor.','Doğa tutkun ve huzur arayışın Karadeniz\'in incisinde karşılığını bulacak.','Yerel kültürüne bağlı yapın Trabzon\'un samimi atmosferiyle buluşacak.'] },
  { name:'Bursa', emoji:'🟢', gradient:['#11998e','#38ef7d'], image:'https://images.unsplash.com/photo-1572877428638-b7529f tried?w=800&h=500&fit=crop', filters:{region:'domestic',continent:'europe'}, profile:{domestic:2,green:1,historical:1,cultural:1,affordable:1,orderly:1,foodie:1,inland:1}, reasons:['Osmanlı\'nın ilk başkenti Bursa\'nın tarihi dokusu ve yeşil doğası seni çekecek.','Uygun yaşam maliyeti ve düzenli yapı Bursa\'yı ideal şehrin yapıyor.','Lezzet tutkun İskender\'in memleketinde karşılığını bulacak.'] },
  { name:'Eskişehir', emoji:'🎓', gradient:['#a18cd1','#fbc2eb'], image:'https://images.unsplash.com/photo-1565606907039-3f4e41f87fdd?w=800&h=500&fit=crop', filters:{region:'domestic',continent:'europe'}, profile:{domestic:2,affordable:2,social:2,cultural:1,lively:1,green:1,relaxed:1,artistic:1}, reasons:['Öğrenci şehrinin dinamik ve uygun fiyatlı yaşamı seni Eskişehir\'de bekliyor.','Sosyal yapın ve kültürel etkinlik tercihin Eskişehir\'le mükemmel uyum sağlıyor.','Sanatsal atmosfer ve genç nüfus Eskişehir\'i senin şehrin yapıyor.'] },
  { name:'Bodrum', emoji:'⛵', gradient:['#2193b0','#6dd5ed'], image:'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&h=500&fit=crop', filters:{region:'domestic',continent:'europe'}, profile:{domestic:2,coastal:2,warm:2,beach:2,luxurious:1,social:1,relaxed:1,nightlife:1}, reasons:['Ege\'nin incisi Bodrum\'un turkuaz koyları ve gece hayatı seni bekliyor.','Deniz kenarında yaşama hayalin Bodrum\'da lüks ve huzuru bir arada bulacak.','Sosyal yapın ve eğlence tutkun Bodrum\'un atmosferiyle birebir örtüşüyor.'] },
  { name:'Kars', emoji:'🏔️', gradient:['#74b9ff','#dfe6e9'], image:'https://images.unsplash.com/photo-1609861219805-17a512583a20?w=800&h=500&fit=crop', filters:{region:'domestic',continent:'europe'}, profile:{domestic:2,peaceful:2,natural:2,historical:1,affordable:2,cozy:2,cold:1,inland:2,continental:1}, reasons:['Doğa tutkun ve huzur arayışın Kars\'ın bembeyaz ovalarında karşılığını bulacak.','Sakin yaşam tercihin Ani Harabeleri\'nin gölgesinde mutlu edecek.','Uygun fiyatlı yaşam ve sadelik Kars\'ı senin huzur limanına dönüştürüyor.'] },
  { name:'Gaziantep', emoji:'🧆', gradient:['#e17055','#fdcb6e'], image:'https://images.unsplash.com/photo-1616432043562-3671ea2e5242?w=800&h=500&fit=crop', filters:{region:'domestic',continent:'europe'}, profile:{domestic:2,foodie:2,cultural:2,historical:1,affordable:1,warm:1,social:1,lively:1}, reasons:['Dünyanın gastronomi başkenti Gaziantep\'in eşsiz lezzetleri seni bekliyor.','Yemek tutkun ve kültürel derinliğin bu kadim şehirle mükemmel uyum sağlıyor.','Uygun yaşam maliyeti ve sıcak insanlar Gaziantep\'i senin yuvana dönüştürüyor.'] },

  /* ── AVRUPA ── */
  { name:'Londra', emoji:'🎡', gradient:['#6c5ce7','#a29bfe'], image:'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&h=500&fit=crop', filters:{region:'international',continent:'europe'}, profile:{international:2,european:2,historical:2,cultural:2,diverse:2,prestigious:2,bustling:1,cold:1}, reasons:['Tarihe olan saygın ve kültürel derinliğin Thames kıyısında huzur bulacak.','Çeşitliliğe olan açıklığın Londra\'yı yuvana dönüştürüyor.','Avrupa tarzı zarif yaşam anlayışın Londra\'da karşılığını bulacak.'] },
  { name:'Paris', emoji:'🗼', gradient:['#1B1464','#3D1C6E'], image:'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&h=500&fit=crop', filters:{region:'international',continent:'europe'}, profile:{international:2,european:2,cultural:2,artistic:2,historical:2,prestigious:1,foodie:1,luxurious:1}, reasons:['Sanat ve kültür tutkun Paris\'in her sokağında ilham bulacak.','Gastronomi ve estetik anlayışın Işık Şehri\'nde karşılığını bulacak.','Tarihi atmosfer ve romantik ruh Paris\'i senin şehrin yapıyor.'] },
  { name:'Barcelona', emoji:'🏖️', gradient:['#FFD166','#FF6B6B'], image:'https://images.unsplash.com/photo-1583422409516-2895a77efded?w=800&h=500&fit=crop', filters:{region:'international',continent:'europe'}, profile:{international:2,european:2,warm:2,beach:2,coastal:2,social:2,artistic:2,lively:1,relaxed:1}, reasons:['Sıcak iklim ve deniz tutkun Barcelona\'nın Akdeniz ruhunu yaşaman için biçilmiş kaftan.','Sosyal yapın La Rambla\'da harika bir hayat vadediyor.','Sanat tutkun Gaudí\'nin şehrinde her gün yeni ilhamlar bulmayı sağlayacak.'] },
  { name:'Berlin', emoji:'🎸', gradient:['#636E72','#FD79A8'], image:'https://images.unsplash.com/photo-1560969184-10fe8719e047?w=800&h=500&fit=crop', filters:{region:'international',continent:'europe'}, profile:{international:2,european:2,artistic:2,nightlife:2,alternative:2,affordable:1,free:1,lively:1,cold:1}, reasons:['Alternatif ruhun ve sanat tutkun Berlin\'in yaratıcı atmosferinde çiçek açacak.','Gece hayatı sevgin Berlin\'in dinamik semtlerinde seni bekliyor.','Modern düşüncen ve özgür ruhun Berlin\'le buluşacak.'] },
  { name:'Amsterdam', emoji:'🚲', gradient:['#e17055','#fdcb6e'], image:'https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=800&h=500&fit=crop', filters:{region:'international',continent:'europe'}, profile:{international:2,european:2,relaxed:2,artistic:1,free:2,cozy:2,alternative:1,peaceful:1}, reasons:['Özgürlüğe olan tutkunun Amsterdam\'ın kanalları boyunca seni bekliyor.','Sanata verdiğin değer Van Gogh\'un şehrinde keşifler yapmanı sağlayacak.','Samimi atmosfer Amsterdam\'ı senin şehrin yapıyor.'] },
  { name:'Roma', emoji:'🏛️', gradient:['#DAA520','#8B4513'], image:'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&h=500&fit=crop', filters:{region:'international',continent:'europe'}, profile:{international:2,european:2,historical:2,cultural:2,foodie:2,warm:1,artistic:1,relaxed:1}, reasons:['Tarihin kalbinde yaşama hayalin Roma\'nın antik sokaklarında gerçeğe dönüşecek.','Yemek tutkun İtalyan mutfağının başkentinde her gün şölen yaşayacak.','Kültürel zenginliğe verdiğin değer Ebedi Şehir\'de sonsuz ilham bulacak.'] },
  { name:'Viyana', emoji:'🎻', gradient:['#2c3e50','#bdc3c7'], image:'https://images.unsplash.com/photo-1516550893923-42d28e5677af?w=800&h=500&fit=crop', filters:{region:'international',continent:'europe'}, profile:{international:2,european:2,cultural:2,orderly:2,prestigious:1,historical:1,cold:1,green:1}, reasons:['Düzenli yaşam tarzın ve kültürel derinliğin Viyana\'nın zarif atmosferinde huzur bulacak.','Müzik ve sanat tutkun Mozart\'ın şehrinde her gün ilham kaynağı olacak.','Prestijli ve düzenli yaşam anlayışın Viyana\'yı ideal şehrin yapıyor.'] },
  { name:'Prag', emoji:'🏰', gradient:['#C0392B','#F1C40F'], image:'https://images.unsplash.com/photo-1519677100203-a0e668c92439?w=800&h=500&fit=crop', filters:{region:'international',continent:'europe'}, profile:{international:2,european:2,historical:2,affordable:1,artistic:1,cozy:1,cultural:1,cold:1}, reasons:['Masalsı atmosferi ve tarihi dokusu Prag\'ı senin rüya şehrin yapıyor.','Uygun yaşam maliyeti ve sanatsal ruh Prag\'da seni bekliyor.','Gotik mimari ve Bohemya kültürü Prag\'ı benzersiz kılıyor.'] },
  { name:'Zürih', emoji:'🏔️', gradient:['#1D3557','#457B9D'], image:'https://images.unsplash.com/photo-1515488764276-beab7607c1e6?w=800&h=500&fit=crop', filters:{region:'international',continent:'europe'}, profile:{international:2,european:2,orderly:2,prestigious:2,luxurious:1,green:1,cold:1,peaceful:1}, reasons:['İsviçre\'nin düzeni ve prestiji Zürih\'te seni bekliyor.','Doğa ve şehir yaşamının mükemmel dengesi Zürih\'i ideal kılıyor.','Kaliteli yaşam standardı ve güvenlik Zürih\'i senin şehrin yapıyor.'] },
  { name:'Kopenhag', emoji:'🚴', gradient:['#C0392B','#FFFFFF'], image:'https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?w=800&h=500&fit=crop', filters:{region:'international',continent:'europe'}, profile:{international:2,european:2,green:2,orderly:1,relaxed:1,free:1,cold:1,cozy:1,peaceful:1}, reasons:['Sürdürülebilir yaşam anlayışın Kopenhag\'ın yeşil vizyonuyla örtüşüyor.','Bisiklet kültürü ve rahat yaşam tarzı tam sana göre.','Hygge felsefesi ve sıcak atmosfer Kopenhag\'ı senin yuvana dönüştürüyor.'] },
  { name:'Münih', emoji:'🍺', gradient:['#0D47A1','#FFFFFF'], image:'https://images.unsplash.com/photo-1595867818082-083862f3d630?w=800&h=500&fit=crop', filters:{region:'international',continent:'europe'}, profile:{international:2,european:2,orderly:2,cultural:1,traditional:1,green:1,cold:1,prestigious:1}, reasons:['Alman düzeni ve Bavyera kültürü Münih\'te seni bekliyor.','Teknoloji ve geleneksel yaşamın harmanı Münih\'i ideal kılıyor.','Doğa ve şehir yaşamının dengesi Münih\'i senin şehrin yapıyor.'] },
  { name:'Stockholm', emoji:'🌊', gradient:['#005C94','#FFD700'], image:'https://images.unsplash.com/photo-1509356843151-3e7d96241e11?w=800&h=500&fit=crop', filters:{region:'international',continent:'europe'}, profile:{international:2,european:2,green:2,orderly:1,cold:1,modern:1,peaceful:1,free:1}, reasons:['İskandinav tasarım estetiği ve doğayla iç içe yaşam Stockholm\'de seni bekliyor.','Sürdürülebilirlik anlayışın ve modern yaşam tercihin Stockholm\'le örtüşüyor.','Huzurlu yaşam ve yüksek yaşam kalitesi Stockholm\'ü senin şehrin yapıyor.'] },

  /* ── ASYA ── */
  { name:'Tokyo', emoji:'🗼', gradient:['#FF69B4','#7B68EE'], image:'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&h=500&fit=crop', filters:{region:'international',continent:'asia'}, profile:{international:2,asian:2,modern:2,techy:2,orderly:2,foodie:2,exotic:2,bustling:1}, reasons:['Teknoloji tutkunun ve düzenli yaşam tercihin Tokyo\'nun mükemmel organizasyonuyla örtüşüyor.','Egzotik kültürlere olan merakın Japon mutfağının başkentinde seni bekliyor.','Modern yaşam tarzın Tokyo\'nun fütüristik dünyasında kendini evinde hissettirecek.'] },
  { name:'Seul', emoji:'🇰🇷', gradient:['#E91E63','#9C27B0'], image:'https://images.unsplash.com/photo-1517154421773-0529f29ea451?w=800&h=500&fit=crop', filters:{region:'international',continent:'asia'}, profile:{international:2,asian:2,modern:2,techy:2,bustling:1,cultural:1,foodie:1,lively:1,nightlife:1}, reasons:['K-pop kültürü ve teknoloji tutkun Seul\'ün dinamik dünyasında parlayacak.','Modern yaşam tarzın ve gece hayatı sevgin Seul\'le mükemmel uyum sağlıyor.','Asya\'nın en dinamik şehirlerinden birinde yaşama hayalin gerçek olacak.'] },
  { name:'Singapur', emoji:'🌆', gradient:['#E8111C','#FFFFFF'], image:'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800&h=500&fit=crop', filters:{region:'international',continent:'asia'}, profile:{international:2,asian:2,modern:2,orderly:2,luxurious:1,diverse:1,tropical:1,warm:1,bustling:1}, reasons:['Düzen ve modernlik tutkunun Singapur\'un kusursuz altyapısında karşılığını bulacak.','Çeşitliliğe olan açıklığın bu kozmopolit ada devletinde huzur bulacak.','Tropikal iklim ve lüks yaşam Singapur\'u senin şehrin yapıyor.'] },
  { name:'Bangkok', emoji:'🛕', gradient:['#FF6B35','#FFD700'], image:'https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=800&h=500&fit=crop', filters:{region:'international',continent:'asia'}, profile:{international:2,asian:2,exotic:2,warm:2,tropical:2,affordable:1,foodie:2,lively:1,adventurous:1}, reasons:['Egzotik kültür ve lezzet tutkun Bangkok\'un renkli sokaklarında seni bekliyor.','Uygun yaşam maliyeti ve macera ruhun Tayland\'ın başkentinde harika bir hayat vadediyor.','Tropikal iklim ve sıcak insanlar Bangkok\'u senin cennetin yapıyor.'] },
  { name:'Mumbai', emoji:'🇮🇳', gradient:['#FF9933','#138808'], image:'https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?w=800&h=500&fit=crop', filters:{region:'international',continent:'asia'}, profile:{international:2,asian:2,bustling:2,diverse:2,warm:1,social:1,lively:1,cultural:1,adventurous:1}, reasons:['Bollywood\'un enerjisi ve kalabalığın büyüsü Mumbai\'de seni bekliyor.','Çeşitliliğe olan açıklığın Hindistan\'ın kalbinde benzersiz deneyimler yaşatacak.','Macera ruhun ve sosyal yapın Mumbai\'nin canlı sokaklarında karşılığını bulacak.'] },
  { name:'Dubai', emoji:'🌇', gradient:['#f9ca24','#f0932b'], image:'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&h=500&fit=crop', filters:{region:'international',continent:'middleeast'}, profile:{international:2,middleeast:1,luxurious:2,modern:2,adventurous:1,warm:2,ambitious:2,exotic:1,bustling:1}, reasons:['Lükse olan düşkünlüğün ve modern yaşam tutkun Dubai\'de parlayacak.','Macera ruhun çölün ortasındaki bu oazda seni evinde hissettirecek.','Büyük düşüncelerin Dubai\'yi senin şehrin yapıyor.'] },
  { name:'Şanghay', emoji:'🏙️', gradient:['#C0392B','#F1C40F'], image:'https://images.unsplash.com/photo-1537531383496-f4749b84940f?w=800&h=500&fit=crop', filters:{region:'international',continent:'asia'}, profile:{international:2,asian:2,bustling:2,modern:2,ambitious:1,diverse:1,foodie:1,lively:1}, reasons:['Çin\'in finans başkenti Şanghay\'ın gökdelenleri ve enerjisi seni bekliyor.','Büyük düşüncelerin ve hırsın Şanghay\'ın iş dünyasında parlayacak.','Modern yaşam ve Asyalı kültürün birleşimi Şanghay\'ı eşsiz kılıyor.'] },
  { name:'Hong Kong', emoji:'🌃', gradient:['#DE3163','#141414'], image:'https://images.unsplash.com/photo-1536599018102-9f803c140fc1?w=800&h=500&fit=crop', filters:{region:'international',continent:'asia'}, profile:{international:2,asian:2,bustling:2,modern:1,luxurious:1,diverse:1,foodie:1,ambitious:1,nightlife:1}, reasons:['Doğu ile Batı\'nın buluştuğu Hong Kong\'un dinamik dünyası seni bekliyor.','Lüks yaşam ve gece hayatı tutkun Victoria Pike\'nın manzarasında buluşacak.','Şehir enerjisi ve kozmopolit ruhun Hong Kong\'u senin şehrin yapıyor.'] },
  { name:'Taipei', emoji:'🏯', gradient:['#1E90FF','#FF4500'], image:'https://images.unsplash.com/photo-1470004914212-05527e49370b?w=800&h=500&fit=crop', filters:{region:'international',continent:'asia'}, profile:{international:2,asian:2,modern:1,techy:1,foodie:2,affordable:1,cultural:1,warm:1,cozy:1}, reasons:['Gece pazarları ve lezzet tutkun Taipei\'nin sokak yemeklerinde karşılığını bulacak.','Teknoloji ilgin ve uygun yaşam maliyeti Tayvan\'ın başkentinde seni bekliyor.','Asya kültürünün modern yorumu Taipei\'yi benzersiz kılıyor.'] },
  { name:'Kuala Lumpur', emoji:'🕌', gradient:['#FDD835','#1A237E'], image:'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=800&h=500&fit=crop', filters:{region:'international',continent:'asia'}, profile:{international:2,asian:2,modern:1,warm:2,tropical:2,diverse:1,affordable:1,exotic:1}, reasons:['Tropikal iklim ve çok kültürlü yapı Kuala Lumpur\'da seni bekliyor.','Uygun yaşam maliyeti ve egzotik atmosfer KL\'yi ideal kılıyor.','Petronas Kuleleri\'nin gölgesinde modern Asya deneyimi yaşayacaksın.'] },

  /* ── KUZEY AMERİKA ── */
  { name:'New York', emoji:'🗽', gradient:['#4834d4','#686de0'], image:'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&h=500&fit=crop', filters:{region:'international',continent:'northamerica'}, profile:{international:2,american:2,bustling:2,modern:2,nightlife:2,diverse:2,ambitious:2,lively:1}, reasons:['Büyük şehir enerjisi ve gece hayatı tutkun Büyük Elma\'da kendini bulacak.','Çeşitliliğe verdiğin değer Manhattan gökdelenlerinde kariyer yapacak.','Kozmopolit ruhun New York\'u senin başkentin yapıyor.'] },
  { name:'San Francisco', emoji:'🌉', gradient:['#FF6B35','#3A86FF'], image:'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&h=500&fit=crop', filters:{region:'international',continent:'northamerica'}, profile:{international:2,american:2,techy:2,modern:2,diverse:1,free:1,green:1,innovative:1,coastal:1}, reasons:['Teknoloji tutkun Silikon Vadisi\'nin kalbinde seni bekliyor.','Özgür düşünce ve inovasyon ruhu San Francisco\'yla örtüşüyor.','Deniz kenarı ve teknoloji dünyasının buluştuğu bu şehir tam sana göre.'] },
  { name:'Los Angeles', emoji:'🎬', gradient:['#F39C12','#E74C3C'], image:'https://images.unsplash.com/photo-1534190760961-74e8c1c5c3da?w=800&h=500&fit=crop', filters:{region:'international',continent:'northamerica'}, profile:{international:2,american:2,warm:2,social:1,creative:1,artistic:1,lively:1,luxurious:1,beach:1,coastal:1}, reasons:['Hollywood\'un yaratıcı enerjisi ve kaliforniya güneşi LA\'da seni bekliyor.','Sanat ve eğlence tutkun Melek\'ler Şehri\'nde karşılığını bulacak.','Sıcak iklim ve plaj kültürü LA\'yı senin rüya şehrin yapıyor.'] },
  { name:'Toronto', emoji:'🍁', gradient:['#C0392B','#FFFFFF'], image:'https://images.unsplash.com/photo-1517090504332-8734a0a7e839?w=800&h=500&fit=crop', filters:{region:'international',continent:'northamerica'}, profile:{international:2,american:1,diverse:2,modern:1,orderly:1,cultural:1,cold:1,peaceful:1}, reasons:['Kanada\'nın en kozmopolit şehri Toronto\'nun çeşitliliği seni büyüleyecek.','Düzenli yaşam ve kültürel zenginlik Toronto\'yu ideal kılıyor.','Çok kültürlü atmosfer ve yaşam kalitesi Toronto\'yu senin şehrin yapıyor.'] },
  { name:'Chicago', emoji:'🏙️', gradient:['#0D47A1','#F44336'], image:'https://images.unsplash.com/photo-1494522855154-9297ac14b55f?w=800&h=500&fit=crop', filters:{region:'international',continent:'northamerica'}, profile:{international:2,american:2,bustling:1,cultural:1,architectural:1,cold:1,foodie:1,lively:1}, reasons:['Mimari harikalar ve blues müzik Chicago\'nun ruhunu oluşturuyor.','Kültürel derinliğin ve şehir enerjin Rüzgarlı Şehir\'de karşılığını bulacak.','New York\'un alternatifi Chicago sana daha samimi bir büyük şehir deneyimi sunacak.'] },
  { name:'Boston', emoji:'🎓', gradient:['#00205B','#C8102E'], image:'https://images.unsplash.com/photo-1501979376754-2ff867a4f659?w=800&h=500&fit=crop', filters:{region:'international',continent:'northamerica'}, profile:{international:2,american:2,historical:1,prestigious:1,cultural:1,cold:1,orderly:1,academic:1}, reasons:['Akademik atmosferi ve tarihi dokusu Boston\'u senin entelektüel yuvana dönüştürecek.','Prestijli üniversiteler ve kültürel etkinlikler Boston\'da seni bekliyor.','Düzenli yaşam tarzın New England\'ın incisinde karşılığını bulacak.'] },
  { name:'Miami', emoji:'🌴', gradient:['#00BCD4','#FF4081'], image:'https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?w=800&h=500&fit=crop', filters:{region:'international',continent:'northamerica'}, profile:{international:2,american:2,warm:2,beach:2,coastal:2,tropical:1,nightlife:2,social:1,lively:1,diverse:1}, reasons:['Tropikal iklim ve plaj kültürü Miami\'de seni bekliyor.','Gece hayatı ve sosyal yaşam tutkun South Beach\'te karşılığını bulacak.','Latin kültürü ve çeşitlilik Miami\'yi benzersiz kılıyor.'] },
  { name:'Vancouver', emoji:'🌲', gradient:['#2E7D32','#1565C0'], image:'https://images.unsplash.com/photo-1559511260-66a68e7e28b4?w=800&h=500&fit=crop', filters:{region:'international',continent:'northamerica'}, profile:{international:2,american:1,green:2,natural:2,coastal:1,modern:1,diverse:1,peaceful:1,relaxed:1}, reasons:['Dağlar ve okyanus arasında yaşama hayalin Vancouver\'da gerçeğe dönüşecek.','Doğa tutkun ve huzur arayışın Kanada\'nın incisinde karşılığını bulacak.','Sürdürülebilir yaşam anlayışın Vancouver\'la mükemmel uyum sağlıyor.'] },
  { name:'Austin', emoji:'🎸', gradient:['#FF6F00','#311B92'], image:'https://images.unsplash.com/photo-1531218150217-54595bc2b934?w=800&h=500&fit=crop', filters:{region:'international',continent:'northamerica'}, profile:{international:2,american:2,creative:1,alternative:1,warm:1,lively:1,techy:1,free:1,nightlife:1}, reasons:['Canlı müzik sahnesi ve teknoloji ekosistemi Austin\'de seni bekliyor.','Yaratıcı ve özgür ruhun Texas\'ın kalbi Austin\'le buluşacak.','Alternatif kültür ve sıcak iklim Austin\'i benzersiz kılıyor.'] },
  { name:'Seattle', emoji:'☕', gradient:['#004D40','#0097A7'], image:'https://images.unsplash.com/photo-1502175353174-a7a70e73b572?w=800&h=500&fit=crop', filters:{region:'international',continent:'northamerica'}, profile:{international:2,american:2,techy:2,green:1,cold:1,creative:1,modern:1,cozy:1}, reasons:['Amazon ve Microsoft\'un evi Seattle\'da teknoloji tutkun çiçek açacak.','Kahve kültürü ve yaratıcı atmosfer Seattle\'ı senin şehrin yapıyor.','Doğa ve teknolojinin harmanı Pacific Northwest\'te seni bekliyor.'] },

  /* ── GÜNEY AMERİKA ── */
  { name:'Buenos Aires', emoji:'💃', gradient:['#75AADB','#F6B40E'], image:'https://images.unsplash.com/photo-1589909202802-8f4aadce1849?w=800&h=500&fit=crop', filters:{region:'international',continent:'southamerica'}, profile:{international:2,southamerican:1,cultural:2,artistic:2,social:2,warm:1,lively:1,foodie:1,nightlife:1}, reasons:['Tango\'nun ve tutkunun şehri Buenos Aires\'te sanatsal ruhun çiçek açacak.','Latin kültürü, lezzet ve gece hayatı Buenos Aires\'te seni bekliyor.','Güney Amerika\'nın Paris\'i olarak bilinen bu şehir tam sana göre.'] },
  { name:'São Paulo', emoji:'🇧🇷', gradient:['#009C3B','#FFDF00'], image:'https://images.unsplash.com/photo-1543059080-caced0553fcc?w=800&h=500&fit=crop', filters:{region:'international',continent:'southamerica'}, profile:{international:2,southamerican:1,bustling:2,diverse:2,modern:1,ambitious:1,lively:1,creative:1}, reasons:['Güney Amerika\'nın en büyük şehri São Paulo\'nun enerjisi seni büyüleyecek.','Çeşitlilik ve iş dünyası São Paulo\'da seni bekliyor.','Büyük şehir yaşamı tutkun Brezilya\'nın metropolünde karşılığını bulacak.'] },
  { name:'Rio de Janeiro', emoji:'🏖️', gradient:['#009C3B','#00A4E4'], image:'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=800&h=500&fit=crop', filters:{region:'international',continent:'southamerica'}, profile:{international:2,southamerican:1,beach:2,warm:2,tropical:2,social:2,lively:2,adventurous:1,coastal:2}, reasons:['Copacabana sahili ve karnaval ruhu Rio\'da seni bekliyor.','Tropikal yaşam ve sosyal enerjin Rio\'yla mükemmel uyum sağlıyor.','Doğa ve şehrin buluştuğu bu mucize seni büyüleyecek.'] },
  { name:'Medellín', emoji:'🌺', gradient:['#FFC107','#388E3C'], image:'https://images.unsplash.com/photo-1586449480537-3a22cf98b04c?w=800&h=500&fit=crop', filters:{region:'international',continent:'southamerica'}, profile:{international:2,southamerican:1,warm:2,tropical:1,affordable:1,green:1,modern:1,social:1,relaxed:1}, reasons:['Ebedi bahar şehri Medellín\'in ılıman iklimi seni bekliyor.','Uygun yaşam ve yenilenmiş modern yapı Medellín\'i cazip kılıyor.','Sıcak insanlar ve doğa Kolombiya\'nın incisinde seni bekliyor.'] },
  { name:'Santiago', emoji:'🏔️', gradient:['#D32F2F','#1565C0'], image:'https://images.unsplash.com/photo-1510253687831-0f982beb5434?w=800&h=500&fit=crop', filters:{region:'international',continent:'southamerica'}, profile:{international:2,southamerican:1,modern:1,orderly:1,continental:1,cold:1,ambitious:1,green:1}, reasons:['And Dağları\'nın manzarası ve modern yaşam Santiago\'da seni bekliyor.','Güney Amerika\'nın en düzenli şehirlerinden biri olan Santiago tam sana göre.','Doğa ve şehir dengesini mükemmel kuran Santiago\'da huzur bulacaksın.'] },

  /* ── AFRİKA ── */
  { name:'Cape Town', emoji:'🏖️', gradient:['#1E88E5','#43A047'], image:'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=800&h=500&fit=crop', filters:{region:'international',continent:'africa'}, profile:{international:2,african:1,natural:2,coastal:2,warm:1,adventurous:2,diverse:1,beach:1,green:1}, reasons:['Masa Dağı\'nın eteklerinde doğa ve denizin buluştuğu Cape Town seni bekliyor.','Macera ruhun ve doğa tutkun Afrika\'nın en güzel şehrinde karşılığını bulacak.','Çeşitlilik ve doğal güzellikler Cape Town\'u benzersiz kılıyor.'] },
  { name:'Lagos', emoji:'🇳🇬', gradient:['#008751','#FFFFFF'], image:'https://images.unsplash.com/photo-1618828665011-0abd973f7bb8?w=800&h=500&fit=crop', filters:{region:'international',continent:'africa'}, profile:{international:2,african:1,bustling:2,lively:2,social:1,ambitious:1,adventurous:1,warm:1}, reasons:['Afrika\'nın en dinamik şehri Lagos\'un enerjisi seni büyüleyecek.','Hırsın ve girişimci ruhun Nijerya\'nın kalbi Lagos\'ta parlayacak.','Canlı müzik sahnesi ve sosyal yaşam Lagos\'u benzersiz kılıyor.'] },
  { name:'Nairobi', emoji:'🦁', gradient:['#000000','#BB0000'], image:'https://images.unsplash.com/photo-1611348524140-53c9a25263d6?w=800&h=500&fit=crop', filters:{region:'international',continent:'africa'}, profile:{international:2,african:1,natural:2,adventurous:2,warm:1,modern:1,green:1,diverse:1}, reasons:['Safari tutkun ve doğa sevgin Nairobi\'nin vahşi yaşam deneyiminde parlayacak.','Teknoloji ekosistemi ve doğanın birleşimi Nairobi\'yi eşsiz kılıyor.','Afrika\'nın silikon vadisi Nairobi\'de macera ve kariyer bir arada.'] },
  { name:'Marakeş', emoji:'🕌', gradient:['#C0392B','#D4AC0D'], image:'https://images.unsplash.com/photo-1597212618440-806262de4f6b?w=800&h=500&fit=crop', filters:{region:'international',continent:'africa'}, profile:{international:2,african:1,exotic:2,historical:2,warm:2,cultural:2,artistic:1,affordable:1}, reasons:['Fas\'ın büyülü şehri Marakeş\'in egzotik atmosferi seni saracak.','Tarih ve kültür tutkun Medina\'nın labirentlerinde kaybolacak.','Sıcak iklim ve sanatsal ruh Marakeş\'i senin cennetin yapıyor.'] },
  { name:'Kahire', emoji:'🏛️', gradient:['#C8102E','#FFD700'], image:'https://images.unsplash.com/photo-1572252009286-268acec5ca0a?w=800&h=500&fit=crop', filters:{region:'international',continent:'africa'}, profile:{international:2,african:1,historical:2,cultural:2,bustling:1,warm:2,exotic:1,affordable:1}, reasons:['Piramitlerin gölgesinde tarihle iç içe yaşama hayalin Kahire\'de gerçeğe dönüşecek.','Antik Mısır medeniyetine olan merakın Nil kıyısında karşılığını bulacak.','Zengin kültürel miras ve sıcak iklim Kahire\'yi benzersiz kılıyor.'] },

  /* ── OKYANUSYA ── */
  { name:'Sidney', emoji:'🏄', gradient:['#002B5C','#FFD700'], image:'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=800&h=500&fit=crop', filters:{region:'international',continent:'oceania'}, profile:{international:2,oceanian:1,coastal:2,warm:1,beach:2,modern:1,diverse:1,relaxed:1,social:1,lively:1}, reasons:['Opera binası ve plaj kültürü Sidney\'de seni bekliyor.','Rahat yaşam tarzın ve deniz tutkun Avustralya\'nın incisinde parlayacak.','Çok kültürlü atmosfer ve yaşam kalitesi Sidney\'i senin şehrin yapıyor.'] },
  { name:'Melbourne', emoji:'☕', gradient:['#002B5C','#FFFFFF'], image:'https://images.unsplash.com/photo-1514395462725-fb4566210144?w=800&h=500&fit=crop', filters:{region:'international',continent:'oceania'}, profile:{international:2,oceanian:1,artistic:2,cultural:2,cozy:1,foodie:1,alternative:1,green:1,relaxed:1}, reasons:['Dünya\'nın en yaşanılabilir şehri Melbourne\'un sanatsal ruhu seni bekliyor.','Kahve kültürü ve alternatif yaşam tarzı Melbourne\'la örtüşüyor.','Kültürel etkinlikler ve gastronomi Melbourne\'u benzersiz kılıyor.'] },
  { name:'Auckland', emoji:'⛵', gradient:['#00247D','#FFFFFF'], image:'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=800&h=500&fit=crop', filters:{region:'international',continent:'oceania'}, profile:{international:2,oceanian:1,natural:2,green:2,coastal:1,peaceful:1,relaxed:1,adventurous:1}, reasons:['Yeni Zelanda\'nın doğal güzellikleri Auckland\'da seni bekliyor.','Macera ruhun ve doğa tutkun Yelkenli Şehir\'de karşılığını bulacak.','Huzurlu yaşam ve eşsiz doğa Auckland\'ı senin cennetin yapıyor.'] }
];

/* ──────────────────── ÜNİVERSİTE SONUÇLARI (25+) ──────────────────── */
const UNIVERSITE_RESULTS = [
  /* Türkiye */
  { name:'Hacettepe Üniversitesi', emoji:'🦌', gradient:['#E31837','#FF4757'], logo:'https://logo.clearbit.com/hacettepe.edu.tr', image:'https://images.unsplash.com/photo-1607237138185-eedd9c632b38?w=800&h=500&fit=crop', filters:{region:'domestic',continent:'europe'}, profile:{turkey:2,research:2,campus:2,medical:2,community:2}, reasons:['Türkiye\'deki güçlü akademik temelin ve kampüs yaşamına olan sevgin Hacettepe\'de bekliyor.','Topluluk ruhun ve araştırma merakın Hacettepe\'nin dinamik yapısıyla uyum sağlıyor.','Bilime olan ilgin ve yerel değerlere bağlılığın Hacettepe\'yi senin akademik yuvana dönüştürüyor.'] },
  { name:'ODTÜ', emoji:'⚙️', gradient:['#8B0000','#CC0000'], logo:'https://logo.clearbit.com/metu.edu.tr', image:'https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=500&fit=crop', filters:{region:'domestic',continent:'europe'}, profile:{turkey:2,techy:2,campus:2,competitive:2,engineering:2}, reasons:['Mühendislik tutkunun ve rekabetçi yapın ODTÜ\'nün efsanevi kampüsünde bekliyor.','Teknolojiye olan bağlılığın ODTÜ\'de parlatacak.','Türkiye\'nin en iyi teknik üniversitelerinden birinde olmak senin karakterinle örtüşüyor.'] },
  { name:'Boğaziçi Üniversitesi', emoji:'🌊', gradient:['#003591','#0047BB'], logo:'https://logo.clearbit.com/boun.edu.tr', image:'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&h=500&fit=crop', filters:{region:'domestic',continent:'europe'}, profile:{turkey:2,prestige:2,urban:2,international:1,social:2,competitive:1}, reasons:['Prestije verdiğin değer ve şehir yaşamı tercihin Boğaziçi\'nde seni bekliyor.','Sosyal yapın Boğaziçi\'nin kozmopolit atmosferiyle mükemmel uyumlu.','İstanbul\'un kalbinde akademik mükemmellik arayışın Boğaziçi\'ni ideal kılıyor.'] },
  { name:'İTÜ', emoji:'🔧', gradient:['#0A2463','#3E92CC'], logo:'https://logo.clearbit.com/itu.edu.tr', image:'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=500&fit=crop', filters:{region:'domestic',continent:'europe'}, profile:{turkey:2,engineering:2,techy:2,campus:1,competitive:1,urban:1}, reasons:['Mühendislik tutkun ve teknoloji merakın İTÜ\'nün köklü geleneğinde karşılığını bulacak.','Türkiye\'nin en eski teknik üniversitesinde yer almak senin karakterinle örtüşüyor.','İstanbul\'da mühendislik eğitimi hayalin İTÜ\'de gerçeğe dönüşecek.'] },
  { name:'Bilkent Üniversitesi', emoji:'🌟', gradient:['#003366','#FF6600'], logo:'https://logo.clearbit.com/bilkent.edu.tr', image:'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=800&h=500&fit=crop', filters:{region:'domestic',continent:'europe'}, profile:{turkey:2,campus:2,research:1,international:1,prestige:1,community:1}, reasons:['Kampüs yaşamına olan sevgin Bilkent\'in yeşil dünyasında seni bekliyor.','Uluslararası akademik ortam ve araştırma imkanları Bilkent\'i ideal kılıyor.','Topluluk ruhu ve prestijli eğitim Bilkent\'i senin üniversiten yapıyor.'] },
  { name:'Koç Üniversitesi', emoji:'💎', gradient:['#00205B','#C7A600'], logo:'https://logo.clearbit.com/ku.edu.tr', image:'https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?w=800&h=500&fit=crop', filters:{region:'domestic',continent:'europe'}, profile:{turkey:2,prestige:2,campus:1,entrepreneurial:1,international:1,competitive:1,research:1}, reasons:['Prestij arayışın ve girişimcilik ruhun Koç Üniversitesi\'nde karşılığını bulacak.','Uluslararası akademik standartlar ve araştırma imkanları seni bekliyor.','Rekabetçi ortam ve mükemmeliyet arayışın Koç\'u senin üniversiten yapıyor.'] },
  { name:'Sabancı Üniversitesi', emoji:'🎯', gradient:['#1E3A5F','#FF6B00'], logo:'https://logo.clearbit.com/sabanciuniv.edu', image:'https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=500&fit=crop', filters:{region:'domestic',continent:'europe'}, profile:{turkey:2,innovation:2,campus:1,entrepreneurial:2,research:1,community:1}, reasons:['Yenilikçi eğitim anlayışı ve girişimcilik kültürü Sabancı\'da seni bekliyor.','Disiplinler arası yaklaşım ve kampüs yaşamı Sabancı\'yı ideal kılıyor.','İnovasyon odaklı yapın Sabancı Üniversitesi\'nde parlayacak.'] },

  /* ABD */
  { name:'MIT', emoji:'🔬', gradient:['#a31f34','#8b1a2b'], logo:'https://logo.clearbit.com/mit.edu', image:'https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=800&h=500&fit=crop', filters:{region:'international',continent:'northamerica'}, profile:{research:2,techy:2,innovation:2,competitive:2,international:2,engineering:1}, reasons:['Teknik zekân ve araştırma tutkunun MIT\'nin laboratuvarlarında devrim niteliğinde keşiflere imza atacak.','Rekabetçi yapın Cambridge, Massachusetts\'te seni bekliyor.','Teknolojiye olan bağlılığın MIT\'yi senin için ideal kılıyor.'] },
  { name:'Stanford', emoji:'☀️', gradient:['#8C1515','#B83A4B'], logo:'https://logo.clearbit.com/stanford.edu', image:'https://images.unsplash.com/photo-1584008487002-a032be6d0d6b?w=800&h=500&fit=crop', filters:{region:'international',continent:'northamerica'}, profile:{innovation:2,entrepreneurial:2,campus:2,techy:2,research:1}, reasons:['Girişimcilik ruhun Stanford\'un California güneşi altında parlayacak.','Silikon Vadisi\'nin kalbinde teknoloji ilgin karşılığını bulacak.','Büyük hayaller kurma kapasiten Stanford\'u senin üniversiten yapıyor.'] },
  { name:'Harvard', emoji:'🏆', gradient:['#A41034','#C90016'], logo:'https://logo.clearbit.com/harvard.edu', image:'https://images.unsplash.com/photo-1559135197-8a45ea74d367?w=800&h=500&fit=crop', filters:{region:'international',continent:'northamerica'}, profile:{prestige:2,competitive:2,diverse:2,research:2,global:2,humanities:1}, reasons:['Küresel vizyonun ve rekabetçi ruhun Harvard\'ın efsanevi kampüsünde bekliyor.','Çeşitliliğe olan açıklığın Harvard\'ın zengin ortamıyla örtüşüyor.','Prestije verdiğin değer Harvard\'ı senin için kaçınılmaz kılıyor.'] },
  { name:'Caltech', emoji:'🚀', gradient:['#FF6C0C','#003B49'], logo:'https://logo.clearbit.com/caltech.edu', image:'https://images.unsplash.com/photo-1607237138185-eedd9c632b38?w=800&h=500&fit=crop', filters:{region:'international',continent:'northamerica'}, profile:{research:2,engineering:2,innovation:1,competitive:1,techy:1,precision:1}, reasons:['Bilimsel araştırmaya olan tutkunun ve hassasiyetin Caltech\'te parlayacak.','Küçük ama etkili kampüs ortamı ve derin araştırma fırsatları seni bekliyor.','NASA Jet Propulsion Lab ile işbirliği uzay ve mühendislik tutkunu tatmin edecek.'] },
  { name:'Princeton', emoji:'🐯', gradient:['#FF8F00','#000000'], logo:'https://logo.clearbit.com/princeton.edu', image:'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&h=500&fit=crop', filters:{region:'international',continent:'northamerica'}, profile:{prestige:2,research:1,campus:2,tradition:1,humanities:1,competitive:1}, reasons:['Kampüs yaşamına olan sevgin ve prestij arayışın Princeton\'da karşılığını bulacak.','Köklü gelenek ve akademik mükemmellik Princeton\'u ideal kılıyor.','Einstein\'ın yürüdüğü koridorlarda akademik yolculuğun başlayacak.'] },
  { name:'Yale', emoji:'📚', gradient:['#00356B','#FFFFFF'], logo:'https://logo.clearbit.com/yale.edu', image:'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=800&h=500&fit=crop', filters:{region:'international',continent:'northamerica'}, profile:{prestige:2,tradition:2,humanities:2,campus:1,social:1,competitive:1}, reasons:['Beşeri bilimlere olan ilgin ve gelenek arayışın Yale\'de karşılığını bulacak.','Ivy League prestiji ve akademik derinlik Yale\'i senin üniversiten yapıyor.','Kampüs geleneği ve sosyal yaşam Yale\'de benzersiz deneyimler sunacak.'] },
  { name:'Columbia', emoji:'🗽', gradient:['#B9D9EB','#002B7F'], logo:'https://logo.clearbit.com/columbia.edu', image:'https://images.unsplash.com/photo-1568792923760-d70635a89fdc?w=800&h=500&fit=crop', filters:{region:'international',continent:'northamerica'}, profile:{prestige:2,urban:2,diverse:1,research:1,global:1,social:1,humanities:1}, reasons:['New York\'un kalbinde akademik mükemmellik arayışın Columbia\'da karşılığını bulacak.','Şehir yaşamı tercihin ve kozmopolit ruhun Columbia\'yla örtüşüyor.','Global bakış açın ve çeşitliliğe olan açıklığın Columbia\'da parlayacak.'] },

  /* Avrupa */
  { name:'Oxford', emoji:'📚', gradient:['#002147','#1a3a5c'], logo:'https://logo.clearbit.com/ox.ac.uk', image:'https://images.unsplash.com/photo-1580137189272-c9379f8864fd?w=800&h=500&fit=crop', filters:{region:'international',continent:'europe'}, profile:{tradition:2,research:2,prestige:2,humanities:2,international:1,european:2}, reasons:['Akademik mükemmellik arayışın ve geleneğe olan saygın Oxford\'un asırlık duvarları arasında bekliyor.','Araştırma tutkunun Oxford\'un köklü akademik mirasıyla örtüşüyor.','Entelektüel merakın Oxford\'da dünya tarihine iz bırakacak.'] },
  { name:'Cambridge', emoji:'🏛️', gradient:['#A3C1AD','#003B2B'], logo:'https://logo.clearbit.com/cam.ac.uk', image:'https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b?w=800&h=500&fit=crop', filters:{region:'international',continent:'europe'}, profile:{tradition:2,research:2,prestige:2,campus:2,humanities:1,european:2}, reasons:['Geleneğe olan saygın ve akademik tutkun Cambridge\'in asırlık kolejlerinde bekliyor.','Newton\'un izinde yürüme merakın Cambridge\'i senin akademik cennetin yapıyor.','Kampüs yaşamına olan sevgin ve prestij arayışın burada karşılığını bulacak.'] },
  { name:'ETH Zürich', emoji:'🇨🇭', gradient:['#1D3557','#457B9D'], logo:'https://logo.clearbit.com/ethz.ch', image:'https://images.unsplash.com/photo-1515488764276-beab7607c1e6?w=800&h=500&fit=crop', filters:{region:'international',continent:'europe'}, profile:{research:2,engineering:2,innovation:1,european:2,precision:2}, reasons:['Mühendislik zekân ve hassasiyetin ETH Zürich\'in İsviçre disipliniyle örtüşüyor.','Avrupa\'nın en prestijli teknik üniversitesinde parlayacaksın.','Akademik mükemmellik arayışın ETH Zürich\'i senin yolun yapıyor.'] },
  { name:'Sorbonne', emoji:'🗼', gradient:['#1B1464','#3D1C6E'], logo:'https://logo.clearbit.com/sorbonne-universite.fr', image:'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&h=500&fit=crop', filters:{region:'international',continent:'europe'}, profile:{humanities:2,cultural:2,european:2,tradition:1,urban:2}, reasons:['Kültürel zenginliğe olan tutkunun Sorbonne\'un Paris\'teki kampüsünde bekliyor.','Avrupa tarzı akademik anlayışın Sorbonne\'la uyum sağlıyor.','Entelektüel merakın Paris\'in kalbinde karşılığını bulacak.'] },
  { name:'TU München', emoji:'🇩🇪', gradient:['#0065BD','#FFFFFF'], logo:'https://logo.clearbit.com/tum.de', image:'https://images.unsplash.com/photo-1595867818082-083862f3d630?w=800&h=500&fit=crop', filters:{region:'international',continent:'europe'}, profile:{engineering:2,european:2,research:1,techy:1,innovation:1,campus:1}, reasons:['Alman mühendislik geleneği ve inovasyon ruhu TUM\'da seni bekliyor.','Avrupa\'nın en iyi teknik üniversitelerinden birinde yer almak tam sana göre.','BMW ve Siemens ile işbirliği endüstriye yakın akademik deneyim sunacak.'] },

  /* Asya */
  { name:'Tokyo Üniversitesi', emoji:'🗼', gradient:['#990000','#000000'], logo:'https://logo.clearbit.com/u-tokyo.ac.jp', image:'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&h=500&fit=crop', filters:{region:'international',continent:'asia'}, profile:{research:2,asian:2,prestige:2,tradition:1,engineering:1,international:1}, reasons:['Asya\'nın en prestijli üniversitelerinden birinde araştırma tutkun parlayacak.','Japon disiplini ve akademik mükemmellik Tokyo Üniversitesi\'nde seni bekliyor.','Doğu ile Batı\'nın akademik birleşimi benzersiz bir deneyim sunacak.'] },
  { name:'NUS Singapur', emoji:'🇸🇬', gradient:['#003D7C','#F05A28'], logo:'https://logo.clearbit.com/nus.edu.sg', image:'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800&h=500&fit=crop', filters:{region:'international',continent:'asia'}, profile:{research:1,asian:2,modern:1,international:2,techy:1,engineering:1,innovation:1}, reasons:['Asya\'nın en inovatif üniversitelerinden birinde global vizyonun parlayacak.','Uluslararası ortam ve modern kampüs NUS\'u ideal kılıyor.','Teknoloji ve girişimcilik ekosistemi Singapur\'da seni bekliyor.'] },
  { name:'Pekin Üniversitesi', emoji:'🇨🇳', gradient:['#8B0000','#FFD700'], logo:'https://logo.clearbit.com/pku.edu.cn', image:'https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=800&h=500&fit=crop', filters:{region:'international',continent:'asia'}, profile:{research:2,asian:2,prestige:2,tradition:1,competitive:1,humanities:1}, reasons:['Çin\'in en prestijli üniversitesinde akademik mükemmellik arayışın karşılığını bulacak.','Binlerce yıllık akademik geleneğin modern araştırmayla buluştuğu yerde seni bekliyor.','Asya\'nın yükselen gücünde yer almak vizyonunla örtüşüyor.'] },
  { name:'Seoul National', emoji:'🇰🇷', gradient:['#003DA5','#FFFFFF'], logo:'https://logo.clearbit.com/snu.ac.kr', image:'https://images.unsplash.com/photo-1517154421773-0529f29ea451?w=800&h=500&fit=crop', filters:{region:'international',continent:'asia'}, profile:{research:1,asian:2,competitive:2,techy:1,engineering:1,campus:1,prestige:1}, reasons:['Güney Kore\'nin en prestijli üniversitesinde rekabetçi yapın parlayacak.','Teknoloji ve mühendislik tutkun Seoul National\'da karşılığını bulacak.','K-kültürü ve akademik mükemmellik benzersiz bir deneyim sunacak.'] },

  /* Okyanusya */
  { name:'Melbourne Üniversitesi', emoji:'🇦🇺', gradient:['#003DA5','#F2C800'], logo:'https://logo.clearbit.com/unimelb.edu.au', image:'https://images.unsplash.com/photo-1514395462725-fb4566210144?w=800&h=500&fit=crop', filters:{region:'international',continent:'oceania'}, profile:{research:1,oceanian:1,international:1,campus:1,diverse:1,community:1,prestige:1}, reasons:['Avustralya\'nın en prestijli üniversitelerinden birinde global vizyonun parlayacak.','Kampüs yaşamı ve çeşitlilik Melbourne Üniversitesi\'nde seni bekliyor.','Güney yarıkürede akademik mükemmellik deneyimi tam sana göre.'] },

  /* Kanada */
  { name:'Toronto Üniversitesi', emoji:'🍁', gradient:['#002A5C','#FFFFFF'], logo:'https://logo.clearbit.com/utoronto.ca', image:'https://images.unsplash.com/photo-1517090504332-8734a0a7e839?w=800&h=500&fit=crop', filters:{region:'international',continent:'northamerica'}, profile:{research:2,international:1,diverse:1,campus:1,competitive:1,engineering:1,global:1}, reasons:['Kanada\'nın en büyük araştırma üniversitesinde akademik tutkun parlayacak.','Çok kültürlü ortam ve güçlü araştırma imkanları seni bekliyor.','Yapay zeka araştırmalarının öncü merkezlerinden birinde yer almak tam sana göre.'] }
];

/* ──────────────────── SONUÇ HARİTASI ──────────────────── */
const RESULTS = {
  meslek: MESLEK_RESULTS,
  sirket: SIRKET_RESULTS,
  sehir: SEHIR_RESULTS,
  universite: UNIVERSITE_RESULTS
};


/* ╔══════════════════════════════════════════════════════════╗
   ║  GELİŞMİŞ TAHMİN ALGORİTMASI                          ║
   ║  Eliminasyon + Dot-Product + Güven Skoru                ║
   ╚══════════════════════════════════════════════════════════╝ */

function getFilteredCandidates(categoryId, activeFilters) {
  const all = RESULTS[categoryId];
  if (!all) return [];
  return all.filter(candidate => {
    for (const [key, value] of Object.entries(activeFilters)) {
      if (candidate.filters[key] && candidate.filters[key] !== value) {
        return false;
      }
    }
    return true;
  });
}

function dotProduct(profile, userTags) {
  let score = 0;
  for (const [tag, weight] of Object.entries(profile)) {
    if (userTags[tag]) {
      score += userTags[tag] * weight;
    }
  }
  return score;
}

function scoreAllCandidates(categoryId, userTags, activeFilters) {
  const candidates = getFilteredCandidates(categoryId, activeFilters);
  const scored = candidates.map(c => ({
    candidate: c,
    score: dotProduct(c.profile, userTags)
  }));
  scored.sort((a, b) => b.score - a.score);
  return scored;
}

function predictResult(categoryId, userTags, activeFilters = {}) {
  const scored = scoreAllCandidates(categoryId, userTags, activeFilters);
  if (scored.length === 0) return null;
  return scored[0].candidate;
}

function checkConfidence(categoryId, userTags, activeFilters = {}) {
  const scored = scoreAllCandidates(categoryId, userTags, activeFilters);
  if (scored.length === 0) return { confident: true, topResult: null, margin: 0 };
  if (scored.length === 1) return { confident: true, topResult: scored[0].candidate, margin: 1 };

  const top1 = scored[0].score;
  const top2 = scored[1].score;
  const margin = top2 > 0 ? (top1 - top2) / top2 : 1;
  const confident = margin >= 0.25 || top1 >= 12;

  return {
    confident,
    topResult: scored[0].candidate,
    margin,
    top3: scored.slice(0, 3).map(s => ({ name: s.candidate.name, score: s.score }))
  };
}

const MIN_QUESTIONS = 10;
const MAX_QUESTIONS = 20;
const EARLY_EXIT_AFTER = 13;

function shouldContinueAsking(questionCount, categoryId, userTags, activeFilters) {
  if (questionCount < MIN_QUESTIONS) return true;
  if (questionCount >= MAX_QUESTIONS) return false;
  /* 13. sorudan sonra güven yeterliyse çıkabilir */
  if (questionCount >= EARLY_EXIT_AFTER) {
    const { confident } = checkConfidence(categoryId, userTags, activeFilters);
    if (confident) return false;
  }
  /* 10-12 arası da güven çok yüksekse çıkabilir (margin >= 0.5) */
  if (questionCount >= MIN_QUESTIONS) {
    const { confident, margin } = checkConfidence(categoryId, userTags, activeFilters);
    if (confident && margin >= 0.5) return false;
  }
  return true;
}

function accumulateTags(currentTags, newTags) {
  const result = { ...currentTags };
  for (const [tag, value] of Object.entries(newTags)) {
    result[tag] = (result[tag] || 0) + value;
  }
  return result;
}
