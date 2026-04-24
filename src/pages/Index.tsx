import { useState, useEffect } from "react";
import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import EventsSection from "@/components/EventsSection";
import { AboutSection, ServicesSection, CasesSection, PartnersSection, ContactSection, Footer } from "@/components/ContentSections";

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [heroLoaded, setHeroLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setHeroLoaded(true), 80);
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div style={{ background: "#000", color: "#fff" }} className="font-ibm overflow-x-hidden">
      <NavBar scrolled={scrolled} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <HeroSection heroLoaded={heroLoaded} />
      <EventsSection />
      <AboutSection />
      <ServicesSection />
      <CasesSection />
      <PartnersSection />
      <ContactSection />
      <Footer />
      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(8px); }
        }
      `}</style>
    </div>
  );
}
