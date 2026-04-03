"use client";

import { useActionState, useEffect } from "react";
import { submitApplication } from "@/app/actions/applications";
import { showSuccess, showError } from "@/app/components/SweetAlertProvider";
import { motion } from "framer-motion";

const musicRoles = [
  "Manager d'artiste",
  "Directeur artistique",
  "Chargé de communication",
  "Bookeur",
  "Promoteur",
  "Producteur",
  "Ingénieur du son",
  "Autre",
];

const countries = [
  "Bénin", "Burkina Faso", "Cameroun", "Côte d'Ivoire", "Gabon", "Ghana",
  "Guinée", "Kenya", "Mali", "Maroc", "Nigeria", "République Démocratique du Congo",
  "Sénégal", "Afrique du Sud", "Tanzanie", "Togo", "Tunisie", "Ouganda", "Autre",
];

export default function ApplicationForm() {
  const [state, formAction, isPending] = useActionState(submitApplication, null);

  useEffect(() => {
    if (state?.success) {
      showSuccess("Candidature envoyée avec succès !");
    } else if (state?.error) {
      showError(state.error);
    }
  }, [state]);

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
        <h2 className="text-2xl font-bold text-text-1 mb-3">
          Candidature envoyée !
        </h2>
        <p className="text-text-2 leading-relaxed">
          Merci pour votre intérêt. Le comité d&apos;adhésion de l&apos;AAAM
          examinera votre candidature et vous contactera par email.
        </p>
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
      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-text-1 mb-2">
          Nom complet *
        </label>
        <input id="name" name="name" type="text" required className="input-field" placeholder="Votre nom complet" />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-text-1 mb-2">
          Email *
        </label>
        <input id="email" name="email" type="email" required className="input-field" placeholder="votre@email.com" />
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-text-1 mb-2">
          Téléphone *
        </label>
        <input id="phone" name="phone" type="tel" required className="input-field" placeholder="+229 XX XX XX XX" />
      </div>

      {/* Country */}
      <div>
        <label htmlFor="country" className="block text-sm font-medium text-text-1 mb-2">
          Pays *
        </label>
        <select id="country" name="country" required className="input-field">
          <option value="">Sélectionnez votre pays</option>
          {countries.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
      </div>

      {/* Role */}
      <div>
        <label htmlFor="role" className="block text-sm font-medium text-text-1 mb-2">
          Métier / Rôle dans l&apos;industrie *
        </label>
        <select id="role" name="role" required className="input-field">
          <option value="">Sélectionnez votre rôle</option>
          {musicRoles.map((r) => (
            <option key={r} value={r}>{r}</option>
          ))}
        </select>
      </div>

      {/* Experience */}
      <div>
        <label htmlFor="experience" className="block text-sm font-medium text-text-1 mb-2">
          Expérience professionnelle *
        </label>
        <textarea
          id="experience"
          name="experience"
          required
          rows={3}
          className="input-field resize-none"
          placeholder="Décrivez votre parcours et votre expérience dans l'industrie musicale..."
        />
      </div>

      {/* Motivation */}
      <div>
        <label htmlFor="motivation" className="block text-sm font-medium text-text-1 mb-2">
          Motivation *
        </label>
        <textarea
          id="motivation"
          name="motivation"
          required
          rows={3}
          className="input-field resize-none"
          placeholder="Pourquoi souhaitez-vous rejoindre l'AAAM ?"
        />
      </div>

      {/* Submit */}
      <button type="submit" disabled={isPending} className="btn-primary w-full py-4">
        {isPending ? (
          <span className="flex items-center gap-2">
            <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Envoi en cours...
          </span>
        ) : (
          "Soumettre ma candidature"
        )}
      </button>
    </motion.form>
  );
}
