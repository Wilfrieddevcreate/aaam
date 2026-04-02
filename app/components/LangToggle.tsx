"use client";

import { useLocale } from "@/app/lib/i18n/LocaleProvider";

export default function LangToggle() {
  const { locale, setLocale } = useLocale();

  return (
    <button
      onClick={() => setLocale(locale === "fr" ? "en" : "fr")}
      aria-label="Toggle language"
      className="relative h-9 px-3 rounded-lg border border-border hover:border-border-hover bg-bg-surface flex items-center justify-center transition-all hover:bg-bg-surface-hover text-xs font-semibold tracking-wide cursor-pointer"
    >
      <span className={locale === "fr" ? "text-primary" : "text-text-3"}>FR</span>
      <span className="text-text-3 mx-1">/</span>
      <span className={locale === "en" ? "text-primary" : "text-text-3"}>EN</span>
    </button>
  );
}
