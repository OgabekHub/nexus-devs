import FadeIn from "./FadeIn";

const SKILLS = [
  // Tillari & Core
  "JavaScript",
  "TypeScript",
  "HTML5",
  "CSS3",
  // Framework & Kutubxonalar
  "React",
  "Next.js",
  "Tailwind CSS",
  // Toollar & Boshqalar
  "Git & GitHub",
  "Vercel",
  "Postman",
  "VS Code"
];

export default function Skills() {
  return (
    <section className="border-t border-border py-12">
      <FadeIn>
        <div className="flex flex-col items-center justify-center">
          <p className="mb-6 font-mono text-[13px] text-muted uppercase tracking-wider">
            Texnologiyalar
          </p>
          <div className="flex flex-wrap justify-center gap-4 max-w-2xl">
            {SKILLS.map((skill) => (
              <div
                key={skill}
                className="rounded-full border border-border bg-card/40 px-5 py-2 text-sm font-medium text-foreground transition-colors hover:border-cyan/50 hover:bg-card/80 hover:text-cyan"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
