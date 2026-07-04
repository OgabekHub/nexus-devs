import FadeIn from "./FadeIn";

const FOCUS_AREAS = [
  {
    title: "Frontend Development",
    desc: "React va Next.js ekotizimida murakkab va interaktiv foydalanuvchi interfeyslarini qurishga qiziqaman.",
  },
  {
    title: "AI Automation",
    desc: "LLM (Large Language Models) va AI agentlarni real muammolarni hal qiluvchi tizimlarga integratsiya qilish ustida ishlayman.",
  },
  {
    title: "Telegram Bots",
    desc: "Aiogram va Python yordamida har xil turdagi foydali Telegram botlarni yaratish tajribam bor.",
  },
];

export default function Services() {
  return (
    <section id="services" className="border-t border-border py-20">
      <FadeIn>
        <div className="mb-11 flex items-end justify-between">
          <h2 className="font-display text-[32px] font-semibold tracking-[-0.5px] text-white">
            Nima bilan shug&apos;ullanaman
          </h2>
          <span className="font-mono text-[13px] text-muted">01 / 03</span>
        </div>
      </FadeIn>
      <div className="grid gap-5 md:grid-cols-3">
        {FOCUS_AREAS.map((s, idx) => (
          <FadeIn key={s.title} delay={idx * 0.15}>
            <div
              className="group h-full rounded-xl border border-border bg-card/50 backdrop-blur-sm p-7 transition-all duration-200 ease-out hover:-translate-y-1 hover:border-purple/70 hover:bg-card/80 hover:shadow-[0_8px_30px_rgb(124,92,252,0.12)]"
            >
              <div className="mb-[18px] flex h-9 w-9 items-center justify-center rounded-lg bg-[--purple-soft] text-purple transition-transform duration-200 ease-out group-hover:scale-110 group-hover:bg-purple group-hover:text-white">
                ◆
              </div>
              <h3 className="mb-2 font-display text-[17px] font-semibold text-white">
                {s.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted group-hover:text-muted-foreground transition-colors">{s.desc}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
