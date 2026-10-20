import foto1 from "../assets/gallery/foto1.jpg";
import foto2 from "../assets/gallery/foto2.jpg";
import foto3 from "../assets/gallery/foto3.jpg";
import foto4 from "../assets/gallery/foto4.jpg";

function Gallery() {
  const daftarFoto = [
    {
      id: 1,
      src: foto1,
      judul: "Staf Protokoler WR 1 Unhas",
      keterangan: "Mendampingi Wakil Rektor Bidang Akademik & Kemahasiswaan Unhas pada Malam Puncak Dies Natalis",
      posisi: "center 48%",
    },
    {
      id: 2,
      src: foto2,
      judul: "Asian Undergraduate Symposium",
      keterangan: "Awardee AUS di NUS College Singapore & penerima hibah dana proyek WeCreate sebesar SGD 5.000",
      posisi: "center center",
    },
    {
      id: 3,
      src: foto3,
      judul: "Hasanuddin English Debating Society",
      keterangan: "Media & Public Relations serta Master of Ceremony di HEDS",
      posisi: "center 58%",
    },
    {
      id: 4,
      src: foto4,
      judul: "Student Volunteer Unhas",
      keterangan: "Liaison Officer VIP/VVIP pada Pelantikan Rektor Unhas 2026–2030",
      posisi: "center center",
    },
  ];

  return (
    <section id="gallery" className="bg-cream px-6 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-6 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="eyebrow">Gallery</p>
            <h2 className="mt-4 font-serif text-4xl font-semibold text-ink sm:text-5xl">
              Momen <span className="italic text-forest">berharga</span>
            </h2>
          </div>
          <p className="max-w-md text-muted lg:justify-self-end">
            Potret perjalanan saya di panggung debat, summit internasional, dan berbagai acara
            kampus.
          </p>
        </div>

        <div className="mt-14 grid gap-x-8 gap-y-12 sm:grid-cols-2">
          {daftarFoto.map((foto) => (
            <figure key={foto.id} className="group">
              <div className="overflow-hidden rounded-2xl bg-sage">
                <img
                  src={foto.src}
                  alt={foto.judul}
                  loading="lazy"
                  style={{ objectPosition: foto.posisi }}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <figcaption className="mt-5 flex gap-5">
                <span className="font-serif text-2xl font-semibold text-moss transition-colors duration-300 group-hover:text-forest">
                  {String(foto.id).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-semibold text-ink">{foto.judul}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{foto.keterangan}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
