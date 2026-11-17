"use client";

import { useState } from "react";

export default function UsulanPage() {
  // Controlled component states
  const [nama, setNama] = useState("");
  const [judul, setJudul] = useState("");
  const [kategori, setKategori] = useState("");
  const [alasan, setAlasan] = useState("");

  // Status feedback & list usulan sesi ini
  const [pesanError, setPesanError] = useState("");
  const [pesanSukses, setPesanSukses] = useState("");
  const [daftarUsulan, setDaftarUsulan] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();

    // Reset feedback sebelumnya
    setPesanError("");
    setPesanSukses("");

    // Validasi form: pastikan tidak ada kolom yang kosong setelah di-trim()
    if (
      !nama.trim() ||
      !judul.trim() ||
      !kategori.trim() ||
      !alasan.trim()
    ) {
      setPesanError("Semua kolom formulir wajib diisi dengan lengkap!");
      return;
    }

    // Jika validasi berhasil: buat objek usulan baru
    const usulanBaru = {
      id: Date.now().toString(),
      nama: nama.trim(),
      judul: judul.trim(),
      kategori: kategori.trim(),
      alasan: alasan.trim(),
      waktu: new Date().toLocaleTimeString("id-ID", {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    // Simpan ke daftar usulan sesi ini
    setDaftarUsulan((prev) => [usulanBaru, ...prev]);

    // Tampilkan pesan konfirmasi sukses
    setPesanSukses(
      `Terima kasih, ${nama.trim()}! Usulan buku "${judul.trim()}" berhasil dikirim ke pengelola Pustaka Senja.`
    );

    // Kosongkan kembali form
    setNama("");
    setJudul("");
    setKategori("");
    setAlasan("");
  }

  return (
    <div className="max-w-3xl mx-auto space-y-10">
      {/* Header Halaman */}
      <div className="border-b border-stone-200 pb-6 text-center sm:text-left">
        <span className="text-xs font-semibold uppercase tracking-wider text-emerald-700">
          Partisipasi Komunitas
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-stone-900 mt-1">
          Formulir Usulan Buku Baru
        </h1>
        <p className="text-sm text-stone-600 mt-2 max-w-2xl">
          Bantu Nabila dan Pustaka Senja memperluas koleksi bacaan berkualitas! Usulkan judul buku favoritmu yang ingin kamu temukan di ruang baca kami.
        </p>
      </div>

      {/* Box Formulir Usulan */}
      <div className="bg-white rounded-3xl border border-stone-200 p-6 sm:p-8 shadow-sm relative overflow-hidden">
        {/* Notifikasi Error jika validasi gagal */}
        {pesanError && (
          <div className="mb-6 p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-sm flex items-start gap-3">
            <svg
              className="w-5 h-5 text-rose-600 shrink-0 mt-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <div>
              <p className="font-semibold text-rose-900">Gagal Mengirim Usulan</p>
              <p>{pesanError}</p>
            </div>
          </div>
        )}

        {/* Notifikasi Sukses jika berhasil */}
        {pesanSukses && (
          <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm flex items-start gap-3">
            <svg
              className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <div>
              <p className="font-semibold text-emerald-900">Usulan Berhasil Dicatat!</p>
              <p>{pesanSukses}</p>
            </div>
          </div>
        )}

        {/* Form Interaktif Controlled Component */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Baris 1: Nama Pengusul & Judul Buku */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label
                htmlFor="nama"
                className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-2"
              >
                Nama Pengusul <span className="text-rose-500">*</span>
              </label>
              <input
                id="nama"
                type="text"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
                placeholder="Misal: Naufal Hakim"
                className="w-full bg-[#FAF8F5] border border-stone-300 rounded-xl px-4 py-2.5 text-stone-900 placeholder-stone-400 text-sm focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 transition"
              />
            </div>

            <div>
              <label
                htmlFor="judul"
                className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-2"
              >
                Judul Buku yang Diusulkan <span className="text-rose-500">*</span>
              </label>
              <input
                id="judul"
                type="text"
                value={judul}
                onChange={(e) => setJudul(e.target.value)}
                placeholder="Misal: The Pragmatic Programmer"
                className="w-full bg-[#FAF8F5] border border-stone-300 rounded-xl px-4 py-2.5 text-stone-900 placeholder-stone-400 text-sm focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 transition"
              />
            </div>
          </div>

          {/* Baris 2: Kategori */}
          <div>
            <label
              htmlFor="kategori"
              className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-2"
            >
              Kategori Buku <span className="text-rose-500">*</span>
            </label>
            <select
              id="kategori"
              value={kategori}
              onChange={(e) => setKategori(e.target.value)}
              className="w-full bg-[#FAF8F5] border border-stone-300 rounded-xl px-4 py-2.5 text-stone-900 text-sm focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 transition cursor-pointer"
            >
              <option value="" className="text-stone-400">
                -- Pilih Kategori Buku --
              </option>
              <option value="Teknologi">Teknologi &amp; Pemrograman</option>
              <option value="Fiksi">Fiksi &amp; Sastra</option>
              <option value="Pengembangan Diri">
                Pengembangan Diri (Self-Improvement)
              </option>
              <option value="Sains & Filosofi">Sains &amp; Filosofi</option>
              <option value="Lainnya">Lainnya</option>
            </select>
          </div>

          {/* Baris 3: Alasan Usulan */}
          <div>
            <label
              htmlFor="alasan"
              className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-2"
            >
              Alasan Usulan <span className="text-rose-500">*</span>
            </label>
            <textarea
              id="alasan"
              rows={4}
              value={alasan}
              onChange={(e) => setAlasan(e.target.value)}
              placeholder="Ceritakan mengapa buku ini penting dan menarik untuk dibaca oleh komunitas Pustaka Senja..."
              className="w-full bg-[#FAF8F5] border border-stone-300 rounded-xl px-4 py-2.5 text-stone-900 placeholder-stone-400 text-sm focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 transition resize-y"
            />
          </div>

          {/* Tombol Kirim */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm shadow-md shadow-emerald-700/20 transition-all duration-200 active:scale-95 cursor-pointer"
            >
              Kirim Usulan Buku &rarr;
            </button>
          </div>
        </form>
      </div>

      {/* Daftar Usulan yang Baru Saja Dikirim pada Sesi Ini */}
      {daftarUsulan.length > 0 && (
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-stone-900 flex items-center gap-2">
              <span>📋</span> Daftar Usulan Anda Sesi Ini ({daftarUsulan.length})
            </h2>
            <span className="text-xs text-stone-500">
              Disimpan selama sesi browser aktif
            </span>
          </div>

          <div className="space-y-3">
            {daftarUsulan.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-stone-200 p-5 shadow-xs flex flex-col sm:flex-row sm:items-start justify-between gap-4"
              >
                <div className="space-y-1.5 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200">
                      {item.kategori}
                    </span>
                    <span className="text-xs text-stone-400">
                      Pukul {item.waktu}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-stone-900">{item.judul}</h3>

                  <p className="text-xs text-stone-500">
                    Diusulkan oleh:{" "}
                    <span className="text-stone-800 font-medium">{item.nama}</span>
                  </p>

                  <p className="text-xs sm:text-sm text-stone-700 bg-[#FAF8F5] p-3 rounded-xl border border-stone-200/80 mt-2">
                    &ldquo;{item.alasan}&rdquo;
                  </p>
                </div>

                <div className="shrink-0 self-start sm:self-center">
                  <span className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                    Menunggu Review
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
