"use client";

import Link from "next/link";
import AnimatedSection from "../AnimatedSection";
import { useLocale } from "@/app/lib/i18n/LocaleProvider";

const icons = [
  "M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z",
  "M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z",
  "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z",
  "M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.58-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z",
];

export default function ObjectivesSection() {
  const { locale } = useLocale();
  const fr = locale === "fr";

  const objectives = [
    {
      title: fr ? "Excellence Professionnelle" : "Professional Excellence",
      desc: fr
        ? "Promouvoir l'excellence dans la gestion artistique en Afrique à travers des formations de haut niveau."
        : "Promoting excellence in artistic management in Africa through high-level training.",
    },
    {
      title: fr ? "Réseautage & Synergies" : "Networking & Synergies",
      desc: fr
        ? "Fournir des opportunités de réseautage et de développement pour les professionnels."
        : "Providing networking and development opportunities for professionals.",
    },
    {
      title: fr ? "Défense des Intérêts" : "Advocacy",
      desc: fr
        ? "Défendre les intérêts communs des AAAMs et représenter la voix de l'industrie."
        : "Defending the common interests of AAAMs and representing the industry's voice.",
    },
    {
      title: fr ? "Professionnalisation" : "Professionalization",
      desc: fr
        ? "Dynamiser l'industrie musicale africaine pour la rendre compétitive et tournée vers l'avenir."
        : "Energizing the African music industry to make it competitive and forward-looking.",
    },
  ];

  return (
    <section className="py-28 sm:py-36 bg-bg-surface">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <AnimatedSection className="text-center mb-16">
          <span className="section-label block mb-5">
            {fr ? "Nos Objectifs" : "Our Goals"}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-1 leading-tight">
            {fr ? "Ensemble, pour une industrie" : "Together, for a dynamic"}
            <br />
            <span className="text-primary">
              {fr ? "musicale africaine dynamique" : "African music industry"}
            </span>
          </h2>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 gap-6 mb-14">
          {objectives.map((obj, i) => (
            <AnimatedSection key={i} delay={i * 0.08}>
              <div className="card card-interactive p-8 sm:p-10 h-full flex flex-col group">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-7 group-hover:bg-primary group-hover:text-white transition-all duration-200">
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
                      d={icons[i]}
                    />
                  </svg>
                </div>
                <h3 className="text-text-1 font-bold text-xl sm:text-2xl mb-4">
                  {obj.title}
                </h3>
                <p className="text-text-2 text-lg leading-relaxed">
                  {obj.desc}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center">
          <Link href="/mission" className="btn-outline px-8 py-3.5">
            {fr ? "Voir notre mission complète" : "See our full mission"}
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
