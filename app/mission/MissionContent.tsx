"use client";

import { useLocale } from "@/app/lib/i18n/LocaleProvider";
import AnimatedSection from "@/app/components/AnimatedSection";
import Logo from "@/app/components/Logo";

const iconPaths = [
  "M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z",
  "M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z",
  "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z",
  "M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.58-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z",
];

export default function MissionContent() {
  const { locale } = useLocale();
  const fr = locale === "fr";

  const objectives = [
    {
      title: fr ? "Excellence Professionnelle" : "Professional Excellence",
      desc: fr
        ? "Promouvoir l'excellence dans la gestion artistique en Afrique à travers des formations et masterclass de haut niveau."
        : "Promoting excellence in artistic management in Africa through high-level training and masterclasses.",
    },
    {
      title: fr ? "Réseautage & Synergies" : "Networking & Synergies",
      desc: fr
        ? "Fournir des opportunités de réseautage et de développement pour les professionnels de l'industrie musicale africaine."
        : "Providing networking and development opportunities for African music industry professionals.",
    },
    {
      title: fr ? "Défense des Intérêts" : "Advocacy",
      desc: fr
        ? "Défendre les intérêts communs des AAAMs et représenter la voix de l'industrie musicale africaine."
        : "Defending the common interests of AAAMs and representing the voice of the African music industry.",
    },
    {
      title: fr ? "Professionnalisation" : "Professionalization",
      desc: fr
        ? "Dynamiser l'industrie musicale africaine pour la rendre compétitive et tournée vers l'avenir."
        : "Energizing the African music industry to make it competitive and forward-looking.",
    },
  ];

  const values = fr
    ? [
        "Intégrité et transparence",
        "Collaboration et partage",
        "Professionnalisme et éthique",
        "Respect mutuel et inclusivité",
        "Innovation et vision d'avenir",
      ]
    : [
        "Integrity and transparency",
        "Collaboration and sharing",
        "Professionalism and ethics",
        "Mutual respect and inclusivity",
        "Innovation and forward thinking",
      ];

  const partners = fr
    ? [
        "Associations professionnelles",
        "Labels",
        "Agences de booking",
        "Festivals",
        "Institutions académiques",
      ]
    : [
        "Professional associations",
        "Labels",
        "Booking agencies",
        "Festivals",
        "Academic institutions",
      ];

  return (
    <div className="max-w-5xl mx-auto px-5 sm:px-8">
      {/* Header */}
      <AnimatedSection className="text-center mb-20">
        <div className="flex justify-center mb-8">
          <Logo size="lg" />
        </div>
        <span className="section-label block mb-4">
          {fr ? "Notre Mission" : "Our Mission"}
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-1 tracking-tight leading-tight mb-6">
          {fr ? "Ensemble, pour une industrie" : "Together, for a dynamic"}
          <br />
          <span className="text-primary">
            {fr ? "musicale africaine dynamique" : "African music industry"}
          </span>
        </h1>
        <p className="text-text-2 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
          {fr
            ? "L'AAAM œuvre pour renforcer les compétences, favoriser les synergies et promouvoir un écosystème durable pour les artistes et leurs équipes."
            : "AAAM works to strengthen skills, foster synergies and promote a sustainable ecosystem for artists and their teams."}
        </p>
      </AnimatedSection>

      {/* Objectives */}
      <div className="grid sm:grid-cols-2 gap-6 mb-20">
        {objectives.map((obj, i) => (
          <AnimatedSection key={i} delay={i * 0.08}>
            <div className="card card-interactive p-8 h-full flex flex-col group">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-200">
                <svg
                  className="w-7 h-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d={iconPaths[i]}
                  />
                </svg>
              </div>
              <h2 className="text-text-1 font-bold text-xl mb-3">
                {obj.title}
              </h2>
              <p className="text-text-2 text-base leading-relaxed flex-1">
                {obj.desc}
              </p>
            </div>
          </AnimatedSection>
        ))}
      </div>

      {/* Vision */}
      <AnimatedSection className="mb-20">
        <div className="card p-10 sm:p-14 text-center bg-bg-surface border-primary/10">
          <span className="section-label block mb-5">
            {fr ? "Notre Vision" : "Our Vision"}
          </span>
          <blockquote className="text-xl sm:text-2xl font-medium text-text-1 leading-relaxed max-w-3xl mx-auto italic">
            {fr
              ? "« Le succès artistique repose sur des bases solides de management et de stratégie. L'AAAM s'engage à fournir à ses membres les outils adaptés aux défis d'un secteur en pleine mutation. »"
              : '"Artistic success is built on solid management and strategy foundations. AAAM is committed to providing its members with tools tailored to the challenges of a rapidly evolving sector."'}
          </blockquote>
          <p className="text-primary font-semibold mt-8 text-base">
            — Donald Jean-Marie GNIMADI
          </p>
        </div>
      </AnimatedSection>

      {/* Values */}
      <AnimatedSection className="mb-20">
        <h2 className="text-2xl sm:text-3xl font-bold text-text-1 text-center mb-10">
          {fr ? "Nos Valeurs" : "Our Values"}
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {values.map((v, i) => (
            <div key={i} className="card p-5 flex items-center gap-4">
              <div className="w-8 h-8 rounded-full bg-success/10 flex items-center justify-center shrink-0">
                <svg
                  className="w-4 h-4 text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={3}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <span className="text-text-1 text-base font-medium">{v}</span>
            </div>
          ))}
        </div>
      </AnimatedSection>

      {/* Ecosystem */}
      <AnimatedSection>
        <h2 className="text-2xl sm:text-3xl font-bold text-text-1 text-center mb-6">
          {fr ? "Notre écosystème" : "Our ecosystem"}
        </h2>
        <p className="text-text-2 text-lg text-center max-w-2xl mx-auto mb-8 leading-relaxed">
          {fr
            ? "L'AAAM collabore avec des partenaires clés de l'industrie musicale pour renforcer l'écosystème musical africain."
            : "AAAM collaborates with key music industry partners to strengthen the African music ecosystem."}
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {partners.map((p, i) => (
            <span
              key={i}
              className="px-5 py-3 rounded-xl border border-border bg-bg-elevated text-text-1 text-base font-medium"
            >
              {p}
            </span>
          ))}
        </div>
      </AnimatedSection>
    </div>
  );
}
