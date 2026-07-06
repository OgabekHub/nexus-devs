"use client";

import FadeIn from "./FadeIn";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setSuccess(false);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current!,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(
        () => {
          setLoading(false);
          setSuccess(true);
          formRef.current?.reset();
          setTimeout(() => setSuccess(false), 6000);
        },
        () => {
          setLoading(false);
          setError(true);
          setTimeout(() => setError(false), 6000);
        }
      );
  };

  return (
    <section id="contact" className="py-20">
      <FadeIn>
        <div className="grid md:grid-cols-2 gap-10 rounded-2xl border border-border bg-card/60 backdrop-blur-md px-8 py-14">
          <div>
            <h2 className="mb-3.5 font-display text-4xl font-semibold text-foreground">
              Bog&apos;lanish
            </h2>
            <p className="mb-7 text-[15px] text-muted">
              Yangi loyihalar, ochiq kodli ishlarimni ijtimoiy tarmoqlarda bo&apos;lishib boraman. Yoki men bilan bevosita bog&apos;lanish uchun xabar qoldiring.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://github.com/OgabekHub"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profili"
                className="inline-block rounded-lg border border-border bg-bg/50 px-6 py-[13px] text-sm font-semibold text-foreground transition-colors hover:border-purple hover:bg-card/80"
              >
                GitHub
              </a>
              <a
                href="https://t.me/olimjonov_ogabek"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram kanalim"
                className="inline-block rounded-lg border border-border bg-bg/50 px-6 py-[13px] text-sm font-semibold text-foreground transition-colors hover:border-purple hover:bg-card/80"
              >
                Telegram
              </a>
              <a
                href="https://www.linkedin.com/in/og-abek-olimjonov-2a52b3364/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profili"
                className="inline-block rounded-lg border border-border bg-bg/50 px-6 py-[13px] text-sm font-semibold text-foreground transition-colors hover:border-cyan hover:bg-card/80"
              >
                LinkedIn
              </a>
              <a
                href="https://www.facebook.com/Ogabek.Ol1mjonov"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook profili"
                className="inline-block rounded-lg border border-border bg-bg/50 px-6 py-[13px] text-sm font-semibold text-foreground transition-colors hover:border-cyan hover:bg-card/80"
              >
                Facebook
              </a>
              <a
                href="mailto:olimjonov.ogabek.dev@gmail.com"
                aria-label="Email yuborish"
                className="inline-block rounded-lg border border-border bg-bg/50 px-6 py-[13px] text-sm font-semibold text-foreground transition-colors hover:border-cyan hover:bg-card/80"
              >
                Email
              </a>
            </div>
          </div>

          <form ref={formRef} onSubmit={sendEmail} className="flex flex-col gap-4" noValidate>
            <div className="flex flex-col gap-1">
              <label htmlFor="user_name" className="text-sm font-medium text-foreground">
                Ismingiz
              </label>
              <input
                id="user_name"
                type="text"
                name="user_name"
                placeholder="Ali Valiyev"
                required
                className="rounded-lg border border-border bg-bg/50 px-4 py-3 text-sm text-foreground focus:border-purple focus:outline-none focus:ring-1 focus:ring-purple placeholder:text-muted"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="user_email" className="text-sm font-medium text-foreground">
                Email manzilingiz
              </label>
              <input
                id="user_email"
                type="email"
                name="user_email"
                placeholder="ali@example.com"
                required
                className="rounded-lg border border-border bg-bg/50 px-4 py-3 text-sm text-foreground focus:border-purple focus:outline-none focus:ring-1 focus:ring-purple placeholder:text-muted"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="message" className="text-sm font-medium text-foreground">
                Xabaringiz
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Salom! Men siz bilan..."
                rows={4}
                required
                className="rounded-lg border border-border bg-bg/50 px-4 py-3 text-sm text-foreground focus:border-purple focus:outline-none focus:ring-1 focus:ring-purple resize-none placeholder:text-muted"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="rounded-lg bg-cyan px-6 py-3 text-sm font-semibold text-bg transition-opacity hover:opacity-90 disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-bg border-t-transparent" aria-hidden="true" />
                  Yuborilmoqda...
                </>
              ) : (
                "Xabar yuborish"
              )}
            </button>

            {/* Status xabarlari */}
            <div aria-live="polite" aria-atomic="true">
              {success && (
                <p className="rounded-lg bg-emerald-500/10 border border-emerald-500/30 px-4 py-3 text-sm text-emerald-400">
                  ✓ Xabar muvaffaqiyatli yuborildi! Tez orada javob beraman.
                </p>
              )}
              {error && (
                <p className="rounded-lg bg-red-500/10 border border-red-500/30 px-4 py-3 text-sm text-red-400">
                  ✗ Xatolik yuz berdi. Iltimos, email yoki Telegram orqali bog&apos;laning.
                </p>
              )}
            </div>
          </form>
        </div>
      </FadeIn>
    </section>
  );
}
