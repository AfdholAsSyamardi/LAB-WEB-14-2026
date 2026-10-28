# Kedai Kopi Senja - Self-Order Tablet System

Proyek Tugas Praktikum 7 Pemrograman Web: **React Hooks (State & Props)**  
Studi Kasus: Sistem Pemesanan Meja Mandiri (Self-Ordering Tablet) pada **Kedai Kopi Senja**.

---

## ☕ Deskripsi Singkat
Kedai Kopi Senja mengimplementasikan antarmuka tablet meja mandiri untuk mempermudah pelanggan memilih dan memesan menu secara langsung tanpa harus mengantre di kasir. Dibangun menggunakan **React (Vite)** dan di-styling menggunakan **Tailwind CSS**.

---

## 📂 Struktur Berkas
```
kopi-senja/
├── index.html
├── package.json
├── tailwind.config.js           (konfigurasi Tailwind CSS)
├── postcss.config.js            (konfigurasi PostCSS)
├── README.md
└── src/
    ├── main.jsx
    ├── index.css                (berisi directives @tailwind)
    ├── App.jsx                  (data menu + state utama)
    └── components/
        ├── Navbar.jsx           (indikator jumlah pesanan & total harga real-time)
        ├── MenuList.jsx         (filter kategori & daftar kartu menu)
        ├── MenuCard.jsx         (kartu per menu dengan state detail & ketersediaan)
        ├── RingkasanPesanan.jsx (tabel/daftar item pesanan, kontrol kuantitas, total)
        ├── FormPesan.jsx        (controlled input nama, meja, validasi, dan submit)
        └── Footer.jsx           (informasi kedai & hak cipta)
```

---

## 🚀 Fitur dan Implementasi Konsep

### 1. State Management (`useState`)
- **State Utama di `App.jsx`**:
  - `kategoriAktif`: Menyimpan kategori filter yang dipilih ("Semua", "Kopi", "Non-Kopi", "Makanan").
  - `pesanan`: Array item pesanan yang dikelola melalui fungsi penambah, pengurang, dan penghapus.
  - `notifikasiSukses`: Menyimpan pesan konfirmasi sukses setelah pesanan dikirim.
- **State Lokal di `MenuCard.jsx`**:
  - `bukaDetail`: Menentukan apakah kartu tertentu sedang membuka deskripsi menu atau tidak, tanpa mempengaruhi kartu menu lain.
- **State Form di `FormPesan.jsx`**:
  - `nama`, `nomorMeja`: Menggunakan pendekatan *controlled component*.
  - `pesanError`: Menyimpan feedback validasi bila data belum lengkap atau pesanan masih kosong.

### 2. Props & Alur Data Satu Arah
- Data `daftarMenu` hanya didefinisikan satu kali di `App.jsx` sebagai satu-satunya *single source of truth*.
- Seluruh data dikirim ke komponen anak melalui props dengan *destructuring* parameter.
- Tipe data angka dan boolean dikirim dengan `{ }` sesuai aturan React.

### 3. Lifting State Up
- State `pesanan` diletakkan di `App.jsx` (induk terdekat) sehingga `Navbar` di bagian atas halaman dan `RingkasanPesanan` di kolom samping selalu menampilkan jumlah item dan total harga yang persis sama dan sinkron secara real-time.
- Handler aksi (`handleTambahPesanan`, `handleKurangPesanan`, `handleHapusPesanan`, `handleKirimPesanan`) dioper ke komponen anak sebagai *function props*.

### 4. Validasi & Penanganan Kasus
- **Menu Habis**: Tombol pemesanan di-*disable* jika `tersedia === false`.
- **Validasi Formulir**: Jika nama kosong, nomor meja kosong, atau keranjang pesanan masih kosong, sistem menolak submit dan menampilkan pesan peringatan.
- **Reset Form & Keranjang**: Setelah pesanan berhasil dikirim, formulir dikosongkan, keranjang pesanan dikosongkan, dan muncul ucapan terima kasih dengan detail meja serta total pesanan.

---

## 🛠️ Cara Menjalankan Proyek

1. Masuk ke direktori proyek:
   ```bash
   cd "c:\UNHAS\ALL KELAS\SEMESTER 3\WEB\Tuprak\Tuprak7\kopi-senja"
   ```

2. Jalankan server pengembangan (development server):
   ```bash
   npm run dev
   ```

3. Buka URL yang tertera di terminal (biasanya `http://localhost:5173/`) pada browser Anda.
