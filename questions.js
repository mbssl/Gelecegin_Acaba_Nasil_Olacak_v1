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
          text: 'Hangisini tercih edersin?',
          optionA: {
            label: 'İstanbul',
            emoji: '🕌',
            gradient: ['#FF6B35', '#F7C59F'],
            image: 'assets/istanbul.png',
            tags: { bustling: 1, historical: 1, cultural: 1, foodie: 1, lively: 1 }
          },
          optionB: {
            label: 'Barcelona',
            emoji: '🏖️',
            gradient: ['#FFD166', '#FF6B6B'],
            image: 'assets/barcelona.png',
            tags: { warm: 1, beach: 1, social: 1, artistic: 1, european: 1 }
          }
        },
        {
          id: 2,
          text: 'Hangisini tercih edersin?',
          optionA: {
            label: 'Tokyo',
            emoji: '🗼',
            gradient: ['#FF69B4', '#7B68EE'],
            image: 'assets/tokyo.png',
            tags: { modern: 1, techy: 1, orderly: 1, foodie: 1, exotic: 1 }
          },
          optionB: {
            label: 'Berlin',
            emoji: '🎸',
            gradient: ['#636E72', '#FD79A8'],
            image: 'assets/berlin.png',
            tags: { artistic: 1, nightlife: 1, alternative: 1, affordable: 1, modern: 1 }
          }
        },
        {
          id: 3,
          text: 'Hangisini tercih edersin?',
          optionA: {
            label: 'New York',
            emoji: '🗽',
            gradient: ['#4834d4', '#686de0'],
            image: 'assets/newyork.png',
            tags: { bustling: 1, modern: 1, nightlife: 1, diverse: 1, ambitious: 1 }
          },
          optionB: {
            label: 'Kars',
            emoji: '🏔️',
            gradient: ['#74b9ff', '#dfe6e9'],
            image: 'assets/kars.png',
            tags: { peaceful: 1, natural: 1, historical: 1, affordable: 1, cozy: 1 }
          }
        },
        {
          id: 4,
          text: 'Hangisini tercih edersin?',
          optionA: {
            label: 'Londra',
            emoji: '🎡',
            gradient: ['#6c5ce7', '#a29bfe'],
            image: 'assets/london.png',
            tags: { historical: 1, cultural: 1, diverse: 1, prestigious: 1, european: 1 }
          },
          optionB: {
            label: 'Antalya',
            emoji: '🏝️',
            gradient: ['#00cec9', '#55efc4'],
            image: 'assets/antalya.png',
            tags: { warm: 1, beach: 1, relaxed: 1, historical: 1, affordable: 1 }
          }
        },
        {
          id: 5,
          text: 'Hangisini tercih edersin?',
          optionA: {
            label: 'Amsterdam',
            emoji: '🚲',
            gradient: ['#e17055', '#fdcb6e'],
            image: 'assets/amsterdam.png',
            tags: { relaxed: 1, artistic: 1, free: 1, european: 1, cozy: 1 }
          },
          optionB: {
            label: 'Dubai',
            emoji: '🌇',
            gradient: ['#f9ca24', '#f0932b'],
            image: 'assets/dubai.png',
            tags: { luxurious: 1, modern: 1, adventurous: 1, warm: 1, ambitious: 1 }
          }
        },
        {
          id: 6,
          text: 'Hangisini tercih edersin?',
          optionA: {
            label: 'İstanbul',
            emoji: '🕌',
            gradient: ['#FF6B35', '#F7C59F'],
            image: 'assets/istanbul.png',
            tags: { bustling: 1, historical: 1, cultural: 1, foodie: 1, lively: 1 }
          },
          optionB: {
            label: 'Tokyo',
            emoji: '🗼',
            gradient: ['#FF69B4', '#7B68EE'],
            image: 'assets/tokyo.png',
            tags: { modern: 1, techy: 1, orderly: 1, foodie: 1, exotic: 1 }
          }
        },
        {
          id: 7,
          text: 'Hangisini tercih edersin?',
          optionA: {
            label: 'Barcelona',
            emoji: '🏖️',
            gradient: ['#FFD166', '#FF6B6B'],
            image: 'assets/barcelona.png',
            tags: { warm: 1, beach: 1, social: 1, artistic: 1, european: 1 }
          },
          optionB: {
            label: 'New York',
            emoji: '🗽',
            gradient: ['#4834d4', '#686de0'],
            image: 'assets/newyork.png',
            tags: { bustling: 1, modern: 1, nightlife: 1, diverse: 1, ambitious: 1 }
          }
        },
        {
          id: 8,
          text: 'Hangisini tercih edersin?',
          optionA: {
            label: 'Kars',
            emoji: '🏔️',
            gradient: ['#74b9ff', '#dfe6e9'],
            image: 'assets/kars.png',
            tags: { peaceful: 1, natural: 1, historical: 1, affordable: 1, cozy: 1 }
          },
          optionB: {
            label: 'Amsterdam',
            emoji: '🚲',
            gradient: ['#e17055', '#fdcb6e'],
            image: 'assets/amsterdam.png',
            tags: { relaxed: 1, artistic: 1, free: 1, european: 1, cozy: 1 }
          }
        },
        {
          id: 9,
          text: 'Hangisini tercih edersin?',
          optionA: {
            label: 'Dubai',
            emoji: '🌇',
            gradient: ['#f9ca24', '#f0932b'],
            image: 'assets/dubai.png',
            tags: { luxurious: 1, modern: 1, adventurous: 1, warm: 1, ambitious: 1 }
          },
          optionB: {
            label: 'Londra',
            emoji: '🎡',
            gradient: ['#6c5ce7', '#a29bfe'],
            image: 'assets/london.png',
            tags: { historical: 1, cultural: 1, diverse: 1, prestigious: 1, european: 1 }
          }
        },
        {
          id: 10,
          text: 'Hangisini tercih edersin?',
          optionA: {
            label: 'Berlin',
            emoji: '🎸',
            gradient: ['#636E72', '#FD79A8'],
            image: 'assets/berlin.png',
            tags: { artistic: 1, nightlife: 1, alternative: 1, affordable: 1, modern: 1 }
          },
          optionB: {
            label: 'Antalya',
            emoji: '🏝️',
            gradient: ['#00cec9', '#55efc4'],
            image: 'assets/antalya.png',
            tags: { warm: 1, beach: 1, relaxed: 1, historical: 1, affordable: 1 }
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
          text: 'Hangisini tercih edersin?',
          optionA: {
            label: 'MIT',
            emoji: '🔬',
            gradient: ['#a31f34', '#8b1a2b'],
            image: null,
            tags: { research: 1, techy: 1, innovation: 1, competitive: 1, international: 1 }
          },
          optionB: {
            label: 'Oxford',
            emoji: '📚',
            gradient: ['#002147', '#1a3a5c'],
            image: null,
            tags: { tradition: 1, research: 1, prestige: 1, humanities: 1, international: 1 }
          }
        },
        {
          id: 2,
          text: 'Hangisini tercih edersin?',
          optionA: {
            label: 'Stanford',
            emoji: '☀️',
            gradient: ['#8C1515', '#B83A4B'],
            image: null,
            tags: { innovation: 1, entrepreneurial: 1, campus: 1, techy: 1, research: 1 }
          },
          optionB: {
            label: 'Hacettepe',
            emoji: '🦌',
            gradient: ['#E31837', '#FF4757'],
            image: null,
            tags: { research: 1, campus: 1, turkey: 1, medical: 1, community: 1 }
          }
        },
        {
          id: 3,
          text: 'Hangisini tercih edersin?',
          optionA: {
            label: 'Cambridge',
            emoji: '🏛️',
            gradient: ['#A3C1AD', '#003B2B'],
            image: null,
            tags: { tradition: 1, research: 1, prestige: 1, campus: 1, humanities: 1 }
          },
          optionB: {
            label: 'Boğaziçi',
            emoji: '🌊',
            gradient: ['#003591', '#0047BB'],
            image: null,
            tags: { prestige: 1, turkey: 1, urban: 1, international: 1, social: 1 }
          }
        },
        {
          id: 4,
          text: 'Hangisini tercih edersin?',
          optionA: {
            label: 'Harvard',
            emoji: '🏆',
            gradient: ['#A41034', '#C90016'],
            image: null,
            tags: { prestige: 1, competitive: 1, diverse: 1, research: 1, global: 1 }
          },
          optionB: {
            label: 'ODTÜ',
            emoji: '⚙️',
            gradient: ['#8B0000', '#CC0000'],
            image: null,
            tags: { techy: 1, turkey: 1, campus: 1, competitive: 1, engineering: 1 }
          }
        },
        {
          id: 5,
          text: 'Hangisini tercih edersin?',
          optionA: {
            label: 'ETH Zürich',
            emoji: '🇨🇭',
            gradient: ['#1D3557', '#457B9D'],
            image: null,
            tags: { research: 1, engineering: 1, innovation: 1, european: 1, precision: 1 }
          },
          optionB: {
            label: 'Sorbonne',
            emoji: '🗼',
            gradient: ['#1B1464', '#3D1C6E'],
            image: null,
            tags: { humanities: 1, cultural: 1, european: 1, tradition: 1, urban: 1 }
          }
        },
        {
          id: 6,
          text: 'Hangisini tercih edersin?',
          optionA: {
            label: 'MIT',
            emoji: '🔬',
            gradient: ['#a31f34', '#8b1a2b'],
            image: null,
            tags: { research: 1, techy: 1, innovation: 1, competitive: 1, international: 1 }
          },
          optionB: {
            label: 'Stanford',
            emoji: '☀️',
            gradient: ['#8C1515', '#B83A4B'],
            image: null,
            tags: { innovation: 1, entrepreneurial: 1, campus: 1, techy: 1, research: 1 }
          }
        },
        {
          id: 7,
          text: 'Hangisini tercih edersin?',
          optionA: {
            label: 'Oxford',
            emoji: '📚',
            gradient: ['#002147', '#1a3a5c'],
            image: null,
            tags: { tradition: 1, research: 1, prestige: 1, humanities: 1, international: 1 }
          },
          optionB: {
            label: 'Cambridge',
            emoji: '🏛️',
            gradient: ['#A3C1AD', '#003B2B'],
            image: null,
            tags: { tradition: 1, research: 1, prestige: 1, campus: 1, humanities: 1 }
          }
        },
        {
          id: 8,
          text: 'Hangisini tercih edersin?',
          optionA: {
            label: 'Hacettepe',
            emoji: '🦌',
            gradient: ['#E31837', '#FF4757'],
            image: null,
            tags: { research: 1, campus: 1, turkey: 1, medical: 1, community: 1 }
          },
          optionB: {
            label: 'ODTÜ',
            emoji: '⚙️',
            gradient: ['#8B0000', '#CC0000'],
            image: null,
            tags: { techy: 1, turkey: 1, campus: 1, competitive: 1, engineering: 1 }
          }
        },
        {
          id: 9,
          text: 'Hangisini tercih edersin?',
          optionA: {
            label: 'ETH Zürich',
            emoji: '🇨🇭',
            gradient: ['#1D3557', '#457B9D'],
            image: null,
            tags: { research: 1, engineering: 1, innovation: 1, european: 1, precision: 1 }
          },
          optionB: {
            label: 'Harvard',
            emoji: '🏆',
            gradient: ['#A41034', '#C90016'],
            image: null,
            tags: { prestige: 1, competitive: 1, diverse: 1, research: 1, global: 1 }
          }
        },
        {
          id: 10,
          text: 'Hangisini tercih edersin?',
          optionA: {
            label: 'Boğaziçi',
            emoji: '🌊',
            gradient: ['#003591', '#0047BB'],
            image: null,
            tags: { prestige: 1, turkey: 1, urban: 1, international: 1, social: 1 }
          },
          optionB: {
            label: 'Sorbonne',
            emoji: '🗼',
            gradient: ['#1B1464', '#3D1C6E'],
            image: null,
            tags: { humanities: 1, cultural: 1, european: 1, tradition: 1, urban: 1 }
          }
        }
      ]
    }
  ]
};
