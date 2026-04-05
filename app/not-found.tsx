"use client";

import Link from "next/link";
import Logo from "./components/Logo";
import { motion } from "framer-motion";
import { useLocale } from "@/app/lib/i18n/LocaleProvider";

export default function NotFound() {
  const { t } = useLocale();

  return (
    <main className="min-h-screen flex items-center justify-center px-5">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-md mx-auto text-center">
        <div className="flex justify-center mb-14">
          <Logo size="md" />
        </div>
        <p className="text-9xl font-bold text-primary/8 leading-none mb-8 select-none">404</p>
        <h1 className="text-3xl font-bold text-text-1 mb-4">{t("notfound.title")}</h1>
        <p className="text-text-2 text-lg leading-relaxed mb-12">{t("notfound.desc")}</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link href="/" className="btn-primary px-8 py-3.5 w-full sm:w-auto">{t("notfound.home")}</Link>
          <Link href="/apply" className="btn-outline px-8 py-3.5 w-full sm:w-auto">{t("notfound.apply")}</Link>
        </div>
      </motion.div>
    </main>
  );
}
