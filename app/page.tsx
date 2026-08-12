import Hero from "@/components/Hero";
import Header from "@/components/Header";
import AboutSection from "@/components/AboutSection";
import PrimaryToWhiteWipe from "@/components/PrimaryToWhiteWipe";
import RoomsSection from "@/components/RoomsSection";
import FeaturesGallery from "@/components/FeaturesGallery";
import MarqueeSection from "@/components/MarqueeSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import MapSection from "@/components/MapSection";
import Footer from "@/components/Footer";
import ScrollAnimations from "@/components/ScrollAnimations";

export default function Home() {
  return (
    <div className="flex min-h-full flex-col bg-white">
      <ScrollAnimations />
      <main className="flex-1">
        <div className="relative">
          <Header />
          <Hero />
        </div>
        <AboutSection />
        <PrimaryToWhiteWipe />
        <RoomsSection />
        <FeaturesGallery />
        <MarqueeSection />
        <ServicesSection />
        <TestimonialsSection />
        <ContactSection />
        <MapSection />
      </main>
      <Footer />
    </div>
  );
}
