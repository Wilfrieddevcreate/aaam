import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MissionContent from "./MissionContent";

export const metadata = {
  title: "Notre Mission",
  description:
    "Excellence professionnelle, réseautage, défense des intérêts et professionnalisation — les objectifs de l'African Alliance of Artist Managers.",
  openGraph: {
    title: "Notre Mission — AAAM",
    description: "Ensemble pour une industrie musicale africaine dynamique, compétitive et tournée vers l'avenir.",
  },
};

export default function MissionPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-28 pb-20">
        <MissionContent />
      </main>
      <Footer />
    </>
  );
}
