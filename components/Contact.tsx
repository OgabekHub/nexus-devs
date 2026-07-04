import FadeIn from "./FadeIn";

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <FadeIn>
        <div className="rounded-2xl border border-border bg-card/60 backdrop-blur-md px-8 py-14 text-center">
          <h2 className="mb-3.5 font-display text-4xl font-semibold text-white">
            Loyihalarimni kuzatib boring
          </h2>
          <p className="mb-7 text-[15px] text-muted">
            Yangi loyihalar, ochiq kodli ishlarimni ijtimoiy tarmoqlarda bo&apos;lishib boraman.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-lg border border-border bg-bg/50 px-6 py-[13px] text-sm font-semibold text-white transition-colors hover:border-purple hover:bg-white/5"
            >
              GitHub
            </a>
            <a
              href="https://t.me/your_handle"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-lg bg-purple px-6 py-[13px] text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              Telegram Kanal
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-lg border border-border bg-bg/50 px-6 py-[13px] text-sm font-semibold text-white transition-colors hover:border-cyan hover:bg-white/5"
            >
              Twitter / X
            </a>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
