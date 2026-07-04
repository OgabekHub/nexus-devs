export default function Nav() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between bg-bg/75 py-6 backdrop-blur-md">
      <div className="flex items-center gap-2 font-display text-[19px] font-bold tracking-tight text-white">
        <span className="h-2 w-2 rounded-full bg-purple shadow-[0_0_12px_#7C5CFC]" />
        Nexus Devs
      </div>
      <div className="hidden gap-9 text-sm text-muted md:flex">
        <a href="#services" className="transition-colors hover:text-white">
          Yo&apos;nalishlar
        </a>
        <a href="#blog" className="transition-colors hover:text-white">
          Blog
        </a>
        <a href="#work" className="transition-colors hover:text-white">
          Loyihalar
        </a>
      </div>
      <a
        href="#contact"
        className="rounded-md bg-purple px-[18px] py-[9px] font-mono text-[13px] font-medium text-bg"
      >
        Kuzatish
      </a>
    </nav>
  );
}
