"use client";

import Image from "next/image";
import Link from "next/link";
import { useLocale } from "@/app/lib/i18n/LocaleProvider";

export default function Footer() {
  const { t } = useLocale();

  return (
    <footer className="border-t border-border bg-bg-surface">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Image src="/images/logo-aaam-banner.jpeg" alt="AAAM" width={140} height={40} className="h-10 w-auto rounded-lg mb-6" />
            <p className="text-text-2 text-base leading-relaxed">{t("footer.desc")}</p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-text-1 uppercase tracking-wider mb-5">{t("footer.nav")}</h4>
            <div className="flex flex-col gap-3">
              <FLink href="/about">{t("nav.about")}</FLink>
              <FLink href="/mission">{t("nav.mission")}</FLink>
              <FLink href="/apply">{t("nav.apply")}</FLink>
              <FLink href="/dashboard">{t("nav.masterclass")}</FLink>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-text-1 uppercase tracking-wider mb-5">{t("footer.platform")}</h4>
            <div className="flex flex-col gap-3">
              <FLink href="/login">{t("footer.admin")}</FLink>
              <FLink href="/apply">{t("footer.join")}</FLink>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-text-1 uppercase tracking-wider mb-5">{t("footer.contact")}</h4>
            <p className="text-text-2 text-base leading-relaxed">
              {t("footer.founder")}<br />
              <span className="text-text-1 font-semibold">Donald Jean-Marie GNIMADI</span><br />
              <span className="text-text-3">Bénin, Afrique</span>
            </p>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-text-3 text-sm">&copy; {new Date().getFullYear()} African Alliance of Artist Managers</p>
          <p className="text-text-3 text-sm">{t("footer.rights")}</p>
        </div>
      </div>
    </footer>
  );
}

function FLink({ href, children }: { href: string; children: React.ReactNode }) {
  return <Link href={href} className="text-text-2 hover:text-primary text-base transition-colors">{children}</Link>;
}
