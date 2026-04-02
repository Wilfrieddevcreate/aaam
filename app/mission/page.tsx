import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MissionContent from "./MissionContent";

export const metadata = {
  title: "Notre Mission — AAAM",
  description: "Découvrez la mission et les objectifs de l'African Alliance of Artist Managers.",
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
