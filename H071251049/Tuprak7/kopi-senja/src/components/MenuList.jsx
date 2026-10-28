import MenuCard from "./MenuCard.jsx";

function MenuList({ menuList, kategoriAktif, onPilihKategori, onTambahPesanan }) {
  const kategoriList = ["Semua", "Kopi", "Non-Kopi", "Makanan"];

  return (
    <section className="bg-white rounded-3xl p-6 shadow-sm border border-stone-200/80">
      {/* Header & Filter Kategori */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-stone-100">
        <div>
          <h2 className="text-xl font-bold text-stone-900 tracking-tight flex items-center gap-2">
            <span>Daftar Menu Kedai</span>
            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-stone-100 text-stone-600">
              {menuList.length} menu
            </span>
          </h2>
          <p className="text-xs text-stone-500 mt-0.5">
            Pilih kategori untuk memfilter menu yang ingin dipesan
          </p>
        </div>

        {/* Tab Kategori Buttons */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-stone-100 rounded-2xl border border-stone-200">
          {kategoriList.map((kat) => (
            <button
              key={kat}
              type="button"
              onClick={() => onPilihKategori(kat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                kategoriAktif === kat
                  ? "bg-amber-700 text-white shadow-sm shadow-amber-900/20"
                  : "text-stone-600 hover:text-stone-900 hover:bg-stone-200/60"
              }`}
            >
              {kat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid Menu Cards */}
      {menuList.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mt-6">
          {menuList.map((menu) => (
            <MenuCard key={menu.id} menu={menu} onTambah={onTambahPesanan} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 text-stone-400">
          <p className="text-sm">Tidak ada menu untuk kategori ini.</p>
        </div>
      )}
    </section>
  );
}

export default MenuList;
