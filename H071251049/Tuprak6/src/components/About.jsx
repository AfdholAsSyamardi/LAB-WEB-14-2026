function About() {
  // icon berisi path SVG (gaya garis) sebagai pengganti emoji
  const dataDiri = [
    {
      id: 1,
      icon: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2 M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z",
      label: "Nama",
      value: "Afdhol As Syamardi",
    },
    {
      id: 2,
      icon: "M22 10 12 5 2 10l10 5 10-5z M6 12v5c3 3 9 3 12 0v-5",
      label: "Pendidikan",
      value: "Sistem Informasi, Universitas Hasanuddin",
    },
    {
      id: 3,
      icon: "M3 3v18h18 M7 16v-5 M12 16V8 M17 16v-3",
      label: "IPK",
      value: "3.73 / 4.00",
    },
    {
      id: 4,
      icon: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",
      label: "Domisili",
      value: "Makassar, Indonesia",
    },
    {
      id: 5,
      icon: "M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z M22 6l-10 7L2 6",
      label: "Email",
      value: "afdholassyamardi146@gmail.com",
    },
    {
      id: 6,
      icon: "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z M2 12h20 M12 2a15 15 0 0 1 0 20 M12 2a15 15 0 0 0 0 20",
      label: "Bahasa",
      value: "Indonesia (Native), English (Fluent)",
    },
  ];

  const pengalaman = [
    {
      id: 1,
      periode: "2026 – Sekarang",
      posisi: "Protocol & Social Media Staff",
      tempat: "Wakil Rektor Bidang Akademik & Kemahasiswaan, Unhas",
    },
    {
      id: 2,
      periode: "2026 – Sekarang",
      posisi: "Chief Executive Officer",
      tempat: "OHMIC Coffee Startup — Inkubator Bisnis Unhas",
    },
    {
      id: 3,
      periode: "2026 – Sekarang",
      posisi: "Program Department Member",
      tempat: "Regen Asia Summit — National University of Singapore",
    },
    {
      id: 4,
      periode: "2025 – Sekarang",
      posisi: "Tutor Literasi Indonesia & Inggris",
      tempat: "Five Corner Institute",
    },

    { id: 5,
      periode: "2025 – Sekarang",
      posisi: "Wantimpres",
      tempat: "Istana Teddy",
    },
  ];

  return (
    <section id="about" className="bg-cream px-6 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <p className="eyebrow">About Me</p>
        <h2 className="mt-4 font-serif text-4xl font-semibold text-ink sm:text-5xl">
          Mengenal saya <span className="italic text-forest">lebih dekat</span>
        </h2>

        <div className="mt-14 grid gap-14 lg:grid-cols-2">
          <div className="space-y-5 text-base leading-relaxed text-muted">
            <p>
              Saya adalah mahasiswa Sistem Informasi di Universitas Hasanuddin yang memiliki
              pengalaman luas dalam koordinasi acara, hubungan masyarakat, dan komunikasi
              internasional. Saya pernah menangani tamu VIP/VVIP — mulai dari menteri hingga
              pimpinan organisasi nasional — serta terlibat dalam acara skala nasional maupun
              internasional.
            </p>
            <p>
              Di dunia digital, saya berhasil meningkatkan jangkauan media sosial Wakil Rektor
              dari ±100 ribu menjadi 700 ribu views hanya dalam 20 hari. Saya juga aktif sebagai
              debater, pelatih public speaking, dan saat ini memimpin startup kopi berbasis riset,{" "}
              <span className="font-semibold text-forest">Kopi OHMIC</span>.
            </p>

            <div className="pt-6">
              <h3 className="mb-6 font-serif text-2xl font-semibold text-ink">Pengalaman Terkini</h3>
              <ol className="relative space-y-7 border-l border-forest/25 pl-7">
                {pengalaman.map((item) => (
                  <li key={item.id} className="group relative">
                    <span className="absolute -left-[33px] top-1.5 h-2.5 w-2.5 rounded-full border border-forest bg-cream transition-colors duration-300 group-hover:bg-forest" />
                    <p className="text-xs font-semibold uppercase tracking-wider text-moss">
                      {item.periode}
                    </p>
                    <p className="mt-1 font-semibold text-ink">{item.posisi}</p>
                    <p className="text-sm text-muted">{item.tempat}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <ul className="grid content-start gap-4 sm:grid-cols-2">
            {dataDiri.map((item) => (
              <li
                key={item.id}
                className="group rounded-2xl border border-line bg-paper p-6 transition-all duration-300 hover:-translate-y-1 hover:border-forest/40 hover:shadow-lg hover:shadow-forest/5"
              >
                <span className="grid h-11 w-11 place-items-center rounded-full bg-sage text-forest transition-colors duration-300 group-hover:bg-forest group-hover:text-paper">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                    aria-hidden="true"
                  >
                    <path d={item.icon} />
                  </svg>
                </span>
                <p className="mt-5 text-[11px] font-semibold uppercase tracking-wider text-moss">
                  {item.label}
                </p>
                <p className="mt-1 break-words font-medium text-ink">{item.value}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
