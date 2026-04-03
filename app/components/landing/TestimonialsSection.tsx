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
      fr: "L'AAAM m'a permis de rencontrer des professionnels incroyables à travers tout le continent. Les masterclass sont d'un niveau exceptionnel.",
      en: "AAAM allowed me to meet incredible professionals across the continent. The masterclasses are of exceptional quality.",
    },
  },
  {
    name: "Aminata Diallo",
    role: {
      fr: "Directrice artistique — Sénégal",
      en: "Artistic Director — Senegal",
    },
    quote: {
      fr: "Rejoindre l'AAAM a été un tournant dans ma vie professionnelle. Le réseau et le soutien de la communauté sont inestimables.",
      en: "Joining AAAM was a turning point in my professional life. The network and community support are invaluable.",
    },
  },
  {
    name: "Emmanuel Okafor",
    role: { fr: "Producteur — Nigeria", en: "Producer — Nigeria" },
    quote: {
      fr: "Grâce à l'AAAM, j'ai pu développer mon réseau au-delà des frontières de mon pays. La solidarité entre AAAMs est unique.",
      en: "Thanks to AAAM, I grew my network beyond my country's borders. The solidarity between AAAMs is unique.",
    },
  },
  {
    name: "Fatou Camara",
    role: {
      fr: "Chargée de communication — Guinée",
      en: "Communications Manager — Guinea",
    },
    quote: {
      fr: "Les événements de l'AAAM sont toujours enrichissants. J'ai appris des stratégies concrètes que j'applique au quotidien.",
      en: "AAAM events are always enriching. I learned concrete strategies that I apply daily.",
    },
  },
  {
    name: "Jean-Pierre Mukendi",
    role: { fr: "Bookeur — RDC", en: "Booker — DRC" },
    quote: {
      fr: "L'AAAM représente l'avenir de l'industrie musicale africaine. Être AAAM, c'est faire partie d'un mouvement transformateur.",
      en: "AAAM represents the future of the African music industry. Being an AAAM means being part of a transformative movement.",
    },
  },
];

export default function TestimonialsSection() {
  const { locale } = useLocale();
  const fr = locale === "fr";
  const [current, setCurrent] = useState(0);
  const timer = useRef<ReturnType<typeof setInterval>>(null);

  const startTimer = () => {
    if (timer.current) clearInterval(timer.current);
    timer.current = setInterval(
      () => setCurrent((p) => (p + 1) % testimonials.length),
      6000,
    );
  };

  useEffect(() => {
    startTimer();
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, []);

  const goTo = (i: number) => {
    setCurrent(i);
    startTimer();
  };

  return (
    <section className="py-28 sm:py-36 bg-bg-surface">
      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        <AnimatedSection className="text-center mb-16">
          <span className="section-label block mb-5">
            {fr ? "Témoignages" : "Testimonials"}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-1">
            {fr ? "Ce que disent les " : "What "}
            <span className="text-primary">AAAMs</span>
            {!fr && " say"}
          </h2>
        </AnimatedSection>

        <div className="relative min-h-75 sm:min-h-65">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.35 }}
              className="card p-10 sm:p-14 text-center"
            >
              <svg
                className="w-12 h-12 text-primary/15 mx-auto mb-8"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10H0z" />
              </svg>
              <blockquote className="text-text-1 text-xl sm:text-2xl leading-relaxed mb-10 font-medium max-w-2xl mx-auto">
                &ldquo;{testimonials[current].quote[locale]}&rdquo;
              </blockquote>
              <p className="text-text-1 font-bold text-lg">
                {testimonials[current].name}
              </p>
              <p className="text-primary text-sm font-semibold mt-1">
                {testimonials[current].role[locale]}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation dots */}
        <div className="flex justify-center gap-2.5 mt-10">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Testimonial ${i + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${i === current ? "w-10 bg-primary" : "w-2.5 bg-border hover:bg-primary/30"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
