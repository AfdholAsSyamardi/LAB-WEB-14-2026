function Footer() {
  const tahun = new Date().getFullYear();

  const sosial = [
    { id: 1, nama: "Instagram", link: "https://www.instagram.com/yoon_bim" },
    { id: 2, nama: "LinkedIn", link: "https://www.linkedin.com/in/afdholassyamardi" },
    { id: 3, nama: "Email", link: "mailto:afdholassyamardi146@gmail.com" },
  ];

  return (
    <footer id="footer" className="bg-pine px-6 pb-10 pt-16 text-paper">
      <div className="mx-auto max-w-6xl">
        <p className="text-center font-serif text-3xl font-semibold leading-snug sm:text-4xl">
          Mari berkolaborasi <span className="italic text-sage/80">bersama.</span>
        </p>

        <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-paper/15 pt-8 text-center sm:flex-row sm:text-left">
          <p className="text-sm text-paper/70">
            &copy; {tahun} <span className="font-semibold text-paper">Afdhol As Syamardi</span>.
            All rights reserved.
          </p>
          <ul className="flex gap-6">
            {sosial.map((item) => (
              <li key={item.id}>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  id={`footer-${item.nama.toLowerCase()}`}
                  className="text-sm text-paper/70 underline-offset-4 transition-colors duration-300 hover:text-paper hover:underline"
                >
                  {item.nama}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
