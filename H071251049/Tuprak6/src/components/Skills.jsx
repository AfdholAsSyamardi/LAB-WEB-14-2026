function Skills() {
  const skills = [
    "Cross-Cultural Communication & International Relations",
    "Event Planning Coordination & Rundown Management",
    "VIP/VVIP Guest Handling & Liaison Services",
    "Public Speaking & English Communication",
    "Problem Solving & Adaptive Decision Making",
    "Interpersonal & Professional Communication",
    "Leadership & Team Coordination",
    "Event Documentation (Photography & Videography)",
    "Microsoft Office Suite (Word, Excel, PowerPoint)",
    "Digital Content Creation & Design (Canva, CapCut)",
  ];

  return (
    <section id="skills" className="overflow-hidden px-6 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-6 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="eyebrow">Skills</p>
            <h2 className="mt-4 font-serif text-4xl font-semibold text-ink sm:text-5xl">
              Keahlian yang <span className="italic text-forest">saya bawa</span>
            </h2>
          </div>
          <p className="max-w-md text-muted lg:justify-self-end">
            Diasah melalui puluhan acara nasional & internasional, kompetisi debat, dan
            pengalaman kerja profesional.
          </p>
        </div>

        <ul className="mt-14 grid border-t border-line sm:grid-cols-2 sm:gap-x-12">
          {skills.map((skill, index) => (
            <li
              key={index}
              className="group flex items-center gap-5 border-b border-line py-5 transition-colors duration-300"
            >
              <span className="w-8 shrink-0 font-serif text-xl font-semibold text-moss transition-colors duration-300 group-hover:text-forest">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="font-medium text-ink transition-transform duration-300 group-hover:translate-x-1">
                {skill}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Skills;
