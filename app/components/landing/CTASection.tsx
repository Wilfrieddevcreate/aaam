"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useLocale } from "@/app/lib/i18n/LocaleProvider";

export default function CTASection() {
  const { t } = useLocale();

  return (
    <section className="py-28 sm:py-36">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl bg-primary px-8 sm:px-16 py-20 sm:py-24 text-center relative overflow-hidden"
        >
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/4" />
          <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-white/5 translate-y-1/3 -translate-x-1/4" />

          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
              {t("cta.title.1")}<br />{t("cta.title.2")}
            </h2>
            <p className="text-white/80 text-lg sm:text-xl mb-12 leading-relaxed max-w-xl mx-auto">
              {t("cta.desc")}
            </p>
            <Link href="/apply" className="inline-flex items-center justify-center gap-2 bg-white text-primary font-semibold px-10 py-4 rounded-xl text-base hover:bg-white/90 transition-all hover:shadow-xl cursor-pointer">
              {t("cta.button")}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
