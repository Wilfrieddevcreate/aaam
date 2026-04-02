import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ApplicationForm from "./ApplicationForm";

export const metadata = {
  title: "Candidature — AAAM",
  description: "Soumettez votre candidature pour rejoindre l'African Alliance of Artist Managers.",
};

export default function ApplyPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-32 pb-24">
        <div className="max-w-2xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-14">
            <span className="section-label block mb-4">Formulaire d&apos;adhésion</span>
            <h1 className="text-3xl sm:text-4xl font-bold text-text-1 mb-5 tracking-tight">
              Devenez un <span className="text-primary">AAAMi</span>
            </h1>
            <p className="text-text-2 text-lg leading-relaxed max-w-lg mx-auto">
              Remplissez ce formulaire pour soumettre votre demande d&apos;adhésion.
              Le comité examinera votre candidature et vous informera par email.
            </p>
          </div>
          <ApplicationForm />
        </div>
      </main>
      <Footer />
    </>
  );
}
