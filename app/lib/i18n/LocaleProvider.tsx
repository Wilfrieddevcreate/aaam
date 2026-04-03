"use client";

import { createContext, useContext, useState } from "react";
import { type Locale, t as translate, type TranslationKey } from "./translations";

const LocaleContext = createContext<{
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: (key: TranslationKey) => string;
}>({
  locale: "fr",
  setLocale: () => {},
  t: (key) => key,
});

export function useLocale() {
  return useContext(LocaleContext);
}

export default function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => {
    if (typeof window === "undefined") {
      return "fr";
    }

    const stored = localStorage.getItem("aaam-locale") as Locale | null;
    return stored === "en" || stored === "fr" ? stored : "fr";
  });

  const setLocale = (l: Locale) => {
    setLocaleState(l);
    localStorage.setItem("aaam-locale", l);
  };

  const tFn = (key: TranslationKey) => translate(key, locale);

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t: tFn }}>
      {children}
    </LocaleContext.Provider>
  );
}
