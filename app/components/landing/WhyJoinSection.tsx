"use client";

import Link from "next/link";
import AnimatedSection from "../AnimatedSection";
import { useLocale } from "@/app/lib/i18n/LocaleProvider";

export default function WhyJoinSection() {
  const { locale } = useLocale();
  const fr = locale === "fr";

  const benefits = fr
    ? [
        { title: "Masterclass exclusives", desc: "Accédez à des formations animées par des experts reconnus de l'industrie musicale africaine et internationale." },
        { title: "Réseau continental", desc: "Connectez-vous avec des managers, promoteurs et professionnels de la musique à travers toute l'Afrique." },
        { title: "Représentation collective", desc: "Vos intérêts sont défendus auprès des institutions, partenaires et acteurs de l'industrie." },
        { title: "Ressources & outils", desc: "Bénéficiez d'outils, de guides et de plateformes d'échange adaptés à votre métier." },
        { title: "Événements & rencontres", desc: "Participez aux Melody Master Summits et aux rencontres professionnelles organisées par l'AAAM." },
        { title: "Visibilité internationale", desc: "Gagnez en visibilité grâce au réseau de partenaires internationaux de l'AAAM." },
      ]
    : [
        { title: "Exclusive masterclasses", desc: "Access training led by recognized experts from the African and international music industry." },
        { title: "Continental network", desc: "Connect with managers, promoters and music professionals across Africa." },
        { title: "Collective representation", desc: "Your interests are defended with institutions, partners and industry stakeholders." },
        { title: "Resources & tools", desc: "Benefit from tools, guides and exchange platforms tailored to your profession." },
        { title: "Events & meetings", desc: "Participate in Melody Master Summits and professional meetings organized by AAAM." },
        { title: "International visibility", desc: "Gain visibility through AAAM's international partner network." },
      ];

  const roles = fr
    ? ["Manager d'artiste", "Directeur artistique", "Bookeur", "Promoteur", "Producteur", "Chargé de communication"]
    : ["Artist Manager", "Artistic Director", "Booker", "Promoter", "Producer", "Communications Manager"];

  return (
    <section className="py-24 sm:py-32 bg-bg-surface">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Benefits */}
          <AnimatedSection>
            <span className="section-label block mb-4">{fr ? "Pourquoi nous rejoindre ?" : "Why join us?"}</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-text-1 tracking-tight mb-10 leading-tight">
              {fr ? "Les avantages d'être un " : "The benefits of being an "}
              <span className="text-primary">AAAMi</span>
            </h2>
            <div className="space-y-5">
              {benefits.map((b, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-success/10 flex items-center justify-center shrink-0 mt-1">
                    <svg className="w-4 h-4 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-text-1 font-semibold text-base mb-1">{b.title}</h3>
                    <p className="text-text-2 text-[15px] leading-relaxed">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Who can join */}
          <AnimatedSection delay={0.1}>
            <span className="section-label block mb-4">{fr ? "Qui peut rejoindre ?" : "Who can join?"}</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-text-1 tracking-tight mb-6 leading-tight">
              {fr ? "Devenez un " : "Become an "}
              <span className="text-primary">AAAMi</span>
            </h2>
            <p className="text-text-2 text-lg leading-[1.85] mb-8">
              {fr
                ? "Les candidats doivent être des gestionnaires d'artistes actifs dans l'industrie musicale africaine avec une expérience professionnelle confirmée."
                : "Applicants must be active artist managers in the African music industry with proven professional experience."}
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              {roles.map((role, i) => (
                <span key={i} className="px-4 py-2.5 rounded-xl border border-border bg-bg-elevated text-text-1 text-sm font-medium hover:border-primary hover:text-primary transition-all">
                  {role}
                </span>
              ))}
            </div>

            <Link href="/apply" className="btn-primary px-8 py-3.5">
              {fr ? "Postuler maintenant" : "Apply now"}
            </Link>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
