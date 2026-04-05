import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ApplicationForm from "./ApplicationForm";
import T from "../components/T";

export const metadata = {
  title: "Candidature",
  description:
    "Soumettez votre candidature pour rejoindre l'African Alliance of Artist Managers. Managers d'artistes, promoteurs, directeurs artistiques — devenez un AAAM.",
  openGraph: {
    title: "Candidature — AAAM",
    description: "Rejoignez la communauté des professionnels de l'industrie musicale africaine.",
  },
};

export default function ApplyPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-36 pb-24">
        <div className="max-w-2xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-14">
            <span className="section-label block mb-5">
              <T k="apply.label" />
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-1 mb-6">
              <T k="apply.title" /><span className="text-primary">AAAM</span>
            </h1>
            <p className="text-text-2 text-lg leading-relaxed max-w-lg mx-auto">
              <T k="apply.desc" />
            </p>
          </div>
          <ApplicationForm />
        </div>
      </main>
      <Footer />
    </>
  );
}
