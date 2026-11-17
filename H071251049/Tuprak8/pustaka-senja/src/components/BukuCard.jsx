"use client";

import { useState } from "react";
import Link from "next/link";

export default function BukuCard(props) {
  // Support both <BukuCard {...buku} /> and <BukuCard buku={buku} />
  const data = props.buku || props;
  const { id, judul, penulis, kategori, tahun, tersedia } = data;

  // Tombol Favorit/Suka mandiri per kartu menggunakan useState
  const [isFavorit, setIsFavorit] = useState(false);

  return (
    <article className="group bg-white rounded-2xl border border-stone-200/90 hover:border-emerald-400 p-5 shadow-xs hover:shadow-xl hover:shadow-emerald-900/5 transition-all duration-300 flex flex-col justify-between">
      <div>
        {/* Top Header: Kategori & Status Badge */}

        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200/80">
            {kategori}
          </span>

          <span
            className={`inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full border ${
              tersedia
                ? "bg-emerald-50 text-emerald-700 border-emerald-200/90"
                : "bg-rose-50 text-rose-700 border-rose-200/90"
            }`}
          >
            <span
              className={`w-1.5 h-1.5 rounded-full ${
                tersedia ? "bg-emerald-600" : "bg-rose-500"
              }`}
            />
            {tersedia ? "Tersedia" : "Sedang Dipinjam"}
          </span>
        </div>

        {/* Judul Buku */}
        <h3 className="text-lg font-bold text-stone-900 group-hover:text-emerald-800 transition-colors line-clamp-2 mb-1.5">
          {judul}
        </h3>

        {/* Penulis & Tahun */}
        <p className="text-xs text-stone-500 mb-4">
          Oleh <span className="text-stone-700 font-medium">{penulis}</span> &bull; {tahun}
        </p>
      </div>

      {/* Card Actions: Favorite Button & Detail Link */}
      <div className="pt-4 border-t border-stone-100 flex items-center justify-between gap-2">
        {/* Tombol Favorit/Suka mandiri */}
        <button
          type="button"
          onClick={() => setIsFavorit(!isFavorit)}
          className={`flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg border transition-all duration-200 active:scale-95 cursor-pointer ${
            isFavorit
              ? "bg-rose-50 text-rose-700 border-rose-200 shadow-xs"
              : "bg-[#F8F6F0] hover:bg-stone-100 text-stone-600 border-stone-200 hover:text-stone-900"
          }`}
          aria-label={isFavorit ? "Hapus dari favorit" : "Tambahkan ke favorit"}
        >
          <span>{isFavorit ? "❤️" : "🤍"}</span>
          <span>{isFavorit ? "Disukai" : "Suka"}</span>
        </button>

        {/* Tautan Lihat Detail */}
        <Link
          href={`/katalog/${id}`}
          className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 hover:text-emerald-800 hover:bg-emerald-50 transition-colors py-1.5 px-2.5 rounded-lg"
        >
          Lihat Detail
          <span className="transition-transform group-hover:translate-x-0.5">&rarr;</span>
         

        </Link>
      </div>
    </article>

  
  );
}
