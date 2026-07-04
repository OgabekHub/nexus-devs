const SERVICES = [
  {
    title: "Frontend Development",
    desc: "Next.js, React asosida tez, zamonaviy va responsive veb-ilovalar. SEO va performance'ga e'tibor bilan.",
  },
  {
    title: "AI Automation",
    desc: "Biznes jarayonlaringizni AI agentlar bilan avtomatlashtirish — inventar, moliya, mijozlar bilan ishlash.",
  },
  {
    title: "Telegram Bots",
    desc: "Aiogram asosida katalog, buyurtma va boshqaruv botlari — PostgreSQL va VPS deploy bilan to'liq tayyor.",
  },
];

export default function Services() {
  return (
    <section id="services" className="border-t border-border py-20">
      <div className="mb-11 flex items-end justify-between">
        <h2 className="font-display text-[32px] font-semibold tracking-[-0.5px] text-white">
          Xizmatlar
        </h2>
        <span className="font-mono text-[13px] text-muted">01 / 03</span>
      </div>
      <div className="grid gap-5 md:grid-cols-3">
        {SERVICES.map((s) => (
          <div
            key={s.title}
            className="rounded-xl border border-border bg-card p-7 transition-colors hover:border-purple"
          >
            <div className="mb-[18px] flex h-9 w-9 items-center justify-center rounded-lg bg-[--purple-soft] text-purple">
              ◆
            </div>
            <h3 className="mb-2 font-display text-[17px] font-semibold text-white">
              {s.title}
            </h3>
            <p className="text-sm leading-relaxed text-muted">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
