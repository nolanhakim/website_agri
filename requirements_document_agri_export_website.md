# Requirements Document (RD) — Website Korporat & Katalog Ekspor AGRI

| Metadata Dokumen | Keterangan |
| :--- | :--- |
| **Nama Perusahaan** | AGRI |
| **Positioning** | *High Quality Indonesian Natural Resources* |
| **Model Bisnis** | B2B Exporter, Manufacturer & Aggregator Komoditas Olahan Indonesia |
| **Target Audiens** | *International Buyers*, *Importers*, *Distributors*, *Procurement Managers* (Industri Parfum/Kosmetik, Makanan/Minuman, Shisha/BBQ, Furnitur, & Kemasan Ramah Lingkungan) |
| **Versi Dokumen** | 1.0 |

---

## 1. Tujuan Proyek (Project Objectives)
1. Membangun kehadiran digital berstandar internasional yang memosisikan **AGRI** sebagai eksportir tepercaya untuk 5 komoditas unggulan Indonesia (**Briket, Minyak Nilam, Minyak Cengkeh, Daun Jati, dan Kayu**).
2. Menyediakan informasi spesifikasi teknis, kapasitas produksi, dan legalitas ekspor secara transparan untuk mempercepat proses pengambilan keputusan *buyer* luar negeri.
3. Mengonversi pengunjung menjadi prospek bisnis (*B2B Leads*) melalui sistem **Request for Quotation (RFQ)** dan **Sample Request** yang terstruktur.

---

## 2. Ruang Lingkup Produk & Spesifikasi Teknis (Product Scope)
Sistem katalog website harus mampu mengakomodasi 5 kategori komoditas beserta parameter teknis spesifik masing-masing:

### 2.1. Coconut Charcoal Briquettes (Briket Tempurung Kelapa)
* **Varian:** Shisha/Hookah Grade (Cube, Hexagonal, Finger) & BBQ Grade.
* **Parameter Wajib:** *Ash Content* (`< 2.2%`), *Moisture* (`< 5%`), *Fixed Carbon* (`> 80%`), *Calorific Value* (`> 7,200 kcal/kg`), *Burning Time* (`2 - 2.5 hours`), warna abu (*White/Light Grey*).
* **Opsi Layanan:** *Custom OEM/ODM Packaging* (Inner plastic + Inner box + Master carton).

### 2.2. Patchouli Oil (Minyak Nilam)
* **Spesifikasi:** *100% Pure Steam-Distilled Pogostemon cablin Oil* (asal Sulawesi / Sumatera / Jawa).
* **Parameter Wajib:** *Patchouli Alcohol (PA) Content* (`30% - 34%+`), *Acid Value*, *Specific Gravity*, *Refractive Index*, *Optical Rotation*, warna & kejernihan (*Clear Golden to Dark Brown*), bebas logam berat (*Iron-free / Stainless Steel distilled*).
* **Kemasan:** *HDPE / Galvanized Steel Drum* (`25 kg`, `50 kg`, `200 kg`) atau *Aluminum Bottle* untuk sampel.

### 2.3. Clove Oil (Minyak Cengkeh)
* **Varian:** *Clove Bud Oil*, *Clove Stem Oil*, dan *Clove Leaf Oil* (*Rectified / Crude*).
* **Parameter Wajib:** *Total Eugenol Content* (`78% - 88%+`), *Specific Gravity*, *Refractive Index*, *Solubility in Ethanol*.
* **Kemasan:** *25 kg / 200 kg Export Standard Drum*.

### 2.4. Dried Teak Leaves (Daun Jati Olahan / Kering)
* **Aplikasi:** Kemasan makanan alami (*eco-friendly food wrapping*), bahan kerajinan, dan ekstrak botani.
* **Parameter Wajib:** Ukuran daun (*Grade A: > 35 cm*, *Grade B: 25-35 cm*), *Moisture Content* (`< 10%`), proses pengeringan (*Sun-dried / Oven-dried*), bebas jamur/hama, kondisi daun utuh (*whole leaf*).
* **Kemasan:** *Pressed Bales* atau *Corrugated Master Box* dengan lapisan anti-lembap.

### 2.5. Timber & Wood Products (Kayu Olahan & Gelondongan)
* **Jenis Kayu:** Kayu Jati (*Teak*), Mahoni, dan kayu keras tropis legal lainnya (*Logs, Sawn Timber / RST, Decking, Flooring*).
* **Parameter Wajib:** Kadar air (*Kiln Dried / KD 10-12%* atau *Air Dried*), dimensi standar/kustom, klasifikasi mutu (*Grade A/B/C*), dan wajib menyertakan kepatuhan **SVLK (Sistem Verifikasi Legalitas Kayu)**.

---

## 3. Kebutuhan Fungsional (Functional Requirements)

### FR-01: Manajemen Katalog Multi-Komoditas (CMS)
* Admin dapat menambah, mengubah, dan menghapus produk pada 5 kategori utama.
* Setiap halaman detail produk mendukung tabel spesifikasi dinamis, galeri foto resolusi tinggi, dan lampiran file PDF (**COA**, **MSDS**, **Product Brochure**).

### FR-02: Sistem Request for Quotation (RFQ) & Sample Request
* Formulir pengajuan penawaran interaktif yang dapat diakses dari tombol CTA global maupun langsung dari halaman produk (dengan produk otomatis terpilih).
* **Input Wajib:** Nama Lengkap, Nama Perusahaan, Negara Tujuan, Email Korporat, Nomor WhatsApp/Telepon, Pilihan Produk, Estimasi Kuantitas (*MOQ / Kontainer 20ft / 40ft*), Terminologi Pengiriman (*FOB / CIF / CFR / EXW*), dan Catatan Tambahan.
* Notifikasi otomatis terkirim ke email tim *Sales Export* AGRI dan email konfirmasi ke *buyer*.

### FR-03: Kalkulator Kapasitas Kontainer & Estimasi Muatan (Interactive Tool)
* Fitur bantu bagi *buyer* untuk menghitung estimasi volume/tonase muatan dalam kontainer **20ft FCL** dan **40ft HQ** berdasarkan jenis kemasan (misal: jumlah *master box* briket atau jumlah *drum* minyak atsiri).

### FR-04: Pusat Dokumen Legalitas & Sertifikasi (Compliance Hub)
* Halaman khusus yang menampilkan gambaran dokumen ekspor yang disediakan AGRI (COA, MSDS, Phytosanitary, COO, SVLK, Bill of Lading) untuk meningkatkan kepercayaan *buyer* baru.

### FR-05: Dukungan Multi-Bahasa & Kontak Langsung
* Bahasa utama **Bahasa Inggris (EN)** dengan tata bahasa bisnis internasional yang akurat.
* Opsi lokalisasi tambahan (**Bahasa Arab** untuk pasar briket Timur Tengah, dan **Bahasa Mandarin** untuk pasar minyak atsiri & kayu).
* Tombol *floating* **WhatsApp Business Direct** yang terhubung langsung ke tim ekspor.

---

## 4. Kebutuhan Non-Fungsional (Non-Functional Requirements)

| Kategori | Spesifikasi Target |
| :--- | :--- |
| **Performa & Kecepatan** | *Page Load Time* `< 2.5 detik` dari server luar negeri (Amerika Utara, Eropa, Timur Tengah, Asia Timur) menggunakan CDN global. Skor Google Lighthouse Performance `> 90`. |
| **SEO Internasional** | Implementasi *Server-Side Rendering (SSR)* / *Static Site Generation (SSG)*, *Schema Markup* (Product & Organization), serta optimasi *meta tags* untuk kata kunci ekspor B2B. |
| **Responsivitas** | *Mobile-first responsive design* (optimal di Desktop, Tablet, dan Smartphone saat *buyer* mengakses dari pameran dagang/*trade show*). |
| **Keamanan** | Sertifikat SSL/HTTPS wajib, proteksi anti-spam (Cloudflare Turnstile / reCAPTCHA) pada formulir RFQ, dan sanitasi input database. |

---

## 5. Struktur Halaman (Sitemap)
1. **Home:** Hero section, ringkasan 5 komoditas utama, keunggulan kompetitif AGRI (*Direct Sourcing, Strict QC, Global Logistics*), sertifikasi, dan CTA RFQ.
2. **Products:**
   * `/products/charcoal-briquettes`
   * `/products/patchouli-oil`
   * `/products/clove-oil`
   * `/products/teak-leaves`
   * `/products/timber`
3. **Quality & Compliance:** Proses *Quality Control*, standar laboratorium, dan legalitas ekspor (SVLK, COA, MSDS, Phytosanitary).
4. **Production & Logistics:** Kapasitas suplai bulanan, opsi kemasan (*bulk & OEM*), kalkulator kontainer, dan pelabuhan muat (*Tanjung Emas / Tanjung Perak / Tanjung Priok*).
5. **About AGRI:** Profil perusahaan, jaringan petani & pengrajin mitra di Indonesia, serta komitmen keberlanjutan (*sustainability*).
6. **Contact / Request a Quote:** Formulir RFQ lengkap, alamat kantor & gudang/pabrik, serta kontak langsung tim ekspor.