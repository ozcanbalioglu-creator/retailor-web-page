# Project Summary: Retailor AI - Perakendede Yapay Zeka Donusumu

## Genel Bakis

Retailor AI, perakende sektorundeki isletmelere yapay zeka donusumu konusunda danismanlik sunan bir web platformudur. React 19, TypeScript ve Vite 6 ile gelistirilmis olup Tailwind CSS ile stillenmistir.

## Sayfalar

| Sayfa | Dosya | Aciklama |
|-------|-------|----------|
| Ana Sayfa | `pages/Home.tsx` | Hero, hizmet kartlari (isometric efekt), musteri logolari, CTA |
| Hizmetler | `pages/Services.tsx` | Interaktif Egitim, Sales Mentor AI, Kurumsal AI Egitimi detay sayfalari |
| Blog | `pages/Blog.tsx` | Markdown tabanli blog listesi ve tekil yazi goruntuleme |
| Prompt Kutuphanesi | `pages/PromptLibrary.tsx` | Kategorize edilmis AI prompt koleksiyonu (prompts.json'dan) |
| Perakende Sozlugu | `pages/Glossary.tsx` | A-Z harf navigasyonlu terimler sozlugu, kart listesi ve detay gorunumu (glossary.json'dan) |
| Hakkimizda | `pages/About.tsx` | Sirket tanitimi |
| Yasal Sayfalar | `pages/StaticPages.tsx` | Gizlilik, Kullanim Kosullari, Cerez Politikasi |

## Temel Bilesenler

- **Layout.tsx** (`components/Layout.tsx`): Navbar (glassmorphism efekti, sticky), dinamik sayfa header'i, footer (e-bulten formu, sosyal medya linkleri, site haritasi). Tum sayfalari sarar.

## Servisler

- **blogService.ts** (`services/blogService.ts`): `content/blog/` klasorundeki Markdown dosyalarini gray-matter ile parse eder, blog yazilarini listeye ve detaya sunar.

## Veri Dosyalari

- **prompts.json** (`data/prompts.json`): Prompt Kutuphanesi sayfasi icin kategorize edilmis AI promptlari.
- **glossary.json** (`data/glossary.json`): Perakende Terimleri Sozlugu sayfasi icin 40 perakende terimi. Her terim: slug, term, termEn, abbr, letter, category, shortDefinition, definition, whyImportant, realLifeExample, formula, formulaExample, managerTip, segments[], departments[], confusedTerms[], relatedTerms[].
- **Blog icerikleri** (`content/blog/*.md`): Front-matter (title, excerpt, date, category, image) ile zenginlestirilmis Markdown blog yazilari.

## Type Tanimlari

- **ServiceInfo** (`types.ts`): Hizmet kartlari icin veri yapisi (id, title, description, icon, path, content).
- **BlogPost** (`types.ts`): Blog yazilari icin veri yapisi (slug, title, excerpt, date, category, image, content).
- **GlossaryTerm** (`types.ts`): Sozluk terimleri icin yapisal veri: slug, term, termEn, abbr, letter, category, shortDefinition, definition, whyImportant, realLifeExample, formula, formulaExample, managerTip, segments[], departments[], confusedTerms[{term,diff}], relatedTerms[].

## Stil Mimarisi

- **Tailwind CSS**: CDN uzerinden yuklenir, utility-first yaklasim.
- **Ozel CSS** (`index.html` icerisinde):
  - Glassmorphism efekti (`.glass-morphism`)
  - Isometric kart donusumleri (`.isometric-card`)
  - Gradient metin (`.gradient-text`)
  - Float animasyonu (`.animate-float`)
  - Scroll reveal animasyonu (`.reveal-on-scroll`)
- **Fontlar**: Inter (400, 500, 600, 700) govde/UI, Space Grotesk (700) basliklar - Google Fonts
- **Tipografi Sistemi**:
  - Display (Hero H1): Space Grotesk 700, 48px/64px, tracking-tighter
  - Section (H2): Space Grotesk 700, 32px/40px, tracking-tight
  - Card (H3): Inter 700, text-xl, tracking-tight
  - Body: Inter 400, text-base/text-lg, leading-relaxed
  - UI (butonlar/etiketler): Inter 600, text-xs, tracking-wider, uppercase
  - Caption (meta): Inter 500, text-xs, tracking-wider
- **Renk Paleti**: Slate tonlari (#475569 govde, #0c4a6e koyu mavi, #0ea5e9 acik mavi, #f59e0b amber vurgu)
- **Component Standartlari**:
  - Butonlar: rounded-xl, font-semibold, tracking-wider
  - Inputlar: rounded-xl, border-slate-200, focus:ring-[#0ea5e9]/10
  - Kartlar: rounded-2xl, border-slate-100
  - Buyuk sectionlar: rounded-3xl

## Routing

HashRouter kullanilir. Temel rotalar:
- `/` - Ana Sayfa
- `/blog` ve `/blog/:slug` - Blog
- `/hizmetler/:serviceId` - Hizmet detay
- `/prompt-kutuphanesi` - Prompt Kutuphanesi
- `/sozluk` ve `/sozluk/:slug` - Perakende Terimleri Sozlugu
- `/hakkimizda` - Hakkimizda
- `/iletisim` - Iletisim
- `/gizlilik-politikasi`, `/kullanim-kosullari`, `/cerez-politikasi` - Yasal

## Form Entegrasyonlari

Iletisim ve e-bulten formlari Google Apps Script uzerinden Google Sheets'e POST istegi gonderir (`mode: 'no-cors'`).

## Statik Varliklar (`public/assets/`)

- `RetailorLogo-RedBlack.png`, `RetailorLogo-RedWhiteD.png` - Logo varyantlari
- `LogoSquarreBuyuk.webp` - Favicon
- `retailorHero.webp` - Hero ve varsayilan blog gorseli
- `header.webp` - Sayfa header arkaplan gorseli
- `*_Logo_Gri.webp` - Musteri logolari (Alliance, Aris, Bayer, CarrefourSA, HYS, Ozhan)
- `freepik__*.webp` - Blog yazilari icin gorseller (3 adet)

## Build ve Deploy

- **Build**: `npm run build` (Vite, `dist/` klasorune cikti uretir)
- **Dev**: `npm run dev` (localhost:3000)
- **Preview**: `npm run preview` (uretim onizleme)
