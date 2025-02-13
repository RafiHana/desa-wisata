# Desa Wisata Surodadi - Website

Website ini adalah platform untuk mempromosikan Desa Wisata Surodadi. Website ini dibangun menggunakan **Next.js** (framework React) dan **Tailwind CSS** untuk styling. Website ini mencakup beberapa halaman, seperti Home, Sejarah Desa, Destinasi Wisata, Galeri, dan Kontak.

## Fitur

- **Navbar Responsif**: Navbar yang menyesuaikan tampilan untuk desktop dan mobile.
- **Halaman Home**: Landing page dengan tampilan menarik dan informasi singkat tentang desa.
- **Halaman Sejarah**: Menampilkan sejarah desa.
- **Halaman Destinasi Wisata**: Menampilkan daftar destinasi wisata di desa.
- **Halaman Galeri**: Menampilkan foto-foto desa dalam grid responsif.
- **Halaman Kontak**: Menampilkan informasi kontak desa.
- **Scroll Halus**: Pengalaman scroll yang halus di seluruh halaman.

## Teknologi yang Digunakan

- **Next.js**: Framework React untuk server-side rendering dan routing.
- **Tailwind CSS**: Utility-first CSS framework untuk styling.
- **Framer Motion**: Library untuk animasi dan scroll halus.
- **TypeScript**: Untuk penulisan kode yang lebih aman dan terstruktur.

## Cara Instalasi

### Prasyarat

- **Node.js**: Pastikan Node.js terinstal di komputer Anda. Anda bisa mengunduhnya dari [sini](https://nodejs.org/).
- **npm**: Package manager untuk menginstal dependensi.

### Langkah-langkah

1. **Clone Repository**:
   git clone https://github.com/RafiHana/desa-wisata.git
   cd repo-name

2. **Instal Dependensi**
    npm install

3. **Jalankan Proyek**
    npm run dev

4. **Buka di Browser**
    Buka http://localhost:3000 di browser Anda.

### Struktur Proyek
desa-wisata/
├── public/              # File static seperti gambar dan logo
├── src/
│   ├── app/             # Halaman dan layout
│   │   ├── components/  # Komponen reusable
│   │   ├── sejarah/     # Halaman Sejarah Desa
│   │   ├── destinasi/   # Halaman Destinasi Wisata
│   │   ├── galeri/      # Halaman Galeri
│   │   ├── contact/     # Halaman Kontak
│   │   └── page.tsx     # Halaman Home
│   ├── styles/          # File CSS global
│   └── utils/           # Utility functions atau konstanta
├── tailwind.config.ts   # Konfigurasi Tailwind CSS
├── postcss.config.js    # Konfigurasi PostCSS
├── package.json         # Dependensi dan skrip proyek
└── README.md            # Dokumentasi proyek

## 🤝 Kontributor
- Rafi Hana - Developer

--
--

![Home](public/homepage.png)