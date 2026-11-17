import pool from "@/lib/db";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ubahBuku } from "../../actions";
export const dynamic = "force-dynamic";

export default async function EditBukuPage({ params }) {
  // Mengambil ID dari URL
  const { id } = await params;
  if (!Number.isInteger(Number(id))) notFound();

  // Menarik data buku dari database berdasarkan ID
  const result = await pool.query("SELECT * FROM buku WHERE id = $1", [id]);
  if (result.rows.length === 0) notFound();
  
  const buku = result.rows[0];

  return (
    <div className="max-w-2xl mx-auto py-8">
      <Link href={`/katalog/${buku.id}`} className="text-emerald-700 hover:underline mb-6 inline-block font-semibold text-sm">
        &larr; Batal & Kembali
      </Link>
      
      <div className="bg-white p-8 rounded-3xl border border-stone-200 shadow-sm">
        <h1 className="text-2xl font-bold text-stone-900 mb-6">Edit Data Buku #{buku.id}</h1>
        
        <form action={ubahBuku} className="flex flex-col gap-5">
          {/* Input hidden untuk mengirim ID ke Server Action */}
          <input type="hidden" name="id" value={buku.id} />
          
          <div>
            <label className="block text-xs font-semibold uppercase text-stone-700 mb-2">Judul Buku</label>
            <input type="text" name="judul" defaultValue={buku.judul} required className="w-full bg-[#FAF8F5] border border-stone-300 rounded-xl px-4 py-2.5 text-stone-900 focus:ring-1 focus:ring-emerald-600" />
          </div>
          
          <div>
            <label className="block text-xs font-semibold uppercase text-stone-700 mb-2">Penulis</label>
            <input type="text" name="penulis" defaultValue={buku.penulis} required className="w-full bg-[#FAF8F5] border border-stone-300 rounded-xl px-4 py-2.5 text-stone-900 focus:ring-1 focus:ring-emerald-600" />
          </div>
          
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-xs font-semibold uppercase text-stone-700 mb-2">Kategori</label>
              {/* Dropdown Kategori yang sudah diperbaiki */}
              <select name="kategori" defaultValue={buku.kategori} required className="w-full bg-[#FAF8F5] border border-stone-300 rounded-xl px-4 py-2.5 text-stone-900 focus:ring-1 focus:ring-emerald-600">
                <option value="Teknologi">Teknologi</option>
                <option value="Fiksi">Fiksi</option>
                <option value="Pengembangan Diri">Pengembangan Diri</option>
              </select>
            </div>
            <div className="w-1/3">
              <label className="block text-xs font-semibold uppercase text-stone-700 mb-2">Tahun</label>
              <input type="number" name="tahun" defaultValue={buku.tahun} required className="w-full bg-[#FAF8F5] border border-stone-300 rounded-xl px-4 py-2.5 text-stone-900 focus:ring-1 focus:ring-emerald-600" />
            </div>
          </div>
          
          <div>
            <label className="block text-xs font-semibold uppercase text-stone-700 mb-2">Status Ketersediaan</label>
            <select name="tersedia" defaultValue={buku.tersedia ? "true" : "false"} className="w-full bg-[#FAF8F5] border border-stone-300 rounded-xl px-4 py-2.5 text-stone-900 focus:ring-1 focus:ring-emerald-600">
              <option value="true">Tersedia di Ruang Baca</option>
              <option value="false">Sedang Dipinjam</option>
            </select>
          </div>
          
          <div>
            <label className="block text-xs font-semibold uppercase text-stone-700 mb-2">Sinopsis</label>
            <textarea name="sinopsis" defaultValue={buku.sinopsis} required rows="4" className="w-full bg-[#FAF8F5] border border-stone-300 rounded-xl px-4 py-2.5 text-stone-900 focus:ring-1 focus:ring-emerald-600"></textarea>
          </div>
          
          <div className="pt-4 border-t border-stone-100">
            <button type="submit" className="w-full bg-blue-700 text-white font-bold rounded-xl px-4 py-3 hover:bg-blue-800 transition">
              Simpan Perubahan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}