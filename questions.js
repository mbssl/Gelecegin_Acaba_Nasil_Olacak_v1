/* ============================================================
   G.A.N.O? — Soru Veritabanı
   4 Kategori × 10 Soru × 2 Şık
   ============================================================ */

const GAME_DATA = {
  categories: [
    /* ──────────────────── MESLEK ──────────────────── */
    {
      id: 'meslek',
      title: 'Meslek',
      subtitle: 'Gelecekte hangi mesleği icra edeceksin?',
      icon: '💼',
      gradient: ['#FF6B6B', '#FFE66D'],
      questions: [
        {
          id: 1,
          text: 'Nasıl bir çalışma düzeni tercih edersin?',
          optionA: {
            label: 'Sabit Mesai',
            emoji: '🏢',
            gradient: ['#667eea', '#764ba2'],
            tags: { structured: 1, discipline: 1 }
          },
          optionB: {
            label: 'Esnek Çalışma',
            emoji: '🌴',
            gradient: ['#f093fb', '#f5576c'],
            tags: { flexible: 1, creative: 1 }
          }
        },
        {
          id: 2,
          text: 'Çalışma ortamın nasıl olsun?',
          optionA: {
            label: 'Ofis',
            emoji: '💼',
            gradient: ['#4facfe', '#00f2fe'],
            tags: { office: 1, indoor: 1 }
          },
          optionB: {
            label: 'Saha',
            emoji: '🌍',
            gradient: ['#43e97b', '#38f9d7'],
            tags: { field: 1, adventure: 1 }
          }
        },
        {
          id: 3,
          text: 'Nasıl çalışmayı seversin?',
          optionA: {
            label: 'Bireysel',
            emoji: '🧑‍💻',
            gradient: ['#fa709a', '#fee140'],
            tags: { individual: 1, focus: 1 }
          },
          optionB: {
            label: 'Takım',
            emoji: '👥',
            gradient: ['#a18cd1', '#fbc2eb'],
            tags: { team: 1, social: 1 }
          }
        },
        {
          id: 4,
          text: 'Düşünce yapın hangisine daha yakın?',
          optionA: {
            label: 'Yaratıcı',
            emoji: '🎨',
            gradient: ['#f6d365', '#fda085'],
            tags: { creative: 1, art: 1 }
          },
          optionB: {
            label: 'Analitik',
            emoji: '📊',
            gradient: ['#5ee7df', '#b490ca'],
            tags: { analytic: 1, logic: 1 }
          }
        },
        {
          id: 5,
          text: 'Kimlerle ya da nelerle ilgilenmek istersin?',
          optionA: {
            label: 'İnsanlar',
            emoji: '🤝',
            gradient: ['#ff758c', '#ff7eb3'],
            tags: { people: 1, empathy: 1 }
          },
          optionB: {
            label: 'Makineler',
            emoji: '🤖',
            gradient: ['#89f7fe', '#66a6ff'],
            tags: { tech: 1, machine: 1 }
          }
        },
        {
          id: 6,
          text: 'Hangi rol sana daha uygun?',
          optionA: {
            label: 'Liderlik',
            emoji: '👑',
            gradient: ['#ffecd2', '#fcb69f'],
            tags: { leadership: 1, vision: 1 }
          },
          optionB: {
            label: 'Uzmanlık',
            emoji: '🔬',
            gradient: ['#a1c4fd', '#c2e9fb'],
            tags: { expertise: 1, depth: 1 }
          }
        },
        {
          id: 7,
          text: 'Risk mi alırsın, güvende mi kalırsın?',
          optionA: {
            label: 'Risk',
            emoji: '🎲',
            gradient: ['#ff9a9e', '#fad0c4'],
            tags: { risk: 1, courage: 1 }
          },
          optionB: {
            label: 'Güvenlik',
            emoji: '🛡️',
            gradient: ['#a8edea', '#fed6e3'],
            tags: { safety: 1, stability: 1 }
          }
        },
        {
          id: 8,
          text: 'Neye odaklanırsın?',
          optionA: {
            label: 'Detaylar',
            emoji: '🔍',
            gradient: ['#fbc2eb', '#a6c1ee'],
            tags: { detail: 1, precision: 1 }
          },
          optionB: {
            label: 'Büyük Resim',
            emoji: '🗺️',
            gradient: ['#d4fc79', '#96e6a1'],
            tags: { bigpicture: 1, strategy: 1 }
          }
        },
        {
          id: 9,
          text: 'Hangi dünya seni daha çok çeker?',
          optionA: {
            label: 'Teknoloji',
            emoji: '💻',
            gradient: ['#6a11cb', '#2575fc'],
            tags: { tech: 1, innovation: 1 }
          },
          optionB: {
            label: 'Doğa',
            emoji: '🌿',
            gradient: ['#11998e', '#38ef7d'],
            tags: { nature: 1, organic: 1 }
          }
        },
        {
          id: 10,
          text: 'Hangisi senin için daha öncelikli?',
          optionA: {
            label: 'Yüksek Maaş',
            emoji: '💰',
            gradient: ['#f7971e', '#ffd200'],
            tags: { money: 1, ambition: 1 }
          },
          optionB: {
            label: 'İş Tatmini',
            emoji: '😊',
            gradient: ['#e8198b', '#c7eafd'],
            tags: { satisfaction: 1, meaning: 1 }
          }
        }
      ]
    },

    /* ──────────────────── ŞİRKET ──────────────────── */
    {
      id: 'sirket',
      title: 'Şirket',
      subtitle: 'Gelecekte hangi şirkette çalışacaksın?',
      icon: '🏛️',
      gradient: ['#667eea', '#764ba2'],
      questions: [
        {
          id: 1,
          text: 'Nasıl bir şirket kültürü istersin?',
          optionA: {
            label: 'Yenilikçi',
            emoji: '🚀',
            gradient: ['#6a11cb', '#2575fc'],
            tags: { innovation: 1, creativity: 1 }
          },
          optionB: {
            label: 'Geleneksel',
            emoji: '🏛️',
            gradient: ['#b8860b', '#daa520'],
            tags: { traditional: 1, stability: 1 }
          }
        },
        {
          id: 2,
          text: 'Çalışma ortamında ne önemli?',
          optionA: {
            label: 'Özgür Ortam',
            emoji: '🦅',
            gradient: ['#00b4db', '#0083b0'],
            tags: { freedom: 1, flexibility: 1 }
          },
          optionB: {
            label: 'Disiplinli Yapı',
            emoji: '📐',
            gradient: ['#536976', '#292e49'],
            tags: { discipline: 1, order: 1 }
          }
        },
        {
          id: 3,
          text: 'Şirket büyüklüğü tercihin?',
          optionA: {
            label: 'Büyük Şirket',
            emoji: '🏙️',
            gradient: ['#2c3e50', '#4ca1af'],
            tags: { scale: 1, resources: 1 }
          },
          optionB: {
            label: 'Startup',
            emoji: '💡',
            gradient: ['#f7971e', '#ffd200'],
            tags: { agile: 1, risk: 1 }
          }
        },
        {
          id: 4,
          text: 'Şirketin amacı ne olmalı?',
          optionA: {
            label: 'Topluma Katkı',
            emoji: '🌱',
            gradient: ['#11998e', '#38ef7d'],
            tags: { social_impact: 1, mission: 1 }
          },
          optionB: {
            label: 'Kâr Odaklı',
            emoji: '📈',
            gradient: ['#ee0979', '#ff6a00'],
            tags: { profit: 1, growth: 1 }
          }
        },
        {
          id: 5,
          text: 'Ne tür ürünler üretmek istersin?',
          optionA: {
            label: 'Premium Ürün',
            emoji: '💎',
            gradient: ['#8e2de2', '#4a00e0'],
            tags: { premium: 1, quality: 1 }
          },
          optionB: {
            label: 'Herkes İçin',
            emoji: '🌐',
            gradient: ['#4facfe', '#00f2fe'],
            tags: { accessible: 1, scale: 1 }
          }
        },
        {
          id: 6,
          text: 'Çalışma tempon nasıl olsun?',
          optionA: {
            label: 'Hızlı Tempo',
            emoji: '⚡',
            gradient: ['#f5af19', '#f12711'],
            tags: { speed: 1, intensity: 1 }
          },
          optionB: {
            label: 'Dengeli Çalışma',
            emoji: '⚖️',
            gradient: ['#89f7fe', '#66a6ff'],
            tags: { balance: 1, wellbeing: 1 }
          }
        },
        {
          id: 7,
          text: 'Hangi iş kültürü sana uygun?',
          optionA: {
            label: 'Eğlenceli',
            emoji: '🎉',
            gradient: ['#f093fb', '#f5576c'],
            tags: { fun: 1, casual: 1 }
          },
          optionB: {
            label: 'Profesyonel',
            emoji: '👔',
            gradient: ['#2c3e50', '#3498db'],
            tags: { professional: 1, formal: 1 }
          }
        },
        {
          id: 8,
          text: 'Şirketin kapsamı ne olmalı?',
          optionA: {
            label: 'Global',
            emoji: '🌍',
            gradient: ['#667eea', '#764ba2'],
            tags: { global: 1, international: 1 }
          },
          optionB: {
            label: 'Lokal',
            emoji: '🏠',
            gradient: ['#43e97b', '#38f9d7'],
            tags: { local: 1, community: 1 }
          }
        },
        {
          id: 9,
          text: 'Marka bilinirliği ne kadar önemli?',
          optionA: {
            label: 'Tanınmış Marka',
            emoji: '⭐',
            gradient: ['#f7971e', '#ffd200'],
            tags: { brand: 1, prestige: 1 }
          },
          optionB: {
            label: 'Niş Marka',
            emoji: '🔮',
            gradient: ['#a18cd1', '#fbc2eb'],
            tags: { niche: 1, specialized: 1 }
          }
        },
        {
          id: 10,
          text: 'Hangi alan seni daha çok heyecanlandırır?',
          optionA: {
            label: 'Uzay & Gelecek',
            emoji: '🚀',
            gradient: ['#0f0c29', '#302b63'],
            tags: { future: 1, space: 1 }
          },
          optionB: {
            label: 'Günlük Hayat',
            emoji: '☕',
            gradient: ['#ffecd2', '#fcb69f'],
            tags: { practical: 1, everyday: 1 }
          }
        }
      ]
    },

    /* ──────────────────── ŞEHİR ──────────────────── */
    {
      id: 'sehir',
      title: 'Şehir',
      subtitle: 'Gelecekte hangi şehirde yaşayacaksın?',
      icon: '🌆',
      gradient: ['#43e97b', '#38f9d7'],
      questions: [
        {
          id: 1,
          text: 'Nerede yaşamak istersin?',
          optionA: {
            label: 'Yurt İçi',
            emoji: '🇹🇷',
            gradient: ['#E31837', '#FF4757'],
            tags: { domestic: 1, cultural: 1, affordable: 1 }
          },
          optionB: {
            label: 'Yurt Dışı',
            emoji: '🌍',
            gradient: ['#667eea', '#764ba2'],
            tags: { international: 1, diverse: 1, european: 1, exotic: 1 }
          }
        },
        {
          id: 2,
          text: 'Hangi coğrafya seni çeker?',
          optionA: {
            label: 'Deniz Kenarı',
            emoji: '🏖️',
            gradient: ['#00cec9', '#55efc4'],
            tags: { beach: 1, warm: 1, relaxed: 1 }
          },
          optionB: {
            label: 'Yüksek Rakım',
            emoji: '🏔️',
            gradient: ['#74b9ff', '#dfe6e9'],
            tags: { natural: 1, peaceful: 1, cozy: 1 }
          }
        },
        {
          id: 3,
          text: 'Nasıl bir yaşam temposu istersin?',
          optionA: {
            label: 'Hareketli',
            emoji: '🏙️',
            gradient: ['#4834d4', '#686de0'],
            tags: { bustling: 1, lively: 1, nightlife: 1, ambitious: 1 }
          },
          optionB: {
            label: 'Sakin',
            emoji: '🌿',
            gradient: ['#11998e', '#38ef7d'],
            tags: { peaceful: 1, relaxed: 1, cozy: 1 }
          }
        },
        {
          id: 4,
          text: 'İklim tercihin ne olurdu?',
          optionA: {
            label: 'Sıcak İklim',
            emoji: '☀️',
            gradient: ['#f9ca24', '#f0932b'],
            tags: { warm: 1, beach: 1, adventurous: 1 }
          },
          optionB: {
            label: 'Serin İklim',
            emoji: '🌧️',
            gradient: ['#636E72', '#a29bfe'],
            tags: { european: 1, orderly: 1, historical: 1 }
          }
        },
        {
          id: 5,
          text: 'Şehirde ne önemli?',
          optionA: {
            label: 'Kültür & Tarih',
            emoji: '🏛️',
            gradient: ['#6c5ce7', '#a29bfe'],
            tags: { historical: 1, cultural: 1, prestigious: 1 }
          },
          optionB: {
            label: 'Teknoloji & Modernlik',
            emoji: '🤖',
            gradient: ['#6a11cb', '#2575fc'],
            tags: { modern: 1, techy: 1, luxurious: 1 }
          }
        },
        {
          id: 6,
          text: 'Yaşam maliyeti tercihin?',
          optionA: {
            label: 'Uygun Fiyatlı',
            emoji: '💰',
            gradient: ['#43e97b', '#38f9d7'],
            tags: { affordable: 1, domestic: 1, cozy: 1 }
          },
          optionB: {
            label: 'Lüks Yaşam',
            emoji: '💎',
            gradient: ['#8e2de2', '#4a00e0'],
            tags: { luxurious: 1, ambitious: 1, prestigious: 1 }
          }
        },
        {
          id: 7,
          text: 'Sosyal hayatın nasıl olsun?',
          optionA: {
            label: 'Gece Hayatı',
            emoji: '🎉',
            gradient: ['#f093fb', '#f5576c'],
            tags: { nightlife: 1, lively: 1, social: 1, alternative: 1 }
          },
          optionB: {
            label: 'Huzurlu Akşamlar',
            emoji: '🌅',
            gradient: ['#ffecd2', '#fcb69f'],
            tags: { relaxed: 1, peaceful: 1, foodie: 1 }
          }
        },
        {
          id: 8,
          text: 'Sanata ve estetiğe ne kadar önem verirsin?',
          optionA: {
            label: 'Sanat Şehri',
            emoji: '🎨',
            gradient: ['#e17055', '#fdcb6e'],
            tags: { artistic: 1, free: 1, alternative: 1, cultural: 1 }
          },
          optionB: {
            label: 'İş Dünyası',
            emoji: '📈',
            gradient: ['#2c3e50', '#3498db'],
            tags: { ambitious: 1, bustling: 1, modern: 1, diverse: 1 }
          }
        },
        {
          id: 9,
          text: 'Farklı kültürlere açık mısın?',
          optionA: {
            label: 'Kozmopolit',
            emoji: '🌐',
            gradient: ['#FF6B35', '#F7C59F'],
            tags: { diverse: 1, international: 1, exotic: 1, social: 1 }
          },
          optionB: {
            label: 'Yerel Kültür',
            emoji: '🏠',
            gradient: ['#00cec9', '#55efc4'],
            tags: { domestic: 1, cultural: 1, historical: 1, foodie: 1 }
          }
        },
        {
          id: 10,
          text: 'Doğa mı şehir mı?',
          optionA: {
            label: 'Doğanın İçinde',
            emoji: '🌳',
            gradient: ['#11998e', '#38ef7d'],
            tags: { natural: 1, peaceful: 1, relaxed: 1, cozy: 1 }
          },
          optionB: {
            label: 'Şehrin Kalbinde',
            emoji: '🏢',
            gradient: ['#4834d4', '#686de0'],
            tags: { bustling: 1, modern: 1, lively: 1, ambitious: 1 }
          }
        }
      ]
    },

    /* ──────────────────── ÜNİVERSİTE ──────────────────── */
    {
      id: 'universite',
      title: 'Üniversite',
      subtitle: 'Hangi üniversitede okuyacaksın / kabul alacaksın?',
      icon: '🎓',
      gradient: ['#f093fb', '#f5576c'],
      questions: [
        {
          id: 1,
          text: 'Eğitimini nerede almak istersin?',
          optionA: {
            label: 'Yurt İçi',
            emoji: '🇹🇷',
            gradient: ['#E31837', '#FF4757'],
            tags: { turkey: 1, community: 1 }
          },
          optionB: {
            label: 'Yurt Dışı',
            emoji: '✈️',
            gradient: ['#667eea', '#764ba2'],
            tags: { international: 1, global: 1, european: 1 }
          }
        },
        {
          id: 2,
          text: 'Hangi alan seni daha çok çeker?',
          optionA: {
            label: 'Mühendislik & Fen',
            emoji: '⚙️',
            gradient: ['#6a11cb', '#2575fc'],
            tags: { engineering: 1, techy: 1, research: 1 }
          },
          optionB: {
            label: 'Sosyal & Beşeri',
            emoji: '📖',
            gradient: ['#a18cd1', '#fbc2eb'],
            tags: { humanities: 1, cultural: 1, social: 1 }
          }
        },
        {
          id: 3,
          text: 'Kampüs yaşamı mı şehir içi mi?',
          optionA: {
            label: 'Kampüs Hayatı',
            emoji: '🏫',
            gradient: ['#43e97b', '#38f9d7'],
            tags: { campus: 1, community: 1 }
          },
          optionB: {
            label: 'Şehir İçi',
            emoji: '🏙️',
            gradient: ['#4834d4', '#686de0'],
            tags: { urban: 1, social: 1, diverse: 1 }
          }
        },
        {
          id: 4,
          text: 'Akademik yaklaşım tercihin?',
          optionA: {
            label: 'Araştırma Odaklı',
            emoji: '🔬',
            gradient: ['#0f0c29', '#302b63'],
            tags: { research: 2, innovation: 1 }
          },
          optionB: {
            label: 'Uygulama Odaklı',
            emoji: '🛠️',
            gradient: ['#f7971e', '#ffd200'],
            tags: { engineering: 1, entrepreneurial: 1, techy: 1 }
          }
        },
        {
          id: 5,
          text: 'Rekabetçi ortam mı rahat ortam mı?',
          optionA: {
            label: 'Rekabetçi',
            emoji: '🏆',
            gradient: ['#A41034', '#C90016'],
            tags: { competitive: 2, prestige: 1 }
          },
          optionB: {
            label: 'Destekleyici',
            emoji: '🤝',
            gradient: ['#00cec9', '#55efc4'],
            tags: { community: 1, campus: 1, social: 1 }
          }
        },
        {
          id: 6,
          text: 'Üniversitede ne önemli?',
          optionA: {
            label: 'Prestij',
            emoji: '👑',
            gradient: ['#b8860b', '#daa520'],
            tags: { prestige: 2, tradition: 1 }
          },
          optionB: {
            label: 'Yenilikçilik',
            emoji: '💡',
            gradient: ['#6a11cb', '#2575fc'],
            tags: { innovation: 2, entrepreneurial: 1 }
          }
        },
        {
          id: 7,
          text: 'Hangi gelenek seni çeker?',
          optionA: {
            label: 'Köklü Gelenek',
            emoji: '🏛️',
            gradient: ['#002147', '#1a3a5c'],
            tags: { tradition: 2, prestige: 1, humanities: 1 }
          },
          optionB: {
            label: 'Modern Yaklaşım',
            emoji: '🚀',
            gradient: ['#f093fb', '#f5576c'],
            tags: { innovation: 1, techy: 1, entrepreneurial: 1 }
          }
        },
        {
          id: 8,
          text: 'Eğitim hedefin ne?',
          optionA: {
            label: 'Akademisyen Olmak',
            emoji: '📚',
            gradient: ['#A3C1AD', '#003B2B'],
            tags: { research: 1, tradition: 1, humanities: 1, precision: 1 }
          },
          optionB: {
            label: 'Sektöre Geçmek',
            emoji: '💼',
            gradient: ['#2c3e50', '#3498db'],
            tags: { engineering: 1, competitive: 1, global: 1 }
          }
        },
        {
          id: 9,
          text: 'Hangi kıta cazip?',
          optionA: {
            label: 'Avrupa',
            emoji: '🇪🇺',
            gradient: ['#1D3557', '#457B9D'],
            tags: { european: 2, precision: 1, cultural: 1 }
          },
          optionB: {
            label: 'Amerika',
            emoji: '🇺🇸',
            gradient: ['#A41034', '#C90016'],
            tags: { international: 1, competitive: 1, global: 1, innovation: 1 }
          }
        },
        {
          id: 10,
          text: 'Tıp ve sağlık alanı ilgini çeker mi?',
          optionA: {
            label: 'Evet, Tıp İlgimi Çeker',
            emoji: '🩺',
            gradient: ['#11998e', '#38ef7d'],
            tags: { medical: 1, research: 1, community: 1, turkey: 1 }
          },
          optionB: {
            label: 'Hayır, Farklı Alanlar',
            emoji: '🔮',
            gradient: ['#8e2de2', '#4a00e0'],
            tags: { techy: 1, engineering: 1, innovation: 1 }
          }
        }
      ]
    }
  ]
};
