"use client";

import { useActionState, useEffect } from "react";
import { submitApplication } from "@/app/actions/applications";
import { showSuccess, showError } from "@/app/components/SweetAlertProvider";
import { motion } from "framer-motion";
import { useLocale } from "@/app/lib/i18n/LocaleProvider";
import type { TranslationKey } from "@/app/lib/i18n/translations";

const roleKeys: TranslationKey[] = [
  "role.manager", "role.director", "role.communication", "role.booker",
  "role.promoter", "role.producer", "role.sound", "role.other",
];

const countryKeys: TranslationKey[] = [
  "country.benin", "country.burkina", "country.cameroon", "country.ivory",
  "country.gabon", "country.ghana", "country.guinea", "country.kenya",
  "country.mali", "country.morocco", "country.nigeria", "country.drc",
  "country.senegal", "country.south_africa", "country.tanzania",
  "country.togo", "country.tunisia", "country.uganda", "country.other",
];

export default function ApplicationForm() {
  const [state, formAction, isPending] = useActionState(submitApplication, null);
  const { t } = useLocale();

  useEffect(() => {
    if (state?.success) {
      showSuccess(t("apply.success.title"));
    } else if (state?.error) {
      showError(state.error);
    }
  }, [state, t]);

  if (state?.success) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="card p-10 text-center"
      >
        <div className="w-16 h-16 rounded-full bg-success/10 border border-success/20 flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-text-1 mb-3">{t("apply.success.title")}</h2>
        <p className="text-text-2 leading-relaxed">{t("apply.success.desc")}</p>
      </motion.div>
    );
  }

  return (
    <motion.form
      action={formAction}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="card p-8 sm:p-10 space-y-7"
    >
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-text-1 mb-2">{t("apply.name")} *</label>
        <input id="name" name="name" type="text" required className="input-field" placeholder={t("apply.name")} />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-text-1 mb-2">{t("apply.email")} *</label>
        <input id="email" name="email" type="email" required className="input-field" placeholder="votre@email.com" />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-text-1 mb-2">{t("apply.phone")} *</label>
        <input id="phone" name="phone" type="tel" required className="input-field" placeholder="+229 XX XX XX XX" />
      </div>

      <div>
        <label htmlFor="country" className="block text-sm font-medium text-text-1 mb-2">{t("apply.country")} *</label>
        <select id="country" name="country" required className="input-field">
          <option value="">{t("apply.country.placeholder")}</option>
          {countryKeys.map((k) => (
            <option key={k} value={t(k)}>{t(k)}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="role" className="block text-sm font-medium text-text-1 mb-2">{t("apply.role")} *</label>
        <select id="role" name="role" required className="input-field">
          <option value="">{t("apply.role.placeholder")}</option>
          {roleKeys.map((k) => (
            <option key={k} value={t(k)}>{t(k)}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="experience" className="block text-sm font-medium text-text-1 mb-2">{t("apply.experience")} *</label>
        <textarea id="experience" name="experience" required rows={3} className="input-field resize-none" placeholder={t("apply.experience.placeholder")} />
      </div>

      <div>
        <label htmlFor="motivation" className="block text-sm font-medium text-text-1 mb-2">{t("apply.motivation")} *</label>
        <textarea id="motivation" name="motivation" required rows={3} className="input-field resize-none" placeholder={t("apply.motivation.placeholder")} />
      </div>

      <button type="submit" disabled={isPending} className="btn-primary w-full py-4">
        {isPending ? (
          <span className="flex items-center gap-2">
            <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            {t("apply.sending")}
          </span>
        ) : (
          t("apply.submit")
        )}
      </button>
    </motion.form>
  );
}
