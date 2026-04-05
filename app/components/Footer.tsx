"use client";

import Link from "next/link";
import Logo from "./Logo";
import { useLocale } from "@/app/lib/i18n/LocaleProvider";

export default function Footer() {
  const { t } = useLocale();

  return (
    <footer className="border-t border-border">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-20 sm:py-24">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          <div className="col-span-2 lg:col-span-1">
            <Logo size="sm" className="mb-6" />
            <p className="text-text-2 text-base leading-relaxed max-w-xs">{t("footer.desc")}</p>
          </div>
          <div>
            <h4 className="text-sm font-bold text-text-1 uppercase tracking-wider mb-6">{t("footer.nav")}</h4>
            <div className="flex flex-col gap-3.5">
              <FLink href="/about">{t("nav.about")}</FLink>
              <FLink href="/mission">{t("nav.mission")}</FLink>
              <FLink href="/apply">{t("nav.apply")}</FLink>
              <FLink href="/dashboard">{t("nav.masterclass")}</FLink>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-bold text-text-1 uppercase tracking-wider mb-6">{t("footer.platform")}</h4>
            <div className="flex flex-col gap-3.5">
              <FLink href="/login">{t("footer.admin")}</FLink>
              <FLink href="/apply">{t("footer.join")}</FLink>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-bold text-text-1 uppercase tracking-wider mb-6">{t("footer.contact")}</h4>
            <p className="text-text-2 text-base leading-relaxed">
              {t("footer.founder")}<br />
              <span className="text-text-1 font-semibold">Donald Jean-Marie GNIMADI</span><br />
              <span className="text-text-3">Bénin, Afrique</span>
            </p>
          </div>
        </div>
        <div className="border-t border-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-text-3 text-sm">&copy; {new Date().getFullYear()} African Alliance of Artist Managers</p>
          <div className="flex items-center gap-4">
            <FLink href="/privacy">{t("footer.privacy")}</FLink>
            <FLink href="/terms">{t("footer.terms")}</FLink>
            <span className="text-text-3 text-sm">{t("footer.rights")}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FLink({ href, children }: { href: string; children: React.ReactNode }) {
  return <Link href={href} className="text-text-2 hover:text-primary text-base transition-colors">{children}</Link>;
}
