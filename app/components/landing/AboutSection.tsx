"use client";

import AnimatedSection from "../AnimatedSection";

export default function AboutSection() {
  return (
    <section id="about" className="py-28 sm:py-36 relative">
      <div className="gradient-line" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-28">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <AnimatedSection>
            <span className="section-label block mb-5">À propos</span>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-text-1 mb-7 leading-tight tracking-tight">
              Une vision pour
              <br />
              <span className="text-primary">l&apos;Afrique musicale</span>
            </h2>
            <div className="space-y-5">
              <p className="text-text-2 leading-[1.8] text-base">
                Créée par <strong className="text-text-1 font-semibold">Donald Jean-Marie GNIMADI</strong>,
                entrepreneur culturel visionnaire originaire du Bénin, l&apos;AAAM réunit
                des managers d&apos;artistes, des promoteurs et des professionnels de la
                musique de tout le continent.
              </p>
              <p className="text-text-2 leading-[1.8] text-base">
                Convaincue que le succès artistique repose sur des bases solides de
                management et de stratégie, l&apos;AAAM s&apos;engage à fournir à ses
                membres des outils, des formations et des plateformes d&apos;échange
                adaptés aux défis et aux opportunités d&apos;un secteur en pleine
                mutation.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <div className="grid grid-cols-2 gap-5">
              {[
                { number: "54", label: "Pays africains", accent: false },
                { number: "∞", label: "Opportunités", accent: true },
                { number: "100%", label: "Engagement", accent: true },
                { number: "1", label: "Vision commune", accent: false },
              ].map((stat, i) => (
                <div key={i} className="card p-7 text-center group">
                  <div className={`text-3xl sm:text-4xl font-bold mb-3 transition-colors duration-300 ${
                    stat.accent ? "text-tertiary group-hover:text-primary" : "text-primary group-hover:text-tertiary"
                  }`}>
                    {stat.number}
                  </div>
                  <div className="text-text-3 text-xs tracking-[0.15em] uppercase font-semibold">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
