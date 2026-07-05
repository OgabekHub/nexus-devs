import FadeIn from "./FadeIn";
import Link from "next/link";
import { PostData } from "@/lib/posts";

export default function Blog({ posts }: { posts: PostData[] }) {
  return (
    <section id="blog" className="border-t border-border py-20">
      <FadeIn>
        <div className="mb-11 flex items-end justify-between">
          <h2 className="font-display text-[32px] font-semibold tracking-[-0.5px] text-foreground">
            Jurnal
          </h2>
        </div>
      </FadeIn>
      <div className="grid gap-6 md:grid-cols-3">
        {posts.map((post, idx) => (
          <FadeIn key={post.title} delay={idx * 0.15}>
            <div
              className="group flex flex-col justify-between h-full rounded-xl border border-border bg-card/40 backdrop-blur-md p-6 transition-all duration-200 ease-out hover:-translate-y-1 hover:border-cyan/50 hover:bg-card/70 hover:shadow-[0_8px_30px_rgb(94,234,212,0.08)]"
            >
              <div>
                <time className="mb-3 block font-mono text-xs text-muted">
                  {post.date}
                </time>
                <h3 className="mb-3 font-display text-[17px] font-semibold leading-snug text-foreground transition-colors group-hover:text-cyan">
                  {post.title}
                </h3>
                <p className="mb-5 text-sm leading-relaxed text-muted line-clamp-3">
                  {post.desc}
                </p>
              </div>
              <Link
                href={`/blog/${post.id}`}
                className="inline-flex w-fit items-center text-sm font-medium text-foreground transition-colors hover:text-cyan group-hover:text-cyan"
              >
                O&apos;qish <span className="ml-1 text-lg transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
