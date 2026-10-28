import { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import MenuList from "./components/MenuList.jsx";
import RingkasanPesanan from "./components/RingkasanPesanan.jsx";
import FormPesan from "./components/FormPesan.jsx";
import Footer from "./components/Footer.jsx";


const daftarMenu = [
  {
    id: 1,
    nama: "Kopi Susu",
    kategori: "Kopi",
    harga: 18000,
    tersedia: true,
    deskripsi: "Espresso dengan susu segar dan gula aren.",
  },
  {
    id: 2,
    nama: "Americano",
    kategori: "Kopi",
    harga: 15000,
    tersedia: true,
    deskripsi: "Espresso dengan air panas, rasa kuat dan bersih.",
  },
  {
    id: 3,
    nama: "Cappuccino",
    kategori: "Kopi",
    harga: 22000,
    tersedia: true,
    deskripsi: "Espresso, susu panas, dan busa susu tebal.",
  },
  {
    id: 4,
    nama: "Matcha Latte",
    kategori: "Non-Kopi",
    harga: 24000,
    tersedia: true,
    deskripsi: "Teh hijau matcha dengan susu.",
  },
  {
    id: 5,
    nama: "Teh Tarik",
    kategori: "Non-Kopi",
    harga: 14000,
    tersedia: false,
    deskripsi: "Teh susu yang ditarik hingga berbusa.",
  },
  {
    id: 6,
    nama: "Cokelat Panas",
    kategori: "Non-Kopi",
    harga: 20000,
    tersedia: true,
    deskripsi: "Cokelat pekat dengan susu hangat.",
  },
  {
    id: 7,
    nama: "Roti Bakar",
    kategori: "Makanan",
    harga: 16000,
    tersedia: true,
    deskripsi: "Roti tebal dengan selai cokelat dan keju.",
  },
  {
    id: 8,
    nama: "Pisang Goreng",
    kategori: "Makanan",
    harga: 12000,
    tersedia: false,
    deskripsi: "Pisang goreng renyah dengan taburan keju.",
  },
  {
    id: 9,
    nama: "Nasi Goreng",
    kategori: "Makanan",
    harga: 25000,
    tersedia: true,
    deskripsi: "Nasi goreng kampung dengan telur mata sapi.",
  },
];

function App() {
  // State 1: Kategori menu yang sedang aktif
  const [kategoriAktif, setKategoriAktif] = useState("Semua");

  // State 2: Daftar pesanan yang dipilih pelanggan
  const [pesanan, setPesanan] = useState([]);

  // State 3: Notifikasi sukses setelah pesanan terkirim
  const [notifikasiSukses, setNotifikasiSukses] = useState(null);

  // Menghitung total jumlah pesanan dan total harga secara dinamis (tanpa duplikasi state)
  const totalItem = pesanan.reduce((total, item) => total + item.jumlah, 0);
  const totalHarga = pesanan.reduce(
    (total, item) => total + item.jumlah * item.harga,
    0
  );

  // Filter daftar menu sesuai kategori yang dipilih
  const menuTersaring =
    kategoriAktif === "Semua"
      ? daftarMenu
      : daftarMenu.filter((item) => item.kategori === kategoriAktif);

  // Fungsi menambah pesanan (dipanggil dari MenuCard atau RingkasanPesanan)
  const handleTambahPesanan = (menuOrId) => {
    const id = typeof menuOrId === "object" ? menuOrId.id : menuOrId;
    const dataMenu = daftarMenu.find((item) => item.id === id);

    // Menu yang habis tidak dapat dipesan
    if (dataMenu && !dataMenu.tersedia) return;

    setPesanan((prevPesanan) => {
      const itemAda = prevPesanan.find((item) => item.id === id);
      if (itemAda) {
        return prevPesanan.map((item) =>
          item.id === id ? { ...item, jumlah: item.jumlah + 1 } : item
        );
      }
      return [
        ...prevPesanan,
        {
          id: dataMenu.id,
          nama: dataMenu.nama,
          harga: dataMenu.harga,
          jumlah: 1,
          tersedia: dataMenu.tersedia,
        },
      ];
    });

    // Reset notifikasi sukses jika pelanggan memesan kembali
    if (notifikasiSukses) {
      setNotifikasiSukses(null);
    }
  };

  // Fungsi mengurangi jumlah pesanan
  const handleKurangPesanan = (id) => {
    setPesanan((prevPesanan) => {
      const itemAda = prevPesanan.find((item) => item.id === id);
      if (itemAda && itemAda.jumlah > 1) {
        return prevPesanan.map((item) =>
          item.id === id ? { ...item, jumlah: item.jumlah - 1 } : item
        );
      }
      return prevPesanan.filter((item) => item.id !== id);
    });
  };

  // Fungsi menghapus menu dari pesanan
  const handleHapusPesanan = (id) => {
    setPesanan((prevPesanan) => prevPesanan.filter((item) => item.id !== id));
  };

  // Fungsi mengirim pesanan
  const handleKirimPesanan = ({ nama, nomorMeja }) => {
    const formatUang = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(totalHarga);

    setNotifikasiSukses({
      nama,
      nomorMeja,
      jumlahItem: totalItem,
      totalBayar: formatUang,
      waktu: new Date().toLocaleTimeString("id-ID", {
        hour: "2-digit",
        minute: "2-digit",
      }),
    });

    // Mengosongkan pesanan sesuai ketentuan soal
    setPesanan([]);
  };

  return (
    <div className="min-h-screen bg-stone-100 flex flex-col font-sans">
      {/* Navbar status pesanan */}
      <Navbar totalItem={totalItem} totalHarga={totalHarga} />

      {/* Konten Utama */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Banner Terimakasih */}
        {notifikasiSukses && (
          <div className="mb-8 p-6 bg-emerald-50 border-2 border-emerald-300 rounded-3xl shadow-md text-emerald-900 animate-fadeIn">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-md">
                  <svg
                    className="w-7 h-7"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-emerald-950">
                    Terima Kasih, {notifikasiSukses.nama}!
                  </h3>
                  <p className="text-sm text-emerald-800 mt-1 leading-relaxed">
                    Pesanan Anda untuk{" "}
                    <span className="font-bold underline decoration-emerald-400">
                      Meja {notifikasiSukses.nomorMeja}
                    </span>{" "}
                    telah berhasil dikirim ke dapur pada pukul {notifikasiSukses.waktu}.
                  </p>
                  <div className="mt-3 inline-flex items-center gap-3 px-3.5 py-1.5 rounded-xl bg-emerald-100/80 border border-emerald-200 text-xs font-semibold text-emerald-900">
                    <span>Total: {notifikasiSukses.jumlahItem} Item</span>
                    <span>&bull;</span>
                    <span>Nominal: {notifikasiSukses.totalBayar}</span>
                  </div>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setNotifikasiSukses(null)}
                className="text-emerald-500 hover:text-emerald-800 p-1 rounded-lg"
                title="Tutup pemberitahuan"
              >
                ✕
              </button>
            </div>
          </div>
        )}

        {/* Kiri: MenuList */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Menu List & Kategori Filter */}
          <div className="lg:col-span-7 xl:col-span-8">
            <MenuList
              menuList={menuTersaring}
              kategoriAktif={kategoriAktif}
              onPilihKategori={setKategoriAktif}
              onTambahPesanan={handleTambahPesanan}
            />
          </div>

          {/* Ringkasan Pesanan & Form Pemesanan */}
          <div className="lg:col-span-5 xl:col-span-4 space-y-6 lg:sticky lg:top-24">
            <RingkasanPesanan
              pesanan={pesanan}
              totalItem={totalItem}
              totalHarga={totalHarga}
              onTambah={handleTambahPesanan}
              onKurang={handleKurangPesanan}
              onHapus={handleHapusPesanan}
            />

            <FormPesan
              pesanan={pesanan}
              onKirimPesanan={handleKirimPesanan}
            />
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
