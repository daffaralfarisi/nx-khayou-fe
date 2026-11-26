# Migrasi Laravel → Next.js

Sumber referensi: `/mnt/data_project/lv-khayou-fe` (jangan diubah).

| Langkah | Status |
| --- | --- |
| 1. Layout (head, menu, footer) | selesai |
| 2. Inventaris plugin jQuery | selesai; pengganti per halaman dikerjakan di langkah 4 |
| 3. Data produk → `src/data/products.ts` | belum |
| 4. Halaman: home → `/shop/[slug]` → about → contact → 404 | belum |
| 5. Form kontak & newsletter | belum diputuskan |

## Langkah 1: layout

| Blade | Next.js |
| --- | --- |
| `layouts/header.blade.php` (`<head>`) | `src/app/layout.tsx` (metadata, daftar `STYLESHEETS`), `src/lib/site.ts` |
| `layouts/menu.blade.php` | `src/components/layout/MainMenu.tsx`, `SiteHeader.tsx`, `StickyHeader.tsx`; `<style>` inline → `public/css/site.css` |
| `layouts/footer.blade.php` | `SiteFooter.tsx`, `MobileNav.tsx` |
| `layouts/main.blade.php` | `src/app/layout.tsx`, `ScrollToTop.tsx` |

CSS template tetap disajikan apa adanya dari `public/` lewat `<link>`, dengan urutan yang sama seperti Laravel. `site.css` dimuat paling akhir.

Yang berbeda dari Laravel:

- **Preloader dihapus.** Dulu layar putih menutupi halaman sampai semua gambar selesai dimuat.
- **Sidebar `xs-sidebar-group` dihapus.** Isinya Lorem ipsum dan form ke themehealer.com, dan tidak ada tombol yang membukanya.
- **Favicon** memakai `images/Logo/main-logo-1.png`, sama seperti Laravel. Isi `images/favicons/` adalah logo template OnPoint, jadi jangan dipakai.
- **Canonical dan `og:url` diatur per halaman.** Layout hanya memberi nilai default. Tiap `page.tsx` wajib mengisi `alternates.canonical` dan `openGraph: { ...DEFAULT_OPEN_GRAPH, url }`; lihat `src/app/page.tsx`.
- **Viewport** memakai default Next, jadi zoom diizinkan. Laravel memakai `maximum-scale=1, user-scalable=0`.
- **Label menu desktop "Khayou Legdy" diganti "Khayou Ledgy"**, sama dengan menu mobile dan nama produk. Slug `legdy-deskshelf` tidak berubah.
- **Sticky header dirender di layout untuk semua halaman.** Di Laravel tiap halaman meng-include-nya sendiri.
- **Font Plus Jakarta Sans** dimuat lewat `next/font` (self-hosted), bukan link Google Fonts.
- **Gambar footer dan drawer mobile** memakai `loading="lazy"`. Tanpa itu, React 19 mem-preload semua `<img>` hasil SSR.
- **SEO per halaman** (title, description, h1/h2 tersembunyi yang dulu ada di `<head>`) dikerjakan bersama tiap halaman di langkah 4.

Catatan perilaku:

- Di layar ≤1199px, menu tampil sebagai pil mengambang di bawah layar dan sticky header disembunyikan. Ini berasal dari `onpoint.css` dan sama seperti di Laravel.
- `.page-wrapper` memakai `overflow: hidden`, jadi dropdown Shop terpotong di halaman yang lebih pendek dari dropdown itu (misalnya placeholder home saat ini).

## Langkah 2: plugin jQuery

`footer.blade.php` memuat 22 skrip ditambah `onpoint.js`. Yang benar-benar dipakai oleh halaman yang dirender (`landingpage/*`, `shop/index`, `shop/detail`, `about`, `contact`, `error404`) hanya ini:

| Plugin | Dipakai di | Pengganti | Status |
| --- | --- | --- | --- |
| jQuery | semua plugin di bawah | tidak dibutuhkan | dihapus |
| Bootstrap JS | collapse submenu Shop di menu mobile; tab "pill" Deskripsi/Spesifikasi di `shop/detail` | state React | menu: selesai · tab: langkah 4 |
| Swiper 5.4.5 | hero slider home (`thm-swiper__slider`: fade, loop, autoplay 4000 ms, bullet pagination yang bisa diklik) | paket npm `swiper` (`swiper/react`) | langkah 4 |
| Owl Carousel 2.3.4 (lokal dan CDN) | `#productCarousel` "Our Favorites": loop, autoplay 5 s, berhenti saat hover, panah dan dots, 1/2/2/3/4 item di 0/576/768/992/1200 px · `#productCarousel2` katalog: 1 item, center, stagePadding 5, loop, tombol prev/next sendiri | Swiper juga | langkah 4 |
| WOW.js | class `wow` di `product`, `banner_large`, `why_khayou`, `setup_with_catalog` | `src/components/WowAnimations.tsx` (IntersectionObserver; markup `className="wow fadeInLeft" data-wow-delay="300ms"` tidak berubah) | selesai |
| jquery-validate | `.contact-form-validated`: form sidebar (sudah dihapus) dan form WhatsApp di About. Di Laravel, form About juga mengirim `$.post` ke `/about` yang selalu gagal | atribut HTML `required` dan handler React | langkah 4 |
| nice-select | `<select>` subjek di contact | `<select className="form-select">` biasa | langkah 4 |

Plugin berikut tidak dipakai di halaman mana pun, jadi CSS-nya tidak dimuat dan foldernya dihapus dari `public/vendors`: bootstrap-select, isotope, jarallax, jquery-ajaxchimp, jquery-appear, jquery-circle-progress, jquery-magnific-popup, jquery-ui, jquery.circle-type (dan lettering), marquee, odometer, sidebar-content, wnumb.

Perilaku `onpoint.js` yang dipakai di semua halaman:

| Perilaku | Pengganti |
| --- | --- |
| Sticky header: salin menu, tambah `stricky-fixed` setelah scroll 130 px | `StickyHeader.tsx` + `src/hooks/useScrolledPast.ts` |
| Tombol scroll-to-top: muncul setelah scroll 100 px | `ScrollToTop.tsx` |
| Buka/tutup menu mobile dan `body.locked` | `MobileNavContext.tsx`, `MobileNav.tsx`; sekarang juga menutup dengan Escape dan saat link diklik |
| Class `current` di menu (`dynamicCurrentMenuClass`) | `usePathname()` di `MainMenu.tsx` |
| Preloader `fadeOut` | dihapus |

Skrip inline per halaman ditulis dengan vanilla JS, dan akan di-port ke React di langkah 4:

- `landingpage/testimonial`: slider 6 slide (otomatis 5 s, swipe, tombol, dots, panah keyboard).
- `landingpage/video`: video dimuat saat mendekati viewport, overlay disejajarkan dengan video, teks berganti tiap 3,5 s. `public/videos/khayou-v3.mp4` (14,5 MB) belum disalin dari Laravel.
- `shop/detail`: overlay zoom gambar produk, bisa ditutup dengan Escape.
- `about`: scroll halus ke `#contact` dengan offset tinggi header; form dikirim ke WhatsApp.
- `contact`: form palsu (`Math.random`) dan warna border berubah saat blur.

Catatan untuk langkah 4:

- Jangan memakai class `owl-carousel` di markup baru. CSS Owl yang lama menyembunyikannya sampai di-init. Di sisi lain, `card.css` men-style `.owl-nav`, `.owl-dots`, dan `.owl-dot.active`, jadi pakai nama class itu untuk tombol dan dots Swiper agar tampilannya sama.
- Mode loop Swiper butuh jumlah slide lebih banyak dari `slidesPerView`. Ada 4 produk dan 4 tampil sekaligus di ≥1200 px, jadi gandakan daftar slidenya.
- Swiper modern memakai class `.swiper`, bukan `.swiper-container`. Selector `.main-slider .swiper-slide*` dan `#main-slider-pagination .swiper-pagination-bullet*` di `onpoint.css` tetap cocok.
- Markup Blade menyalin class `animated` dan inline `style="visibility…; animation-name…"` hasil render WOW. Hapus keduanya, cukup `wow <animasi>` dan `data-wow-*`.
