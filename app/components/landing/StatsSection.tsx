"use client";

import AnimatedSection from "../AnimatedSection";
import { useLocale } from "@/app/lib/i18n/LocaleProvider";

export default function StatsSection() {
  const { locale } = useLocale();
  const fr = locale === "fr";

  const stats = [
    { value: "54", label: fr ? "Pays africains" : "African countries" },
    { value: "500+", label: fr ? "Professionnels" : "Professionals" },
    { value: "50+", label: fr ? "Masterclass" : "Masterclasses" },
    { value: "100%", label: fr ? "Engagement" : "Commitment" },
  ];

  return (
    <section className="py-20 bg-bg-surface">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <AnimatedSection key={i} delay={i * 0.08}>
              <div className="text-center py-6">
                <div className="text-4xl sm:text-5xl font-bold text-primary mb-2">{s.value}</div>
                <div className="text-text-2 text-base font-medium">{s.label}</div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
