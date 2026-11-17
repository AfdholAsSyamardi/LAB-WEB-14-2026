import Link from "next/link";
import Hero from "@/components/Hero";
import dataBuku from "@/data/dataBuku";

export default function HomePage() {
  // Hitung ringkasan statistik koleksi secara dinamis dari dataBuku
  const totalBuku = dataBuku.length;
  const bukuTersedia = dataBuku.filter((buku) => buku.tersedia).length;
  const bukuDipinjam = dataBuku.filter((buku) => !buku.tersedia).length;

  return (
    <div>
      {/* Banner Hero Pengenalan Ruang Baca */}
      <Hero
        nama="Pustaka Senja"
        slogan="Ruang Baca & Perpustakaan Komunitas Mahasiswa"
        deskripsi="Pustaka Senja menyediakan sembilan koleksi buku pilihan mulai dari bidang Teknologi, Fiksi inspiratif, hingga Pengembangan Diri. Nikmati suasana membaca yang tenang, sejuk, dan hangat dekat kampus."
        lokasi="Jl. Pendidikan No. 42 (Area Kampus Unhas)"
        jamBuka="Buka Setiap Hari: 09.00 – 21.00 WITA"
      />

      {/* Ringkasan Statistik Koleksi */}
      <section className="mb-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-700">
              Statistik Real-Time
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 mt-1">
              Ringkasan Koleksi Buku
            </h2>
            <p className="text-sm text-stone-500 mt-1">
              Pantau status ketersediaan buku yang ada di Pustaka Senja secara langsung.
            </p>
          </div>

          <Link
            href="/katalog"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-700 hover:text-emerald-800 transition-colors"
          >
            Buka Katalog Lengkap &rarr;
          </Link>
        </div>

        {/* 3 Dynamic Statistic Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {/* Total Buku */}
          <div className="bg-white rounded-2xl border border-stone-200/90 p-6 shadow-xs hover:border-emerald-300 transition">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-stone-100 text-stone-700 border border-stone-200">
                Total Koleksi
              </span>
              <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-700">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold text-stone-900 mb-1">
              {totalBuku}{" "}
              <span className="text-base font-normal text-stone-500">buku</span>
            </div>
            <p className="text-xs text-stone-500">
              Seluruh judul buku aktif dalam katalog Pustaka Senja
            </p>
          </div>

          {/* Buku Tersedia */}
          <div className="bg-white rounded-2xl border border-emerald-200/90 p-6 shadow-xs hover:border-emerald-300 transition">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200">
                Siap Dibaca
              </span>
              <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-800">
                <svg
                  className="w-5 h-5"
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
              </div>
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold text-emerald-700 mb-1">
              {bukuTersedia}{" "}
              <span className="text-base font-normal text-stone-500">buku</span>
            </div>
            <p className="text-xs text-stone-500">
              Buku yang saat ini tersedia dan siap dipinjam pengunjung
            </p>
          </div>

          {/* Buku Dipinjam */}
          <div className="bg-white rounded-2xl border border-stone-200/90 p-6 shadow-xs hover:border-rose-200 transition">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-rose-50 text-rose-700 border border-rose-200">
                Sedang Dibaca
              </span>
              <div className="w-10 h-10 rounded-xl bg-rose-50 flex items-center justify-center text-rose-600">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold text-rose-600 mb-1">
              {bukuDipinjam}{" "}
              <span className="text-base font-normal text-stone-500">buku</span>
            </div>
            <p className="text-xs text-stone-500">
              Buku yang sedang dibaca atau dipinjam oleh anggota lain
            </p>
          </div>
        </div>
      </section>

      {/* Kategori Populer & CTA */}
      <section className="bg-[#F5F2EA] rounded-3xl border border-emerald-900/10 p-6 sm:p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div>
            <h3 className="text-xl font-bold text-stone-900 mb-2">
              Punya usulan buku baru yang belum tersedia?
            </h3>
            <p className="text-sm text-stone-600 leading-relaxed mb-4">
              Nabila dan tim Pustaka Senja selalu terbuka terhadap usulan koleksi bacaan baru dari mahasiswa dan komunitas.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/usulan"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm shadow-md shadow-emerald-700/20 transition-all duration-200 active:scale-95"
              >
                Kirim Usulan Buku &rarr;
              </Link>
              <Link
                href="/katalog"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white hover:bg-stone-50 text-stone-700 font-semibold text-sm border border-stone-300 transition-all duration-200 active:scale-95"
              >
                Lihat Semua Koleksi
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3 text-center">
            <div className="p-4 rounded-2xl bg-white border border-stone-200 shadow-xs">
              <div className="text-2xl mb-1">💻</div>
              <div className="text-xs font-semibold text-stone-900">Teknologi</div>
              <div className="text-[11px] text-stone-500 mt-1">3 Judul</div>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-stone-200 shadow-xs">
              <div className="text-2xl mb-1">📖</div>
              <div className="text-xs font-semibold text-stone-900">Fiksi</div>
              <div className="text-[11px] text-stone-500 mt-1">3 Judul</div>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-stone-200 shadow-xs">
              <div className="text-2xl mb-1">🌱</div>
              <div className="text-xs font-semibold text-stone-900">Pengembangan Diri</div>
              <div className="text-[11px] text-stone-500 mt-1">3 Judul</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
