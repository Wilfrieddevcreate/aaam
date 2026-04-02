import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HeroSection from "./components/landing/HeroSection";
import AboutPreview from "./components/landing/AboutPreview";
import StatsSection from "./components/landing/StatsSection";
import ObjectivesSection from "./components/landing/ObjectivesSection";
import WhyJoinSection from "./components/landing/WhyJoinSection";
import TestimonialsSection from "./components/landing/TestimonialsSection";
import CTASection from "./components/landing/CTASection";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <AboutPreview />
        <StatsSection />
        <ObjectivesSection />
        <WhyJoinSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
