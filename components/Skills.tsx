import FadeIn from "./FadeIn";

const SKILLS = [
  // Asosiy tillar
  { name: "JavaScript", category: "lang" },
  { name: "TypeScript", category: "lang" },
  { name: "HTML5", category: "lang" },
  { name: "CSS3", category: "lang" },
  // Frameworklar
  { name: "React", category: "framework" },
  { name: "Next.js", category: "framework" },
  { name: "Tailwind CSS", category: "framework" },
  // Toollar
  { name: "Git & GitHub", category: "tool" },
  { name: "Vercel", category: "tool" },
  { name: "Postman", category: "tool" },
  { name: "VS Code", category: "tool" },
];

export default function Skills() {
  return (
    <section id="skills" className="border-t border-border py-12">
      <FadeIn>
        <div className="flex flex-col items-center justify-center">
          <h2 className="mb-6 font-mono text-[13px] text-muted uppercase tracking-wider">
            Texnologiyalar
          </h2>
          <ul
            className="flex flex-wrap justify-center gap-3 max-w-2xl"
            aria-label="Ko'nikmalar ro'yxati"
          >
            {SKILLS.map((skill) => (
              <li key={skill.name}>
                <span className="block rounded-full border border-border bg-card/40 px-5 py-2 text-sm font-medium text-foreground transition-colors hover:border-cyan/50 hover:bg-card/80 hover:text-cyan cursor-default">
                  {skill.name}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </FadeIn>
    </section>
  );
}
