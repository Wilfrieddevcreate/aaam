"use client";

import { useActionState, useEffect, useRef } from "react";
import { createEvent } from "@/app/actions/events";
import { showSuccess, showError } from "@/app/components/SweetAlertProvider";

export default function EventForm() {
  const [state, formAction, isPending] = useActionState(createEvent, null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state?.success) { showSuccess("Masterclass créée !"); formRef.current?.reset(); }
    else if (state?.error) showError(state.error);
  }, [state]);

  return (
    <form ref={formRef} action={formAction} className="card p-7 space-y-5">
      <Field label="Titre" id="title" placeholder="Ex: Masterclass Management" />
      <div>
        <label htmlFor="description" className="block text-sm font-medium text-text-1 mb-2">Description</label>
        <textarea id="description" name="description" required rows={3} className="input-field resize-none" placeholder="Description de l'événement..." />
      </div>
      <Field label="Date" id="date" type="datetime-local" />
      <Field label="Intervenant" id="speaker" placeholder="Nom de l'intervenant" />
      <Field label="Lien (Meet / Discord)" id="link" placeholder="https://meet.google.com/..." />
      <button type="submit" disabled={isPending} className="btn-primary w-full py-3.5">
        {isPending ? "Création..." : "Créer la Masterclass"}
      </button>
    </form>
  );
}

function Field({ label, id, type = "text", placeholder }: { label: string; id: string; type?: string; placeholder?: string }) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-text-1 mb-2">{label}</label>
      <input id={id} name={id} type={type} required className="input-field" placeholder={placeholder} />
    </div>
  );
}
