"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import LangToggle from "./LangToggle";
import Logo from "./Logo";
import { useLocale } from "@/app/lib/i18n/LocaleProvider";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { t } = useLocale();

  const links = [
    { href: "/", label: t("nav.home") },
    { href: "/about", label: t("nav.about") },
    { href: "/mission", label: t("nav.mission") },
    { href: "/apply", label: t("nav.apply") },
    { href: "/dashboard", label: t("nav.masterclass") },
  ];

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="fixed top-0 inset-x-0 z-50 bg-overlay backdrop-blur-xl border-b border-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="shrink-0">
            <Logo size="sm" />
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="px-4 py-2 rounded-xl text-[15px] font-medium text-text-2 hover:text-text-1 hover:bg-bg-surface transition-all">
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-1.5">
            <LangToggle />
            <ThemeToggle />
          </div>

          <div className="flex items-center gap-1.5 lg:hidden">
            <LangToggle />
            <ThemeToggle />
            <button onClick={() => setOpen(!open)} className="w-10 h-10 rounded-xl flex items-center justify-center hover:bg-bg-surface transition-colors" aria-label="Menu">
              <svg className="w-5 h-5 text-text-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                {open ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />}
              </svg>
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.nav initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.2 }} className="lg:hidden overflow-hidden">
              <div className="pb-6 pt-2 flex flex-col gap-1 border-t border-border">
                {links.map((l) => (
                  <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="px-4 py-3 rounded-xl text-base font-medium text-text-2 hover:text-text-1 hover:bg-bg-surface transition-all">
                    {l.label}
                  </Link>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
