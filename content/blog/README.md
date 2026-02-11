# 📝 Retailor AI - Blog İçerik Rehberi

Bu klasör, web sitesinin blog bölümünde yayınlanacak makaleleri içerir. Yeni bir makale eklemek için aşağıdaki kuralları takip etmeniz yeterlidir. Sistem bu klasördeki `.md` dosyalarını otomatik olarak tarar ve yayınlar.

---

## 🚀 Yeni Makale Ekleme Adımları

### 1. Dosya İsimlendirme (Slug)
Dosya ismi, web sitesindeki URL'yi belirler. 
*   **Küçük harf** kullanın.
*   Türkçe karakter kullanmayın (`ş, ı, ğ, ö, ç, ü` yerine `s, i, g, o, c, u`).
*   Boşluk yerine **tire (-)** kullanın.
*   Örnek: `perakendede-ai-kullanimi.md`

### 2. Dosya Yapısı (Markdown & Frontmatter)
Her makale dosyası mutlaka en başında "Frontmatter" denilen veri bölümüne sahip olmalıdır. Bu bölüm iki adet `---` çizgisi arasında yer alır:

```markdown
---
title: "Makale Başlığınız"
date: "2026-02-06"
excerpt: "Blog listesinde görünecek kısa giriş yazısı."
category: "Strateji"
image: "/assets/gorsel-ismi.webp"
---

## Alt Başlık
Buradan itibaren makale içeriğiniz başlar. Markdown formatında yazabilirsiniz.
```

### 3. Görsel Kullanımı
*   Makalenizde kullanacağınız ana görseli `public/assets/` klasörüne kopyalayın.
*   Frontmatter bölümündeki `image` satırına bu görselin ismini yazın (Örn: `/assets/2026-blog.webp`).

### 4. Dikkat Edilmesi Gerekenler
*   **Başlık:** `# Başlık` (H1) etiketini makale içinde kullanmayın. Sistem, her makalenin başlığını Frontmatter'daki `title` alanından alıp otomatik olarak en üste ekler.
*   **Format:** Makale içinde `##` (H2) ve `###` (H3) alt başlıklarını dilediğinizce kullanabilirsiniz.
*   **Tarih:** Makaleler tarihe göre sıralanır. En güncel makalenin en üstte görünmesi için geçerli tarihi `YYYY-MM-DD` formatında yazın.

---

**Retailor AI - İçerik Yönetim Sistemi**
