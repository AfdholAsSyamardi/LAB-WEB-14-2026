function Navbar() {
  const menu = ["Home", "About", "Skills", "Gallery"];

  const handleMenuClick = (item) => {
    console.log("Menu diklik:", item);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line/70 bg-paper/85 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
        <a
          href="#home"
          id="nav-logo"
          className="group flex items-center gap-3"
          onClick={() => handleMenuClick("Logo")}
        >
          <span className="grid h-10 w-10 place-items-center rounded-full border border-forest font-serif text-lg font-semibold text-forest transition-colors duration-300 group-hover:bg-forest group-hover:text-paper">
            A
          </span>
          <span className="leading-tight">
            <span className="block font-semibold tracking-tight text-ink">Afdhol As Syamardi</span>
            <span className="block text-xs text-muted">Information Systems · Unhas</span>
          </span>
        </a>

        <ul className="-mx-2 flex gap-1 overflow-x-auto">
          {menu.map((item, index) => (
            <li key={index}>
              <a
                href={`#${item.toLowerCase()}`}
                id={`nav-${item.toLowerCase()}`}
                onClick={() => handleMenuClick(item)}
                className="relative block whitespace-nowrap px-3 py-2 text-sm font-medium text-muted transition-colors duration-300 after:absolute after:inset-x-3 after:bottom-1 after:h-px after:origin-left after:scale-x-0 after:bg-forest after:transition-transform after:duration-300 hover:text-forest hover:after:scale-x-100"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
