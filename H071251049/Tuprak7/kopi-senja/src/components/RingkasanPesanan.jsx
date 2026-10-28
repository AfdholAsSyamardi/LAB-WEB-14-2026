function RingkasanPesanan({
  pesanan,
  totalItem,
  totalHarga,
  onTambah,
  onKurang,
  onHapus,
}) {
  const formatRupiah = (angka) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(angka);
  };

  return (
    <section className="bg-white rounded-3xl p-6 shadow-sm border border-stone-200/80">
      {/* Header */}
      <div className="flex items-center justify-between pb-4 border-b border-stone-100">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center">
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
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
              />
            </svg>
          </div>
          <div>
            <h2 className="text-lg font-bold text-stone-900">Ringkasan Pesanan</h2>
            <p className="text-xs text-stone-500">Daftar menu yang telah dipilih</p>
          </div>
        </div>

        <span className="text-xs font-semibold px-2.5 py-1 bg-amber-50 text-amber-800 border border-amber-200 rounded-full">
          {totalItem} Item Dipilih
        </span>
      </div>

      {/* Daftar Item Pesanan */}
      <div className="mt-4">
        {pesanan.length === 0 ? (
          <div className="text-center py-8 px-4 bg-stone-50 rounded-2xl border border-dashed border-stone-200">
            <svg
              className="w-10 h-10 text-stone-300 mx-auto mb-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
            <p className="text-sm font-medium text-stone-600">Pesanan masih kosong</p>
            <p className="text-xs text-stone-400 mt-1">
              Silakan pilih menu dari daftar di samping untuk menambahkan ke pesanan.
            </p>
          </div>
        ) : (
          <div className="space-y-3 max-h-72 overflow-y-auto pr-1">
            {pesanan.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between gap-3 p-3.5 bg-stone-50 hover:bg-stone-100/80 rounded-2xl border border-stone-200/80 transition-colors"
              >
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-bold text-stone-900 truncate">
                    {item.nama}
                  </h4>
                  <p className="text-xs text-stone-500 mt-0.5">
                    {formatRupiah(item.harga)} x {item.jumlah}
                  </p>
                  <p className="text-xs font-semibold text-amber-700 mt-0.5">
                    Subtotal: {formatRupiah(item.harga * item.jumlah)}
                  </p>
                </div>

                {/* Kontrol Kuantitas */}
                <div className="flex items-center gap-1.5 bg-white border border-stone-200 rounded-xl p-1 shadow-sm">
                  <button
                    type="button"
                    onClick={() => onKurang(item.id)}
                    title="Kurangi jumlah"
                    className="w-7 h-7 flex items-center justify-center rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-700 font-bold text-sm transition-colors"
                  >
                    -
                  </button>
                  <span className="w-7 text-center text-xs font-bold text-stone-900">
                    {item.jumlah}
                  </span>
                  <button
                    type="button"
                    onClick={() => onTambah(item)}
                    title="Tambah jumlah"
                    className="w-7 h-7 flex items-center justify-center rounded-lg bg-amber-600 hover:bg-amber-700 text-white font-bold text-sm transition-colors"
                  >
                    +
                  </button>
                </div>

                {/* Tombol Hapus */}
                <button
                  type="button"
                  onClick={() => onHapus(item.id)}
                  title="Hapus item"
                  className="p-1.5 text-stone-400 hover:text-rose-600 rounded-lg hover:bg-rose-50 transition-colors"
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
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Ringkasan Total */}
        <div className="mt-5 pt-4 border-t border-stone-200 space-y-2">
          <div className="flex justify-between text-xs text-stone-600">
            <span>Total Jumlah Item</span>
            <span className="font-semibold text-stone-900">{totalItem} pcs</span>
          </div>
          <div className="flex justify-between items-baseline text-base font-bold text-stone-900 pt-2 border-t border-stone-100">
            <span>Total Pembayaran</span>
            <span className="text-xl font-extrabold text-amber-700">
              {formatRupiah(totalHarga)}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RingkasanPesanan;
