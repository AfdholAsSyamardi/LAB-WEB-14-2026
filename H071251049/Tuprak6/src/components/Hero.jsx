function Hero() {
  const stats = [
    { id: 1, value: "3.73", label: "GPA / 4.00" },
    { id: 2, value: "600%", label: "Social Media Reach" },
    { id: 3, value: "10++", label: " Awards" },
  ];

  const handleContactClick = () => {

    console.log("Tombol Hero diklik: Halo! Terima kasih sudah ingin terhubung dengan Afdhol.");

    alert("Tombol Hero diklik: Halo! Terima kasih sudah ingin terhubung dengan Afdhol.");

    const footerElement = document.getElementById("footer");
    if (footerElement) {
      footerElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pb-20 pt-40 sm:pt-32"
    >
      <div className="pointer-events-none absolute -right-40 -top-40 h-[34rem] w-[34rem] rounded-full bg-sage/70 blur-3xl" />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-16 lg:grid-cols-[1.25fr_1fr]">
        <div className="animate-fade-up text-center lg:text-left">
          <p className="eyebrow justify-center lg:justify-start">Makassar, Indonesia</p>

          <h1 className="mt-6 font-serif text-5xl font-semibold leading-[1.05] text-ink sm:text-6xl lg:text-7xl">
            Halo, saya <br className="hidden sm:block" />
            <span className="italic text-forest">Afdhol As Syamardi</span>
          </h1>

          <p className="mt-5 text-sm font-medium uppercase tracking-[0.2em] text-moss">
            Event Coordinator · Public Relations · Debater
          </p>

          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted lg:mx-0">
            Mahasiswa Sistem Informasi Universitas Hasanuddin yang bersemangat dalam kolaborasi
            pemuda, pengembangan program, dan komunikasi lintas budaya dari panggung debat
            nasional hingga summit internasional di National University of Singapore.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <button
              type="button"
              id="hero-cta"
              onClick={handleContactClick}
              className="group inline-flex items-center gap-3 rounded-full bg-forest px-8 py-3.5 text-sm font-semibold text-paper transition-all duration-300 hover:bg-pine hover:shadow-lg hover:shadow-forest/20"
            >
              Let&apos;s Connect
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              >
                <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <a
              href="#about"
              id="hero-about"
              className="rounded-full border border-forest/30 px-8 py-3.5 text-sm font-semibold text-forest transition-colors duration-300 hover:border-forest hover:bg-sage/60"
            >
              Tentang Saya
            </a>
          </div>

          <dl className="mt-14 grid grid-cols-3 divide-x divide-line border-y border-line">
            {stats.map((stat) => (
              <div key={stat.id} className="px-2 py-5 text-center lg:px-6 lg:text-left">
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-serif text-3xl font-semibold text-forest sm:text-4xl">
                  {stat.value}
                </dd>
                <dd className="mt-1 text-[11px] uppercase tracking-wider text-muted sm:text-xs">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative mx-auto w-64 animate-fade-up [animation-delay:200ms] sm:w-80 lg:w-full lg:max-w-sm">
          <div className="absolute -right-4 -top-4 h-full w-full rounded-[2rem] border border-forest/40" />
          <img
            src="/profile.jpeg"
            alt="Foto profil Afdhol As Syamardi"
            className="relative aspect-[4/5] w-full rounded-[2rem] object-cover shadow-xl shadow-forest/10"
          />
          <div className="absolute -bottom-6 -left-6 rounded-2xl border border-line bg-paper px-5 py-4 text-left shadow-lg sm:-left-10">
            <p className="text-[11px] uppercase tracking-wider text-muted">Awardee 2026</p>
            <p className="mt-0.5 text-sm font-semibold text-ink">Asian Undergraduate Symposium</p>
            <p className="text-xs text-forest">NUS College, Singapore</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
