import Link from "next/link";
import pool from "@/lib/db";
import { notFound } from "next/navigation";

export default async function DetailBukuPage({ params }) {
  const { id } = await params;
  if (!Number.isInteger(Number(id))) notFound();

  const result = await pool.query("SELECT * FROM buku WHERE id = $1", [id]);
  if (result.rows.length === 0) notFound();
  
  const buku = result.rows[0];

  return (
    <div className="max-w-3xl mx-auto py-4">
      <div className="mb-6 flex items-center justify-between">
        <Link href="/katalog" className="inline-flex items-center gap-2 text-sm font-semibold text-stone-500 hover:text-emerald-800 transition-colors">&larr; Kembali ke Katalog</Link>
        <Link href={`/katalog/${buku.id}/edit`} className="inline-flex items-center gap-1.5 text-xs font-medium px-4 py-2 rounded-xl border border-blue-200 bg-blue-50 text-blue-700 hover:bg-blue-100 transition-all">
          <span>✏️</span> Edit Data Buku
        </Link>
      </div>

      <article className="bg-white rounded-3xl border border-stone-200/90 p-6 sm:p-10 shadow-lg relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold px-3 py-1 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200/80">{buku.kategori}</span>
            <span className="text-xs font-mono text-stone-600 bg-stone-100 px-2.5 py-1 rounded-lg border border-stone-200">ID: #{buku.id}</span>
          </div>
          <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 py-1.5 rounded-full border ${buku.tersedia ? "bg-emerald-50 text-emerald-700 border-emerald-200/90" : "bg-rose-50 text-rose-700 border-rose-200/90"}`}>
            <span className={`w-2 h-2 rounded-full ${buku.tersedia ? "bg-emerald-600" : "bg-rose-500"}`} />
            {buku.tersedia ? "Tersedia di Ruang Baca" : "Sedang Dipinjam"}
          </span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-stone-900 mb-4 leading-tight">{buku.judul}</h1>
        <div className="flex flex-wrap items-center gap-4 text-sm text-stone-700 pb-6 mb-6 border-b border-stone-100">
          <div><span className="text-stone-400 text-xs block">Penulis</span><span className="font-semibold text-stone-900">{buku.penulis}</span></div>
          <div className="h-8 w-px bg-stone-200 hidden sm:block" />
          <div><span className="text-stone-400 text-xs block">Tahun Terbit</span><span className="font-semibold text-stone-900">{buku.tahun}</span></div>
          <div className="h-8 w-px bg-stone-200 hidden sm:block" />
          <div><span className="text-stone-400 text-xs block">Format Koleksi</span><span className="font-semibold text-emerald-800">Buku Fisik</span></div>
        </div>
        <div className="mb-8">
          <h2 className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-3">Sinopsis Buku</h2>
          <p className="text-stone-700 text-base leading-relaxed bg-[#F9F7F2] p-5 rounded-2xl border border-stone-200/80">{buku.sinopsis}</p>
        </div>
      </article>
    </div>
  );
}