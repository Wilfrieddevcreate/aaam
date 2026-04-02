"use client";

import { useActionState, useEffect } from "react";
import { loginAction } from "@/app/actions/auth";
import { showError } from "@/app/components/SweetAlertProvider";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function LoginForm() {
  const [state, formAction, isPending] = useActionState(loginAction, null);

  useEffect(() => {
    if (state?.error) showError(state.error);
  }, [state]);

  return (
    <motion.form action={formAction} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="card p-8 sm:p-10 space-y-6">
      <div className="flex justify-center mb-2">
        <Image src="/images/logo-aaam-banner.jpeg" alt="AAAM" width={160} height={44} className="h-11 w-auto rounded-lg" />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-text-1 mb-2">Email</label>
        <input id="email" name="email" type="email" required className="input-field" placeholder="admin@aaam.org" />
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-medium text-text-1 mb-2">Mot de passe</label>
        <input id="password" name="password" type="password" required className="input-field" placeholder="••••••••" />
      </div>

      {state?.error && <p className="text-error text-sm text-center">{state.error}</p>}

      <button type="submit" disabled={isPending} className="btn-primary w-full py-3.5">
        {isPending ? (
          <span className="flex items-center gap-2 justify-center">
            <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Connexion...
          </span>
        ) : "Se connecter"}
      </button>

      <div className="text-center">
        <Link href="/" className="text-text-2 text-sm hover:text-primary transition-colors">Retour à l&apos;accueil</Link>
      </div>
    </motion.form>
  );
}
