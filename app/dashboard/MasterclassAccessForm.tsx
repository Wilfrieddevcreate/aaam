"use client";

import { useActionState, useEffect, useState } from "react";
import { submitMasterclassRequest } from "@/app/actions/masterclass-requests";
import { showError, showSuccess } from "@/app/components/SweetAlertProvider";
import { useLocale } from "@/app/lib/i18n/LocaleProvider";
import type { TranslationKey } from "@/app/lib/i18n/translations";

const ageKeys: TranslationKey[] = [
  "mcform.age.u18", "mcform.age.18_24", "mcform.age.25_34",
  "mcform.age.35_44", "mcform.age.45_54", "mcform.age.55plus",
];

const genderKeys: TranslationKey[] = ["mcform.gender.male", "mcform.gender.female"];

export default function MasterclassAccessForm({
  eventId,
  onSuccess,
}: {
  eventId: string;
  onSuccess?: () => void;
}) {
  const [state, formAction, isPending] = useActionState(submitMasterclassRequest, null);
  const [isAssociationMember, setIsAssociationMember] = useState(false);
  const [useCv, setUseCv] = useState(false);
  const { t } = useLocale();

  useEffect(() => {
    if (state?.success) {
      showSuccess(t("mcform.success"));
      onSuccess?.();
    } else if (state?.error) {
      showError(state.error);
    }
  }, [state, onSuccess, t]);

  if (state?.success) return null;

  return (
    <form action={formAction} className="space-y-4">
      <input type="hidden" name="eventId" value={eventId} />

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label={`${t("mcform.lastname")} *`} name="lastName" />
        <Field label={`${t("mcform.firstname")} *`} name="firstName" />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label={`${t("common.email")} *`} name="email" type="email" />
        <Field label={`${t("mcform.alias")} *`} name="alias" />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <SelectField label={`${t("mcform.gender")} *`} name="gender" options={genderKeys.map((k) => t(k))} placeholder={t("mcform.select")} />
        <SelectField label={`${t("mcform.age")} *`} name="ageRange" options={ageKeys.map((k) => t(k))} placeholder={t("mcform.select")} />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label={`${t("mcform.phone")} *`} name="phone" type="tel" />
        <Field label={`${t("mcform.nationality")} *`} name="nationality" />
      </div>

      <Field label={`${t("mcform.city")} *`} name="city" />

      <label className="flex items-start gap-3 rounded-xl border border-border p-4 text-sm text-text-2">
        <input
          type="checkbox"
          checked={isAssociationMember}
          onChange={(e) => setIsAssociationMember(e.target.checked)}
          className="mt-1 h-4 w-4 rounded border-border"
        />
        <span>{t("mcform.assoc_check")}</span>
      </label>

      {isAssociationMember && (
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label={`${t("mcform.assoc_name")} *`} name="associationName" />
          <Field label={`${t("mcform.assoc_role")} *`} name="associationRole" />
        </div>
      )}

      <Field label={`${t("mcform.artist")} *`} name="representedArtist" />
      <Field label={`${t("mcform.profession")} *`} name="profession" />
      <TextAreaField label={`${t("mcform.social")} *`} name="socialLinks" rows={3} />
      <Field label={`${t("mcform.years")} *`} name="yearsInIndustry" />

      <label className="flex items-start gap-3 rounded-xl border border-border p-4 text-sm text-text-2">
        <input
          type="checkbox"
          name="useCv"
          checked={useCv}
          onChange={(e) => setUseCv(e.target.checked)}
          className="mt-1 h-4 w-4 rounded border-border"
        />
        <span>{t("mcform.cv_check")}</span>
      </label>

      {useCv ? (
        <div>
          <label htmlFor={`cvFile-${eventId}`} className="mb-2 block text-sm font-medium text-text-1">
            {t("mcform.cv_upload")} *
          </label>
          <input
            id={`cvFile-${eventId}`}
            name="cvFile"
            type="file"
            accept=".pdf,.doc,.docx"
            required
            className="input-field file:mr-4 file:rounded-md file:border-0 file:bg-primary/10 file:px-3 file:py-2 file:text-sm file:font-medium file:text-primary"
          />
          <p className="mt-2 text-xs text-text-3">{t("mcform.cv_help")}</p>
        </div>
      ) : (
        <TextAreaField label={`${t("mcform.bio")} *`} name="bioText" rows={5} />
      )}

      <button type="submit" disabled={isPending} className="btn-primary w-full py-3">
        {isPending ? t("mcform.sending") : t("mcform.submit")}
      </button>
    </form>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm font-medium text-text-1">{label}</label>
      <input id={name} name={name} type={type} required className="input-field" />
    </div>
  );
}

function SelectField({ label, name, options, placeholder }: { label: string; name: string; options: string[]; placeholder: string }) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm font-medium text-text-1">{label}</label>
      <select id={name} name={name} required className="input-field">
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
    </div>
  );
}

function TextAreaField({ label, name, rows }: { label: string; name: string; rows: number }) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm font-medium text-text-1">{label}</label>
      <textarea id={name} name={name} rows={rows} required className="input-field resize-none" />
    </div>
  );
}
