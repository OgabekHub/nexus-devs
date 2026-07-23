"use client";

import { useState, useEffect } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { href: "#services", label: "Yo'nalishlar" },
  { href: "#blog", label: "Blog" },
  { href: "#work", label: "Loyihalar" },
];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Menyu ochiq bo'lganda scroll ni bloklash
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-bg/75 backdrop-blur-md">
        <nav
          aria-label="Asosiy navigatsiya"
          className="mx-auto max-w-[1440px] px-7 md:px-10 flex items-center justify-between py-6"
        >
        {/* Logo */}
        <div className="flex items-center gap-2 font-display text-[19px] font-bold tracking-tight text-foreground">
          <span className="h-2 w-2 rounded-full bg-purple shadow-[0_0_12px_#7C5CFC]" aria-hidden="true" />
          Nexus Devs
        </div>

        {/* Desktop links */}
        <div className="hidden gap-9 text-sm text-muted md:flex items-center">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <ThemeToggle />
        </div>

        {/* Desktop CTA + Mobile controls */}
        <div className="flex gap-3 items-center">
          {/* Mobile: theme toggle */}
          <div className="md:hidden">
            <ThemeToggle />
          </div>

          {/* CTA button — har doim ko'rinadi */}
          <a
            href="#contact"
            className="hidden sm:inline-block rounded-md bg-purple px-[18px] py-[9px] font-mono text-[13px] font-medium text-white transition-opacity hover:opacity-90"
          >
            Bog&apos;lanish
          </a>

          {/* Mobile: hamburger */}
          <button
            onClick={() => setMenuOpen((o) => !o)}
            className="md:hidden flex items-center justify-center rounded-md p-2 text-foreground transition-colors hover:bg-card"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Menyuni yopish" : "Menyuni ochish"}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
        </nav>
      </header>

      {/* Mobile drawer */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="fixed inset-0 z-40 flex flex-col bg-bg/95 backdrop-blur-md md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobil menyu"
        >
          {/* Top bar placeholder for spacing */}
          <div className="h-[80px]" />

          <nav className="flex flex-1 flex-col items-center justify-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="font-display text-3xl font-semibold text-foreground transition-colors hover:text-purple"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={closeMenu}
              className="mt-4 rounded-md bg-purple px-8 py-3 font-mono text-[15px] font-medium text-white transition-opacity hover:opacity-90"
            >
              Bog&apos;lanish
            </a>
          </nav>
        </div>
      )}
    </>
  );
}
