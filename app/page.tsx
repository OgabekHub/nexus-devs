import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Blog from "@/components/Blog";
import Work from "@/components/Work";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="mx-auto max-w-[1120px] px-7">
      <Nav />
      <Hero />
      <Services />
      <Blog />
      <Work />
      <Contact />
      <Footer />
    </main>
  );
}
