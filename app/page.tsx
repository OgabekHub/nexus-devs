import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Blog from "@/components/Blog";
import Work from "@/components/Work";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Skills from "@/components/Skills";
import { getSortedPostsData } from "@/lib/posts";

export default function Home() {
  const posts = getSortedPostsData();

  return (
    <main className="mx-auto max-w-[1120px] px-7">
      <Nav />
      <Hero />
      <Skills />
      <Services />
      <Blog posts={posts} />
      <Work />
      <Contact />
      <Footer />
    </main>
  );
}
