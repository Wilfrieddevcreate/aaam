"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useLocale } from "@/app/lib/i18n/LocaleProvider";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const { t } = useLocale();

  useEffect(() => {
    const consent = localStorage.getItem("aaam-cookie-consent");
    if (!consent) setVisible(true);
  }, []);

  function accept() {
    localStorage.setItem("aaam-cookie-consent", "accepted");
    setVisible(false);
  }

  function reject() {
    localStorage.setItem("aaam-cookie-consent", "rejected");
    setVisible(false);
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="fixed bottom-0 inset-x-0 z-[9998] p-4 sm:p-6"
        >
          <div className="max-w-3xl mx-auto rounded-2xl border border-border bg-bg-elevated shadow-xl backdrop-blur-xl p-5 sm:p-6">
            <div className="flex flex-col sm:flex-row gap-5 items-start sm:items-center">
              {/* Icon + Text */}
              <div className="flex gap-4 flex-1 min-w-0">
                <div className="shrink-0 w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mt-0.5">
                  <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                  </svg>
                </div>
                <div>
                  <p className="text-text-1 font-semibold text-sm mb-1">{t("cookie.title")}</p>
                  <p className="text-text-2 text-sm leading-relaxed">{t("cookie.desc")}</p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2 shrink-0 w-full sm:w-auto">
                <Link
                  href="/privacy"
                  className="text-primary text-xs font-medium hover:underline hidden sm:block mr-2"
                >
                  {t("cookie.privacy")}
                </Link>
                <button
                  onClick={reject}
                  className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl border border-border text-text-2 text-sm font-medium hover:bg-bg-surface hover:text-text-1 transition-all cursor-pointer"
                >
                  {t("cookie.reject")}
                </button>
                <button
                  onClick={accept}
                  className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl bg-primary text-white text-sm font-semibold hover:brightness-110 transition-all cursor-pointer"
                >
                  {t("cookie.accept")}
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
