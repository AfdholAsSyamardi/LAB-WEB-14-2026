import pool from "@/lib/db";
import Link from "next/link";
import KatalogClient from "./KatalogClient";
export const dynamic = "force-dynamic";

export default async function KatalogPage() {
  const result = await pool.query("SELECT * FROM buku ORDER BY id ASC");
  const daftarBuku = result.rows;

  return (
    <div className="space-y-8">
      <div className="border-b border-stone-200 pb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-emerald-700">Koleksi Buku</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-stone-900 mt-1">Katalog Pustaka Senja</h1>
          <p className="text-sm text-stone-600 mt-2 max-w-2xl">Jelajahi koleksi buku pilihan kami yang diambil langsung dari database.</p>
        </div>
        <Link href="/katalog/tambah" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm shadow-md transition-all">
          + Tambah Buku
        </Link>
      </div>

      <KatalogClient dataBuku={daftarBuku} />
    </div>
  );
}