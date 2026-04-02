"use client";

import { useActionState, useEffect, useRef } from "react";
import { createEvent } from "@/app/actions/events";
import { showSuccess, showError } from "@/app/components/SweetAlertProvider";

export default function EventForm() {
  const [state, formAction, isPending] = useActionState(createEvent, null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state?.success) {
      showSuccess("Masterclass créée avec succès !");
      formRef.current?.reset();
    } else if (state?.error) {
      showError(state.error);
    }
  }, [state]);

  return (
    <form ref={formRef} action={formAction} className="card p-6 space-y-4">
      <div>
        <label htmlFor="title" className="block text-sm font-medium text-text-1 mb-2">
          Titre *
        </label>
        <input id="title" name="title" required className="input-field" placeholder="Ex: Masterclass Management" />
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-medium text-text-1 mb-2">
          Description *
        </label>
        <textarea
          id="description"
          name="description"
          required
          rows={3}
          className="input-field resize-none"
          placeholder="Description de l'événement..."
        />
      </div>

      <div>
        <label htmlFor="date" className="block text-sm font-medium text-text-1 mb-2">
          Date *
        </label>
        <input id="date" name="date" type="datetime-local" required className="input-field" />
      </div>

      <div>
        <label htmlFor="speaker" className="block text-sm font-medium text-text-1 mb-2">
          Intervenant *
        </label>
        <input id="speaker" name="speaker" required className="input-field" placeholder="Nom de l'intervenant" />
      </div>

      <div>
        <label htmlFor="link" className="block text-sm font-medium text-text-1 mb-2">
          Lien (Meet / Discord) *
        </label>
        <input id="link" name="link" required className="input-field" placeholder="https://meet.google.com/..." />
      </div>

      <button type="submit" disabled={isPending} className="btn-primary w-full py-3">
        {isPending ? "Création..." : "Créer la Masterclass"}
      </button>
    </form>
  );
}
