function Navbar({ totalItem, totalHarga }) {
  const formatRupiah = (angka) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(angka);
  };

  return (
    <header className="sticky top-0 z-30 bg-stone-900/95 backdrop-blur-md text-white shadow-lg border-b border-amber-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex flex-wrap items-center justify-between gap-4">
        {/* Brand & Table Kiosk Info */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center shadow-md shadow-amber-900/30">
            <svg
              className="w-6 h-6 text-stone-950"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M18 8h1a4 4 0 010 8h-1M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 1v3M10 1v3M14 1v3"
              />
            </svg>
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-amber-100 flex items-center gap-2">
              Kedai Kopi Senja
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                Tablet Meja
              </span>
            </h1>
            <p className="text-xs text-stone-400">Pesan langsung dari meja Anda</p>
          </div>
        </div>

        {/* Real-time Order Indicator at the Top */}
        <div className="flex items-center gap-3 bg-stone-800/90 border border-stone-700/80 px-4 py-2 rounded-2xl shadow-inner">
          <div className="relative">
            <div className="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
            </div>
            {totalItem > 0 && (
              <span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-amber-500 text-stone-950 text-xs font-extrabold rounded-full flex items-center justify-center animate-pulse">
                {totalItem}
              </span>
            )}
          </div>
          <div className="text-right">
            <div className="text-xs text-stone-400 uppercase tracking-wider font-medium">
              Pesanan Saat Ini
            </div>
            <div className="text-sm sm:text-base font-bold text-amber-300">
              {totalItem} Item{" "}
              <span className="text-stone-500 font-normal">|</span>{" "}
              <span className="text-white">{formatRupiah(totalHarga)}</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
