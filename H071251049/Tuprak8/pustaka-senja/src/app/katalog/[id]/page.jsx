import Link from "next/link";
import dataBuku from "@/data/dataBuku";

// Server Component untuk halaman detail buku dinamis (/katalog/[id])
export default async function DetailBukuPage({ params }) {
  // Pada Next.js 15+, props params bersifat asynchronous (Promise)
  const { id } = await params;

  // Mencari buku yang sesuai berdasarkan ID
  const buku = dataBuku.find((item) => item.id === id);

  // Jika buku dengan ID tersebut tidak ditemukan (misalnya /katalog/99)
  if (!buku) {
    return (
      <div className="max-w-xl mx-auto my-12 text-center p-8 bg-white rounded-2xl border border-stone-200 shadow-lg">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-rose-50 border border-rose-200 flex items-center justify-center text-rose-600">
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
        </div>
        <h1 className="text-2xl font-bold text-stone-900 mb-2">
          Buku Tidak Ditemukan
        </h1>
        <p className="text-sm text-stone-600 mb-6">
          Buku dengan ID &ldquo;<span className="text-rose-600 font-mono font-semibold">{id}</span>&rdquo; tidak terdaftar di dalam koleksi Pustaka Senja.
        </p>
        <Link
          href="/katalog"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm shadow-md shadow-emerald-700/20 transition-all duration-200 active:scale-95"
        >
          &larr; Kembali ke Katalog
        </Link>
      </div>
    );
  }

  // Jika buku ditemukan, tampilkan detail lengkap
  return (
    <div className="max-w-3xl mx-auto py-4">
      {/* Tombol Kembali */}
      <div className="mb-6">
        <Link
          href="/katalog"
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-stone-500 hover:text-emerald-800 transition-colors"
        >
          &larr; Kembali ke Katalog
        </Link>
      </div>

      {/* Kartu Detail Buku Lengkap */}
      <article className="bg-white rounded-3xl border border-stone-200/90 p-6 sm:p-10 shadow-lg relative overflow-hidden">
        {/* Soft Glow Accent */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

        {/* Header: ID, Kategori, Status Ketersediaan */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold px-3 py-1 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200/80">
              {buku.kategori}
            </span>
            <span className="text-xs font-mono text-stone-600 bg-stone-100 px-2.5 py-1 rounded-lg border border-stone-200">
              ID: #{buku.id}
            </span>
          </div>

          {/* Badge Ketersediaan */}
          <span
            className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 py-1.5 rounded-full border ${
              buku.tersedia
                ? "bg-emerald-50 text-emerald-700 border-emerald-200/90"
                : "bg-rose-50 text-rose-700 border-rose-200/90"
            }`}
          >
            <span
              className={`w-2 h-2 rounded-full ${
                buku.tersedia ? "bg-emerald-600" : "bg-rose-500"
              }`}
            />
            {buku.tersedia ? "Tersedia di Ruang Baca" : "Sedang Dipinjam"}
          </span>
        </div>

        {/* Judul Buku */}
        <h1 className="text-2xl sm:text-4xl font-extrabold text-stone-900 mb-4 leading-tight">
          {buku.judul}
        </h1>

        {/* Metadata Penulis & Tahun */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-stone-700 pb-6 mb-6 border-b border-stone-100">
          <div>
            <span className="text-stone-400 text-xs block">Penulis</span>
            <span className="font-semibold text-stone-900">{buku.penulis}</span>
          </div>
          <div className="h-8 w-px bg-stone-200 hidden sm:block" />
          <div>
            <span className="text-stone-400 text-xs block">Tahun Terbit</span>
            <span className="font-semibold text-stone-900">{buku.tahun}</span>
          </div>
          <div className="h-8 w-px bg-stone-200 hidden sm:block" />
          <div>
            <span className="text-stone-400 text-xs block">Format Koleksi</span>
            <span className="font-semibold text-emerald-800">Buku Fisik</span>
          </div>
        </div>

        {/* Sinopsis Lengkap */}
        <div className="mb-8">
          <h2 className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-3">
            Sinopsis Buku
          </h2>
          <p className="text-stone-700 text-base leading-relaxed bg-[#F9F7F2] p-5 rounded-2xl border border-stone-200/80">
            {buku.sinopsis}
          </p>
        </div>

        {/* Bottom Actions */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-stone-100">
          <Link
            href="/katalog"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-sm shadow-md shadow-emerald-700/20 transition-all duration-200 active:scale-95"
          >
            &larr; Kembali ke Katalog
          </Link>

          <Link
            href="/usulan"
            className="inline-flex items-center gap-2 text-xs sm:text-sm text-stone-500 hover:text-emerald-800 transition-colors"
          >
            Ingin merekomendasikan buku lain? <span className="underline">Klik di sini</span>
          </Link>
        </div>
      </article>
    </div>
  );
}
