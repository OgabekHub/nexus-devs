"use client";

import dynamic from "next/dynamic";

// Three.js relies on WebGL/canvas APIs unavailable during SSR, so this
// component is loaded client-side only.
const NexusGraph3D = dynamic(() => import("./NexusGraph3D"), {
  ssr: false,
  loading: () => (
    <div className="flex h-[320px] w-full items-center justify-center font-mono text-xs text-muted md:h-[380px]">
      3D sahna yuklanmoqda...
    </div>
  ),
});

export default function Hero() {
  return (
    <section className="pb-16 pt-22">
      <div className="eyebrow mb-5 flex items-center gap-[10px] font-mono text-xs uppercase tracking-[1.5px] text-cyan">
        Frontend & AI Automation Studio
      </div>
      <h1 className="max-w-[680px] font-display text-[56px] font-semibold leading-[1.06] tracking-[-1.5px] text-white md:text-[56px] max-md:text-4xl">
        G&apos;oyalarni <span className="text-purple">ishlaydigan</span>{" "}
        tizimlarga aylantiramiz.
      </h1>
      <p className="mt-[22px] max-w-[480px] text-[17px] leading-relaxed text-muted">
        Frontend dasturlash, AI avtomatizatsiya va Telegram bot yechimlari —
        biznesingiz uchun real natija beradigan mahsulotlar quramiz.
      </p>
      <div className="mt-[34px] flex gap-3.5">
        <a
          href="#contact"
          className="rounded-lg bg-purple px-6 py-[13px] text-sm font-semibold text-white transition-opacity hover:opacity-90"
        >
          Loyiha boshlash →
        </a>
        <a
          href="#work"
          className="rounded-lg border border-border px-6 py-[13px] font-mono text-sm text-white"
        >
          /loyihalarni ko&apos;rish
        </a>
      </div>

      <div className="mt-16 border-t border-border pt-9">
        <p className="mb-2 text-center font-mono text-[11px] tracking-wide text-muted">
          // nexus — bir nuqtada birlashgan yechimlar
        </p>
        <NexusGraph3D />
      </div>
    </section>
  );
}
