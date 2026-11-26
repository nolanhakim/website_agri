# Design System & UI/UX Specification (`design.md`) — AGRI Corporate & Export Website

**Tagline:** *High Quality Indonesian Natural Resources*  
**Domain:** B2B Commodity Export (Coconut Charcoal Briquettes, Patchouli Oil, Clove Oil, Dried Teak Leaves, Timber & Wood Products)  
**Primary Color Anchor:** `#7D9985` (Botanical Sage)

---

## 1. Filosofi & Arah Visual (Visual Direction)
Desain website **AGRI** mengadopsi pendekatan **Clean Organic Corporate & Botanical Precision**. Tata letak terinspirasi dari struktur korporat bahan baku alami bertaraf global: memadukan fotografi skala penuh (*full-bleed*), komponen *glassmorphism* yang ringan, *bento grid* berbasis data dampak, serta visual *cutout* bahan baku yang bersih dan modern.

* **Kesan Pertama (3-Second Trust):** Tenang, berwibawa, higienis, dan transparan. Warna dasar **Botanical Sage (`#7D9985`)** merepresentasikan keberlanjutan, kemurnian botani, dan stabilitas rantai pasok dari Indonesia ke pasar global.
* **Keseimbangan Visual:** Mengombinasikan ruang putih yang lapang (*airy whitespace* pada latar `#F7F9F7` dan `#FFFFFF`) dengan blok kartu bernuansa *sage-to-deep-forest gradient*, potongan foto bahan baku yang menyatu mulus (*overlapping cutouts*), serta tipografi geometris yang tegas.

---

## 2. Sistem Warna (Color Palette — `#7D9985` Anchored)
Palet warna diturunkan secara harmonis dari **`#7D9985`** (Sage Green) untuk memastikan kontras teks memenuhi standar aksesibilitas (WCAG AA/AAA) sekaligus mempertahankan nuansa organik yang elegan.

| Peran Warna | Nama Token | Kode Hex | Penggunaan Utama |
| :--- | :--- | :--- | :--- |
| **Primary Brand (Anchor)** | Botanical Sage | `#7D9985` | Warna identitas utama, *gradient start* kartu bento, aksen panel samping kartu produk, badge kategori. |
| **Primary Dark** | Deep Canopy Slate | `#2B3D32` | Heading utama (H1/H2/H3), latar belakang footer, tombol solid utama, kontras teks gelap di atas terang. |
| **Primary Deeper / Hover** | Midnight Moss | `#1C2921` | *Bottom copyright bar* pada footer, *hover state* tombol utama, teks *body* berpenekanan tinggi. |
| **Secondary / Accent** | Warm Harvest Amber | `#C48B3F` | Sorotan metrik/angka penting, indikator *status verified*, aksen CTA sekunder (*Request Quote*). |
| **Soft Tint / Surface** | Mist Sage | `#EDF2EE` | Latar belakang *pill badge* (`ABOUT US`, `WHY CHOOSE US`, `OUR COMMODITIES`), hover baris tabel spesifikasi. |
| **Light Neutral (Canvas)** | Alabaster Sage | `#F7F9F7` | Latar belakang halaman utama agar nyaman membaca data teknis dan spesifikasi ekspor. |
| **Surface / Card** | Pure White | `#FFFFFF` | Kartu 2x2 komoditas, kotak statistik (*Since ...*), tabel COA/TDS, formulir RFQ. |
| **Body Text** | Slate Charcoal | `#3D4740` | Teks paragraf (*body copy*) dan deskripsi produk agar lembut namun tetap tajam dibaca. |
| **Muted Text** | Ash Sage | `#6D7A71` | Label metadata, *caption*, sub-label bahasa, dan teks sekunder. |
| **Border & Divider** | Pale Eucalyptus | `#DCE3DD` | Garis pemisah tabel, batas kartu (`1px solid`), dan *outline* tombol sekunder. |
| **Gradient Hero / Bento** | Sage Canopy Gradient | `#7D9985` → `#3A5443` | Latar belakang kartu *Bento Grid* ("Innovation in Numbers"), panel kiri kartu komoditas, dan *overlay* footer. |

---

## 3. Tipografi (Typography)
Menggunakan *Sans-Serif* geometris modern dengan karakter huruf terbuka (*open apertures*) untuk tampilan korporat yang ramah namun presisi, dipadukan dengan *Monospace* untuk angka teknis laboratorium.

* **Font Utama (Headings & UI):** `Plus Jakarta Sans`
  * **Hero Headline (H1):** `52px` – `60px` | Bold (`700`) | Line-height `1.12` | Letter-spacing `-0.02em` | Centered (di atas Hero)
  * **Section Title (H2):** `36px` – `42px` | Bold (`700`) | Line-height `1.2` | Letter-spacing `-0.015em` | Color `#2B3D32`
  * **Card Title (H3):** `20px` – `24px` | SemiBold (`600`) | Line-height `1.3` | Color `#2B3D32`
  * **Big Stat Numbers (Bento):** `44px` – `56px` | Bold (`700`) | Line-height `1.05` | Color `#FFFFFF`
* **Font Teks (Body & Navigation):** `Inter`
  * **Body Regular:** `15px` – `16px` | Regular (`400`) | Line-height `1.65` | Color `#3D4740`
  * **Navigation Link:** `13px` | Medium (`500`) | Uppercase | Letter-spacing `0.06em`
  * **Section Eyebrow Pill:** `11px` | SemiBold (`600`) | Uppercase | Letter-spacing `0.1em` | Text `#2B3D32` on `#EDF2EE`
* **Font Data Teknis (Spesifikasi & Lab):** `JetBrains Mono`
  * Khusus untuk nilai COA/TDS (*Ash Content < 2.2%*, *PA Content 30–34%+*, *Eugenol 78–88%+*, *KD 10–12%*), nomor HS Code, dan kapasitas kontainer (`20ft FCL` / `40ft HQ`).

---

## 4. Sistem Grid & Tata Letak (Layout & Spacing)
* **Container Max-Width:** `1280px` (Desktop) dengan padding horizontal `24px` (Mobile) hingga `48px` (Desktop).
* **Grid System:** 12-Column CSS Grid (`gap: 24px`).
* **Border Radius:**
  * Kartu Bento & Kartu Komoditas: `12px` (halus, modern, organik).
  * Kotak Statistik & Tabel Spesifikasi: `8px`.
  * Tombol Utama & Input Form: `6px`.
  * Tombol Hero & Section Eyebrow Badge: `9999px` (*Full Pill*).
* **Elevation / Shadow:**
  * Kartu Putih: `0 8px 30px rgba(43, 61, 50, 0.06)` dengan border halus `1px solid #DCE3DD`.
  * Floating Glass Card (Hero): `backdrop-filter: blur(12px)`, background `rgba(125, 153, 133, 0.35)`, border `1px solid rgba(255, 255, 255, 0.25)`.

---

## 5. Struktur Halaman & Komponen UI (Page Architecture & Reference Style)

### A. Navigation Bar (Transparent Overlay on Hero → Sticky Solid White on Scroll)
* **Kiri:** Logo **AGRI** (monogram daun/tetesan organik + wordmark). Putih saat di atas Hero; berubah menjadi `#2B3D32` saat *scroll*.
* **Tengah:** `ABOUT US`, `OUR COMMODITIES` (Mega-menu 5 komoditas), `QUALITY & COMPLIANCE`, `LOGISTICS`, `CONTACT US`.
* **Kanan:** Language Switcher (`EN | AR | ZH`) dan tombol kompak **`Request Quote`**.

### B. Hero Section (Full-Bleed Carousel + Floating Highlight)
Mengadopsi gaya **Gambar 1**:
* **Background:** Foto/video *full-bleed* resolusi tinggi (panen nilam, penyulingan minyak atsiri, atau sortir briket kelapa) dengan *dark sage scrim overlay* (`rgba(28, 41, 33, 0.45)`) agar teks putih terbaca tajam.
* **Konten Tengah:**
  * Headline besar putih: *"Crafting Indonesia's Natural Resources for the World"*
  * CTA Pill Outline Transparan: **`LEARN MORE >`** (border `1px solid rgba(255,255,255,0.8)`, background `rgba(43,61,50,0.35)`).
  * Navigasi slider panah kiri/kanan berbentuk lingkaran transparan dan indikator *dot/pill* di tengah bawah.
* **Kanan Bawah (Floating Glass Card):**
  * Kartu *glassmorphism* bernuansa `#7D9985` transparan dengan ikon daun lingkaran di kiri, judul **"Export-Grade Purity"**, dan sub-teks *"Delivering COA-verified commodities from certified Indonesian sources."*

### C. About Us & Heritage Section (Split Layout + Organic Masked Collage)
Mengadopsi gaya **Gambar 2**:
* **Background:** Putih bersih dengan siluet foto perkebunan/pegunungan berkabut yang sangat tipis (*opacity 10–15%*).
* **Kolom Kiri (6 Kolom):**
  * Eyebrow pill badge: `ABOUT US` (background `#EDF2EE`, teks `#2B3D32`).
  * Headline H2: *"Indonesian Natural Resources & Export Specialist"*
  * Paragraf ringkas mengenai peran AGRI sebagai eksportir, manufaktur, dan agregator B2B tepercaya.
  * Tombol Outline: **`Learn More >`** (border `1px solid #7D9985`, teks `#2B3D32`, radius `6px`).
  * **Highlight Card Putih (Elevated):** Menampilkan metrik jangkar (*"Supplying 30+ Countries"* atau *"Direct Sourcing Network — 5 Core Commodities"*).
* **Kolom Kanan (6 Kolom):**
  * **Organic Shape Mask (Bentuk Tetesan/Daun Bertingkat):** Menampilkan kolase foto makro bahan baku AGRI (daun nilam hijau, bunga cengkeh kering, serat kayu jati/bara briket) di dalam bingkai kurva organik yang bersih.

### D. "Why Choose Us" — Innovation & Capacity in Numbers (Bento Grid)
Mengadopsi gaya **Gambar 3**:
* **Header:** Eyebrow pill `WHY CHOOSE US` + Headline H2 *"Our Export Capacity in Numbers"*.
* **Grid Bento (Asimetris 3-Kolom / 2-Baris):** Semua kartu menggunakan latar gradasi `#7D9985` ke `#2B3D32` dengan radius `12px`, teks putih rata kiri/atas, dan foto produk/aktivitas yang dipotong rapi (*cutout / bottom-bleed*):
  1. **Kartu Lebar (Span 2):** Foto tim QC/Laboratorium di kiri + Statistik `100%` (*Batch Lab-Tested with COA & MSDS*) dan `24h` (*Fast Export RFQ Response*).
  2. **Kartu Standar:** `20ft / 40ft` (*FCL & LCL Global Container Readiness*) + visual kontainer/pelabuhan.
  3. **Kartu Standar:** `5 Core` (*Export Commodities: Briquettes, Oils, Teak, Timber*) + foto makro cengkeh/briket.
  4. **Kartu Standar:** `30%–34%+` (*Patchouli Alcohol & 78%+ Eugenol Purity*) + visual botol/cairan atsiri.
  5. **Kartu Standar:** `SVLK` (*100% Legal Indonesian Timber Compliance*) + visual globe/peta ekspor.
  6. **Kartu Lebar (Span 2):** *Embracing Direct Partnerships with* **`1,500+`** *Indonesian Farmers & Artisans* + foto petani/pengrajin di sisi kanan dengan kurva lengkung organik.

### E. "Our Commodities" — 2x2 (+1 Full-Width) Split Cards with Overlapping Cutouts
Mengadopsi gaya **Gambar 4**:
* **Header (Centered):** Eyebrow pill `OUR COMMODITIES` + Headline H2 *"Delivering Pure Indonesian Resources to Global Industries"*.
* **Kartu Komoditas:** Kartu putih (`#FFFFFF`) dengan *soft shadow*, dibagi menjadi 2 bagian:
  * **Sisi Kiri (~32% lebar kartu):** Panel vertikal dengan gradasi `#7D9985` → `#3A5443` dan foto komoditas berlatar transparan (*isolated PNG cutout*) yang sedikit keluar melewati batas atas/bawah/kiri panel untuk efek 3D yang hidup.
  * **Sisi Kanan (~68% lebar kartu):** Judul komoditas (`#2B3D32`), deskripsi singkat aplikasi industri + ringkasan parameter teknis (`JetBrains Mono`), dan tombol solid **`View Specifications >`** berwarna `#2B3D32` (hover `#7D9985`).
* **Daftar Kartu (5 Komoditas Sesuai RD):**
  1. **Coconut Charcoal Briquettes** (Shisha/Hookah & BBQ Grade — Ash `< 2.2%`, Fixed Carbon `> 80%`).
  2. **Patchouli Oil (*Pogostemon cablin*)** (Steam-Distilled, PA `30%–34%+`, Iron-Free).
  3. **Clove Oil (*Syzygium aromaticum*)** (Bud, Stem, & Leaf Oil — Eugenol `78%–88%+`).
  4. **Dried Teak Leaves** (Eco-friendly Food Wrapping & Botanical — Grade A `> 35 cm`, Moisture `< 10%`).
  5. **Timber & Wood Products** (Teak, Mahogany — KD `10–12%`, SVLK Certified) — ditampilkan sebagai kartu *featured* di baris bawah atau bagian dari grid responsif.

### F. Product Detail, Container Calculator & Compliance Hub
Mengikuti kebutuhan fungsional pada `requirements_document_agri_export_website.md`:
* **Product Detail Layout:** Galeri foto 5-kolom di kiri + ringkasan botani, 4 *metric highlight boxes* (`#EDF2EE`), tabel spesifikasi teknis (`JetBrains Mono`), tombol unduh PDF (**COA**, **MSDS**, **Brochure**), dan tombol **`Request Sample / Quote`**.
* **Interactive Container Calculator:** Widget bersih dengan latar `#FFFFFF`, border `#DCE3DD`, dan hasil estimasi volume/tonase (`20ft FCL` vs `40ft HQ`) yang disorot dengan warna `#7D9985` dan `#2B3D32`.
* **Compliance Hub:** Deretan kartu sertifikasi (COA, MSDS, SVLK, Phytosanitary, COO, Bill of Lading) dengan badge status `#7D9985`.

### G. Footer (Deep Sage Canopy + Textured Overlay)
Mengadopsi gaya **Gambar 5**:
* **Background:** `#2B3D32` dengan tekstur foto perkebunan/hutan tropis ber-opacity rendah (`8%–12%`) agar terasa kaya namun tetap bersih.
* **Kolom Kiri:** Logo **AGRI** putih, deskripsi singkat misi ekspor, serta detail *Contact Us* (WhatsApp Business, Email Korporat, Media Sosial).
* **Kolom Kanan (4 Kolom Navigasi):**
  * *Commodities* (Briquettes, Patchouli Oil, Clove Oil, Teak Leaves, Timber)
  * *Company* (About AGRI, Farmer Network, Sustainability)
  * *Compliance & Logistics* (Quality Control, Export Docs, Container Calculator, Port of Loading)
  * *Inquiries* (Request for Quotation, Sample Request, Language: EN / AR / ZH)
* **Bottom Copyright Bar:** Strip `#1C2921` di paling bawah dengan teks putih rata tengah: `Copyright © 2026 AGRI — Indonesian Natural Resources. All Rights Reserved.`

---

## 6. Panduan Fotografi & Aset Visual (Art Direction)
* **Tone Warna Foto:** Pencahayaan alami yang jernih dan cerah (*crisp natural daylight*), menghindari *color grading* yang terlalu kuning/kusam agar selaras dengan nuansa segar `#7D9985`.
* **Cutout Assets (Untuk Bento & Kartu 2x2):** Wajib menggunakan gambar berlatar transparan (*isolated PNG/WebP*) dengan bayangan kontak halus agar bahan baku (kubus briket, botol kaca amber minyak nilam, bunga cengkeh, daun jati utuh, balok kayu jati) terlihat menonjol keluar dari panel `#7D9985`.
