"use client";

import Image from "next/image";
import { useLocale } from "@/app/lib/i18n/LocaleProvider";
import AnimatedSection from "@/app/components/AnimatedSection";

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
    { title: "Chief Vibe Curator", role: fr ? "Président" : "President", desc: fr ? "Supervise les activités et représente l'AAAM." : "Oversees activities and represents AAAM." },
    { title: "Chief Word Wizard", role: fr ? "Secrétaire Général" : "Secretary General", desc: fr ? "Coordonne les activités administratives et les communications." : "Coordinates administrative activities and communications." },
    { title: "Melody Money Manager", role: fr ? "Trésorier" : "Treasurer", desc: fr ? "Gère les finances et prépare les rapports financiers." : "Manages finances and prepares financial reports." },
  ];

  const rights = fr
    ? ["Accès aux ressources exclusives de l'AAAM", "Participation aux événements de l'association", "Représentation des intérêts collectifs"]
    : ["Access to exclusive AAAM resources", "Participation in association events", "Representation of collective interests"];

  return (
    <div className="max-w-4xl mx-auto px-5 sm:px-8">
      {/* Header */}
      <AnimatedSection className="text-center mb-20">
        <Image src="/images/logo-aaam-banner.jpeg" alt="AAAM" width={200} height={56} className="rounded-xl h-14 sm:h-16 w-auto mx-auto mb-8" />
        <span className="section-label block mb-4">{fr ? "À propos" : "About"}</span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-1 tracking-tight leading-tight">
          African Alliance of<br /><span className="text-primary">Artist Managers</span>
        </h1>
      </AnimatedSection>

      {/* Préambule */}
      <AnimatedSection className="mb-20">
        <h2 className="text-2xl sm:text-3xl font-bold text-text-1 mb-6">{fr ? "Préambule" : "Preamble"}</h2>
        <div className="space-y-5 text-text-2 text-lg leading-[1.85]">
          <p>
            {fr
              ? "African Alliance of Artist Managers (AAAM) s'est positionnée comme le carrefour essentiel de l'innovation, de la collaboration et de l'excellence au sein de l'industrie musicale africaine."
              : "African Alliance of Artist Managers (AAAM) has positioned itself as the essential crossroads of innovation, collaboration and excellence within the African music industry."}
          </p>
          <p>
            {fr
              ? <>Créée par <strong className="text-text-1">Donald Jean-Marie GNIMADI</strong>, entrepreneur culturel visionnaire originaire du Bénin. Réunissant des managers d&apos;artistes, des promoteurs et des professionnels de la musique de tout le continent, l&apos;AAAM a pour mission de renforcer les compétences, de favoriser les synergies et de promouvoir un écosystème durable.</>
              : <>Founded by <strong className="text-text-1">Donald Jean-Marie GNIMADI</strong>, a visionary cultural entrepreneur from Benin. Bringing together artist managers, promoters and music professionals from across the continent, AAAM&apos;s mission is to strengthen skills, foster synergies and promote a sustainable ecosystem.</>}
          </p>
        </div>
      </AnimatedSection>

      {/* Objectifs */}
      <AnimatedSection className="mb-20">
        <h2 className="text-2xl sm:text-3xl font-bold text-text-1 mb-8">{fr ? "Nos objectifs" : "Our objectives"}</h2>
        <div className="space-y-4">
          {objectives.map((obj, i) => (
            <div key={i} className="card p-6 flex items-start gap-5">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <span className="text-primary font-bold text-base">{i + 1}</span>
              </div>
              <p className="text-text-2 text-lg leading-relaxed pt-1.5">{obj}</p>
            </div>
          ))}
        </div>
      </AnimatedSection>

      {/* Organes */}
      <AnimatedSection className="mb-20">
        <h2 className="text-2xl sm:text-3xl font-bold text-text-1 mb-8">{fr ? "Organes de direction" : "Governing bodies"}</h2>
        <div className="grid sm:grid-cols-3 gap-5">
          {organs.map((o, i) => (
            <div key={i} className="card p-7 text-center">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-lg">{i + 1}</span>
              </div>
              <h3 className="text-primary font-bold text-lg mb-1">{o.title}</h3>
              <p className="text-text-3 text-sm uppercase tracking-wider font-medium mb-4">{o.role}</p>
              <p className="text-text-2 text-base leading-relaxed">{o.desc}</p>
            </div>
          ))}
        </div>
      </AnimatedSection>

      {/* Adhésion */}
      <AnimatedSection className="mb-20">
        <h2 className="text-2xl sm:text-3xl font-bold text-text-1 mb-6">{fr ? "Conditions d'adhésion" : "Membership conditions"}</h2>
        <div className="card p-8 text-text-2 text-lg leading-[1.85] space-y-4">
          <p>
            {fr
              ? "Les candidats doivent être des gestionnaires d'artistes actifs dans l'industrie musicale africaine (Managers, Directeurs artistiques, Chargés de communication, Bookeurs, etc.) avec une expérience professionnelle confirmée."
              : "Applicants must be active artist managers in the African music industry (Managers, Artistic Directors, Communications Managers, Bookers, etc.) with proven professional experience."}
          </p>
          <p>
            {fr
              ? "Les membres doivent adhérer aux objectifs et aux valeurs de l'AAAM, démontrant un engagement envers l'excellence professionnelle, la collaboration et le partage des connaissances."
              : "Members must adhere to AAAM's objectives and values, demonstrating a commitment to professional excellence, collaboration and knowledge sharing."}
          </p>
        </div>
      </AnimatedSection>

      {/* Droits */}
      <AnimatedSection>
        <h2 className="text-2xl sm:text-3xl font-bold text-text-1 mb-8">{fr ? "Droits des AAAMis" : "AAAMi Rights"}</h2>
        <div className="card p-8">
          <ul className="space-y-4">
            {rights.map((right, i) => (
              <li key={i} className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-success/10 flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-3.5 h-3.5 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-text-2 text-lg leading-relaxed">{right}</span>
              </li>
            ))}
          </ul>
        </div>
      </AnimatedSection>
    </div>
  );
}
