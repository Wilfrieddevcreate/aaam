"use client";

import { useLocale } from "@/app/lib/i18n/LocaleProvider";

export default function LangToggle() {
  const { locale, setLocale } = useLocale();

  return (
    <button
      onClick={() => setLocale(locale === "fr" ? "en" : "fr")}
      aria-label="Toggle language"
      className="h-10 px-3.5 rounded-xl border border-border bg-bg-surface flex items-center justify-center transition-all hover:bg-bg-surface-hover hover:border-border-hover text-sm font-semibold cursor-pointer gap-1"
    >
      <span className={locale === "fr" ? "text-primary" : "text-text-3"}>FR</span>
      <span className="text-text-3">/</span>
      <span className={locale === "en" ? "text-primary" : "text-text-3"}>EN</span>
    </button>
  );
}
