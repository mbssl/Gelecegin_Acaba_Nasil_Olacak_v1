# Gelecegin_Acaba_Nasil_Olacak_v1
# G.A.N.O? — Geleceğin Acaba Nasıl Olacak?

**Hacettepe Üniversitesi Yapay Zekâ Topluluğu** tarafından geliştirilen, el hareketleriyle oynanan interaktif tahmin oyunu.

## 🚀 Özellikler

- **El Hareketleriyle Oynama:** WebgCam ile elinizi algılar, avucunuzu açıp kapatarak seçim yaparsınız.
- **100+ Sonuç Profili:** Meslek, şirket, şehir ve üniversite tahminleri.
- **Gerçek Görseller:** Her sonuç için yüksek kaliteli arka plan görselleri.
- **Eliminasyon Algoritması:** Seçimlerinizle elenen seçenekler, derinlemesine analiz.
- **Güven Skoru:** Sonuçların ne kadar size uygun olduğunu gösteren yüzde skoru.
- **Çoklu Dil Desteği:** Türkçe ve İngilizce arayüz.
- **Havai Fişek Efektleri:** Sonuç ekranında görsel şölen.

## 🛠️ Kurulum

### Ön Gereksinimler

- Modern web tarayıcısı (Chrome, Firefox, Edge, Safari)
- WebgCam desteği (çoğu modern cihazda mevcuttur)

### Kurulum Adımları

1. **Repository'i Clone Edin:**
   ```bash
   git clone <repository-url>
   cd Gelecegin_Acaba_Nasil_Olacak_v1
   ```

2. **Dosyaları Kontrol Edin:**
   - `index.html`: Ana oyun dosyası
   - `styles.css`: Stil dosyası
   - `script.js`: Ana oyun mantığı
   - `questions.js`: Soru ve cevap veritabanı
   - `assets/`: Görsel varlıklar

3. **Oyun Dosyalarını Sunucuya Yükleyin:**
   Oyun, kamera erişimi gerektirdiği için **HTTPS** veya **localhost** üzerinden çalışmalıdır.

   **Seçenek A: Localhost (Önerilen)**
   ```bash
   # Node.js kuruluysa
   npx serve .
   
   # Veya Python kuruluysa
   python -m http.server 8000
   ```
   Ardından tarayıcıda `http://localhost:8000` adresine gidin.

   **Seçenek B: HTTPS (Production)**
   - SSL sertifikası ile sunucu kurun
   - Dosyaları sunucuya yükleyin
   - Tarayıcıda `https://yourdomain.com` adresine gidin

## 🎮 Nasıl Oynanır

### 1. Başlangıç
- `Başla` butonuna tıklayın
- Kamera izni verin
- Elinizi kameraya gösterin

### 2. Kategori Seçimi
- 4 ana kategori arasından seçim yapın:
  - 💼 **Meslek** — Gelecekteki kariyeriniz
  - 🏢 **Şirket** — Çalışmak isteyeceğiniz yer
  - 🏙️ **Şehir** — Yaşamak isteyeceğiniz şehir
  - 🎓 **Üniversite** — Okumak isteyeceğiniz okul

### 3. Soru Cevaplama
- Her kategori 10 soru içerir
- Sol ve sağda iki seçenek görünür
- Elinizi bir seçeneğin üzerine getirin
- Avucunuzu açıp kapatarak seçiminizi yapın
- Doğru algılama için elinizi yavaşça açıp kapatın

### 4. Analiz
- Seçimleriniz analiz edilir
- Yapay zeka algoritması sonuçları hesaplar
- Yükleme ekranında ilerlemeyi izleyin

### 5. Sonuç
- Size özel sonuç kartı görüntülenir
- Meslek: % skoru, açıklama ve görsel
- Şirket: % skoru, açıklama ve logo
- Şehir: % skoru, açıklama ve görsel
- Üniversite: % skoru, açıklama ve logo

### 6. Tekrar Oyna
- `Tekrar Oyna` butonuna tıklayarak yeni bir analiz yapın
- Farklı kategoriler deneyin

## 🎯 Algoritma

### Eliminasyon Sistemi
Her soru için:
1. Seçilmeyen seçenek elenir
2. Seçilen seçeneğin `tags` puanları artar
3. `setFilter` ile filtreler uygulanır
4. Sonraki sorular sadece uygun seçenekleri gösterir

### Güven Skoru Hesaplama
```
Güven Skoru = (Toplam Puan / Maksimum Puan) × 100
```
- Maksimum puan = 10 soru × 2 puan = 20
- Minimum puan = 0

### Filtreler
- **Region:** `domestic` (Türkiye) / `international` (Yurt dışı)
- **Continent:** `europe` / `northamerica` / `asia` / `oceania`
- **Category:** `tech` / `business` / `creative` / `humanities`
- **Industry:** `ai` / `finance` / `health` / `energy` / `media` / `retail` / `transport` / `education` / `government` / `nonprofit`
- **Type:** `startup` / `corporation` / `government` / `nonprofit`
- **Size:** `small` / `medium` / `large` / `enterprise`

## 🎨 Tasarım

### Renk Paleti
- **Primary:** `#667eea` (Mor)
- **Secondary:** `#764ba2` (Mor)
- **Accent:** `#f6d365` (Sarı)
- **Background:** `#0f0c29` (Koyu Mavi)

### Fontlar
- **Heading:** `Poppins`, sans-serif
- **Body:** `Inter`, sans-serif

### Animasyonlar
- **Parçacık Arkaplan:** WebgCam ile entegre
- **El İmleci:** Gerçek el hareketlerini takip eder
- **Havai Fişekler:** Sonuç ekranında görsel efekt
- **Stagger Animation:** Kartların sırayla görünmesi

## 📂 Dosya Yapısı

```
Gelecegin_Acaba_Nasil_Olacak_v1/
├── index.html              # Ana oyun dosyası
├── styles.css              # CSS stilleri
├── script.js               # JavaScript mantığı
├── questions.js            # Soru ve cevap veritabanı
├── README.md               # Bu dosya
├── assets/
│   ├── hacettepe-ai-logo.png
│   ├── particles.js
│   ├── fireworks.js
│   ├── images/
│   │   ├── professions/
│   │   ├── companies/
│   │   ├── cities/
│   │   └── universities/
│   └── logos/
│       ├── companies/
│       └── universities/
```

## 📝 Veritabanı Yapısı

### Meslekler
```javascript
{
  name: 'Yazılım Mühendisi',
  emoji: '👨‍💻',
  gradient: ['#667eea','#764ba2'],
  image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=500&fit=crop',
  filters: {},
  profile: { analytic:2, tech:2, detail:2, logic:2, individual:1, machine:1, office:1, innovation:1, structured:1 },
  reasons: ['Analitik düşünme yeteneğin...']
}
```

### Sorular
```javascript
{
  id: 'm1',
  phase: 1,
  text: 'Gelecekte kendini nerede görüyorsun?',
  condition: (tags, filters) => true,
  optionA: {
    label: 'Büyük bir şirkette',
    emoji: '🏢',
    gradient: ['#667eea','#764ba2'],
    tags: { corporate:2, stability:1, resources:1 },
    setFilter: { type:'corporation' }
  },
  optionB: {
    label: 'Kendi işimde',
    emoji: '💼
