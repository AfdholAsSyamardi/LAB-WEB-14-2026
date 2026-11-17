import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Pustaka Senja | Ruang Baca & Perpustakaan Komunitas",
  description:
    "Aplikasi multi-halaman katalog buku dan ruang baca komunitas dekat kampus Pustaka Senja.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className="min-h-screen flex flex-col bg-[#FDFBF7] text-stone-800 antialiased selection:bg-emerald-200 selection:text-emerald-900">
        <Navbar />
        <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 py-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
