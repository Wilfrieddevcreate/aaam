import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HeroSection from "./components/landing/HeroSection";
import AboutPreview from "./components/landing/AboutPreview";
import StatsSection from "./components/landing/StatsSection";
import ObjectivesSection from "./components/landing/ObjectivesSection";
import WhyJoinSection from "./components/landing/WhyJoinSection";
import TestimonialsSection from "./components/landing/TestimonialsSection";
import CTASection from "./components/landing/CTASection";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "African Alliance of Artist Managers",
  alternateName: "AAAM",
  description:
    "Le carrefour essentiel de l'innovation, de la collaboration et de l'excellence au sein de l'industrie musicale africaine.",
  founder: {
    "@type": "Person",
    name: "Donald Jean-Marie GNIMADI",
    nationality: "Beninese",
  },
  foundingLocation: {
    "@type": "Place",
    name: "Bénin, Afrique",
  },
  areaServed: "Africa",
  knowsAbout: [
    "Artist Management",
    "African Music Industry",
    "Music Business",
    "Masterclass",
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
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
