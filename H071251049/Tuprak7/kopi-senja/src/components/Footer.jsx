function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-400 border-t border-stone-800 mt-16 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
        <div>
          <p className="font-semibold text-stone-200 text-sm">
            Kedai Kopi Senja &bull; Sistem Pemesanan Meja Mandiri
          </p>
          <p className="mt-1 text-stone-400">
            Buka setiap hari: 08.00 - 22.00 WITA &bull; Jl. Senja Teduh No. 42
          </p>
        </div>
        <div className="text-right sm:text-right text-stone-500">
          <p>&copy; 2026 Kedai Kopi Senja. All rights reserved.</p>
          <p className="mt-0.5">Tugas Praktikum 7 &bull; React Hooks (State & Props)</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
