"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "../AnimatedSection";
import { useLocale } from "@/app/lib/i18n/LocaleProvider";

const testimonials = [
  {
    name: "Kwame Asante",
    role: { fr: "Manager d'artiste — Ghana", en: "Artist Manager — Ghana" },
    quote: {
      fr: "L'AAAM m'a permis de rencontrer des professionnels incroyables à travers tout le continent. Les masterclass sont d'un niveau exceptionnel et m'ont aidé à structurer ma carrière.",
      en: "AAAM allowed me to meet incredible professionals across the continent. The masterclasses are of exceptional quality and helped me structure my career.",
    },
  },
  {
    name: "Aminata Diallo",
    role: { fr: "Directrice artistique — Sénégal", en: "Artistic Director — Senegal" },
    quote: {
      fr: "Rejoindre l'AAAM a été un tournant dans ma vie professionnelle. Le réseau, les formations et le soutien de la communauté sont inestimables.",
      en: "Joining AAAM was a turning point in my professional life. The network, training and community support are invaluable.",
    },
  },
  {
    name: "Emmanuel Okafor",
    role: { fr: "Producteur — Nigeria", en: "Producer — Nigeria" },
    quote: {
      fr: "Grâce à l'AAAM, j'ai pu développer mon réseau au-delà des frontières de mon pays. La solidarité entre AAAMis est ce qui rend cette alliance unique.",
      en: "Thanks to AAAM, I was able to grow my network beyond my country's borders. The solidarity between AAAMis is what makes this alliance unique.",
    },
  },
  {
    name: "Fatou Camara",
    role: { fr: "Chargée de communication — Guinée", en: "Communications Manager — Guinea" },
    quote: {
      fr: "Les événements organisés par l'AAAM sont toujours enrichissants. J'ai appris des stratégies concrètes que j'applique au quotidien avec mes artistes.",
      en: "Events organized by AAAM are always enriching. I learned concrete strategies that I apply daily with my artists.",
    },
  },
  {
    name: "Jean-Pierre Mukendi",
    role: { fr: "Bookeur — RDC", en: "Booker — DRC" },
    quote: {
      fr: "L'AAAM représente l'avenir de l'industrie musicale africaine. Être AAAMi, c'est faire partie d'un mouvement qui transforme notre secteur.",
      en: "AAAM represents the future of the African music industry. Being an AAAMi means being part of a movement that transforms our sector.",
    },
  },
];

export default function TestimonialsSection() {
  const { locale } = useLocale();
  const fr = locale === "fr";
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval>>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, []);

  const goTo = (index: number) => {
    setCurrent(index);
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
  };

  const t = testimonials[current];

  return (
    <section className="py-24 sm:py-32">
      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        <AnimatedSection className="text-center mb-16">
          <span className="section-label block mb-4">
            {fr ? "Témoignages" : "Testimonials"}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-1 tracking-tight">
            {fr ? "Ce que disent les " : "What "}
            <span className="text-primary">AAAMis</span>
            {!fr && " say"}
          </h2>
        </AnimatedSection>

        {/* Testimonial card */}
        <div className="relative min-h-[280px] sm:min-h-[240px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="card p-8 sm:p-12 text-center"
            >
              {/* Quote icon */}
              <svg className="w-10 h-10 text-primary/20 mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10H0z" />
              </svg>

              <blockquote className="text-text-1 text-lg sm:text-xl leading-relaxed mb-8 max-w-2xl mx-auto">
                {t.quote[locale]}
              </blockquote>

              <div>
                <p className="text-text-1 font-bold text-base">{t.name}</p>
                <p className="text-primary text-sm font-medium mt-1">{t.role[locale]}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Testimonial ${i + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                i === current ? "w-8 bg-primary" : "w-2.5 bg-border hover:bg-border-hover"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
