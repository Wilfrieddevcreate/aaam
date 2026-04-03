"use client";

import { useActionState, useEffect, useState } from "react";
import { submitMasterclassRequest } from "@/app/actions/masterclass-requests";
import { showError, showSuccess } from "@/app/components/SweetAlertProvider";

const ageRanges = [
  "Moins de 18 ans",
  "18 - 24 ans",
  "25 - 34 ans",
  "35 - 44 ans",
  "45 - 54 ans",
  "55 ans et plus",
];

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

  useEffect(() => {
    if (state?.success) {
      showSuccess("Votre demande a bien ete envoyee. L'administration vous recontactera par email.");
      onSuccess?.();
    } else if (state?.error) {
      showError(state.error);
    }
  }, [state, onSuccess]);

  if (state?.success) {
    return null;
  }

  return (
    <form
      action={formAction}
      encType="multipart/form-data"
      className="space-y-4"
    >
      <input type="hidden" name="eventId" value={eventId} />

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Nom *" name="lastName" />
        <Field label="Prenoms *" name="firstName" />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Email *" name="email" type="email" />
        <Field label="Pseudo ou Alias *" name="alias" />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <SelectField
          label="Genre *"
          name="gender"
          options={["Masculin", "Feminin"]}
        />
        <SelectField label="Tranche d'age *" name="ageRange" options={ageRanges} />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Numero de telephone *" name="phone" type="tel" />
        <Field label="Nationalite *" name="nationality" />
      </div>

      <Field label="Ville de residence *" name="city" />

      <label className="flex items-start gap-3 rounded-xl border border-border p-4 text-sm text-text-2">
        <input
          type="checkbox"
          checked={isAssociationMember}
          onChange={(event) => setIsAssociationMember(event.target.checked)}
          className="mt-1 h-4 w-4 rounded border-border"
        />
        <span>Je suis membre d&apos;une association.</span>
      </label>

      {isAssociationMember && (
        <div className="grid gap-4 sm:grid-cols-2">
          <Field
            label="Nom de l'association *"
            name="associationName"
          />
          <Field
            label="Role au sein de l'association *"
            name="associationRole"
          />
        </div>
      )}

      <Field
        label="Artiste represente dans le passe ou actuellement *"
        name="representedArtist"
      />
      <Field
        label="Quel metier exercez-vous dans l'industrie musicale ? *"
        name="profession"
      />
      <TextAreaField
        label="Lien vers vos profils sur les reseaux sociaux *"
        name="socialLinks"
        rows={3}
      />
      <Field
        label="Depuis combien d'annees evoluez-vous dans l'industrie musicale ? *"
        name="yearsInIndustry"
      />

      <label className="flex items-start gap-3 rounded-xl border border-border p-4 text-sm text-text-2">
        <input
          type="checkbox"
          name="useCv"
          checked={useCv}
          onChange={(event) => setUseCv(event.target.checked)}
          className="mt-1 h-4 w-4 rounded border-border"
        />
        <span>Je souhaite joindre mon CV plutot qu&apos;une biographie professionnelle.</span>
      </label>

      {useCv ? (
        <div>
          <label htmlFor={`cvFile-${eventId}`} className="mb-2 block text-sm font-medium text-text-1">
            Joindre votre CV *
          </label>
          <input
            id={`cvFile-${eventId}`}
            name="cvFile"
            type="file"
            accept=".pdf,.doc,.docx"
            required
            className="input-field file:mr-4 file:rounded-md file:border-0 file:bg-primary/10 file:px-3 file:py-2 file:text-sm file:font-medium file:text-primary"
          />
          <p className="mt-2 text-xs text-text-3">Formats acceptes: PDF, DOC, DOCX. Taille max: 5 Mo.</p>
        </div>
      ) : (
        <TextAreaField
          label="Biographie professionnelle *"
          name="bioText"
          rows={5}
        />
      )}

      <button type="submit" disabled={isPending} className="btn-primary w-full py-3">
        {isPending ? "Envoi en cours..." : "Envoyer ma demande"}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
}: {
  label: string;
  name: string;
  type?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm font-medium text-text-1">
        {label}
      </label>
      <input id={name} name={name} type={type} required className="input-field" />
    </div>
  );
}

function SelectField({
  label,
  name,
  options,
}: {
  label: string;
  name: string;
  options: string[];
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm font-medium text-text-1">
        {label}
      </label>
      <select id={name} name={name} required className="input-field">
        <option value="">Selectionnez</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

function TextAreaField({
  label,
  name,
  rows,
}: {
  label: string;
  name: string;
  rows: number;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm font-medium text-text-1">
        {label}
      </label>
      <textarea id={name} name={name} rows={rows} required className="input-field resize-none" />
    </div>
  );
}
