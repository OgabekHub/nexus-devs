const PROJECTS = [
  {
    title: "Faxr Mebel — Inventar & Moliya AI Agenti",
    tags: "Python · FastAPI · PostgreSQL",
    learned: "Murakkab biznes mantiqni LLM agentlar bilan integratsiya qilishni o'rgandim.",
  },
  {
    title: "IQ Testing Platform",
    tags: "Next.js · Zustand · Multilingual",
    learned: "Katta hajmdagi holat (state) boshqarish va ko'p tilli arxitektura qurish tajribasi.",
  },
  {
    title: "Global Sound — Video Generation Tool",
    tags: "FastAPI · FFmpeg",
    learned: "Video fayllarni serverda avtomatik qayta ishlash jarayonini optimallashtirish.",
  },
];

export default function Work() {
  return (
    <section id="work" className="border-t border-border py-20">
      <div className="mb-11 flex items-end justify-between">
        <h2 className="font-display text-[32px] font-semibold tracking-[-0.5px] text-white">
          Men qurgan narsalar
        </h2>
        <span className="font-mono text-[13px] text-muted">02 / 03</span>
      </div>
      <div className="flex flex-col">
        {PROJECTS.map((p) => (
          <a
            key={p.title}
            href="#"
            className="group flex flex-col justify-center border-b border-border py-6 transition-colors hover:border-purple/50"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="font-display text-xl text-white transition-colors group-hover:text-purple">
                {p.title}
              </span>
              <span className="text-lg text-muted transition-colors group-hover:text-purple">→</span>
            </div>
            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
              <span className="font-mono text-[11px] uppercase tracking-wider text-cyan">
                {p.tags}
              </span>
              <span className="text-[14px] text-muted">
                <span className="hidden md:inline">— </span>{p.learned}
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
