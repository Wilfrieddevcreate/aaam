"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useLocale } from "@/app/lib/i18n/LocaleProvider";

export default function HeroSection() {
  const { t } = useLocale();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Dot grid background */}
      <div className="absolute inset-0 hero-grid opacity-30" />

      {/* Subtle gradient wash */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.04] via-transparent to-tertiary/[0.03] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 w-full pt-28 sm:pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* ── LEFT: Text content ── */}
          <div className="order-2 lg:order-1">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <span className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-semibold tracking-wide">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                AAAM
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[3.5rem] xl:text-7xl font-bold tracking-tight mb-7 leading-[1.08]"
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
              transition={{ duration: 0.5, delay: 0.25 }}
              className="text-text-2 text-base sm:text-lg md:text-xl max-w-xl mb-10 leading-relaxed"
            >
              {t("hero.subtitle")}
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.38 }}
              className="flex flex-col sm:flex-row gap-4 mb-14"
            >
              <Link href="/apply" className="btn-primary px-8 py-4 text-base">
                {t("hero.cta.join")}
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link href="/about" className="btn-outline px-8 py-4 text-base">
                {t("hero.cta.discover")}
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.55 }}
              className="flex flex-wrap items-center gap-8"
            >
              <Stat value="54" label="pays" />
              <div className="w-px h-8 bg-border hidden sm:block" />
              <Stat value="500+" label="professionnels" />
              <div className="w-px h-8 bg-border hidden sm:block" />
              <Stat value="50+" label="masterclass" />
            </motion.div>
          </div>

          {/* ── RIGHT: Music illustration ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[480px] lg:max-w-[540px] aspect-square">
              {/* Glow behind */}
              <div className="absolute inset-0 rounded-full bg-primary/[0.06] blur-3xl scale-75" />

              {/* SVG illustration */}
              <Image
                src="/images/hero-music.svg"
                alt="Music industry illustration"
                width={540}
                height={540}
                className="relative z-10 w-full h-full drop-shadow-2xl"
                priority
              />

              {/* Floating AAAM logo badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-8 right-4 sm:right-8 z-20"
              >
                <div className="card px-4 py-3 flex items-center gap-3 shadow-lg">
                  <Image
                    src="/images/logo-aaam-cropped.jpeg"
                    alt="AAAM"
                    width={36}
                    height={36}
                    className="rounded-lg"
                  />
                  <div>
                    <p className="text-text-1 text-xs font-bold">AAAM</p>
                    <p className="text-text-3 text-[10px]">Est. Bénin</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating stats card */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                className="absolute bottom-12 left-0 sm:left-4 z-20"
              >
                <div className="card px-5 py-3 shadow-lg">
                  <p className="text-tertiary text-lg font-bold">54+</p>
                  <p className="text-text-3 text-[10px] font-medium">Pays représentés</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
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
      <span className="text-text-1 font-bold text-xl sm:text-2xl">{value}</span>
      <span className="text-text-3 text-sm font-medium">{label}</span>
    </div>
  );
}
