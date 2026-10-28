import { useState } from "react";

function MenuCard({ menu, onTambah }) {
  const [bukaDetail, setBukaDetail] = useState(false);

  const formatRupiah = (angka) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(angka);
  };

  const getKategoriBadgeColor = (kategori) => {
    switch (kategori) {
      case "Kopi":
        return "bg-amber-100 text-amber-800 border-amber-300";
      case "Non-Kopi":
        return "bg-emerald-100 text-emerald-800 border-emerald-300";
      case "Makanan":
        return "bg-orange-100 text-orange-800 border-orange-300";
      default:
        return "bg-stone-100 text-stone-800 border-stone-300";
    }
  };

  return (
    <div
      className={`group relative rounded-2xl border transition-all duration-300 flex flex-col justify-between ${
        menu.tersedia
          ? "bg-white border-stone-200/80 hover:border-amber-400 hover:shadow-xl hover:-translate-y-0.5 shadow-sm"
          : "bg-stone-100/90 border-stone-200 opacity-75 shadow-none"
      } p-5`}
    >
      <div>
        {/* Header Kartu: Kategori & Status Ketersediaan */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <span
            className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${getKategoriBadgeColor(
              menu.kategori
            )}`}
          >
            {menu.kategori}
          </span>

          {menu.tersedia ? (
            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              Tersedia
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-rose-700 bg-rose-50 px-2 py-0.5 rounded-full border border-rose-200">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
              Habis
            </span>
          )}
        </div>

        {/* Nama Menu & Harga */}
        <h3 className="text-lg font-bold text-stone-900 group-hover:text-amber-800 transition-colors">
          {menu.nama}
        </h3>
        <p className="text-base font-extrabold text-amber-600 mt-1">
          {formatRupiah(menu.harga)}
        </p>

        {/* Tombol Toggle Detail (State lokal independen per kartu) */}
        <button
          type="button"
          onClick={() => setBukaDetail(!bukaDetail)}
          className="mt-3 text-xs font-semibold text-stone-600 hover:text-amber-700 inline-flex items-center gap-1 transition-colors"
        >
          <span>{bukaDetail ? "Tutup Detail" : "Lihat Detail"}</span>
          <svg
            className={`w-3.5 h-3.5 transform transition-transform duration-200 ${
              bukaDetail ? "rotate-180" : "rotate-0"
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {/* Panel Detail (Hanya muncul jika bukaDetail true pada menu ini) */}
        {bukaDetail && (
          <div className="mt-2.5 p-3 rounded-xl bg-amber-50/70 border border-amber-200/70 text-xs text-stone-700 leading-relaxed animate-fadeIn">
            <p className="font-medium text-amber-950 mb-1">Deskripsi:</p>
            <p>{menu.deskripsi}</p>
          </div>
        )}
      </div>

      {/* Tombol Aksi Tambah */}
      <div className="mt-5 pt-3 border-t border-stone-100 flex items-center justify-end">
        {menu.tersedia ? (
          <button
            type="button"
            onClick={() => onTambah(menu)}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2 bg-amber-600 hover:bg-amber-700 active:scale-95 text-white text-xs sm:text-sm font-semibold rounded-xl shadow-sm hover:shadow transition-all"
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
                d="M12 4v16m8-8H4"
              />
            </svg>
            Tambah ke Pesanan
          </button>
        ) : (
          <button
            type="button"
            disabled={true}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-stone-200 text-stone-400 text-xs sm:text-sm font-semibold rounded-xl cursor-not-allowed border border-stone-300"
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
                d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
              />
            </svg>
            Menu Habis
          </button>
        )}
      </div>
    </div>
  );
}

export default MenuCard;
