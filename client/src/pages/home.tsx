import Header from "@/components/header";
import Hero from "@/components/hero";
import About from "@/components/about";
import Academics from "@/components/academics";
import Facilities from "@/components/facilities";
import Gallery from "@/components/gallery";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Academics />
        <Facilities />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
