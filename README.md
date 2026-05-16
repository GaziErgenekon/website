# Ergenekon R&D Team — Web Sitesi

Gazi Üniversitesi bünyesindeki Ergenekon R&D Team'in tanıtım sitesi.
React 19 + Vite 7 + Tailwind CSS v4 + React Router v7 (statik, GitHub Pages).

> Bu doküman `test` branch'ında yapılan değişikliklerin özetidir.
> Ayrıntılı/fazlı kayıt için: [`update_16_05_2026.md`](./update_16_05_2026.md)

## Çalıştırma

```bash
npm install
npm run dev      # geliştirme (http://localhost:5173)
npm run build    # production build (dist/)
npm run preview  # build önizleme
```

### Ortam değişkenleri (`.env` — örnek: `.env.example`)

| Değişken | Açıklama |
|----------|----------|
| `VITE_REACT_SERVICE_ID` / `VITE_REACT_TEMPLATE_ID` / `VITE_REACT_PUBLIC_KEY` | EmailJS (İletişim formu) |
| `VITE_CF_BEACON_TOKEN` | Cloudflare Web Analytics beacon token'ı (boşsa analytics eklenmez) |
| `VITE_ROUTER_BASENAME` | (Opsiyonel) router basename'i açıkça zorlamak için |

## Yapılan Değişiklikler

### Hata düzeltmeleri
- `<Suspense>` boundary eksikti (lazy route'larda boş ekran riski) → eklendi.
- `ScrollTop` artık hash'e kaydırıyor; footer çapraz-sayfa linkleri çalışıyor.
- Eksik React `key`'leri, `Button` PropTypes, `Map` `allowTransparency`,
  geçersiz Tailwind `hover:*` sınıfları, ölü kod temizlendi.
- İç içe geçersiz `<button><a>` kullanımları `Button` `asChild` ile giderildi.

### İçerik & özellikler
- **5G Konumlandırma Yarışması** faaliyet sayfası (`/5g-konumlandirma`).
- Ortak, veriyle beslenen **ActivityPage** (IDEF + 5G); eski Idef
  alt-component'leri kaldırıldı.
- Tıklanabilir **Proje kartları + detay modalı**, **Başarılar zaman tüneli**
  (milestone fotoğraflı; 2026 boş placeholder), **Haberler/Duyurular**
  bölümü, Hero CTA hiyerarşisi, IDEF/5G haber kaynakları.
- 5G galerisi: tekrar eden görsel kaldırıldı, 2 yeni fotoğraf eklendi.

### SEO & performans
- Open Graph / Twitter meta, `robots.txt`, `sitemap.xml`, sayfa-bazlı
  `<title>`/description (`useDocumentMeta`).
- `framer-motion` kaldırılıp lightbox yeniden yazıldı (chunk 123 kB → 1.9 kB);
  görsellerde `loading="lazy"`.

### Çok dillilik (TR/EN)
- `src/i18n/` — `LanguageContext` + `t()` (UI) ve `tx({tr,en})` (veri).
- Tüm site iki dilli; Header'da **TR | EN** geçişi (localStorage'da kalıcı,
  `<html lang>` güncellenir).

### Yayın

Normal tek GitHub Pages deploy'u: `master`/`main`'e push edilince
`.github/workflows/deploy.yml` çalışır, `npm run build` ile `dist/` üretilir
ve **teamergenekon.org/** köküne yayınlanır. (`/test/` alt yolu yoktur —
kaldırıldı.) `asset()` helper'ı kök tabanda (`/`) yolları değiştirmez;
ileride bir alt yola taşınmak gerekirse hazır altyapı sağlar.

## Gözden geçirilmesi önerilenler
- EN çevirileri (özellikle teknik/savunma terimleri).
- Achievement yılları (2024/2025) ve `news` taslak metinleri.
- 2026 zaman tüneli içeriği (boş bırakıldı).
- Cloudflare Web Analytics token'ı + GitHub `CF_BEACON_TOKEN` secret'ı.
- Sosyal paylaşım için özel OG görseli (şu an `/logo-full.png`).
