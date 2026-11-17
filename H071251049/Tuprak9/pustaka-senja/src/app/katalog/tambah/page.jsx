import { tambahBuku } from "../actions";
import Link from "next/link";


export default function TambahBukuPage() {
  return (
    <div className="max-w-2xl mx-auto py-8">
      <Link href="/katalog" className="text-emerald-700 hover:underline mb-6 inline-block font-semibold text-sm">&larr; Kembali ke Katalog</Link>
      <div className="bg-white p-8 rounded-3xl border border-stone-200 shadow-sm">
        <h1 className="text-2xl font-bold text-stone-900 mb-6">Tambah Koleksi Baru</h1>
        <form action={tambahBuku} className="flex flex-col gap-5">
          <div>
            <label className="block text-xs font-semibold uppercase text-stone-700 mb-2">Judul Buku</label>
            <input type="text" name="judul" required className="w-full bg-[#FAF8F5] border border-stone-300 rounded-xl px-4 py-2.5 text-stone-900 focus:ring-1 focus:ring-emerald-600" />
          </div>
          <div>
            <label className="block text-xs font-semibold uppercase text-stone-700 mb-2">Penulis</label>
            <input type="text" name="penulis" required className="w-full bg-[#FAF8F5] border border-stone-300 rounded-xl px-4 py-2.5 text-stone-900 focus:ring-1 focus:ring-emerald-600" />
          </div>
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-xs font-semibold uppercase text-stone-700 mb-2">Kategori</label>
              <select name="kategori" className="w-full bg-[#FAF8F5] border border-stone-300 rounded-xl px-4 py-2.5 text-stone-900 focus:ring-1 focus:ring-emerald-600">
                <option value="Teknologi">Teknologi</option>
                <option value="Fiksi">Fiksi</option>
                <option value="Pengembangan Diri">Pengembangan Diri</option>
              </select>
            </div>
            <div className="w-1/3">
              <label className="-block text-xs font-semibold uppercase text-stone-700 mb-2">Tahun</label>
              <input type="number" name="tahun" required className="w-full bg-[#FAF8F5] border border-stone-300 rounded-xl px-4 py-2.5 text-stone-900 focus:ring-1 focus:ring-emerald-600" />
            </div>
          </div>
          <div>
            <label className="block text-xs font-semibold uppercase text-stone-700 mb-2">Status Ketersediaan</label>
            <select name="tersedia" className="w-full bg-[#FAF8F5] border border-stone-300 rounded-xl px-4 py-2.5 text-stone-900 focus:ring-1 focus:ring-emerald-600">
              <option value="true">Tersedia di Ruang Baca</option>
              <option value="false">Sedang Dipinjam</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-semibold uppercase text-stone-700 mb-2">Sinopsis</label>
            <textarea name="sinopsis" required rows="4" className="w-full bg-[#FAF8F5] border border-stone-300 rounded-xl px-4 py-2.5 text-stone-900 focus:ring-1 focus:ring-emerald-600"></textarea>
          </div>
          <div className="pt-4 border-t border-stone-100">
            <button type="submit" className="w-full bg-emerald-700 text-white font-bold rounded-xl px-4 py-3 hover:bg-emerald-800 transition">Simpan Buku ke Database</button>
          </div>
        </form>
      </div>
    </div>
  );
}