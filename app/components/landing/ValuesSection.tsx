"use client";

import AnimatedSection from "../AnimatedSection";

const roles = [
  "Manager d'artiste",
  "Directeur artistique",
  "Chargé de communication",
  "Bookeur",
  "Promoteur",
  "Producteur",
];

const memberRights = [
  "Accès aux ressources exclusives de l'AAAM",
  "Participation aux événements et masterclass",
  "Représentation de vos intérêts collectifs",
  "Réseau de professionnels à travers l'Afrique",
];

export default function ValuesSection() {
  return (
    <section className="py-28 sm:py-36 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20">
          {/* Who can join */}
          <AnimatedSection>
            <span className="section-label block mb-5">
              Qui peut rejoindre ?
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-text-1 mb-7 tracking-tight">
              Devenez un <span className="text-primary">AAAM</span>
            </h2>
            <p className="text-text-2 mb-8 leading-[1.8] text-base">
              Les candidats à l&apos;adhésion doivent être des gestionnaires
              d&apos;artistes actifs dans l&apos;industrie musicale africaine
              avec une expérience professionnelle confirmée.
            </p>
            <div className="flex flex-wrap gap-2.5">
              {roles.map((role, i) => (
                <span
                  key={i}
                  className="px-4 py-2.5 rounded-lg border border-primary/12 bg-primary/5 text-primary text-sm font-medium hover:bg-primary hover:text-white hover:border-primary transition-all duration-200 cursor-default"
                >
                  {role}
                </span>
              ))}
            </div>
          </AnimatedSection>

          {/* Rights */}
          <AnimatedSection delay={0.12}>
            <span className="section-label block mb-5">Droits des AAAMs</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-text-1 mb-7 tracking-tight">
              Vos <span className="text-primary">avantages</span>
            </h2>
            <div className="space-y-4">
              {memberRights.map((right, i) => (
                <div key={i} className="flex items-start gap-4 card p-5">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <svg
                      className="w-4 h-4 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-text-2 text-[15px] leading-relaxed pt-1.5">
                    {right}
                  </span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
