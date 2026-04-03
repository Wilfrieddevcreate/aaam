"use client";

import { motion } from "framer-motion";
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
    <section className="py-4">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="rounded-3xl bg-bg-surface border border-border p-10 sm:p-14">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl sm:text-6xl font-bold text-primary mb-3 tracking-tight">{s.value}</div>
                <div className="text-text-2 text-base sm:text-lg font-medium">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
