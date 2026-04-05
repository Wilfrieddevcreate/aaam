"use client";

import Link from "next/link";
import AnimatedSection from "../AnimatedSection";
import { useLocale } from "@/app/lib/i18n/LocaleProvider";

export default function WhyJoinSection() {
  const { locale } = useLocale();
  const fr = locale === "fr";

  const benefits = fr
    ? [
        {
          title: "Masterclass exclusives",
          desc: "Accédez à des formations animées par des experts reconnus de l'industrie musicale.",
        },
        {
          title: "Réseau continental",
          desc: "Connectez-vous avec des professionnels de la musique à travers toute l'Afrique.",
        },
        {
          title: "Représentation collective",
          desc: "Vos intérêts sont défendus auprès des institutions et acteurs de l'industrie.",
        },
        {
          title: "Ressources & outils",
          desc: "Bénéficiez d'outils et de plateformes d'échange adaptés à votre métier.",
        },
        {
          title: "Événements & rencontres",
          desc: "Participez aux Melody Master Summits et rencontres professionnelles.",
        },
        {
          title: "Visibilité internationale",
          desc: "Gagnez en visibilité grâce au réseau de partenaires internationaux.",
        },
      ]
    : [
        {
          title: "Exclusive masterclasses",
          desc: "Access training led by recognized music industry experts.",
        },
        {
          title: "Continental network",
          desc: "Connect with music professionals across Africa.",
        },
        {
          title: "Collective representation",
          desc: "Your interests are defended with institutions and stakeholders.",
        },
        {
          title: "Resources & tools",
          desc: "Benefit from tools and exchange platforms tailored to your profession.",
        },
        {
          title: "Events & meetings",
          desc: "Participate in Melody Master Summits and professional meetings.",
        },
        {
          title: "International visibility",
          desc: "Gain visibility through AAAM's international partner network.",
        },
      ];

  const roles = fr
    ? [
        "Manager d'artiste",
        "Directeur artistique",
        "Bookeur",
        "Promoteur",
        "Producteur",
        "Chargé de comm.",
      ]
    : [
        "Artist Manager",
        "Artistic Director",
        "Booker",
        "Promoter",
        "Producer",
        "Comms Manager",
      ];

  return (
    <section className="py-28 sm:py-36">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Top row — benefits */}
        <AnimatedSection className="text-center mb-16">
          <span className="section-label block mb-5">
            {fr ? "Pourquoi nous rejoindre ?" : "Why join us?"}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-1 leading-tight">
            {fr ? "Les avantages d'être un " : "The benefits of being an "}
            <span className="text-primary">AAAM</span>
          </h2>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-28">
          {benefits.map((b, i) => (
            <AnimatedSection key={i} delay={i * 0.06}>
              <div className="card-flat p-7 h-full">
                <div className="w-10 h-10 rounded-xl bg-success/10 flex items-center justify-center mb-5">
                  <svg
                    className="w-5 h-5 text-success"
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
                <h3 className="text-text-1 font-bold text-lg mb-2">
                  {b.title}
                </h3>
                <p className="text-text-2 text-base leading-relaxed">
                  {b.desc}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Bottom row — who can join */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection>
            <span className="section-label block mb-5">
              {fr ? "Qui peut rejoindre ?" : "Who can join?"}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-text-1 mb-6 leading-tight">
              {fr ? "Devenez un membre de " : "Become an member of "}
              <span className="text-primary">AAAM</span>
            </h2>
            <p className="text-text-2 text-lg leading-[1.85] mb-8">
              {fr
                ? "Les candidats doivent être des gestionnaires d'artistes actifs dans l'industrie musicale africaine avec une expérience professionnelle confirmée."
                : "Applicants must be active artist managers in the African music industry with proven professional experience."}
            </p>
            <Link href="/apply" className="btn-primary px-8 py-3.5">
              {fr ? "Postuler maintenant" : "Apply now"}
            </Link>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="flex flex-wrap gap-3">
              {roles.map((role, i) => (
                <span
                  key={i}
                  className="px-5 py-3 rounded-2xl border border-border bg-bg-elevated text-text-1 text-base font-medium hover:border-primary hover:text-primary transition-all cursor-default"
                >
                  {role}
                </span>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
