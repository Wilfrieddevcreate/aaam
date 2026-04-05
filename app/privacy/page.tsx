import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import T from "../components/T";

export const metadata = {
  title: "Politique de confidentialité",
  description: "Politique de confidentialité de l'African Alliance of Artist Managers (AAAM).",
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-36 pb-24">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <span className="section-label block mb-5"><T k="privacy.label" /></span>
          <h1 className="text-3xl sm:text-4xl font-bold text-text-1 mb-10 tracking-tight">
            <T k="privacy.title" />
          </h1>

          <div className="prose-custom space-y-8">
            <Section titleKey="privacy.s1.title" contentKey="privacy.s1.content" />
            <Section titleKey="privacy.s2.title" contentKey="privacy.s2.content" />
            <Section titleKey="privacy.s3.title" contentKey="privacy.s3.content" />
            <Section titleKey="privacy.s4.title" contentKey="privacy.s4.content" />
            <Section titleKey="privacy.s5.title" contentKey="privacy.s5.content" />
            <Section titleKey="privacy.s6.title" contentKey="privacy.s6.content" />
            <Section titleKey="privacy.s7.title" contentKey="privacy.s7.content" />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

function Section({ titleKey, contentKey }: { titleKey: string; contentKey: string }) {
  return (
    <div className="card p-6 sm:p-8">
      <h2 className="text-lg font-bold text-text-1 mb-4">
        <T k={titleKey as never} />
      </h2>
      <div className="text-text-2 text-base leading-[1.8] whitespace-pre-line">
        <T k={contentKey as never} />
      </div>
    </div>
  );
}
