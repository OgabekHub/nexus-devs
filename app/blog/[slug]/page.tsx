import { getPostData, getSortedPostsData } from "@/lib/posts";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const posts = getSortedPostsData();
  return posts.map((post) => ({
    slug: post.id,
  }));
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  try {
    const postData = await getPostData(params.slug);

    return (
      <main className="mx-auto max-w-[800px] px-7">
        <Nav />
        <article className="py-20">
          <FadeIn>
            <Link href="/#blog" className="text-cyan text-sm mb-8 inline-block hover:underline">
              ← Ortga qaytish
            </Link>
            <header className="mb-10">
              <time className="mb-3 block font-mono text-sm text-muted">
                {postData.date}
              </time>
              <h1 className="font-display text-[40px] font-bold leading-tight text-foreground">
                {postData.title}
              </h1>
              <p className="mt-4 text-lg text-muted">{postData.desc}</p>
            </header>
            <div
              className="markdown-body mt-8"
              dangerouslySetInnerHTML={{ __html: postData.contentHtml || "" }}
            />
          </FadeIn>
        </article>
        <Footer />
      </main>
    );
  } catch (e) {
    console.error("Error generating blog post:", e);
    notFound();
  }
}
