import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutContent from "./AboutContent";

export const metadata = {
  title: "À propos — AAAM",
  description: "Découvrez l'African Alliance of Artist Managers, sa mission et son fondateur.",
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
