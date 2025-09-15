# Converter Hammer Unit

Proyek ini adalah aplikasi web sederhana untuk melakukan konversi satuan antara **Sistem Metrik** (mm, cm, dm, m, dam, hm, km) dan **Hammer Unit (HU)** yang digunakan dalam pengukuran jarak pada game **Source Engine** (seperti CS:GO, Half-Life, dll).

## Fitur
- Konversi **Metric → Hammer Unit (HU)**.
- Konversi **Hammer Unit (HU) → Metric** (menampilkan hasil dalam mm, cm, dm, m, dam, hm, km).
- Tampilan responsif dan sederhana dengan CSS.
- Validasi input agar hanya menerima angka.

## Struktur Proyek
```
├── convert.html     # Halaman utama aplikasi
├── converter.css    # File stylesheet untuk tampilan
└── HU.js            # Script JavaScript untuk logika konversi
```

##  Cara Menjalankan
1. Clone repository atau download project ini.
2. Pastikan semua file (`convert.html`, `converter.css`, `HU.js`) berada di folder yang sama.
3. Buka `convert.html` menggunakan browser (Chrome, Edge, Firefox, dll).
4. Aplikasi siap digunakan tanpa perlu server tambahan.

## Rumus Konversi
- **1 meter = 52.5 HU**  
  → **1 HU ≈ 19.0476 mm**

### Metric → HU
1. Input nilai dan pilih satuan metrik.
2. Program akan mengubah satuan ke milimeter, lalu dikonversi ke HU dengan:
   ```
   HU = mm / (1000 / 52.5)
   ```

### HU → Metric
1. Input nilai HU.
2. Program akan menghitung ekuivalen ke:
   - mm
   - cm
   - dm
   - m
   - dam
   - hm
   - km

## Tampilan
- Form input konversi
- Pilihan mode: Metric → HU atau HU → Metric
- Hasil ditampilkan secara langsung di bawah form

## Teknologi yang Digunakan
- **HTML5** → Struktur halaman
- **CSS3** → Desain dan layout responsif
- **JavaScript (Vanilla)** → Logika konversi dan interaktivitas

