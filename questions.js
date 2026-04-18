/* ============================================================
   G.A.N.O? — Dallanmalı Soru Havuzu v3
   Her kategori: 25+ anlamlı soru, faz tabanlı, koşullu dallanma
   Tüm kategoriler için çeşitli ve detaylı sorular
   ============================================================ */

const GAME_DATA = {
  categories: [
    {
      id: 'meslek', icon: '💼', title: 'Meslek',
      subtitle: 'Gelecekte hangi mesleği icra edeceksin?',
      gradient: ['#667eea', '#764ba2'],
      questions: [
        /* ───── FAZ 1: Temel Tercihler ───── */
        { id:'m1', phase:1, text:'Bir iş gününde hangisini tercih edersin?',
          condition:()=>true,
          optionA:{ label:'İnsanlarla birebir çalışmak', emoji:'🤝', gradient:['#FF6B6B','#FF8E53'], tags:{people:3,empathy:2,social:2,team:1} },
          optionB:{ label:'Bilgisayar/Makine başında çalışmak', emoji:'💻', gradient:['#667eea','#764ba2'], tags:{tech:3,machine:2,individual:2,analytic:1} }
        },
        { id:'m2', phase:1, text:'Hangisi seni daha çok motive eder?',
          condition:()=>true,
          optionA:{ label:'Yaratıcı bir şeyler üretmek', emoji:'🎨', gradient:['#f6d365','#fda085'], tags:{creative:3,art:2,vision:1} },
          optionB:{ label:'Mantıksal problemleri çözmek', emoji:'🧩', gradient:['#a18cd1','#fbc2eb'], tags:{analytic:3,logic:2,detail:1} }
        },
        { id:'m3', phase:1, text:'Çalışma ortamı olarak hangisi?',
          condition:()=>true,
          optionA:{ label:'Ofis veya laboratuvar', emoji:'🏢', gradient:['#2c3e50','#3498db'], tags:{office:2,structured:2,detail:1} },
          optionB:{ label:'Sahada veya açık havada', emoji:'🌿', gradient:['#56ab2f','#a8e063'], tags:{field:2,adventure:2,courage:1} }
        },
        { id:'m4', phase:1, text:'İş hayatında önceliğin ne?',
          condition:()=>true,
          optionA:{ label:'Yüksek maaş ve kariyer', emoji:'💰', gradient:['#f7971e','#ffd200'], tags:{money:3,ambition:2,risk:1} },
          optionB:{ label:'İş tatmini ve anlam', emoji:'❤️', gradient:['#ff758c','#ff7eb3'], tags:{satisfaction:3,meaning:2,empathy:1} }
        },
        /* ───── FAZ 2: Derinleştirme ───── */
        { id:'m5', phase:2, text:'Takım çalışması mı yoksa bireysel çalışma mı?',
          condition:()=>true,
          optionA:{ label:'Bir ekibin parçası olmak', emoji:'👥', gradient:['#00b09b','#96c93d'], tags:{team:3,social:2,leadership:1} },
          optionB:{ label:'Kendi projelerimi yürütmek', emoji:'🎯', gradient:['#6a11cb','#2575fc'], tags:{individual:3,focus:2,depth:1} }
        },
        { id:'m6', phase:2, text:'Hangi tarz daha çok sana uyar?',
          condition:()=>true,
          optionA:{ label:'Detaylara odaklanmak', emoji:'🔍', gradient:['#0f0c29','#302b63'], tags:{detail:3,precision:2,focus:1} },
          optionB:{ label:'Büyük resmi görmek', emoji:'🗺️', gradient:['#1a2a6c','#b21f1f'], tags:{bigpicture:3,vision:2,strategy:1} }
        },
        { id:'m7', phase:2, text:'Risk almayı sever misin?',
          condition:()=>true,
          optionA:{ label:'Risksiz, sabit ve güvenli işler', emoji:'🛡️', gradient:['#2c3e50','#4ca1af'], tags:{stability:3,structured:2,discipline:1} },
          optionB:{ label:'Risk benim göbek adım :)', emoji:'🎲', gradient:['#e65c00','#F9D423'], tags:{risk:3,courage:2,ambition:1} }
        },
        { id:'m8', phase:2, text:'Hangi alanda çalışmak isterdin?',
          condition:(tags)=>tags.tech>=2||tags.analytic>=2,
          optionA:{ label:'Yazılım ve Teknoloji', emoji:'⌨️', gradient:['#667eea','#764ba2'], tags:{tech:3,innovation:2,machine:1} },
          optionB:{ label:'Bilim ve Araştırma', emoji:'🔬', gradient:['#36D1DC','#5B86E5'], tags:{depth:3,precision:2,meaning:1} }
        },
        { id:'m9', phase:2, text:'Hangi alanda çalışmak isterdin?',
          condition:(tags)=>tags.people>=2||tags.empathy>=2,
          optionA:{ label:'Sağlık ve tıp', emoji:'🏥', gradient:['#11998e','#38ef7d'], tags:{people:2,empathy:2,discipline:2,detail:1} },
          optionB:{ label:'Eğitim ve toplumsal hizmet', emoji:'📖', gradient:['#ff758c','#ff7eb3'], tags:{people:2,meaning:2,leadership:1,satisfaction:1} }
        },
        { id:'m10', phase:2, text:'Hangisi sana daha yakın?',
          condition:(tags)=>tags.creative>=2||tags.art>=2,
          optionA:{ label:'Görsel Tasarım ve Estetik', emoji:'🖌️', gradient:['#f6d365','#fda085'], tags:{art:3,creative:2,detail:1} },
          optionB:{ label:'Mimari ve Yapısal Tasarım', emoji:'🏗️', gradient:['#2c3e50','#3498db'], tags:{creative:2,analytic:2,bigpicture:1} }
        },
        /* ───── FAZ 3: Nihai Ayrım ───── */
        { id:'m11', phase:3, text:'İnovasyonu mu yoksa gelenekleri mi tercih edersin?',
          condition:()=>true,
          optionA:{ label:'Yenilikçi ve devrimci fikirler', emoji:'🚀', gradient:['#f7971e','#ffd200'], tags:{innovation:3,vision:2,risk:1} },
          optionB:{ label:'Köklü ve kanıtlanmış yöntemler', emoji:'📜', gradient:['#2c3e50','#4ca1af'], tags:{structured:2,discipline:2,stability:1} }
        },
        { id:'m12', phase:3, text:'Bir günlük iş tempon nasıl olsun?',
          condition:()=>true,
          optionA:{ label:'Hızlı ve yoğun tempo', emoji:'⚡', gradient:['#e65c00','#F9D423'], tags:{ambition:2,risk:1,courage:1,leadership:1} },
          optionB:{ label:'Sakin ve derinlemesine çalışma', emoji:'🧘', gradient:['#a18cd1','#fbc2eb'], tags:{focus:2,depth:2,individual:1,precision:1} }
        },
        { id:'m13', phase:3, text:'Dünyayı değiştirmek mi yoksa insanlara dokunmak mı?',
          condition:()=>true,
          optionA:{ label:'Toplumu ve dünyayı dönüştürmek', emoji:'🌍', gradient:['#1a2a6c','#b21f1f'], tags:{vision:3,leadership:2,bigpicture:1} },
          optionB:{ label:'Bireylerin hayatına dokunmak', emoji:'💝', gradient:['#ff758c','#ff7eb3'], tags:{empathy:3,people:2,satisfaction:1} }
        },
        { id:'m14', phase:3, text:'Disiplin mi yoksa özgürlük mü?',
          condition:()=>true,
          optionA:{ label:'Kurallı ve disiplinli ortam', emoji:'📋', gradient:['#0f0c29','#302b63'], tags:{discipline:3,structured:2,stability:1} },
          optionB:{ label:'Esnek ve özgür çalışma', emoji:'🦋', gradient:['#f6d365','#fda085'], tags:{creative:2,adventure:1,satisfaction:1} }
        },
        { id:'m15', phase:3, text:'Liderlik mi yoksa uzmanlık mı?',
          condition:()=>true,
          optionA:{ label:'Ekiplere liderlik etmek', emoji:'👑', gradient:['#f7971e','#ffd200'], tags:{leadership:3,strategy:2,bigpicture:1} },
          optionB:{ label:'Bir alanda uzmanlaşmak', emoji:'🔬', gradient:['#36D1DC','#5B86E5'], tags:{depth:3,precision:2,focus:1} }
        },
        { id:'m16', phase:3, text:'Sanat mı bilim mi?',
          condition:()=>true,
          optionA:{ label:'Sanat ve Duygu', emoji:'🎭', gradient:['#f12711','#f5af19'], tags:{art:3,creative:2,social:1} },
          optionB:{ label:'Bilim ve Keşif', emoji:'🧬', gradient:['#36D1DC','#5B86E5'], tags:{analytic:2,logic:2,depth:2} }
        },
        { id:'m17', phase:3, text:'Gelecekte teknolojiyle ne kadar iç içe olmak istersin?',
          condition:()=>true,
          optionA:{ label:'Teknolojiyle haşır neşir', emoji:'🤖', gradient:['#667eea','#764ba2'], tags:{tech:3,machine:2,innovation:1} },
          optionB:{ label:'Teknolojiyi araç olarak kullanmak yeter', emoji:'📝', gradient:['#2c3e50','#3498db'], tags:{people:1,creative:1,field:1} }
        },
        { id:'m18', phase:3, text:'Hangisi daha çekici?',
          condition:(tags)=>tags.risk>=2,
          optionA:{ label:'Kendi işimi kurmak', emoji:'🏗️', gradient:['#f7971e','#ffd200'], tags:{risk:2,leadership:2,vision:2,ambition:2} },
          optionB:{ label:'Büyük bir şirkette yükselmek', emoji:'📈', gradient:['#667eea','#764ba2'], tags:{ambition:2,strategy:2,structured:1} }
        },
        { id:'m19', phase:3, text:'Hayvanlarla mı yoksa insanlarla mı çalışmak istersin?',
          condition:(tags)=>tags.empathy>=2,
          optionA:{ label:'Hayvanlarla', emoji:'🐾', gradient:['#56ab2f','#a8e063'], tags:{empathy:2,field:1,satisfaction:2} },
          optionB:{ label:'İnsanlarla', emoji:'🤝', gradient:['#ff758c','#ff7eb3'], tags:{people:3,social:2,team:1} }
        },
        { id:'m20', phase:3, text:'Performansın nasıl ölçülsün?',
          condition:()=>true,
          optionA:{ label:'Rakamlar ve Sonuçlar', emoji:'📊', gradient:['#134E5E','#71B280'], tags:{analytic:2,money:1,ambition:1,precision:1} },
          optionB:{ label:'Etki ve Memnuniyet', emoji:'😊', gradient:['#ff758c','#ff7eb3'], tags:{satisfaction:2,empathy:1,meaning:1,people:1} }
        },
        { id:'m21', phase:3, text:'Mesaili mi esnek saatli mi?',
          condition:()=>true,
          optionA:{ label:'Sabit mesai, düzenli hayat', emoji:'⏰', gradient:['#2c3e50','#4ca1af'], tags:{stability:2,structured:2,discipline:1} },
          optionB:{ label:'Esnek saatler, değişken günler', emoji:'🌙', gradient:['#6a11cb','#2575fc'], tags:{creative:1,adventure:1,risk:1,individual:1} }
        },
        { id:'m22', phase:3, text:'Eğitim sürecin nasıl olsun?',
          condition:()=>true,
          optionA:{ label:'Uzun eğitim, derin uzmanlık', emoji:'📚', gradient:['#0f0c29','#302b63'], tags:{discipline:2,depth:2,precision:1,detail:1} },
          optionB:{ label:'Hızlı öğren, hemen uygula', emoji:'⚡', gradient:['#e65c00','#F9D423'], tags:{tech:1,innovation:1,courage:1,risk:1} }
        },
        { id:'m23', phase:3, text:'Seyahat etmek mi yoksa bir yerde kök salmak mı?',
          condition:()=>true,
          optionA:{ label:'Sürekli seyahat eden bir iş', emoji:'✈️', gradient:['#1a2a6c','#fdbb2d'], tags:{adventure:3,field:2,courage:1,social:1} },
          optionB:{ label:'Bir yere bağlı, istikrarlı iş', emoji:'🏡', gradient:['#2c3e50','#4ca1af'], tags:{stability:3,structured:1,office:1} }
        },
        { id:'m24', phase:3, text:'Toplum önünde mi yoksa perde arkasında mı?',
          condition:()=>true,
          optionA:{ label:'Sahne önünde, tanınan biri', emoji:'🎤', gradient:['#f12711','#f5af19'], tags:{social:3,courage:2,leadership:1,art:1} },
          optionB:{ label:'Perde arkasında çalışan beyin', emoji:'🧠', gradient:['#667eea','#764ba2'], tags:{individual:2,depth:2,analytic:1,focus:1} }
        },
        { id:'m25', phase:3, text:'Doğayı korumak mı yoksa teknolojiyi ilerletmek mi?',
          condition:()=>true,
          optionA:{ label:'Çevre ve Sürdürülebilirlik', emoji:'🌱', gradient:['#56ab2f','#a8e063'], tags:{meaning:2,field:1,empathy:1,satisfaction:1} },
          optionB:{ label:'Teknoloji ve İlerleme', emoji:'🔧', gradient:['#667eea','#764ba2'], tags:{tech:2,innovation:2,machine:1} }
        }
      ]
    },
    {
      id: 'sirket', icon: '🏢', title: 'Şirket',
      subtitle: 'Gelecekte hangi şirkette çalışacaksın?',
      gradient: ['#f093fb', '#f5576c'],
      questions: [
        /* ───── FAZ 1: Temel Kültür ───── */
        { id:'s1', phase:1, text:'Nasıl bir şirket kültürü istersin?',
          condition:()=>true,
          optionA:{ label:'Yenilikçi ve Hızlı Tempolu', emoji:'🚀', gradient:['#f7971e','#ffd200'], tags:{innovation:3,speed:2,risk:1} },
          optionB:{ label:'Köklü ve Kurumsal', emoji:'🏛️', gradient:['#2c3e50','#4ca1af'], tags:{stability:3,professional:2,order:1} }
        },
        { id:'s2', phase:1, text:'Şirketin büyüklüğü?',
          condition:()=>true,
          optionA:{ label:'Dev bi` global şirket', emoji:'🌐', gradient:['#667eea','#764ba2'], tags:{scale:3,global:2,resources:1} },
          optionB:{ label:'Küçük ama etkili bir start-up', emoji:'💡', gradient:['#f6d365','#fda085'], tags:{freedom:2,creativity:2,speed:1,fun:1} }
        },
        { id:'s3', phase:1, text:'Şirketin misyonu ne olsun?',
          condition:()=>true,
          optionA:{ label:'Dünyayı değiştirmek', emoji:'🌍', gradient:['#1a2a6c','#b21f1f'], tags:{mission:3,future:2,innovation:1} },
          optionB:{ label:'En iyi ürünü yapmak', emoji:'💎', gradient:['#0f0c29','#302b63'], tags:{quality:3,premium:2,brand:1} }
        },
        { id:'s4', phase:1, text:'Çalışma ortamı nasıl olsun?',
          condition:()=>true,
          optionA:{ label:'Eğlenceli ve rahat (hoodies OK!)', emoji:'😎', gradient:['#00b09b','#96c93d'], tags:{fun:3,casual:2,freedom:1} },
          optionB:{ label:'Profesyonel ve Prestijli', emoji:'👔', gradient:['#1a2a6c','#fdbb2d'], tags:{professional:3,prestige:2,order:1} }
        },
        /* ───── FAZ 2: Değerler ───── */
        { id:'s5', phase:2, text:'Hangisi daha önemli?',
          condition:()=>true,
          optionA:{ label:'Yüksek maaş ve Yan haklar', emoji:'💰', gradient:['#f7971e','#ffd200'], tags:{profit:3,resources:2,growth:1,intensity:1} },
          optionB:{ label:'Anlam ve Katkı sağlamak', emoji:'❤️', gradient:['#ff758c','#ff7eb3'], tags:{mission:3,community:1,social_impact:1} }
        },
        { id:'s6', phase:2, text:'Şirketin sektörü?',
          condition:()=>true,
          optionA:{ label:'Teknoloji ve Yazılım', emoji:'💻', gradient:['#667eea','#764ba2'], tags:{innovation:2,future:2,creativity:1} },
          optionB:{ label:'Finans ve Danışmanlık', emoji:'📊', gradient:['#134E5E','#71B280'], tags:{profit:2,professional:2,prestige:1,order:1} }
        },
        { id:'s7', phase:2, text:'Uzay ve havacılık mı yoksa otomotiv mi?',
          condition:(tags)=>tags.innovation>=2||tags.future>=2,
          optionA:{ label:'Uzay keşfi ve Roketler', emoji:'🚀', gradient:['#0B3D91','#FC3D21'], tags:{space:3,mission:2,future:2,risk:1} },
          optionB:{ label:'Elektrikli araçlar ve Mobilite', emoji:'🚗', gradient:['#cc0000','#1a1a1a'], tags:{innovation:2,speed:1,premium:1,future:1} }
        },
        { id:'s8', phase:2, text:'Yerel mi global mi?',
          condition:()=>true,
          optionA:{ label:'Türk şirketinde çalışmak', emoji:'🇹🇷', gradient:['#E30A17','#FFFFFF'], tags:{local:3,community:2,stability:1} },
          optionB:{ label:'Uluslararası şirkette çalışmak', emoji:'🌎', gradient:['#4834d4','#686de0'], tags:{global:3,scale:1,accessible:1} }
        },
        { id:'s9', phase:2, text:'Marka değeri mi misyon mu?',
          condition:()=>true,
          optionA:{ label:'Herkesin tanıdığı dev bir marka', emoji:'⭐', gradient:['#0f0c29','#302b63'], tags:{brand:3,scale:2,premium:1} },
          optionB:{ label:'Dünyayı değiştiren bir vizyon', emoji:'🔮', gradient:['#6a11cb','#2575fc'], tags:{mission:2,future:2,innovation:1} }
        },
        { id:'s10', phase:2, text:'Oyun ve eğlence mi yoksa yapay zeka mı?',
          condition:(tags)=>tags.creativity>=2||tags.fun>=2||tags.innovation>=2,
          optionA:{ label:'Oyun ve Eğlence Dünyası', emoji:'🎮', gradient:['#8E2DE2','#4A00E0'], tags:{fun:3,creativity:3,casual:1,community:1} },
          optionB:{ label:'Yapay zeka ve Geleceğin Teknolojisi', emoji:'🤖', gradient:['#10A37F','#1A1A2E'], tags:{innovation:3,future:3,mission:1} }
        },
        /* ───── FAZ 3: Nihai Ayrım ───── */
        { id:'s11', phase:3, text:'Çalışma hızın nasıl?',
          condition:()=>true,
          optionA:{ label:'7/24 yoğun, ama hızla büyü', emoji:'⚡', gradient:['#e65c00','#F9D423'], tags:{intensity:3,speed:2,growth:1} },
          optionB:{ label:'İş/Hayat dengesi, sürdürülebilir', emoji:'⚖️', gradient:['#a18cd1','#fbc2eb'], tags:{freedom:2,fun:1,stability:1} }
        },
        { id:'s12', phase:3, text:'Savunma sanayii mi sivil teknoloji mi?',
          condition:(tags)=>tags.local>=2||tags.mission>=2,
          optionA:{ label:'Milli Savunma ve Güvenlik', emoji:'🛡️', gradient:['#1B3A5C','#4A7FB5'], tags:{mission:2,local:2,order:1,stability:1,professional:1} },
          optionB:{ label:'Sivil Teknoloji ve İnovasyon', emoji:'💡', gradient:['#f7971e','#ffd200'], tags:{innovation:2,accessible:1,creativity:1} }
        },
        { id:'s13', phase:3, text:'CEO olabilecek misin?',
          condition:()=>true,
          optionA:{ label:'Evet, en tepeye çıkmak isterim!', emoji:'👑', gradient:['#f7971e','#ffd200'], tags:{growth:2,prestige:1,scale:1,intensity:1} },
          optionB:{ label:'Hayır, teknik uzman olmak isterim.', emoji:'🔧', gradient:['#667eea','#764ba2'], tags:{quality:2,innovation:1,creativity:1} }
        },
        { id:'s14', phase:3, text:'Şirketin ürünü ne olsun?',
          condition:()=>true,
          optionA:{ label:'Fiziksel ürün', emoji:'📱', gradient:['#0f0c29','#302b63'], tags:{premium:2,brand:1,quality:1} },
          optionB:{ label:'Dijital ürün', emoji:'☁️', gradient:['#667eea','#764ba2'], tags:{innovation:2,future:1,creativity:1,speed:1} }
        },
        { id:'s15', phase:3, text:'Ofis lokasyonu?',
          condition:()=>true,
          optionA:{ label:'Silikon Vadisi / ABD', emoji:'🇺🇸', gradient:['#3C3B3F','#605C3C'], tags:{global:2,scale:1,innovation:1} },
          optionB:{ label:'Avrupa veya Asya', emoji:'🌏', gradient:['#1a2a6c','#b21f1f'], tags:{global:1,premium:1,stability:1} }
        },
        { id:'s16', phase:3, text:'Şirketin yaşı?',
          condition:()=>true,
          optionA:{ label:'Yeni kurulan, dinamik', emoji:'🌱', gradient:['#56ab2f','#a8e063'], tags:{speed:2,risk:1,freedom:1,creativity:1} },
          optionB:{ label:'Onlarca yıllık, köklü', emoji:'🌳', gradient:['#2c3e50','#4ca1af'], tags:{stability:2,brand:1,traditional:1,resources:1} }
        },
        { id:'s17', phase:3, text:'Sosyal etki mi kâr mı?',
          condition:()=>true,
          optionA:{ label:'Topluma fayda sağlayan projelere öncelik', emoji:'🤲', gradient:['#ff758c','#ff7eb3'], tags:{mission:2,community:2,social_impact:1} },
          optionB:{ label:'Kârlılık ve Büyüme Odaklı', emoji:'📈', gradient:['#f7971e','#ffd200'], tags:{profit:2,growth:2,intensity:1} }
        },
        { id:'s18', phase:3, text:'Hangi lider tarzını takdir edersin?',
          condition:()=>true,
          optionA:{ label:'Vizyoner ve Karizmatik', emoji:'🦅', gradient:['#cc0000','#1a1a1a'], tags:{mission:1,risk:1,speed:1,future:1,innovation:1} },
          optionB:{ label:'Disiplinli ve Stratejik', emoji:'♟️', gradient:['#333','#666'], tags:{quality:1,premium:1,brand:1,order:1,stability:1} }
        },
        { id:'s19', phase:3, text:'Müzik ve eğlence sektörü mü yoksa bilim mi?',
          condition:()=>true,
          optionA:{ label:'Müzik, Medya ve Eğlence', emoji:'🎵', gradient:['#1DB954','#191414'], tags:{fun:2,creativity:2,casual:1,accessible:1} },
          optionB:{ label:'Bilimsel Araştırma ve Keşif', emoji:'🔭', gradient:['#003366','#336699'], tags:{mission:2,prestige:2,resources:1,quality:1} }
        },
        { id:'s20', phase:3, text:'Kıyafet kuralı?',
          condition:()=>true,
          optionA:{ label:'İstediğimi giyerim (:', emoji:'👕', gradient:['#00b09b','#96c93d'], tags:{casual:2,freedom:2,fun:1} },
          optionB:{ label:'Takım elbise gibi formal.', emoji:'🤵', gradient:['#1a2a6c','#fdbb2d'], tags:{professional:2,prestige:1,order:1,traditional:1} }
        },
        { id:'s21', phase:3, text:'Hangi tip inovasyona daha yakınsın?',
          condition:()=>true,
          optionA:{ label:'Donanım: çip, sensör, robot', emoji:'🔩', gradient:['#76B900','#1A1A1A'], tags:{quality:2,premium:1,innovation:1} },
          optionB:{ label:'Yazılım: AI, cloud, mobil', emoji:'🧠', gradient:['#10A37F','#1A1A2E'], tags:{innovation:2,future:1,speed:1,creativity:1} }
        },
        { id:'s22', phase:3, text:'Spor ve yaşam tarzı markası mı bilim markası mı?',
          condition:()=>true,
          optionA:{ label:'Spor, macera ve yaşam tarzı', emoji:'⚽', gradient:['#DB0A40','#F7DC6F'], tags:{fun:2,brand:2,casual:1,speed:1} },
          optionB:{ label:'Araştırma, bilim ve uzay', emoji:'🛰️', gradient:['#0B3D91','#FC3D21'], tags:{mission:2,space:2,prestige:1,resources:1} }
        },
        { id:'s23', phase:3, text:'Havacılık mı telekomünikasyon mu?',
          condition:(tags)=>tags.local>=2,
          optionA:{ label:'Havacılık Sektörü', emoji:'✈️', gradient:['#C8102E','#003E74'], tags:{brand:2,global:1,quality:1,professional:1} },
          optionB:{ label:'Telekomünikasyon Sektörü', emoji:'📶', gradient:['#FFD100','#003CA6'], tags:{local:2,community:1,stability:1,practical:1} }
        },
        { id:'s24', phase:3, text:'Lüks mü yoksa erişilebilir mi?',
          condition:()=>true,
          optionA:{ label:'Lüks, premium, az ama öz', emoji:'💎', gradient:['#1C69D4','#262626'], tags:{premium:3,quality:2,brand:1} },
          optionB:{ label:'Herkesin erişebileceği ürünler', emoji:'🌐', gradient:['#4285F4','#34A853'], tags:{accessible:2,scale:2,global:1,community:1} }
        },
        { id:'s25', phase:3, text:'Yapay zeka çip üreticisi mi yapay zeka yazılım şirketi mi?',
          condition:(tags)=>tags.innovation>=3||tags.future>=3,
          optionA:{ label:'Çip ve donanım', emoji:'🔲', gradient:['#76B900','#1A1A1A'], tags:{quality:2,premium:1,resources:1,innovation:1} },
          optionB:{ label:'AI modelleri ve yazılım', emoji:'🧠', gradient:['#10A37F','#1A1A2E'], tags:{innovation:2,mission:1,future:2,speed:1} }
        }
      ]
    },
    {
      id: 'sehir', icon: '🌍', title: 'Şehir',
      subtitle: 'Gelecekte hangi şehirde oturacaksın?',
      gradient: ['#41A0B1', '#56ab2f'],
      questions: [
        /* ───── FAZ 1: Konum Tercihi ───── */
        { id:'c1', phase:1, text:'Nerede yaşamak istersin?',
          condition:()=>true,
          optionA:{ label:'Yurt içinde', emoji:'🇹🇷', gradient:['#E30A17','#FFFFFF'], tags:{domestic:5}, setFilter:{region:'domestic'} },
          optionB:{ label:'Yurt dışında', emoji:'🌎', gradient:['#4834d4','#686de0'], tags:{international:5}, setFilter:{region:'international'} }
        },
        /* Kıta seçimi (yurt dışı seçildiyse) */
        { id:'c2', phase:1, text:'Hangi kıta seni daha çok çekiyor?',
          condition:(t,f)=>f.region==='international',
          optionA:{ label:'Avrupa', emoji:'🏰', gradient:['#6c5ce7','#a29bfe'], tags:{european:5,international:2}, setFilter:{continent:'europe'} },
          optionB:{ label:'Kuzey Amerika', emoji:'🗽', gradient:['#4834d4','#686de0'], tags:{american:5,international:2}, setFilter:{continent:'northamerica'} }
        },
        { id:'c3', phase:1, text:'Yoksa başka bir kıta mı?',
          condition:(t,f)=>f.region==='international'&&!f.continent,
          optionA:{ label:'Asya', emoji:'🏯', gradient:['#FF69B4','#7B68EE'], tags:{asian:5,international:2,exotic:2}, setFilter:{continent:'asia'} },
          optionB:{ label:'Güney Amerika, Afrika veya Okyanusya', emoji:'🌴', gradient:['#00b09b','#96c93d'], tags:{adventurous:3,international:2,exotic:2}, setFilter:{continent:'southamerica'} }
        },
        /* ───── FAZ 2: Yaşam Stili ───── */
        { id:'c4', phase:2, text:'İklim tercihin nedir?',
          condition:()=>true,
          optionA:{ label:'Sıcak ve güneşli', emoji:'☀️', gradient:['#f9ca24','#f0932b'], tags:{warm:3,tropical:1,beach:1} },
          optionB:{ label:'Serin ve dört mevsim', emoji:'🍂', gradient:['#74b9ff','#dfe6e9'], tags:{cold:2,green:1,continental:1} }
        },
        { id:'c5', phase:2, text:'Şehir ritmi nasıl olsun?',
          condition:()=>true,
          optionA:{ label:'Kalabalık ve canlı metropol', emoji:'🏙️', gradient:['#4834d4','#686de0'], tags:{bustling:3,lively:2,ambitious:1,nightlife:1} },
          optionB:{ label:'Sakin ve huzurlu', emoji:'🏡', gradient:['#56ab2f','#a8e063'], tags:{peaceful:3,relaxed:2,cozy:1,green:1} }
        },
        { id:'c6', phase:2, text:'Deniz kenarı mı iç bölge mi?',
          condition:()=>true,
          optionA:{ label:'Deniz kenarında yaşam', emoji:'🌊', gradient:['#2193b0','#6dd5ed'], tags:{coastal:3,beach:2,warm:1} },
          optionB:{ label:'İç bölgede, dağ veya ova', emoji:'⛰️', gradient:['#2c3e50','#bdc3c7'], tags:{inland:3,continental:1,green:1} }
        },
        { id:'c7', phase:2, text:'Yaşam maliyeti?',
          condition:()=>true,
          optionA:{ label:'Uygun yaşam, bütçe dostu', emoji:'🏷️', gradient:['#00b09b','#96c93d'], tags:{affordable:3,relaxed:1} },
          optionB:{ label:'Lüks ve pahalı ama kaliteli', emoji:'💎', gradient:['#0f0c29','#302b63'], tags:{luxurious:3,prestigious:1,modern:1} }
        },
        { id:'c8', phase:2, text:'Kültürel zenginlik mi modern hayat mı?',
          condition:()=>true,
          optionA:{ label:'Tarih, müzeler, kültürel derinlik', emoji:'🏛️', gradient:['#DAA520','#8B4513'], tags:{historical:3,cultural:2,artistic:1} },
          optionB:{ label:'Modern mimari, teknoloji hub\'ı', emoji:'🔮', gradient:['#667eea','#764ba2'], tags:{modern:3,techy:2,bustling:1} }
        },
        { id:'c9', phase:2, text:'Gece hayatı önemli mi?',
          condition:()=>true,
          optionA:{ label:'Evet, gece hayatı şart!', emoji:'🎶', gradient:['#f12711','#f5af19'], tags:{nightlife:3,lively:2,social:1} },
          optionB:{ label:'Hayır, erken yatıp erken kalkmak', emoji:'🌅', gradient:['#56ab2f','#a8e063'], tags:{peaceful:2,orderly:1,cozy:1} }
        },
        /* ───── FAZ 3: Detaylandırma ───── */
        { id:'c10', phase:3, text:'Yemek kültürü ne kadar önemli?',
          condition:()=>true,
          optionA:{ label:'Çok! Lezzet tutkunu benim', emoji:'🍽️', gradient:['#e17055','#fdcb6e'], tags:{foodie:3,cultural:1} },
          optionB:{ label:'Önemli değil, fast food yeter', emoji:'🍔', gradient:['#636E72','#FD79A8'], tags:{modern:1,bustling:1} }
        },
        { id:'c11', phase:3, text:'Doğayla iç içe olmak ister misin?',
          condition:()=>true,
          optionA:{ label:'Evet, doğa olmazsa olmaz', emoji:'🌲', gradient:['#56ab2f','#a8e063'], tags:{natural:3,green:2,peaceful:1} },
          optionB:{ label:'Beton ormanı da olur', emoji:'🏢', gradient:['#636E72','#2d3436'], tags:{bustling:2,modern:1,lively:1} }
        },
        { id:'c12', phase:3, text:'Toplu taşıma mı özel araç mı?',
          condition:()=>true,
          optionA:{ label:'Metro, tramvay, bisiklet', emoji:'🚇', gradient:['#0D47A1','#42A5F5'], tags:{orderly:2,modern:1,green:1} },
          optionB:{ label:'Kendi arabamla özgürce', emoji:'🚗', gradient:['#e65c00','#F9D423'], tags:{modern:1,luxurious:1,ambitious:1} }
        },
        { id:'c13', phase:3, text:'Çok kültürlü bir ortam mı yoksa samimi bir topluluk mu?',
          condition:()=>true,
          optionA:{ label:'Kozmopolit, çok kültürlü', emoji:'🌈', gradient:['#4834d4','#686de0'], tags:{diverse:3,modern:1,international:1} },
          optionB:{ label:'Sıcak, samimi topluluk', emoji:'🤗', gradient:['#ff758c','#ff7eb3'], tags:{cozy:2,social:1,cultural:1} }
        },
        { id:'c14', phase:3, text:'Sanat ve müzik sahnesi?',
          condition:()=>true,
          optionA:{ label:'Canlı sanat, müzik ve tiyatro', emoji:'🎭', gradient:['#f12711','#f5af19'], tags:{artistic:3,cultural:1,nightlife:1} },
          optionB:{ label:'Tercih değil, iş imkanları önemli', emoji:'💼', gradient:['#2c3e50','#3498db'], tags:{ambitious:2,modern:1} }
        },
        { id:'c15', phase:3, text:'Güvenlik mi özgürlük mü?',
          condition:()=>true,
          optionA:{ label:'Güvenli ve düzenli', emoji:'🛡️', gradient:['#2c3e50','#4ca1af'], tags:{orderly:3,prestigious:1} },
          optionB:{ label:'Özgür ve rahat', emoji:'🦋', gradient:['#f6d365','#fda085'], tags:{free:3,relaxed:1,alternative:1} }
        },
        { id:'c16', phase:3, text:'Egzotik bir yer mi tanıdık bir ortam mı?',
          condition:()=>true,
          optionA:{ label:'Egzotik, farkli bir kültür', emoji:'🌺', gradient:['#e17055','#FF6B35'], tags:{exotic:3,adventurous:2} },
          optionB:{ label:'Tanıdık, Batılı kültüre yakın', emoji:'🏰', gradient:['#2c3e50','#bdc3c7'], tags:{european:1,orderly:1,cultural:1} }
        },
        { id:'c17', phase:3, text:'Plaj kültürü?',
          condition:(tags)=>tags.warm>=2||tags.coastal>=2,
          optionA:{ label:'Plaj olmazsa olmazım', emoji:'🏖️', gradient:['#2193b0','#6dd5ed'], tags:{beach:3,tropical:1,relaxed:1} },
          optionB:{ label:'Güzel olur ama zorunlu değil', emoji:'🌤️', gradient:['#f9ca24','#f0932b'], tags:{warm:1,cultural:1} }
        },
        { id:'c18', phase:3, text:'Üniversite şehri mi iş metropolü mü?',
          condition:()=>true,
          optionA:{ label:'Öğrenci dostu, canlı bir şehir', emoji:'🎓', gradient:['#a18cd1','#fbc2eb'], tags:{social:2,affordable:1,lively:1,cultural:1} },
          optionB:{ label:'İş dünyasının kalbi bir şehir', emoji:'📊', gradient:['#134E5E','#71B280'], tags:{ambitious:2,bustling:1,luxurious:1} }
        },
        { id:'c19', phase:3, text:'Kış sporları mı su sporları mı?',
          condition:()=>true,
          optionA:{ label:'Kayak, snowboard, dağcılık', emoji:'⛷️', gradient:['#74b9ff','#dfe6e9'], tags:{cold:2,natural:1,adventurous:1} },
          optionB:{ label:'Sörf, dalış, yelken', emoji:'🏄', gradient:['#2193b0','#6dd5ed'], tags:{coastal:2,warm:1,beach:1,adventurous:1} }
        },
        { id:'c20', phase:3, text:'Startup ekosistemi önemli mi?',
          condition:()=>true,
          optionA:{ label:'Evet, teknoloji hub\'ı olsun', emoji:'💡', gradient:['#667eea','#764ba2'], tags:{techy:2,modern:1,ambitious:1} },
          optionB:{ label:'Hayır, yaşam kalitesi yeter', emoji:'🌿', gradient:['#56ab2f','#a8e063'], tags:{relaxed:2,peaceful:1,green:1} }
        },
        { id:'c21', phase:3, text:'Alışveriş ve moda?',
          condition:()=>true,
          optionA:{ label:'Moda başkenti, lüks alışveriş', emoji:'🛍️', gradient:['#C33764','#1D2671'], tags:{luxurious:2,modern:1,lively:1} },
          optionB:{ label:'Yerel pazarlar, otantik dükkanlar', emoji:'🧺', gradient:['#e17055','#fdcb6e'], tags:{cultural:2,cozy:1,affordable:1} }
        },
        { id:'c22', phase:3, text:'Festival ve etkinlikler?',
          condition:()=>true,
          optionA:{ label:'Sürekli festival, konser, etkinlik', emoji:'🎪', gradient:['#f12711','#f5af19'], tags:{lively:2,social:1,nightlife:1,artistic:1} },
          optionB:{ label:'Sakin geçen günler, huzur', emoji:'📖', gradient:['#2c3e50','#4ca1af'], tags:{peaceful:2,cozy:1,orderly:1} }
        },
        { id:'c23', phase:3, text:'Ulaşım kalitesi?',
          condition:()=>true,
          optionA:{ label:'Dünyanın en iyi toplu taşıması', emoji:'🚄', gradient:['#0D47A1','#42A5F5'], tags:{orderly:2,modern:1,techy:1} },
          optionB:{ label:'Yürünebilir, bisiklet dostu', emoji:'🚶', gradient:['#56ab2f','#a8e063'], tags:{green:2,relaxed:1,cozy:1} }
        },
        { id:'c24', phase:3, text:'Deniz manzarası mı dağ manzarası mı?',
          condition:()=>true,
          optionA:{ label:'Mavi deniz ve gün batımı', emoji:'🌅', gradient:['#FF6B35','#F7C59F'], tags:{coastal:2,warm:1,beach:1} },
          optionB:{ label:'Karlı dağlar ve ormanlar', emoji:'🏔️', gradient:['#74b9ff','#dfe6e9'], tags:{natural:2,cold:1,green:1,inland:1} }
        },
        { id:'c25', phase:3, text:'Ev fiyatları?',
          condition:()=>true,
          optionA:{ label:'Uygun fiyatlı, geniş ev', emoji:'🏠', gradient:['#00b09b','#96c93d'], tags:{affordable:2,relaxed:1} },
          optionB:{ label:'Pahalı ama merkezi konum', emoji:'🏙️', gradient:['#667eea','#764ba2'], tags:{bustling:1,luxurious:1,modern:1} }
        }
      ]
    },
    {
      id: 'universite', icon: '🎓', title: 'Üniversite',
      subtitle: 'Hangi üniversiteden kabul alacaksın?',
      gradient: ['#f5576c', '#f093fb'],
      questions: [
        /* ───── FAZ 1: Temel Tercihler ───── */
        { id:'u1', phase:1, text:'Nerede okumak istersin?',
          condition:()=>true,
          optionA:{ label:'Türkiye\'de', emoji:'🇹🇷', gradient:['#E30A17','#FFFFFF'], tags:{turkey:5}, setFilter:{region:'domestic'} },
          optionB:{ label:'Yurt dışında', emoji:'🌎', gradient:['#4834d4','#686de0'], tags:{international:5}, setFilter:{region:'international'} }
        },
        { id:'u2', phase:1, text:'Hangi kıtada okumak istersin?',
          condition:(t,f)=>f.region==='international',
          optionA:{ label:'Avrupa', emoji:'🏰', gradient:['#6c5ce7','#a29bfe'], tags:{european:5}, setFilter:{continent:'europe'} },
          optionB:{ label:'Kuzey Amerika', emoji:'🗽', gradient:['#4834d4','#686de0'], tags:{american:3,international:2}, setFilter:{continent:'northamerica'} }
        },
        { id:'u3', phase:1, text:'Yoksa Asya mı?',
          condition:(t,f)=>f.region==='international'&&!f.continent,
          optionA:{ label:'Asya', emoji:'🏯', gradient:['#FF69B4','#7B68EE'], tags:{asian:5}, setFilter:{continent:'asia'} },
          optionB:{ label:'Diğer', emoji:'🌏', gradient:['#00b09b','#96c93d'], tags:{oceanian:2,international:2}, setFilter:{continent:'oceania'} }
        },
        /* ───── FAZ 2: Akademik Tercihler ───── */
        { id:'u4', phase:2, text:'Alan tercihin?',
          condition:()=>true,
          optionA:{ label:'Mühendislik ve teknoloji', emoji:'⚙️', gradient:['#667eea','#764ba2'], tags:{techy:3,engineering:2,innovation:1} },
          optionB:{ label:'Beşeri bilimler ve sosyal bilimler', emoji:'📚', gradient:['#a18cd1','#fbc2eb'], tags:{humanities:3,cultural:1,tradition:1} }
        },
        { id:'u5', phase:2, text:'Araştırma mı uygulama mı?',
          condition:()=>true,
          optionA:{ label:'Akademik araştırma ve bilim', emoji:'🔬', gradient:['#36D1DC','#5B86E5'], tags:{research:3,innovation:1,competitive:1} },
          optionB:{ label:'Pratik uygulama ve endüstri', emoji:'🏭', gradient:['#f7971e','#ffd200'], tags:{engineering:2,entrepreneurial:1} }
        },
        { id:'u6', phase:2, text:'Kampüs yaşamı?',
          condition:()=>true,
          optionA:{ label:'Büyük kampüs, sosyal hayat', emoji:'🏟️', gradient:['#00b09b','#96c93d'], tags:{campus:3,community:2,social:1} },
          optionB:{ label:'Şehir merkezinde, urban yaşam', emoji:'🏙️', gradient:['#4834d4','#686de0'], tags:{urban:3,social:1,modern:1} }
        },
        { id:'u7', phase:2, text:'Prestij mi yoksa ortam mı?',
          condition:()=>true,
          optionA:{ label:'Dünyanın en prestijli üniversitesi', emoji:'🏆', gradient:['#0f0c29','#302b63'], tags:{prestige:3,competitive:2} },
          optionB:{ label:'Rahat ortam, iyi eğitim yeter', emoji:'😌', gradient:['#f6d365','#fda085'], tags:{community:2,campus:1} }
        },
        { id:'u8', phase:2, text:'Rekabetçi bir ortam mı?',
          condition:()=>true,
          optionA:{ label:'Evet, en iyilerle yarışmak isterim', emoji:'🏅', gradient:['#e65c00','#F9D423'], tags:{competitive:3,prestige:1} },
          optionB:{ label:'İşbirlikçi ve destekleyici', emoji:'🤝', gradient:['#ff758c','#ff7eb3'], tags:{community:3,campus:1} }
        },
        /* ───── FAZ 3: Detaylı Ayrım ───── */
        { id:'u9', phase:3, text:'Hangi alanda uzmanlaşmak istersin?',
          condition:(tags)=>tags.techy>=2||tags.engineering>=2,
          optionA:{ label:'Yapay zeka ve veri bilimi', emoji:'🤖', gradient:['#10A37F','#1A1A2E'], tags:{techy:2,innovation:2,research:1} },
          optionB:{ label:'Klasik mühendislik', emoji:'🔧', gradient:['#2c3e50','#3498db'], tags:{engineering:2,precision:1} }
        },
        { id:'u10', phase:3, text:'Tıp mı yoksa hukuk mu?',
          condition:(tags)=>tags.humanities>=2,
          optionA:{ label:'Tıp fakültesi', emoji:'🏥', gradient:['#11998e','#38ef7d'], tags:{medical:2,research:1,competitive:1} },
          optionB:{ label:'Hukuk veya siyaset', emoji:'⚖️', gradient:['#b8860b','#daa520'], tags:{humanities:2,prestige:1,competitive:1} }
        },
        { id:'u11', phase:3, text:'Yurtdışında yaşam tarzı?',
          condition:(t,f)=>f.region==='international',
          optionA:{ label:'Geleneksel kampüs, kolej hayatı', emoji:'🏫', gradient:['#6c5ce7','#a29bfe'], tags:{campus:2,tradition:2,community:1} },
          optionB:{ label:'Modern şehir, bağımsız yaşam', emoji:'🌆', gradient:['#4834d4','#686de0'], tags:{urban:2,modern:1,international:1} }
        },
        { id:'u12', phase:3, text:'Girişimcilik ekosistemi önemli mi?',
          condition:()=>true,
          optionA:{ label:'Evet, üniversitede startup kurmak isterim', emoji:'🚀', gradient:['#f7971e','#ffd200'], tags:{entrepreneurial:3,innovation:1} },
          optionB:{ label:'Hayır, akademik başarı yeter', emoji:'📖', gradient:['#2c3e50','#4ca1af'], tags:{research:2,tradition:1} }
        },
        { id:'u13', phase:3, text:'Spor ve kulüp aktiviteleri?',
          condition:()=>true,
          optionA:{ label:'Aktif spor hayatı, kulüpler', emoji:'🏋️', gradient:['#e65c00','#F9D423'], tags:{campus:2,community:2,social:1} },
          optionB:{ label:'Sadece akademik, kütüphane yeter', emoji:'📚', gradient:['#0f0c29','#302b63'], tags:{research:2,competitive:1,prestige:1} }
        },
        { id:'u14', phase:3, text:'Uluslararası öğrenci oranı?',
          condition:()=>true,
          optionA:{ label:'Çok uluslararası, çeşitli', emoji:'🌍', gradient:['#4834d4','#686de0'], tags:{international:2,diverse:2,modern:1} },
          optionB:{ label:'Yerel öğrenci ağırlıklı', emoji:'🏠', gradient:['#2c3e50','#4ca1af'], tags:{community:2,turkey:1} }
        },
        { id:'u15', phase:3, text:'Burs imkanları?',
          condition:()=>true,
          optionA:{ label:'Tam burslu eğitim şart', emoji:'🎓', gradient:['#00b09b','#96c93d'], tags:{campus:1,community:1} },
          optionB:{ label:'Ailem destekler, burs şart değil', emoji:'💰', gradient:['#f7971e','#ffd200'], tags:{prestige:1,competitive:1} }
        },
        { id:'u16', phase:3, text:'Akademik özgürlük?',
          condition:()=>true,
          optionA:{ label:'Kendi araştırma konumu seçmek', emoji:'🔓', gradient:['#6a11cb','#2575fc'], tags:{research:2,innovation:1} },
          optionB:{ label:'Yapılandırılmış müfredat', emoji:'📋', gradient:['#2c3e50','#4ca1af'], tags:{engineering:1,tradition:1,precision:1} }
        },
        { id:'u17', phase:3, text:'Mezun ağı?',
          condition:()=>true,
          optionA:{ label:'Güçlü alumni network şart', emoji:'🤝', gradient:['#f12711','#f5af19'], tags:{prestige:2,competitive:1} },
          optionB:{ label:'Önemli değil, eğitim kalitesi yeter', emoji:'📖', gradient:['#667eea','#764ba2'], tags:{research:1,community:1} }
        },
        { id:'u18', phase:3, text:'Endüstriyel bağlantılar?',
          condition:()=>true,
          optionA:{ label:'Şirketlerle yakın işbirliği', emoji:'🏢', gradient:['#134E5E','#71B280'], tags:{entrepreneurial:2,engineering:1} },
          optionB:{ label:'Saf akademik araştırma', emoji:'🔬', gradient:['#36D1DC','#5B86E5'], tags:{research:2,prestige:1} }
        },
        { id:'u19', phase:3, text:'Kampüs güzelliği?',
          condition:()=>true,
          optionA:{ label:'Tarihi, gotik mimari kampüs', emoji:'🏰', gradient:['#6c5ce7','#a29bfe'], tags:{tradition:2,campus:1,humanities:1} },
          optionB:{ label:'Modern, teknolojik kampüs', emoji:'🔮', gradient:['#667eea','#764ba2'], tags:{modern:1,techy:1,innovation:1} }
        },
        { id:'u20', phase:3, text:'Hangi Türk üniversitesi tarzını seversin?',
          condition:(t,f)=>f.region==='domestic',
          optionA:{ label:'Devlet üniversitesi, güçlü gelenek', emoji:'🏛️', gradient:['#8B0000','#CC0000'], tags:{turkey:2,campus:1,competitive:1,research:1} },
          optionB:{ label:'Vakıf üniversitesi, modern imkanlar', emoji:'🌟', gradient:['#003366','#FF6600'], tags:{turkey:2,campus:1,entrepreneurial:1,modern:1} }
        },
        { id:'u21', phase:3, text:'Mühendislik odaklı mı çok disiplinli mi?',
          condition:(t,f)=>f.region==='domestic',
          optionA:{ label:'Teknik üniversite', emoji:'⚙️', gradient:['#0A2463','#3E92CC'], tags:{engineering:2,techy:2,competitive:1} },
          optionB:{ label:'Kapsamlı üniversite', emoji:'🎯', gradient:['#E31837','#FF4757'], tags:{campus:2,community:2,research:1,medical:1} }
        },
        { id:'u22', phase:3, text:'Şehir tercihi?',
          condition:(t,f)=>f.region==='domestic',
          optionA:{ label:'Ankara', emoji:'🏛️', gradient:['#1B1464','#6C63FF'], tags:{turkey:1,campus:1,research:1,competitive:1} },
          optionB:{ label:'İstanbul', emoji:'🌉', gradient:['#FF6B35','#F7C59F'], tags:{turkey:1,urban:2,social:1,prestige:1} }
        },
        { id:'u23', phase:3, text:'Ivy League tarzı mı teknik üniversite mi?',
          condition:(t,f)=>f.continent==='northamerica',
          optionA:{ label:'Ivy League: Harvard, Yale, Princeton', emoji:'🏆', gradient:['#A41034','#C90016'], tags:{prestige:3,tradition:2,humanities:1} },
          optionB:{ label:'Teknik: MIT, Stanford, Caltech', emoji:'🔬', gradient:['#a31f34','#8b1a2b'], tags:{techy:2,innovation:2,engineering:2,research:1} }
        },
        { id:'u24', phase:3, text:'İngiliz geleneği mi Alman mühendisliği mi?',
          condition:(t,f)=>f.continent==='europe',
          optionA:{ label:'Oxford/Cambridge tarzı', emoji:'📜', gradient:['#002147','#1a3a5c'], tags:{tradition:2,prestige:2,humanities:1} },
          optionB:{ label:'ETH/TU München tarzı', emoji:'⚙️', gradient:['#1D3557','#457B9D'], tags:{engineering:2,precision:2,techy:1} }
        },
        { id:'u25', phase:3, text:'Disiplinler arası çalışma?',
          condition:()=>true,
          optionA:{ label:'Evet, farklı alanları birleştirmek', emoji:'🔀', gradient:['#f6d365','#fda085'], tags:{innovation:2,entrepreneurial:1,community:1} },
          optionB:{ label:'Hayır, tek alanda derinleşmek', emoji:'🔬', gradient:['#0f0c29','#302b63'], tags:{research:2,precision:1,engineering:1} }
        }
      ]
    }
  ]
};
