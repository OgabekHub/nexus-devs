"use client";

import FadeIn from "./FadeIn";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Replace these with your actual EmailJS Service ID, Template ID, and Public Key
    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        formRef.current!,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        () => {
          setLoading(false);
          setSuccess(true);
          formRef.current?.reset();
          setTimeout(() => setSuccess(false), 5000);
        },
        (error) => {
          setLoading(false);
          console.error(error.text);
          alert("Xatolik yuz berdi. Iltimos, keyinroq qayta urinib ko'ring.");
        }
      );
  };

  return (
    <section id="contact" className="py-20">
      <FadeIn>
        <div className="grid md:grid-cols-2 gap-10 rounded-2xl border border-border bg-card/60 backdrop-blur-md px-8 py-14">
          <div>
            <h2 className="mb-3.5 font-display text-4xl font-semibold text-foreground">
              Loyihalarimni kuzatib boring
            </h2>
            <p className="mb-7 text-[15px] text-muted">
              Yangi loyihalar, ochiq kodli ishlarimni ijtimoiy tarmoqlarda bo&apos;lishib boraman. Yoki men bilan bevosita bog&apos;lanish uchun xabar qoldiring.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://github.com/OgabekHub" target="_blank" rel="noopener noreferrer" className="inline-block rounded-lg border border-border bg-bg/50 px-6 py-[13px] text-sm font-semibold text-foreground transition-colors hover:border-purple hover:bg-card/80">
                GitHub
              </a>
              <a href="https://t.me/olimjonov_ogabek" target="_blank" rel="noopener noreferrer" className="inline-block rounded-lg border border-border bg-bg/50 px-6 py-[13px] text-sm font-semibold text-foreground transition-colors hover:border-purple hover:bg-card/80">
                Telegram
              </a>
              <a href="https://www.linkedin.com/in/og-abek-olimjonov-2a52b3364/" target="_blank" rel="noopener noreferrer" className="inline-block rounded-lg border border-border bg-bg/50 px-6 py-[13px] text-sm font-semibold text-foreground transition-colors hover:border-cyan hover:bg-card/80">
                LinkedIn
              </a>
              <a href="https://www.facebook.com/Ogabek.Ol1mjonov" target="_blank" rel="noopener noreferrer" className="inline-block rounded-lg border border-border bg-bg/50 px-6 py-[13px] text-sm font-semibold text-foreground transition-colors hover:border-cyan hover:bg-card/80">
                Facebook
              </a>
              <a href="mailto:olimjonov.ogabek.dev@gmail.com" className="inline-block rounded-lg border border-border bg-bg/50 px-6 py-[13px] text-sm font-semibold text-foreground transition-colors hover:border-cyan hover:bg-card/80">
                Email
              </a>
            </div>
          </div>

          <form ref={formRef} onSubmit={sendEmail} className="flex flex-col gap-4">
            <input type="text" name="user_name" placeholder="Ismingiz" required className="rounded-lg border border-border bg-bg/50 px-4 py-3 text-sm text-foreground focus:border-purple focus:outline-none focus:ring-1 focus:ring-purple" />
            <input type="email" name="user_email" placeholder="Emailingiz" required className="rounded-lg border border-border bg-bg/50 px-4 py-3 text-sm text-foreground focus:border-purple focus:outline-none focus:ring-1 focus:ring-purple" />
            <textarea name="message" placeholder="Xabaringiz" rows={4} required className="rounded-lg border border-border bg-bg/50 px-4 py-3 text-sm text-foreground focus:border-purple focus:outline-none focus:ring-1 focus:ring-purple resize-none" />
            <button type="submit" disabled={loading} className="rounded-lg bg-cyan px-6 py-3 text-sm font-semibold text-bg transition-opacity hover:opacity-90 disabled:opacity-50">
              {loading ? "Yuborilmoqda..." : "Xabar yuborish"}
            </button>
            {success && <p className="text-sm text-green-500 mt-2">Xabar muvaffaqiyatli yuborildi!</p>}
          </form>
        </div>
      </FadeIn>
    </section>
  );
}
