"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import pool from "@/lib/db";

export async function tambahBuku(formData) {
  const judul = formData.get("judul");
  const penulis = formData.get("penulis");
  const kategori = formData.get("kategori");
  const tahun = Number(formData.get("tahun"));
  const tersedia = formData.get("tersedia") === "true";
  const sinopsis = formData.get("sinopsis");

  if (!judul || !penulis || !kategori || !tahun || !sinopsis) return;

  await pool.query(
    "INSERT INTO buku (judul, penulis, kategori, tahun, tersedia, sinopsis) VALUES ($1, $2, $3, $4, $5, $6)",
    [judul, penulis, kategori, tahun, tersedia, sinopsis]
  );

  revalidatePath("/katalog");
  revalidatePath("/");
  redirect("/katalog");
}

export async function ubahBuku(formData) {
  const id = Number(formData.get("id"));
  const judul = formData.get("judul");
  const penulis = formData.get("penulis");
  const kategori = formData.get("kategori");
  const tahun = Number(formData.get("tahun"));
  const tersedia = formData.get("tersedia") === "true";
  const sinopsis = formData.get("sinopsis");

  await pool.query(
    "UPDATE buku SET judul = $1, penulis = $2, kategori = $3, tahun = $4, tersedia = $5, sinopsis = $6 WHERE id = $7",
    [judul, penulis, kategori, tahun, tersedia, sinopsis, id]
  );

  revalidatePath("/katalog");
  revalidatePath("/");
  redirect(`/katalog/${id}`);
}

export async function hapusBuku(formData) {
  const id = Number(formData.get("id"));
  await pool.query("DELETE FROM buku WHERE id = $1", [id]);
  
  revalidatePath("/katalog");
  revalidatePath("/");
}