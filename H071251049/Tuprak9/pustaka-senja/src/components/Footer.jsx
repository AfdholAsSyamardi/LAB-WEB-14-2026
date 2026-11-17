export default function Footer() {
  return (
    <footer className="bg-[#F3EFE6] border-t border-stone-200 text-stone-600 py-8 mt-12 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div>
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="font-bold text-emerald-950 text-base">Pustaka Senja</span>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-white text-emerald-800 border border-emerald-200/80 font-medium">
                Ruang Baca Komunitas
              </span>
            </div>
            <p className="text-xs text-stone-500 mt-1">
              Menghadirkan literasi berkualitas dan ruang diskusi hangat bagi mahasiswa di dekat kampus.
            </p>
          </div>

          <div className="text-xs text-stone-500 space-y-1 text-center md:text-right">
            <p>
              &copy; 2026 Pustaka Senja — Dikelola oleh Nabila.
            </p>
            <p className="text-stone-500">
              Dibangun dengan <span className="text-emerald-800 font-semibold">Next.js App Router</span> &amp; <span className="text-emerald-700 font-semibold">Tailwind CSS</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
