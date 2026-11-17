"use client";

import { useState } from "react";
import BukuCard from "@/components/BukuCard";
import dataBuku from "@/data/dataBuku";

const daftarKategori = ["Semua", "Teknologi", "Fiksi", "Pengembangan Diri"];

export default function KatalogPage() {
  // State untuk filter kategori aktif
  const [kategoriAktif, setKategoriAktif] = useState("Semua");

  // Filter daftar buku berdasarkan kategori yang dipilih
  const bukuTersaring =
    kategoriAktif === "Semua"
      ? dataBuku
      : dataBuku.filter((buku) => buku.kategori === kategoriAktif);

  return (
    <div className="space-y-8">
      {/* Header Halaman Katalog */}
      <div className="border-b border-stone-200 pb-6">
        <span className="text-xs font-semibold uppercase tracking-wider text-emerald-700">
          Koleksi Buku
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-stone-900 mt-1">
          Katalog Pustaka Senja
        </h1>
        <p className="text-sm text-stone-600 mt-2 max-w-2xl">
          Jelajahi sembilan koleksi buku pilihan kami. Anda dapat menyaring buku berdasarkan kategori minat dan menandai buku favorit untuk dibaca nanti.
        </p>
      </div>

      {/* Tombol Filter Kategori */}
      <div className="flex flex-wrap items-center gap-2 sm:gap-3">
        <span className="text-xs font-medium text-stone-500 mr-1 hidden sm:inline">
          Filter Kategori:
        </span>
        {daftarKategori.map((kategori) => {
          const isSelected = kategoriAktif === kategori;

          return (
            <button
              key={kategori}
              type="button"
              onClick={() => setKategoriAktif(kategori)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 active:scale-95 border cursor-pointer ${
                isSelected
                  ? "bg-emerald-700 text-white border-emerald-700 shadow-md shadow-emerald-700/20"
                  : "bg-white text-stone-700 border-stone-200 hover:border-emerald-300 hover:text-emerald-900 hover:bg-emerald-50/50 shadow-xs"
              }`}
            >
              {kategori}
              <span
                className={`ml-1.5 px-1.5 py-0.5 rounded-full text-[10px] ${
                  isSelected
                    ? "bg-emerald-900/40 text-emerald-100"
                    : "bg-stone-100 text-stone-500"
                }`}
              >
                {kategori === "Semua"
                  ? dataBuku.length
                  : dataBuku.filter((b) => b.kategori === kategori).length}
              </span>
            </button>
          );
        })}
      </div>

      {/* Info Jumlah Hasil */}
      <div className="text-xs text-stone-500">
        Menampilkan{" "}
        <span className="text-stone-900 font-semibold">{bukuTersaring.length}</span> buku{" "}
        {kategoriAktif !== "Semua" && (
          <span>
            dalam kategori &ldquo;<span className="text-emerald-800 font-semibold">{kategoriAktif} dari total buku {dataBuku.length}</span>&rdquo;
          </span>
        )}
      </div>

      {/* Grid Kartu Buku */}
      {bukuTersaring.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {bukuTersaring.map((buku) => (
            <BukuCard key={buku.id} buku={buku} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-white rounded-2xl border border-stone-200 shadow-xs">
          <p className="text-stone-500 text-sm">
            Tidak ada buku yang ditemukan untuk kategori ini.
          </p>
        </div>
      )}
    </div>
  );
}
