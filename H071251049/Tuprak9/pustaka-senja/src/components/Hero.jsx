import Link from "next/link";

export default function Hero({
  nama = "Pustaka Senja",
  slogan = "Ruang Baca & Perpustakaan Komunitas",
  deskripsi = "Tempat membaca yang tenang, hangat, dan bersahabat di dekat kampus. Temukan koleksi buku terbaik untuk menemanimu belajar, bertukar ide, dan bertumbuh.",
  lokasi = "Jl. Politeknik No. 8, Tamalanrea (Dekat Kampus Unhas)",
  jamBuka = "Senin – Sabtu, 09.00 – 21.00 WITA",
}) {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-[#F6F3EB] via-white to-[#FDFBF7] border border-emerald-900/10 p-8 sm:p-12 shadow-sm mb-12">
      {/* Background Soft Glow Decorations */}
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-lime-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs sm:text-sm font-medium mb-6">
          <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
          Selamat Datang di {nama}
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-5xl font-extrabold text-stone-900 tracking-tight leading-tight mb-4">
          Temukan Inspirasi di{" "}
          <span className="text-emerald-800">
            {nama}
          </span>
        </h1>

        {/* Slogan */}
        <p className="text-lg sm:text-xl font-semibold text-emerald-800/90 mb-3">
          {slogan}
        </p>

        {/* Description */}
        <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-8 max-w-2xl mx-auto">
          {deskripsi}
        </p>

        {/* Info Badges (Lokasi & Jam Buka) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-4xl mx-auto mb-8 text-xs sm:text-sm text-stone-700">
          <div className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-white border border-emerald-900/10 shadow-xs w-full sm:w-auto">
            <svg
              className="w-4 h-4 text-emerald-600 shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span className="whitespace-nowrap">{lokasi}</span>
          </div>

          <div className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-white border border-emerald-900/10 shadow-xs w-full sm:w-auto">
            <svg
              className="w-4 h-4 text-emerald-600 shrink-0"
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
            <span className="whitespace-nowrap">{jamBuka}</span>
          </div>
        </div>

        {/* Action Buttons using <Link> */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/katalog"
            className="px-6 py-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm sm:text-base shadow-md shadow-emerald-700/25 transition-all duration-200 active:scale-95"
          >
            Jelajahi Katalog Buku &rarr;
          </Link>
          <Link
            href="/usulan"
            className="px-6 py-3 rounded-xl bg-white hover:bg-emerald-50/60 text-emerald-900 font-semibold text-sm sm:text-base border border-emerald-300 shadow-xs transition-all duration-200 active:scale-95"
          >
            + Usulkan Buku Baru
          </Link>
        </div>
      </div>
    </section>
  );
}
