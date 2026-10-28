import { useState } from "react";

function FormPesan({ pesanan, onKirimPesanan }) {
  const [nama, setNama] = useState("");
  const [nomorMeja, setNomorMeja] = useState("");
  const [pesanError, setPesanError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validasi 1: Pesanan tidak boleh kosong
    if (!pesanan || pesanan.length === 0) {
      setPesanError(
        "Pesanan masih kosong! Silakan tambahkan minimal satu menu ke pesanan terlebih dahulu."
      );
      return;
    }

    const namaTrim = nama.trim();
    const mejaTrim = nomorMeja.trim();

    // Validasi 2: Nama wajib diisi
    if (namaTrim === "") {
      setPesanError("Nama pemesan wajib diisi!");
      return;
    }

    // Validasi 3: Jika di bagian nama diisi angka, beritahu harus berupa nama/huruf
    if (/\d/.test(namaTrim)) {
      setPesanError(
        "Nama pemesan harus berupa nama/huruf, tidak boleh mengandung angka!"
      );
      return;
    }

    // Validasi 4: Nomor meja wajib diisi
    if (mejaTrim === "") {
      setPesanError("Nomor meja wajib diisi!");
      return;
    }

    // Validasi 5: Jika di nomor meja diisi huruf/nama, beritahu harus berupa angka
    if (!/^\d+$/.test(mejaTrim)) {
      setPesanError("Nomor meja harus berupa angka!");
      return;
    }

    // Jika semua validasi lolos
    setPesanError("");
    onKirimPesanan({
      nama: namaTrim,
      nomorMeja: mejaTrim,
    });

    // Mengosongkan form setelah pesanan berhasil terkirim
    setNama("");
    setNomorMeja("");
  };

  return (
    <section className="bg-white rounded-3xl p-6 shadow-sm border border-stone-200/80">
      {/* Header Form */}
      <div className="flex items-center gap-2.5 pb-4 border-b border-stone-100 mb-5">
        <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
            />
          </svg>
        </div>
        <div>
          <h2 className="text-lg font-bold text-stone-900">Konfirmasi Pemesanan</h2>
          <p className="text-xs text-stone-500">Isi data meja untuk menyelesaikan pesanan</p>
        </div>
      </div>

      {/* Alert Error / Peringatan Validasi */}
      {pesanError && (
        <div className="mb-4 p-3.5 bg-rose-50 border border-rose-200 rounded-2xl flex items-start gap-2.5 text-rose-800 text-xs">
          <svg
            className="w-4 h-4 text-rose-500 mt-0.5 shrink-0"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
          <div className="flex-1 font-medium">{pesanError}</div>
          <button
            type="button"
            onClick={() => setPesanError("")}
            className="text-rose-400 hover:text-rose-700"
          >
            ✕
          </button>
        </div>
      )}

      {/* Form Controlled Component */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-xs font-semibold text-stone-700 mb-1.5">
            Nama Pelanggan
          </label>
          <input
            type="text"
            placeholder="Masukkan nama Anda (contoh: Dimas)"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500 transition-all"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-stone-700 mb-1.5">
            Nomor Meja
          </label>
          <input
            type="text"
            placeholder="Nomor meja (contoh: 07)"
            value={nomorMeja}
            onChange={(e) => setNomorMeja(e.target.value)}
            className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500 transition-all"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-bold text-sm rounded-xl shadow-md shadow-amber-900/20 active:scale-[0.98] transition-all flex items-center justify-center gap-2 mt-2"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
          Kirim Pesanan Sekarang
        </button>
      </form>
    </section>
  );
}

export default FormPesan;
