import { Navbar } from "@/components/ui/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Colleges } from "@/components/sections/Colleges";
import { Testimonials } from "@/components/sections/Testimonials";
import { EnquiryForm } from "@/components/sections/EnquiryForm";
import { Contact } from "@/components/sections/Contact";
import { RegionalSuccess } from "@/components/sections/RegionalSuccess";
import { CounterSection } from "@/components/sections/CounterSection";
import { Footer } from "@/components/ui/Footer";
import { useEffect } from "react";

const HomePage = () => {
  useEffect(() => {
    // Refresh AOS animations when the component mounts
    if (typeof window !== "undefined" && window.AOS) {
      window.AOS.refresh();
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <CounterSection />
      <Services />
      <Colleges />
      <RegionalSuccess />
      <Testimonials />
      <EnquiryForm />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;
