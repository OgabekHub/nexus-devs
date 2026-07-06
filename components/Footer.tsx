export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      className="flex flex-wrap justify-between gap-2 border-t border-border py-8 font-mono text-[13px] text-muted"
      aria-label="Sayt pastki qismi"
    >
      <span>© {year} Nexus Devs</span>
      <a
        href="https://nexusdevs.dev"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-colors hover:text-foreground"
      >
        nexusdevs.dev
      </a>
    </footer>
  );
}
