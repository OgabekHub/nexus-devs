const PROJECTS = [
  {
    title: "Faxr Mebel — Inventar & Moliya AI Agenti",
    tags: "Python · FastAPI · PostgreSQL",
  },
  {
    title: "IQ Testing Platform",
    tags: "Next.js · Zustand · Multilingual",
  },
  {
    title: "Global Sound — Video Generation Tool",
    tags: "FastAPI · FFmpeg",
  },
];

export default function Work() {
  return (
    <section id="work" className="border-t border-border py-20">
      <div className="mb-11 flex items-end justify-between">
        <h2 className="font-display text-[32px] font-semibold tracking-[-0.5px] text-white">
          Tanlangan loyihalar
        </h2>
        <span className="font-mono text-[13px] text-muted">02 / 03</span>
      </div>
      <div className="flex flex-col">
        {PROJECTS.map((p) => (
          <a
            key={p.title}
            href="#"
            className="group flex items-center justify-between border-b border-border py-6"
          >
            <span className="font-display text-xl text-white transition-colors group-hover:text-purple">
              {p.title}
            </span>
            <span className="hidden font-mono text-xs text-muted md:inline">
              {p.tags}
            </span>
            <span className="text-lg text-muted">→</span>
          </a>
        ))}
      </div>
    </section>
  );
}
