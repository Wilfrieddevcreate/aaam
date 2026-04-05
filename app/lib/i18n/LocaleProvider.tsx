"use client";

import { createContext, useContext, useCallback, useSyncExternalStore } from "react";
import { type Locale, t as translate, type TranslationKey } from "./translations";

const LOCALE_CHANGE_EVENT = "aaam-locale-change";

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

function getLocaleSnapshot(): Locale {
  if (typeof window === "undefined") return "fr";
  const stored = localStorage.getItem("aaam-locale") as Locale | null;
  return stored === "en" || stored === "fr" ? stored : "fr";
}

function getServerSnapshot(): Locale {
  return "fr";
}

function subscribe(callback: () => void) {
  if (typeof window === "undefined") return () => {};

  const handleChange = () => callback();

  const handleStorage = (e: StorageEvent) => {
    if (e.key === "aaam-locale") callback();
  };

  window.addEventListener(LOCALE_CHANGE_EVENT, handleChange);
  window.addEventListener("storage", handleStorage);

  return () => {
    window.removeEventListener(LOCALE_CHANGE_EVENT, handleChange);
    window.removeEventListener("storage", handleStorage);
  };
}

export default function LocaleProvider({ children }: { children: React.ReactNode }) {
  const locale = useSyncExternalStore(subscribe, getLocaleSnapshot, getServerSnapshot);

  const setLocale = useCallback((l: Locale) => {
    localStorage.setItem("aaam-locale", l);
    window.dispatchEvent(new Event(LOCALE_CHANGE_EVENT));
  }, []);

  const tFn = useCallback(
    (key: TranslationKey) => translate(key, locale),
    [locale]
  );

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t: tFn }}>
      {children}
    </LocaleContext.Provider>
  );
}
