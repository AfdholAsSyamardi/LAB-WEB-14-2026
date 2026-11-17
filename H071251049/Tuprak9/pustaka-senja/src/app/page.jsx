import Link from "next/link";
import Hero from "@/components/Hero";
import pool from "@/lib/db";
export const dynamic = "force-dynamic";

export default async function HomePage() {
  const resTotal = await pool.query("SELECT COUNT(*) FROM buku");
  const resTersedia = await pool.query("SELECT COUNT(*) FROM buku WHERE tersedia = true");
  
  const totalBuku = Number(resTotal.rows[0].count);
  const bukuTersedia = Number(resTersedia.rows[0].count);
  const bukuDipinjam = totalBuku - bukuTersedia;

  return (
    <div>
      <Hero
        nama="Pustaka Senja"
        slogan="Ruang Baca & Perpustakaan Komunitas Mahasiswa"
        deskripsi="Pustaka Senja menyediakan koleksi buku pilihan mulai dari bidang Teknologi, Fiksi inspiratif, hingga Pengembangan Diri. Nikmati suasana membaca yang tenang, sejuk, dan hangat dekat kampus."
        lokasi="Jl. Pendidikan No. 42 (Area Kampus Unhas)"
        jamBuka="Buka Setiap Hari: 09.00 – 21.00 WITA"
      />
      <section className="mb-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-700">Statistik Real-Time</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 mt-1">Ringkasan Koleksi Buku</h2>
            <p className="text-sm text-stone-500 mt-1">Pantau status ketersediaan buku yang ada di Pustaka Senja secara langsung.</p>
          </div>
          <Link href="/katalog" className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-700 hover:text-emerald-800 transition-colors">Buka Katalog Lengkap &rarr;</Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          <div className="bg-white rounded-2xl border border-stone-200/90 p-6 shadow-xs hover:border-emerald-300 transition">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-stone-100 text-stone-700 border border-stone-200">Total Koleksi</span>
              <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-700">📚</div>
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold text-stone-900 mb-1">{totalBuku} <span className="text-base font-normal text-stone-500">buku</span></div>
            <p className="text-xs text-stone-500">Seluruh judul buku aktif dalam katalog Pustaka Senja</p>
          </div>

          <div className="bg-white rounded-2xl border border-emerald-200/90 p-6 shadow-xs hover:border-emerald-300 transition">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200">Siap Dibaca</span>
              <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-800">✅</div>
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold text-emerald-700 mb-1">{bukuTersedia} <span className="text-base font-normal text-stone-500">buku</span></div>
            <p className="text-xs text-stone-500">Buku yang saat ini tersedia dan siap dipinjam pengunjung</p>
          </div>

          <div className="bg-white rounded-2xl border border-stone-200/90 p-6 shadow-xs hover:border-rose-200 transition">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-rose-50 text-rose-700 border border-rose-200">Sedang Dibaca</span>
              <div className="w-10 h-10 rounded-xl bg-rose-50 flex items-center justify-center text-rose-600">⏱️</div>
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold text-rose-600 mb-1">{bukuDipinjam} <span className="text-base font-normal text-stone-500">buku</span></div>
            <p className="text-xs text-stone-500">Buku yang sedang dibaca atau dipinjam oleh anggota lain</p>
          </div>
        </div>
      </section>

      <section className="bg-[#F5F2EA] rounded-3xl border border-emerald-900/10 p-6 sm:p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div>
            <h3 className="text-xl font-bold text-stone-900 mb-2">Punya usulan buku baru yang belum tersedia?</h3>
            <p className="text-sm text-stone-600 leading-relaxed mb-4">Nabila dan tim Pustaka Senja selalu terbuka terhadap usulan koleksi bacaan baru.</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/usulan" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm shadow-md transition-all">Kirim Usulan Buku &rarr;</Link>
              <Link href="/katalog" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white hover:bg-stone-50 text-stone-700 font-semibold text-sm border border-stone-300 transition-all">Lihat Semua Koleksi</Link>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3 text-center">
            <div className="p-4 rounded-2xl bg-white border border-stone-200 shadow-xs"><div className="text-2xl mb-1">💻</div><div className="text-xs font-semibold text-stone-900">Teknologi</div></div>
            <div className="p-4 rounded-2xl bg-white border border-stone-200 shadow-xs"><div className="text-2xl mb-1">📖</div><div className="text-xs font-semibold text-stone-900">Fiksi</div></div>
            <div className="p-4 rounded-2xl bg-white border border-stone-200 shadow-xs"><div className="text-2xl mb-1">🌱</div><div className="text-xs font-semibold text-stone-900">Pengembangan Diri</div></div>
          </div>
        </div>
      </section>
    </div>
  );
}