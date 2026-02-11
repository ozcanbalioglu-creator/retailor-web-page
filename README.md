# Retailor AI - Perakendede Yapay Zeka Donusumu

Perakende sektorunde yapay zeka donusumunu liderlikle bulusturan danismanlik platformu. React 19 + TypeScript + Vite ile gelistirilmis, Tailwind CSS ile stillendirilmis modern bir web uygulamasidir.

## Ozellikler

- **Ana Sayfa:** Hero alani, hizmet kartlari, musteri logolari, CTA bolumleri
- **Hizmet Sayfalari:** Interaktif Egitim, Sales Mentor AI, Kurumsal AI Egitimi
- **Blog Sistemi:** Markdown tabanli icerik yonetimi (gray-matter + react-markdown)
- **Prompt Kutuphanesi:** Perakende sektorune ozel AI prompt koleksiyonu
- **Perakende Sozlugu:** Alfabetik A-Z navigasyonlu perakende terimleri sozlugu, kart gorunumu ve detay sayfalari
- **Hakkimizda & Iletisim:** Sirket bilgileri ve iletisim formu (Google Sheets entegrasyonu)
- **E-Bulten Aboneligi:** Footer'da newsletter kayit formu
- **Yasal Sayfalar:** Gizlilik Politikasi, Kullanim Kosullari, Cerez Politikasi

## Teknoloji Yigini

| Katman | Teknoloji |
|--------|-----------|
| Frontend Framework | React 19 |
| Dil | TypeScript |
| Build Araci | Vite 6 |
| Stil | Tailwind CSS (CDN) |
| Routing | React Router DOM 7 (HashRouter) |
| Ikonlar | Lucide React |
| Markdown | gray-matter, react-markdown |
| Polyfill | buffer (gray-matter icin) |

## Proje Yapisi

```
/
├── index.html              # Ana HTML, importmap ve global stiller
├── index.tsx               # React uygulama giris noktasi
├── App.tsx                 # Route tanimlari
├── types.ts                # TypeScript interface tanimlari
├── constants.tsx           # Hizmet verileri ve sabitler
├── vite.config.ts          # Vite yapilandirmasi
├── components/
│   └── Layout.tsx          # Navbar, footer ve sayfa duzeni
├── pages/
│   ├── Home.tsx            # Ana sayfa
│   ├── Blog.tsx            # Blog listesi ve detay
│   ├── Services.tsx        # Hizmet detay sayfalari
│   ├── PromptLibrary.tsx   # AI prompt kutuphanesi
│   ├── Glossary.tsx        # Perakende terimleri sozlugu
│   ├── About.tsx           # Hakkimizda
│   └── StaticPages.tsx     # Yasal sayfalar
├── services/
│   └── blogService.ts      # Blog icerik yukleyici
├── content/
│   └── blog/               # Markdown blog yazilari
├── data/
│   ├── prompts.json        # Prompt kutuphanesi verileri
│   └── glossary.json       # Perakende terimleri sozlugu verileri
└── public/
    └── assets/             # Gorseller ve logolar
```

## Kurulum

### Gereksinimler

- Node.js (v18+)

### Yerel Gelistirme

```bash
# Bagimlilikları yukle
npm install

# Gelistirme sunucusunu baslat
npm run dev
```

Uygulama `http://localhost:3000` adresinde calisir.

### Uretim Derlemesi

```bash
# Uretim icin derle
npm run build

# Derlenenmis versiyonu onizle
npm run preview
```

## Tipografi Sistemi

| Katman | Font | Boyut | Agirlik | Kullanim |
|--------|------|-------|---------|----------|
| Display | Space Grotesk | 48-64px | 700 | Hero basliklari (H1) |
| Section | Space Grotesk | 32-40px | 700 | Bolum basliklari (H2) |
| Card | Inter | 20px | 700 | Kart basliklari (H3) |
| Body | Inter | 16-18px | 400 | Paragraflar |
| UI | Inter | 12px | 600 | Butonlar, etiketler, nav |
| Caption | Inter | 12px | 500 | Tarih, meta, copyright |

## Notlar

- Routing: `HashRouter` kullanilir, URL'ler `/#/sayfa-adi` formatindadir
- Stiller: Tailwind CSS, CDN uzerinden yuklenir. Ozel CSS (glassmorphism, isometric kartlar, animasyonlar) `index.html` icinde tanimlidir
- Fontlar: Inter (400, 500, 600, 700) ve Space Grotesk (700) Google Fonts uzerinden yuklenir
- Blog icerikleri: `content/blog/` klasorunde Markdown dosyalari olarak yonetilir, front-matter ile metadata taninir
- Sozluk verileri: `data/glossary.json` icinde 40 perakende terimi yapisal JSON formatinda tutulur. Her terim; tanim, neden onemli, gercek hayat ornegi, formul, yonetici ipucu, kullanim alani (segment/departman), karistirilan terimler ve baglantili terimler icerir. A-Z harf navigasyonu ve arama destekler. Detay sayfasi sol sidebar (Kullanim Alani, Karistirilan Terimler, Baglantili Terimler) ve orta icerik alani olarak yapilandirilmistir
- Iletisim ve e-bulten formlari: Google Apps Script uzerinden Google Sheets'e veri gonderir
