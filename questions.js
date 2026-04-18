/* ============================================================
   G.A.N.O? — Dallanmalı Soru Havuzu v2
   Her soru: condition, setFilter, tags
   Algoritma en uygun soruyu dinamik seçer
   ============================================================ */

const GAME_DATA = {
  categories: [
    /* ────────────────────────────────────────────────────────────
       MESLEK KATEGORİSİ
       ──────────────────────────────────────────────────────────── */
    {
      id: 'meslek',
      title: 'Meslek',
      subtitle: 'Gelecekte hangi mesleği icra edeceksin?',
      icon: '💼',
      gradient: ['#FF6B6B', '#FFE66D'],
      questions: [
        {
          id: 'm1', phase: 1,
          text: 'Nasıl bir çalışma hayatı hayal ediyorsun?',
          condition: (tags) => true,
          optionA: { label: 'Sabit Mesai (9-5)', emoji: '🏢', gradient: ['#667eea','#764ba2'], tags: { structured:1, discipline:1, office:1 } },
          optionB: { label: 'Esnek Çalışma Saatleri', emoji: '🌴', gradient: ['#f093fb','#f5576c'], tags: { flexible:1, creative:1, adventure:1 } }
        },
        {
          id: 'm2', phase: 1,
          text: 'Çalışma ortamın nasıl olsun?',
          condition: (tags) => true,
          optionA: { label: 'Ofis / İç Mekan', emoji: '💼', gradient: ['#4facfe','#00f2fe'], tags: { office:1, indoor:1 } },
          optionB: { label: 'Saha / Dış Mekan', emoji: '🌍', gradient: ['#43e97b','#38f9d7'], tags: { field:1, adventure:1 } }
        },
        {
          id: 'm3', phase: 1,
          text: 'Nasıl çalışmayı seversin?',
          condition: (tags) => true,
          optionA: { label: 'Bireysel', emoji: '🧑‍💻', gradient: ['#fa709a','#fee140'], tags: { individual:1, focus:1 } },
          optionB: { label: 'Takım Halinde', emoji: '👥', gradient: ['#a18cd1','#fbc2eb'], tags: { team:1, social:1, leadership:1 } }
        },
        {
          id: 'm4', phase: 1,
          text: 'Hangi becerin daha güçlü?',
          condition: (tags) => true,
          optionA: { label: 'Analitik Düşünce', emoji: '🧮', gradient: ['#0f0c29','#302b63'], tags: { analytic:2, logic:1 } },
          optionB: { label: 'Yaratıcı Düşünce', emoji: '🎨', gradient: ['#ff9a9e','#fad0c4'], tags: { creative:2, art:1 } }
        },
        {
          id: 'm5', phase: 1,
          text: 'İş hayatında önceliğin ne?',
          condition: (tags) => true,
          optionA: { label: 'Yüksek Maaş', emoji: '💰', gradient: ['#f7971e','#ffd200'], tags: { money:2, ambition:1 } },
          optionB: { label: 'İş Tatmini', emoji: '😊', gradient: ['#a18cd1','#fbc2eb'], tags: { satisfaction:2, meaning:1 } }
        },
        {
          id: 'm6', phase: 2,
          text: 'Hangi alan ilgini daha çok çekiyor?',
          condition: (tags) => true,
          optionA: { label: 'Teknoloji', emoji: '💻', gradient: ['#4834d4','#686de0'], tags: { tech:2, machine:1, innovation:1 } },
          optionB: { label: 'İnsan & Toplum', emoji: '🤝', gradient: ['#eb3349','#f45c43'], tags: { people:2, empathy:1, social:1 } }
        },
        {
          id: 'm7', phase: 2,
          text: 'Risk almayı sever misin?',
          condition: (tags) => true,
          optionA: { label: 'Risk Alırım', emoji: '🎯', gradient: ['#f12711','#f5af19'], tags: { risk:2, courage:1, ambition:1 } },
          optionB: { label: 'Güvenli Tercih Ederim', emoji: '🛡️', gradient: ['#2193b0','#6dd5ed'], tags: { stability:1, discipline:1, structured:1 } }
        },
        {
          id: 'm8', phase: 2,
          text: 'Detaylara mı yoksa büyük resme mi odaklanırsın?',
          condition: (tags) => true,
          optionA: { label: 'Detay Odaklı', emoji: '🔍', gradient: ['#1a2a6c','#b21f1f'], tags: { detail:2, precision:1, focus:1 } },
          optionB: { label: 'Büyük Resim', emoji: '🌄', gradient: ['#f093fb','#f5576c'], tags: { bigpicture:2, vision:1, strategy:1 } }
        },
        {
          id: 'm9', phase: 2,
          text: 'İnsanlara yardım etmek mi yoksa bir şeyler üretmek mi?',
          condition: (tags) => true,
          optionA: { label: 'İnsanlara Yardım', emoji: '❤️', gradient: ['#11998e','#38ef7d'], tags: { people:1, empathy:1, satisfaction:1, meaning:1 } },
          optionB: { label: 'Bir Şeyler Üretmek', emoji: '⚒️', gradient: ['#e65c00','#F9D423'], tags: { creative:1, innovation:1, tech:1, machine:1 } }
        },
        {
          id: 'm10', phase: 2,
          text: 'Lider olmayı mı yoksa uzman olmayı mı tercih edersin?',
          condition: (tags) => true,
          optionA: { label: 'Lider Olmak', emoji: '👑', gradient: ['#f7971e','#ffd200'], tags: { leadership:2, ambition:1, bigpicture:1 } },
          optionB: { label: 'Uzmanlaşmak', emoji: '🎯', gradient: ['#667eea','#764ba2'], tags: { depth:2, focus:1, precision:1 } }
        },
        {
          id: 'm11', phase: 3,
          text: 'Daha çok hangi konuya ilgi duyarsın?',
          condition: (tags) => tags.tech > 0 || tags.analytic > 0,
          optionA: { label: 'Yazılım & Kodlama', emoji: '👨‍💻', gradient: ['#0f0c29','#302b63'], tags: { tech:1, logic:1, machine:1, detail:1 } },
          optionB: { label: 'Veri & Analiz', emoji: '📊', gradient: ['#4834d4','#686de0'], tags: { analytic:1, detail:1, precision:1, logic:1 } }
        },
        {
          id: 'm12', phase: 3,
          text: 'Sanat ve estetik senin için ne kadar önemli?',
          condition: (tags) => tags.creative > 0 || tags.art > 0,
          optionA: { label: 'Çok Önemli', emoji: '🎨', gradient: ['#f6d365','#fda085'], tags: { art:2, creative:1, vision:1 } },
          optionB: { label: 'Az Önemli', emoji: '📐', gradient: ['#667eea','#764ba2'], tags: { analytic:1, logic:1, structured:1 } }
        },
        {
          id: 'm13', phase: 3,
          text: 'Kurallara uyar mısın yoksa kuralları sen mi koyarsın?',
          condition: (tags) => true,
          optionA: { label: 'Kurallara Uyarım', emoji: '📋', gradient: ['#2193b0','#6dd5ed'], tags: { discipline:1, structured:1, stability:1 } },
          optionB: { label: 'Kuralları Ben Belirlerim', emoji: '🔥', gradient: ['#f12711','#f5af19'], tags: { leadership:1, risk:1, creative:1, vision:1 } }
        },
        {
          id: 'm14', phase: 3,
          text: 'Makinelerle mi yoksa insanlarla mı çalışmayı tercih edersin?',
          condition: (tags) => true,
          optionA: { label: 'Makineler & Teknoloji', emoji: '🤖', gradient: ['#6a11cb','#2575fc'], tags: { machine:2, tech:1 } },
          optionB: { label: 'İnsanlar & İletişim', emoji: '🗣️', gradient: ['#f093fb','#f5576c'], tags: { people:1, social:1, empathy:1 } }
        },
        {
          id: 'm15', phase: 3,
          text: 'İşinde derinlemesine mi yoksa geniş perspektifle mi çalışmak istersin?',
          condition: (tags) => true,
          optionA: { label: 'Derin ve Odaklı', emoji: '🧬', gradient: ['#36D1DC','#5B86E5'], tags: { depth:1, focus:1, detail:1 } },
          optionB: { label: 'Geniş ve Genel', emoji: '🌐', gradient: ['#e65c00','#F9D423'], tags: { bigpicture:1, strategy:1, leadership:1 } }
        },
        {
          id: 'm16', phase: 3,
          text: 'Gelecekte kendini nerede görüyorsun?',
          condition: (tags) => true,
          optionA: { label: 'Kendi İşimin Patronu', emoji: '🏠', gradient: ['#f7971e','#ffd200'], tags: { risk:1, leadership:1, ambition:1, vision:1 } },
          optionB: { label: 'Köklü Bir Kurumda', emoji: '🏛️', gradient: ['#2c3e50','#3498db'], tags: { stability:1, structured:1, discipline:1, office:1 } }
        },
        {
          id: 'm17', phase: 3,
          text: 'Adrenalin ve heyecan arar mısın?',
          condition: (tags) => tags.risk > 0 || tags.adventure > 0,
          optionA: { label: 'Evet, Heyecan İsterim', emoji: '⚡', gradient: ['#f12711','#f5af19'], tags: { courage:1, adventure:1, risk:1 } },
          optionB: { label: 'Sakinlik ve Huzur', emoji: '🧘', gradient: ['#a18cd1','#fbc2eb'], tags: { stability:1, satisfaction:1, meaning:1 } }
        }
      ]
    },

    /* ────────────────────────────────────────────────────────────
       ŞİRKET KATEGORİSİ
       ──────────────────────────────────────────────────────────── */
    {
      id: 'sirket',
      title: 'Şirket',
      subtitle: 'Gelecekte hangi şirkette çalışacaksın?',
      icon: '🏢',
      gradient: ['#667eea', '#764ba2'],
      questions: [
        {
          id: 's1', phase: 1,
          text: 'Nasıl bir şirket kültürü istersin?',
          condition: (tags) => true,
          optionA: { label: 'Yenilikçi & Rahat', emoji: '🎉', gradient: ['#a18cd1','#fbc2eb'], tags: { innovation:1, freedom:1, fun:1, casual:1 } },
          optionB: { label: 'Kurumsal & Profesyonel', emoji: '👔', gradient: ['#2c3e50','#3498db'], tags: { professional:1, stability:1, order:1, traditional:1 } }
        },
        {
          id: 's2', phase: 1,
          text: 'Hangi sektör seni çekiyor?',
          condition: (tags) => true,
          optionA: { label: 'Teknoloji', emoji: '💻', gradient: ['#667eea','#764ba2'], tags: { innovation:1, future:1, scale:1 } },
          optionB: { label: 'Diğer Sektörler', emoji: '🌐', gradient: ['#43e97b','#38f9d7'], tags: { brand:1, community:1, quality:1 } }
        },
        {
          id: 's3', phase: 1,
          text: 'Şirketin büyüklüğü önemli mi?',
          condition: (tags) => true,
          optionA: { label: 'Dev Bir Şirket', emoji: '🏙️', gradient: ['#4834d4','#686de0'], tags: { scale:2, global:1, resources:1 } },
          optionB: { label: 'Küçük ama Etkili', emoji: '🚀', gradient: ['#f7971e','#ffd200'], tags: { startup:1, speed:1, innovation:1, freedom:1 } }
        },
        {
          id: 's4', phase: 1,
          text: 'İş yaşamında denge mi yoğunluk mu?',
          condition: (tags) => true,
          optionA: { label: 'İş-Yaşam Dengesi', emoji: '⚖️', gradient: ['#a8e063','#56ab2f'], tags: { freedom:1, fun:1, casual:1 } },
          optionB: { label: 'Yoğun Tempo', emoji: '🔥', gradient: ['#f12711','#f5af19'], tags: { intensity:1, speed:1, growth:1, profit:1 } }
        },
        {
          id: 's5', phase: 1,
          text: 'Çalıştığın şirketin bir misyonu olmalı mı?',
          condition: (tags) => true,
          optionA: { label: 'Evet, Misyon Çok Önemli', emoji: '🌍', gradient: ['#0f0c29','#302b63'], tags: { mission:2, social_impact:1, future:1 } },
          optionB: { label: 'Hayır, Marka ve Kazanç Yeterli', emoji: '💎', gradient: ['#f9ca24','#f0932b'], tags: { brand:1, premium:1, profit:1, prestige:1 } }
        },
        {
          id: 's6', phase: 2,
          text: 'Hangi ürün tipi seni heyecanlandırır?',
          condition: (tags) => true,
          optionA: { label: 'Donanım & Fiziksel', emoji: '📱', gradient: ['#333','#666'], tags: { quality:1, premium:1, brand:1 } },
          optionB: { label: 'Yazılım & Dijital', emoji: '🖥️', gradient: ['#667eea','#764ba2'], tags: { innovation:1, creativity:1, scale:1 } }
        },
        {
          id: 's7', phase: 2,
          text: 'Şirketin hangi özelliği seni en çok etkiler?',
          condition: (tags) => true,
          optionA: { label: 'Geleceği Şekillendirmek', emoji: '🔮', gradient: ['#6a11cb','#2575fc'], tags: { future:2, innovation:1, mission:1 } },
          optionB: { label: 'Dünya Çapında Tanınırlık', emoji: '🌟', gradient: ['#f7971e','#ffd200'], tags: { brand:2, global:1, prestige:1 } }
        },
        {
          id: 's8', phase: 2,
          text: 'Eğlenceli bir ortam mı yoksa ciddi bir ortam mı?',
          condition: (tags) => true,
          optionA: { label: 'Eğlenceli & Kreatif', emoji: '🎮', gradient: ['#8E2DE2','#4A00E0'], tags: { fun:2, creativity:1, casual:1, freedom:1 } },
          optionB: { label: 'Ciddi & Odaklı', emoji: '📊', gradient: ['#1a2a6c','#b21f1f'], tags: { professional:1, intensity:1, prestige:1, order:1 } }
        },
        {
          id: 's9', phase: 2,
          text: 'Hangi endüstri daha çekici?',
          condition: (tags) => true,
          optionA: { label: 'Uzay & Havacılık', emoji: '🚀', gradient: ['#0B3D91','#FC3D21'], tags: { space:2, mission:1, future:1 } },
          optionB: { label: 'Eğlence & Medya', emoji: '🎬', gradient: ['#E50914','#B20710'], tags: { fun:1, creativity:1, brand:1, community:1 } }
        },
        {
          id: 's10', phase: 2,
          text: 'Yerli mi yoksa global bir şirket mi?',
          condition: (tags) => true,
          optionA: { label: 'Yerli & Milli', emoji: '🇹🇷', gradient: ['#C8102E','#003E74'], tags: { local:2, community:1, social_impact:1 } },
          optionB: { label: 'Global & Uluslararası', emoji: '🌍', gradient: ['#4834d4','#686de0'], tags: { global:2, scale:1, brand:1 } }
        },
        {
          id: 's11', phase: 3,
          text: 'Oyun dünyası seni çeker mi?',
          condition: (tags) => tags.fun > 0 || tags.creativity > 0,
          optionA: { label: 'Evet, Oyun Tutkusu', emoji: '🎮', gradient: ['#8E2DE2','#4A00E0'], tags: { fun:1, creativity:1, community:1 } },
          optionB: { label: 'Hayır, Başka Türlü Eğlence', emoji: '🎵', gradient: ['#1DB954','#191414'], tags: { creativity:1, brand:1, accessible:1 } }
        },
        {
          id: 's12', phase: 3,
          text: 'Otomotiv sektörü ilgini çeker mi?',
          condition: (tags) => tags.quality > 0 || tags.premium > 0,
          optionA: { label: 'Evet, Lüks Arabalar', emoji: '🏎️', gradient: ['#1C69D4','#262626'], tags: { premium:1, quality:1, brand:1, traditional:1 } },
          optionB: { label: 'Hayır, Daha Farklı Alanlar', emoji: '🔬', gradient: ['#36D1DC','#5B86E5'], tags: { innovation:1, future:1, mission:1 } }
        },
        {
          id: 's13', phase: 3,
          text: 'Savunma sanayii ilgini çeker mi?',
          condition: (tags) => tags.local > 0 || tags.mission > 0,
          optionA: { label: 'Evet, Milli Savunma', emoji: '🛡️', gradient: ['#1B3A5C','#4A7FB5'], tags: { local:1, mission:1, professional:1, order:1 } },
          optionB: { label: 'Hayır, Sivil Sektör', emoji: '🏢', gradient: ['#43e97b','#38f9d7'], tags: { casual:1, community:1, accessible:1 } }
        },
        {
          id: 's14', phase: 3,
          text: 'Finans ve yatırım dünyası çeker mi?',
          condition: (tags) => tags.profit > 0 || tags.prestige > 0,
          optionA: { label: 'Evet, Wall Street Tarzı', emoji: '📈', gradient: ['#00263A','#7399C6'], tags: { profit:1, prestige:1, intensity:1, professional:1 } },
          optionB: { label: 'Hayır, Ürün Odaklı', emoji: '📦', gradient: ['#FF9900','#232F3E'], tags: { scale:1, growth:1, speed:1 } }
        },
        {
          id: 's15', phase: 3,
          text: 'Yapay zeka odaklı bir şirkette çalışmak ister misin?',
          condition: (tags) => tags.innovation > 0 || tags.future > 0,
          optionA: { label: 'Evet, AI Tutkusu', emoji: '🧠', gradient: ['#10A37F','#1A1A2E'], tags: { innovation:1, future:1, mission:1, quality:1 } },
          optionB: { label: 'Hayır, Farklı Teknolojiler', emoji: '⚡', gradient: ['#76B900','#1A1A1A'], tags: { quality:1, scale:1, resources:1 } }
        },
        {
          id: 's16', phase: 3,
          text: 'Spor ve macera sektörü ister misin?',
          condition: (tags) => tags.fun > 0 || tags.casual > 0,
          optionA: { label: 'Evet, Adrenalin', emoji: '🐂', gradient: ['#DB0A40','#F7DC6F'], tags: { fun:1, speed:1, brand:1, casual:1 } },
          optionB: { label: 'Daha Kurumsal', emoji: '🏢', gradient: ['#2c3e50','#3498db'], tags: { professional:1, stability:1, order:1 } }
        }
      ]
    },

    /* ────────────────────────────────────────────────────────────
       ŞEHİR KATEGORİSİ
       ──────────────────────────────────────────────────────────── */
    {
      id: 'sehir',
      title: 'Şehir',
      subtitle: 'Gelecekte hangi şehirde yaşayacaksın?',
      icon: '🌆',
      gradient: ['#43e97b', '#38f9d7'],
      questions: [
        {
          id: 'c1', phase: 1,
          text: 'Nerede yaşamak istersin?',
          condition: (tags, filters) => !filters.region,
          optionA: { label: 'Yurt İçi', emoji: '🇹🇷', gradient: ['#C8102E','#E8111C'], tags: { domestic:2 }, setFilter: { region: 'domestic' } },
          optionB: { label: 'Yurt Dışı', emoji: '🌍', gradient: ['#667eea','#764ba2'], tags: { international:2 }, setFilter: { region: 'international' } }
        },
        {
          id: 'c2_int', phase: 1,
          text: 'Hangi kıta seni daha çok çekiyor?',
          condition: (tags, filters) => filters.region === 'international' && !filters.continent,
          optionA: { label: 'Avrupa', emoji: '🏰', gradient: ['#6c5ce7','#a29bfe'], tags: { european:2 }, setFilter: { continent: 'europe' } },
          optionB: { label: 'Amerika', emoji: '🗽', gradient: ['#4834d4','#686de0'], tags: { american:2 }, setFilter: { continent: 'northamerica' } }
        },
        {
          id: 'c2_int_b', phase: 1,
          text: 'Yoksa bu kıtalar mı?',
          condition: (tags, filters) => filters.region === 'international' && !filters.continent && !tags.european && !tags.american,
          optionA: { label: 'Asya', emoji: '🏯', gradient: ['#FF69B4','#7B68EE'], tags: { asian:2 }, setFilter: { continent: 'asia' } },
          optionB: { label: 'Diğer (Afrika/Okyanusya/G.Amerika)', emoji: '🌍', gradient: ['#43e97b','#38f9d7'], tags: { adventurous:1, exotic:1 } }
        },
        {
          id: 'c3', phase: 1,
          text: 'Deniz kenarı mı yoksa iç bölge mi?',
          condition: (tags) => !tags.coastal && !tags.inland,
          optionA: { label: 'Deniz Kenarı', emoji: '🏖️', gradient: ['#00d2ff','#3a7bd5'], tags: { coastal:2, beach:1, warm:1 } },
          optionB: { label: 'İç Bölge / Dağ', emoji: '🏔️', gradient: ['#74b9ff','#dfe6e9'], tags: { inland:2, continental:1 } }
        },
        {
          id: 'c4', phase: 1,
          text: 'İklim tercihin ne?',
          condition: (tags) => !tags.warm && !tags.cold,
          optionA: { label: 'Sıcak & Güneşli', emoji: '☀️', gradient: ['#f9ca24','#f0932b'], tags: { warm:2, tropical:1 } },
          optionB: { label: 'Serin & Dört Mevsim', emoji: '❄️', gradient: ['#74b9ff','#a4c4fa'], tags: { cold:2, continental:1 } }
        },
        {
          id: 'c5', phase: 2,
          text: 'Şehrin hızı nasıl olsun?',
          condition: (tags) => true,
          optionA: { label: 'Hareketli & Kalabalık', emoji: '🏙️', gradient: ['#4834d4','#686de0'], tags: { bustling:2, lively:1, nightlife:1 } },
          optionB: { label: 'Sakin & Huzurlu', emoji: '🌿', gradient: ['#a8e063','#56ab2f'], tags: { peaceful:2, relaxed:1, cozy:1 } }
        },
        {
          id: 'c6', phase: 2,
          text: 'Yaşam maliyeti önemli mi?',
          condition: (tags) => true,
          optionA: { label: 'Uygun Fiyatlı Olsun', emoji: '💰', gradient: ['#56ab2f','#a8e063'], tags: { affordable:2 } },
          optionB: { label: 'Lüks Yaşam İsterim', emoji: '💎', gradient: ['#f9ca24','#f0932b'], tags: { luxurious:2, prestigious:1, modern:1 } }
        },
        {
          id: 'c7', phase: 2,
          text: 'Şehirde ne önemli senin için?',
          condition: (tags) => true,
          optionA: { label: 'Tarih & Kültür', emoji: '🏛️', gradient: ['#DAA520','#8B4513'], tags: { historical:2, cultural:2 } },
          optionB: { label: 'Modernlik & Teknoloji', emoji: '🏗️', gradient: ['#6a11cb','#2575fc'], tags: { modern:2, techy:1 } }
        },
        {
          id: 'c8', phase: 2,
          text: 'Yemek kültürü önemli mi?',
          condition: (tags) => true,
          optionA: { label: 'Mutlaka! Lezzet Her Şey', emoji: '🍽️', gradient: ['#FF4B2B','#FF416C'], tags: { foodie:2, cultural:1 } },
          optionB: { label: 'O Kadar Değil', emoji: '🥗', gradient: ['#a8e063','#56ab2f'], tags: { orderly:1, modern:1 } }
        },
        {
          id: 'c9', phase: 2,
          text: 'Gece hayatı önemli mi?',
          condition: (tags) => tags.bustling > 0 || tags.lively > 0,
          optionA: { label: 'Evet, Gece Hayatı Şart', emoji: '🌃', gradient: ['#0f0c29','#302b63'], tags: { nightlife:2, social:1, lively:1 } },
          optionB: { label: 'Hayır, Gündüz Yeterli', emoji: '🌅', gradient: ['#f6d365','#fda085'], tags: { peaceful:1, relaxed:1, green:1 } }
        },
        {
          id: 'c10', phase: 3,
          text: 'Doğa ile iç içe mi yoksa betonlar arasında mı?',
          condition: (tags) => true,
          optionA: { label: 'Doğa İç İçe', emoji: '🌲', gradient: ['#2ed573','#1e90ff'], tags: { green:2, natural:2 } },
          optionB: { label: 'Şehrin Ortası', emoji: '🏢', gradient: ['#636E72','#FD79A8'], tags: { bustling:1, modern:1, urban:1 } }
        },
        {
          id: 'c11', phase: 3,
          text: 'Sanat ve yaratıcılık ortamı önemli mi?',
          condition: (tags) => true,
          optionA: { label: 'Evet, Sanat Şehri', emoji: '🎨', gradient: ['#f6d365','#fda085'], tags: { artistic:2, cultural:1, alternative:1 } },
          optionB: { label: 'Hayır, Ticaret Şehri', emoji: '💼', gradient: ['#134E5E','#71B280'], tags: { ambitious:1, modern:1, bustling:1 } }
        },
        {
          id: 'c12', phase: 3,
          text: 'Egzotik bir kültür mü yoksa tanıdık mı?',
          condition: (tags) => filters => filters.region === 'international',
          optionA: { label: 'Egzotik & Farklı', emoji: '🏯', gradient: ['#FF69B4','#7B68EE'], tags: { exotic:2, adventurous:1 } },
          optionB: { label: 'Tanıdık & Rahat', emoji: '🏠', gradient: ['#a18cd1','#fbc2eb'], tags: { european:1, orderly:1, cozy:1 } }
        },
        {
          id: 'c13', phase: 3,
          text: 'Çeşitlilik ve kozmopolit yapı önemli mi?',
          condition: (tags) => true,
          optionA: { label: 'Çok Kültürlü Olsun', emoji: '🌈', gradient: ['#667eea','#764ba2'], tags: { diverse:2, social:1 } },
          optionB: { label: 'Homojen & Samimi', emoji: '🏘️', gradient: ['#e17055','#fdcb6e'], tags: { cozy:1, traditional:1, peaceful:1 } }
        },
        {
          id: 'c14', phase: 3,
          text: 'Düzen ve güvenlik mi yoksa macera mı?',
          condition: (tags) => true,
          optionA: { label: 'Düzenli & Güvenli', emoji: '🛡️', gradient: ['#1D3557','#457B9D'], tags: { orderly:2, peaceful:1 } },
          optionB: { label: 'Maceralı & Keşfe Açık', emoji: '🗺️', gradient: ['#f12711','#f5af19'], tags: { adventurous:2, exotic:1 } }
        },
        {
          id: 'c15', phase: 3,
          text: 'Özgürlük ve alternatif yaşam mı?',
          condition: (tags) => true,
          optionA: { label: 'Özgür & Alternatif', emoji: '☮️', gradient: ['#e17055','#fdcb6e'], tags: { free:2, alternative:1, artistic:1 } },
          optionB: { label: 'Geleneksel & Düzenli', emoji: '📏', gradient: ['#2c3e50','#3498db'], tags: { orderly:1, traditional:1, structured:1 } }
        },
        {
          id: 'c16', phase: 3,
          text: 'Güney Amerika veya Afrika gibi yerlere açık mısın?',
          condition: (tags, filters) => filters.region === 'international' && !filters.continent,
          optionA: { label: 'Evet, Keşfetmeye Hazırım', emoji: '🌎', gradient: ['#009C3B','#FFDF00'], tags: { adventurous:1, exotic:1, warm:1 } },
          optionB: { label: 'Hayır, Klasik Rotalar', emoji: '🗺️', gradient: ['#6c5ce7','#a29bfe'], tags: { european:1, orderly:1, prestigious:1 } }
        }
      ]
    },

    /* ────────────────────────────────────────────────────────────
       ÜNİVERSİTE KATEGORİSİ
       ──────────────────────────────────────────────────────────── */
    {
      id: 'universite',
      title: 'Üniversite',
      subtitle: 'Geleceğin hangi üniversitede?',
      icon: '🎓',
      gradient: ['#f7971e', '#ffd200'],
      questions: [
        {
          id: 'u1', phase: 1,
          text: 'Eğitimini nerede almak istersin?',
          condition: (tags, filters) => !filters.region,
          optionA: { label: 'Yurt İçi', emoji: '🇹🇷', gradient: ['#C8102E','#E8111C'], tags: { turkey:2 }, setFilter: { region: 'domestic' } },
          optionB: { label: 'Yurt Dışı', emoji: '✈️', gradient: ['#667eea','#764ba2'], tags: { international:2 }, setFilter: { region: 'international' } }
        },
        {
          id: 'u2_int', phase: 1,
          text: 'Hangi bölge seni çeker?',
          condition: (tags, filters) => filters.region === 'international' && !filters.continent,
          optionA: { label: 'Avrupa', emoji: '🏰', gradient: ['#6c5ce7','#a29bfe'], tags: { european:2 }, setFilter: { continent: 'europe' } },
          optionB: { label: 'Kuzey Amerika', emoji: '🗽', gradient: ['#4834d4','#686de0'], tags: { american:1 }, setFilter: { continent: 'northamerica' } }
        },
        {
          id: 'u2_int_b', phase: 1,
          text: 'Yoksa Asya veya diğer bölgeler mi?',
          condition: (tags, filters) => filters.region === 'international' && !filters.continent && !tags.european && !tags.american,
          optionA: { label: 'Asya', emoji: '🏯', gradient: ['#FF69B4','#7B68EE'], tags: { asian:2 }, setFilter: { continent: 'asia' } },
          optionB: { label: 'Diğer (Okyanusya/Kanada)', emoji: '🌏', gradient: ['#43e97b','#38f9d7'], tags: { international:1 } }
        },
        {
          id: 'u3', phase: 1,
          text: 'Hangi alan seni daha çok çeker?',
          condition: (tags) => true,
          optionA: { label: 'Mühendislik & Fen', emoji: '⚙️', gradient: ['#0f0c29','#302b63'], tags: { engineering:2, techy:1, research:1 } },
          optionB: { label: 'Sosyal & Beşeri Bilimler', emoji: '📖', gradient: ['#ff758c','#ff7eb3'], tags: { humanities:2, cultural:1 } }
        },
        {
          id: 'u4', phase: 1,
          text: 'Kampüs yaşamı mı yoksa şehir merkezinde mi?',
          condition: (tags) => true,
          optionA: { label: 'Geniş Kampüs', emoji: '🌳', gradient: ['#43e97b','#38f9d7'], tags: { campus:2, community:1 } },
          optionB: { label: 'Şehir İçi', emoji: '🏙️', gradient: ['#636E72','#FD79A8'], tags: { urban:2, social:1 } }
        },
        {
          id: 'u5', phase: 2,
          text: 'Akademik yaklaşım tercihin?',
          condition: (tags) => true,
          optionA: { label: 'Araştırma Odaklı', emoji: '🔬', gradient: ['#36D1DC','#5B86E5'], tags: { research:2, innovation:1 } },
          optionB: { label: 'Uygulama Odaklı', emoji: '🛠️', gradient: ['#f093fb','#f5576c'], tags: { entrepreneurial:1, techy:1, engineering:1 } }
        },
        {
          id: 'u6', phase: 2,
          text: 'Ne tür bir atmosfer tercih edersin?',
          condition: (tags) => true,
          optionA: { label: 'Rekabetçi & Yoğun', emoji: '🏆', gradient: ['#f12711','#f5af19'], tags: { competitive:2, prestige:1 } },
          optionB: { label: 'İşbirlikçi & Rahat', emoji: '🤝', gradient: ['#a18cd1','#fbc2eb'], tags: { community:2, social:1 } }
        },
        {
          id: 'u7', phase: 2,
          text: 'Prestij mi yoksa fırsatlar mı?',
          condition: (tags) => true,
          optionA: { label: 'Prestij & İsim', emoji: '👑', gradient: ['#f7971e','#ffd200'], tags: { prestige:2, tradition:1 } },
          optionB: { label: 'Fırsat & İnovasyon', emoji: '💡', gradient: ['#6a11cb','#2575fc'], tags: { innovation:2, entrepreneurial:1 } }
        },
        {
          id: 'u8', phase: 2,
          text: 'Köklü gelenek mi yoksa yenilikçi anlayış mı?',
          condition: (tags) => true,
          optionA: { label: 'Köklü Gelenek', emoji: '🏛️', gradient: ['#2c3e50','#3498db'], tags: { tradition:2 } },
          optionB: { label: 'Yenilikçi Anlayış', emoji: '🚀', gradient: ['#8E2DE2','#4A00E0'], tags: { innovation:1, entrepreneurial:1, techy:1 } }
        },
        {
          id: 'u9', phase: 2,
          text: 'Üniversiteden sonraki hedefin ne?',
          condition: (tags) => true,
          optionA: { label: 'Akademisyen Olmak', emoji: '📚', gradient: ['#4b6cb7','#182848'], tags: { research:1, tradition:1, prestige:1 } },
          optionB: { label: 'Sektörde Kariyer', emoji: '💼', gradient: ['#f7971e','#ffd200'], tags: { entrepreneurial:1, engineering:1, competitive:1 } }
        },
        {
          id: 'u10', phase: 3,
          text: 'Tıp veya sağlık bilimleri ilgini çeker mi?',
          condition: (tags) => !tags.engineering || tags.engineering < 2,
          optionA: { label: 'Evet, Tıp İlgimi Çeker', emoji: '🏥', gradient: ['#11998e','#38ef7d'], tags: { medical:2, research:1 } },
          optionB: { label: 'Hayır, Farklı Alanlar', emoji: '🔧', gradient: ['#667eea','#764ba2'], tags: { engineering:1, techy:1 } }
        },
        {
          id: 'u11', phase: 3,
          text: 'Uluslararası öğrenci çeşitliliği önemli mi?',
          condition: (tags) => true,
          optionA: { label: 'Evet, Kozmopolit Ortam', emoji: '🌐', gradient: ['#4834d4','#686de0'], tags: { international:1, diverse:1, global:1 } },
          optionB: { label: 'Hayır, Yerel Bağ Önemli', emoji: '🏘️', gradient: ['#e17055','#fdcb6e'], tags: { community:1, turkey:1 } }
        },
        {
          id: 'u12', phase: 3,
          text: 'Topluluk hayatı ve kulüpler önemli mi?',
          condition: (tags) => true,
          optionA: { label: 'Çok Önemli', emoji: '🎭', gradient: ['#a18cd1','#fbc2eb'], tags: { community:1, social:1, campus:1 } },
          optionB: { label: 'Akademik Odak Yeterli', emoji: '📖', gradient: ['#1a2a6c','#b21f1f'], tags: { research:1, competitive:1, precision:1 } }
        },
        {
          id: 'u13', phase: 3,
          text: 'Disiplinler arası eğitim mi yoksa uzmanlaşma mı?',
          condition: (tags) => true,
          optionA: { label: 'Disiplinler Arası', emoji: '🔀', gradient: ['#f093fb','#f5576c'], tags: { innovation:1, entrepreneurial:1, humanities:1 } },
          optionB: { label: 'Tek Alanda Derinlik', emoji: '🎯', gradient: ['#0f0c29','#302b63'], tags: { engineering:1, research:1, precision:1 } }
        },
        {
          id: 'u14', phase: 3,
          text: 'Üniversitenin endüstri ile bağı önemli mi?',
          condition: (tags) => true,
          optionA: { label: 'Evet, İş Fırsatları Şart', emoji: '🏭', gradient: ['#134E5E','#71B280'], tags: { entrepreneurial:1, engineering:1, techy:1 } },
          optionB: { label: 'Akademik Bağımsızlık', emoji: '🔬', gradient: ['#36D1DC','#5B86E5'], tags: { research:1, tradition:1, prestige:1 } }
        },
        {
          id: 'u15', phase: 3,
          text: 'Girişimcilik ekosistemi önemli mi?',
          condition: (tags) => tags.entrepreneurial > 0 || tags.innovation > 0,
          optionA: { label: 'Evet, Start-up Kültürü', emoji: '🚀', gradient: ['#8E2DE2','#4A00E0'], tags: { entrepreneurial:2, innovation:1 } },
          optionB: { label: 'Klasik Akademik Ortam', emoji: '🏛️', gradient: ['#2c3e50','#3498db'], tags: { tradition:1, prestige:1, research:1 } }
        }
      ]
    }
  ]
};
