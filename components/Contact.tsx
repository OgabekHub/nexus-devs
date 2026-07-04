export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="rounded-2xl border border-border bg-card px-8 py-14 text-center">
        <h2 className="mb-3.5 font-display text-4xl font-semibold text-white">
          Loyihangizni muhokama qilamizmi?
        </h2>
        <p className="mb-7 text-[15px] text-muted">
          Telegram orqali yozing — 24 soat ichida javob beramiz.
        </p>
        <a
          href="https://t.me/your_handle"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-lg bg-purple px-6 py-[13px] text-sm font-semibold text-white transition-opacity hover:opacity-90"
        >
          Telegram&apos;da yozish →
        </a>
      </div>
    </section>
  );
}
