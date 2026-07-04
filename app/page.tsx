import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Work from "@/components/Work";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="mx-auto max-w-[1120px] px-7">
      <Nav />
      <Hero />
      <Services />
      <Work />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
