const POSTS = [
  {
    title: "AI Agentlarni biznes jarayonlarga moslashtirish",
    date: "2026-07-01",
    desc: "LLM modelarni qanday qilib ixtisoslashtirilgan vazifalar uchun prompt-engineering va RAG orqali sozlash tajribam.",
  },
  {
    title: "Next.js 14 va React Three Fiber integratsiyasi",
    date: "2026-06-15",
    desc: "Veb-saytlarda 3D modellarni (Canvas) qanday qilib server-side rendering muammolarisiz ishlatish mumkin?",
  },
  {
    title: "Telegram botlar uchun to'g'ri arxitektura",
    date: "2026-05-28",
    desc: "Aiogram 3 va PostgreSQL yordamida scalable bot yaratishda qanday dizayn patternlardan foydalanish kerak.",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="border-t border-border py-20">
      <div className="mb-11 flex items-end justify-between">
        <h2 className="font-display text-[32px] font-semibold tracking-[-0.5px] text-white">
          Jurnal
        </h2>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {POSTS.map((post) => (
          <div
            key={post.title}
            className="group flex flex-col justify-between rounded-xl border border-border bg-card p-6 transition-colors hover:border-cyan"
          >
            <div>
              <time className="mb-3 block font-mono text-xs text-muted">
                {post.date}
              </time>
              <h3 className="mb-3 font-display text-[17px] font-semibold leading-snug text-white transition-colors group-hover:text-cyan">
                {post.title}
              </h3>
              <p className="mb-5 text-sm leading-relaxed text-muted line-clamp-3">
                {post.desc}
              </p>
            </div>
            <a
              href="#"
              className="inline-flex w-fit items-center text-sm font-medium text-white hover:text-cyan"
            >
              O&apos;qish <span className="ml-1 text-lg">→</span>
            </a>
          </div>
        ))}
      </div>
      <div className="mt-10 flex justify-center">
        <a
          href="#"
          className="rounded-lg border border-border px-6 py-[13px] font-mono text-sm text-white transition-colors hover:bg-white/5"
        >
          Barcha postlarni ko&apos;rish →
        </a>
      </div>
    </section>
  );
}
