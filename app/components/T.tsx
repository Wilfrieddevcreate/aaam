"use client";

import { useLocale } from "@/app/lib/i18n/LocaleProvider";
import type { TranslationKey } from "@/app/lib/i18n/translations";

/** Inline translated text for use inside server components */
export default function T({ k }: { k: TranslationKey }) {
  const { t } = useLocale();
  return <>{t(k)}</>;
}
