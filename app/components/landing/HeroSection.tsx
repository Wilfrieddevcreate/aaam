"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useLocale } from "@/app/lib/i18n/LocaleProvider";

export default function HeroSection() {
  const { t } = useLocale();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pattern-bg">
      {/* Subtle background shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-20%] right-[-10%] w-150 h-150 rounded-full bg-primary/3 blur-3xl" />
        <div className="absolute bottom-[-15%] left-[-5%] w-125 h-125 rounded-full bg-tertiary/2 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8 text-center pt-32 pb-24">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-12"
        >
          <Image
            src="/images/logo-aaam-banner.jpeg"
            alt="AAAM"
            width={440}
            height={124}
            className="rounded-2xl shadow-lg h-24 sm:h-32 md:h-36 w-auto"
            priority
          />
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-8"
        >
          {t("hero.title.1")}
          <br />
          <span className="text-text-2">{t("hero.title.2")}</span>
          <span className="text-primary">{t("hero.title.3")}</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-text-2 text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          {t("hero.subtitle")}
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link href="/apply" className="btn-primary px-10 py-4 text-base w-full sm:w-auto">
            {t("hero.cta.join")}
          </Link>
          <Link href="/about" className="btn-outline px-10 py-4 text-base w-full sm:w-auto">
            {t("hero.cta.discover")}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
