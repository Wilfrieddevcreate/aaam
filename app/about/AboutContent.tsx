"use client";

import { useLocale } from "@/app/lib/i18n/LocaleProvider";
import AnimatedSection from "@/app/components/AnimatedSection";
import Logo from "@/app/components/Logo";

export default function AboutContent() {
  const { locale } = useLocale();
  const fr = locale === "fr";

  const objectives = fr
    ? [
        "Promouvoir l'excellence professionnelle dans la gestion artistique en Afrique",
        "Fournir des opportunités de réseautage, de formation et de développement",
        "Défendre les intérêts communs des membres de l'AAAM",
        "Dynamiser et professionnaliser l'industrie musicale africaine",
      ]
    : [
        "Promote professional excellence in artistic management in Africa",
        "Provide networking, training and development opportunities",
        "Defend the common interests of AAAM members",
        "Energize and professionalize the African music industry",
      ];

  const organs = [
    {
      title: "Chief Vibe Curator",
      role: fr ? "Président" : "President",
      desc: fr
        ? "Supervise les activités et représente l'AAAM."
        : "Oversees activities and represents AAAM.",
    },
    {
      title: "Chief Word Wizard",
      role: fr ? "Secrétaire Général" : "Secretary General",
      desc: fr
        ? "Coordonne les activités administratives."
        : "Coordinates administrative activities.",
    },
    {
      title: "Melody Money Manager",
      role: fr ? "Trésorier" : "Treasurer",
      desc: fr
        ? "Gère les finances de l'association."
        : "Manages the association's finances.",
    },
  ];

  const rights = fr
    ? [
        "Accès aux ressources exclusives de l'AAAM",
        "Participation aux événements de l'association",
        "Représentation des intérêts collectifs",
      ]
    : [
        "Access to exclusive AAAM resources",
        "Participation in association events",
        "Representation of collective interests",
      ];

  return (
    <div className="max-w-4xl mx-auto px-5 sm:px-8">
      <AnimatedSection className="text-center mb-24">
        <div className="flex justify-center mb-10">
          <Logo size="lg" />
        </div>
        <span className="section-label block mb-5">
          {fr ? "À propos" : "About"}
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-text-1 leading-tight">
          African Alliance of
          <br />
          <span className="text-primary">Artist Managers</span>
        </h1>
      </AnimatedSection>

      <AnimatedSection className="mb-24">
        <h2 className="text-2xl sm:text-3xl font-bold text-text-1 mb-8">
          {fr ? "Préambule" : "Preamble"}
        </h2>
        <div className="space-y-6 text-text-2 text-lg leading-[1.9]">
          <p>
            {fr
              ? "African Alliance of Artist Managers (AAAM) s'est positionnée comme le carrefour essentiel de l'innovation, de la collaboration et de l'excellence au sein de l'industrie musicale africaine."
              : "African Alliance of Artist Managers (AAAM) has positioned itself as the essential crossroads of innovation, collaboration and excellence within the African music industry."}
          </p>
          <p>
            {fr ? (
              <>
                Créée par{" "}
                <strong className="text-text-1">
                  Donald Jean-Marie GNIMADI
                </strong>
                , entrepreneur culturel visionnaire originaire du Bénin,
                l&apos;AAAM a pour mission de renforcer les compétences, de
                favoriser les synergies et de promouvoir un écosystème durable
                pour les artistes et leurs équipes.
              </>
            ) : (
              <>
                Founded by{" "}
                <strong className="text-text-1">
                  Donald Jean-Marie GNIMADI
                </strong>
                , a visionary cultural entrepreneur from Benin, AAAM&apos;s
                mission is to strengthen skills, foster synergies and promote a
                sustainable ecosystem for artists and their teams.
              </>
            )}
          </p>
        </div>
      </AnimatedSection>

      <AnimatedSection className="mb-24">
        <h2 className="text-2xl sm:text-3xl font-bold text-text-1 mb-8">
          {fr ? "Nos objectifs" : "Our objectives"}
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {objectives.map((obj, i) => (
            <div key={i} className="card p-6 flex items-start gap-5">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <span className="text-primary font-bold text-base">
                  {i + 1}
                </span>
              </div>
              <p className="text-text-2 text-base leading-relaxed pt-2">
                {obj}
              </p>
            </div>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="mb-24">
        <h2 className="text-2xl sm:text-3xl font-bold text-text-1 mb-8">
          {fr ? "Organes de direction" : "Governing bodies"}
        </h2>
        <div className="grid sm:grid-cols-3 gap-5">
          {organs.map((o, i) => (
            <div key={i} className="card p-8 text-center">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                <span className="text-primary font-bold text-xl">{i + 1}</span>
              </div>
              <h3 className="text-primary font-bold text-lg mb-1">{o.title}</h3>
              <p className="badge badge-neutral mx-auto mb-4">{o.role}</p>
              <p className="text-text-2 text-base leading-relaxed">{o.desc}</p>
            </div>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="mb-24">
        <h2 className="text-2xl sm:text-3xl font-bold text-text-1 mb-8">
          {fr ? "Conditions d'adhésion" : "Membership conditions"}
        </h2>
        <div className="card p-8 sm:p-10 text-text-2 text-lg leading-[1.9] space-y-5">
          <p>
            {fr
              ? "Les candidats doivent être des gestionnaires d'artistes actifs dans l'industrie musicale africaine avec une expérience professionnelle confirmée."
              : "Applicants must be active artist managers in the African music industry with proven professional experience."}
          </p>
          <p>
            {fr
              ? "Les membres doivent adhérer aux objectifs et aux valeurs de l'AAAM, démontrant un engagement envers l'excellence professionnelle et la collaboration."
              : "Members must adhere to AAAM's objectives and values, demonstrating a commitment to professional excellence and collaboration."}
          </p>
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <h2 className="text-2xl sm:text-3xl font-bold text-text-1 mb-8">
          {fr ? "Droits des AAAMs" : "AAAM Rights"}
        </h2>
        <div className="card p-8 sm:p-10">
          <ul className="space-y-5">
            {rights.map((right, i) => (
              <li key={i} className="flex items-start gap-4">
                <div className="w-7 h-7 rounded-full bg-success/10 flex items-center justify-center shrink-0 mt-0.5">
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
                <span className="text-text-2 text-lg leading-relaxed">
                  {right}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </AnimatedSection>
    </div>
  );
}
