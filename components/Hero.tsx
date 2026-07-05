"use client";

import FadeIn from "./FadeIn";
import HeroVisual from "./HeroVisual";

export default function Hero() {
  return (
    <section className="relative pt-24 pb-20 md:pt-32 md:pb-32">
      <div className="absolute inset-x-0 top-[-100px] -z-10 h-[500px] w-full bg-[radial-gradient(ellipse_at_top,var(--purple-soft),transparent_70%)]" />
      
      <div className="flex flex-col-reverse items-center justify-between gap-12 md:flex-row md:gap-8">
        <div className="flex-1 text-left">
          <FadeIn>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple/30 bg-purple/10 px-3 py-1.5 text-sm font-medium text-purple backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-purple opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-purple"></span>
              </span>
              Ochiq ishlar uchun qabul ochiq
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h1 className="max-w-[680px] font-display text-[56px] font-semibold leading-[1.06] tracking-[-1.5px] text-foreground md:text-[56px] max-md:text-4xl">
              O&apos;zbekistondan <span className="text-purple">dasturchi</span>{" "}
              va AI builder.
            </h1>
          </FadeIn>
          <FadeIn delay={0.4}>
            <p className="mt-6 max-w-[540px] text-lg leading-relaxed text-muted">
              Men texnologiyalar orqali muammolarni hal qilishni yaxshi ko&apos;raman.
              Full-stack veb ilovalar va aqlli Telegram botlar yaratish bilan shug&apos;ullanaman.
            </p>
          </FadeIn>
          <FadeIn delay={0.6}>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="rounded-lg bg-purple px-6 py-[13px] text-sm font-semibold text-white transition-opacity hover:opacity-90 hover:shadow-[0_0_20px_rgb(124,92,252,0.4)]"
              >
                Bog&apos;lanish
              </a>
              <a
                href="#work"
                className="rounded-lg border border-border px-6 py-[13px] font-mono text-sm text-foreground transition-colors hover:bg-card/50 hover:border-border/80"
              >
                /loyihalarni ko&apos;rish
              </a>
            </div>
          </FadeIn>
        </div>

        <div className="w-full flex-1 md:w-auto">
          <FadeIn delay={0.3} className="relative w-full">
            <HeroVisual />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
