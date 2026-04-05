import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutContent from "./AboutContent";

export const metadata = {
  title: "À propos",
  description:
    "Découvrez l'African Alliance of Artist Managers, fondée par Donald Jean-Marie GNIMADI. Histoire, objectifs, organes de direction et conditions d'adhésion.",
  openGraph: {
    title: "À propos — AAAM",
    description: "L'AAAM réunit les managers d'artistes et professionnels de la musique du continent africain.",
  },
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-28 pb-20">
        <AboutContent />
      </main>
      <Footer />
    </>
  );
}
