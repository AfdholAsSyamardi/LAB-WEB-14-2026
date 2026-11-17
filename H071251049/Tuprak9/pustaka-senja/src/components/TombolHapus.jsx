"use client";

import { hapusBuku } from "@/app/katalog/actions";

export default function TombolHapus({ id }) {
  return (
    <form
      action={hapusBuku}
      onSubmit={(e) => {
        if (!confirm("Yakin ingin menghapus buku ini dari Pustaka Senja?")) {
          e.preventDefault();
        }
      }}
    >
      <input type="hidden" name="id" value={id} />
      <button type="submit" className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg border border-rose-200 bg-rose-50 text-rose-700 hover:bg-rose-100 transition-all cursor-pointer">
        <span>🗑️</span> Hapus
      </button>
    </form>
  );
}