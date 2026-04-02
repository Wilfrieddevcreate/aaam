"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useLocale } from "@/app/lib/i18n/LocaleProvider";

export default function CTASection() {
  const { t } = useLocale();

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 rounded-full bg-primary/3 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-5 sm:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-1 mb-6 tracking-tight leading-tight"
        >
          {t("cta.title.1")}
          <br />
          <span className="text-primary">{t("cta.title.2")}</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-text-2 text-lg sm:text-xl mb-12 leading-relaxed max-w-xl mx-auto"
        >
          {t("cta.desc")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Link href="/apply" className="btn-primary px-10 py-4 text-base">
            {t("cta.button")}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
