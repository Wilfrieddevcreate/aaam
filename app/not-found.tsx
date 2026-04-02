"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-5">
      <div className="max-w-md mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="flex justify-center mb-12">
          <Image src="/images/logo-aaam-banner.jpeg" alt="AAAM" width={160} height={46} className="h-12 w-auto rounded-xl" />
        </motion.div>

        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className="text-8xl sm:text-9xl font-bold text-primary/10 leading-none mb-6 select-none">
          404
        </motion.p>

        <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-2xl sm:text-3xl font-bold text-text-1 mb-4">
          Page introuvable
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-text-2 text-lg leading-relaxed mb-10">
          La page que vous cherchez n&apos;existe pas ou a été déplacée.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link href="/" className="btn-primary px-8 py-3">Retour à l&apos;accueil</Link>
          <Link href="/apply" className="btn-outline px-8 py-3">Candidature</Link>
        </motion.div>
      </div>
    </main>
  );
}
