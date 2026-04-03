"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useLocale } from "@/app/lib/i18n/LocaleProvider";

export default function HeroSection() {
  const { t } = useLocale();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary/2.5 dark:bg-primary/3">
      {/* Dot grid background */}
      <div className="absolute inset-0 hero-grid opacity-40" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8 text-center pt-36 sm:pt-32 pb-28">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <span className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-semibold tracking-wide">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            AAAM
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.12 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-[1.05]"
        >
          {t("hero.title.1")}
          <br />
          <span className="text-text-3">{t("hero.title.2")}</span>
          <span className="text-primary">{t("hero.title.3")}</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.28 }}
          className="text-text-2 text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto mb-14 leading-relaxed"
        >
          {t("hero.subtitle")}
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.42 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-24"
        >
          <Link href="/apply" className="btn-primary px-10 py-4 text-base w-full sm:w-auto">
            {t("hero.cta.join")}
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
          <Link href="/about" className="btn-outline px-10 py-4 text-base w-full sm:w-auto">
            {t("hero.cta.discover")}
          </Link>
        </motion.div>

        {/* Trust line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-8 sm:gap-12"
        >
          <Stat value="54" label="pays" />
          <div className="w-px h-8 bg-border hidden sm:block" />
          <Stat value="500+" label="professionnels" />
          <div className="w-px h-8 bg-border hidden sm:block" />
          <Stat value="50+" label="masterclass" />
        </motion.div>
      </div>

      {/* Scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}>
          <svg className="w-5 h-5 text-text-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-text-1 font-bold text-2xl sm:text-3xl">{value}</span>
      <span className="text-text-3 text-sm sm:text-base font-medium">{label}</span>
    </div>
  );
}
