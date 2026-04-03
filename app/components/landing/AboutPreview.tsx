"use client";

import Link from "next/link";
import AnimatedSection from "../AnimatedSection";
import Logo from "../Logo";
import { useLocale } from "@/app/lib/i18n/LocaleProvider";

export default function AboutPreview() {
  const { locale } = useLocale();
  const fr = locale === "fr";

  return (
    <section className="py-28 sm:py-36">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-5 gap-16 lg:gap-20 items-center">
          {/* Left — 3 cols */}
          <AnimatedSection className="lg:col-span-3">
            <span className="section-label block mb-5">{fr ? "À propos" : "About"}</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-1 mb-8 leading-tight">
              {fr ? "Une vision pour" : "A vision for"}<br />
              <span className="text-primary">{fr ? "l'Afrique musicale" : "musical Africa"}</span>
            </h2>
            <p className="text-text-2 text-lg leading-[1.9] mb-6">
              {fr
                ? <>Créée par <strong className="text-text-1">Donald Jean-Marie GNIMADI</strong>, entrepreneur culturel visionnaire originaire du Bénin, l&apos;AAAM réunit des managers d&apos;artistes, des promoteurs et des professionnels de la musique de tout le continent.</>
                : <>Founded by <strong className="text-text-1">Donald Jean-Marie GNIMADI</strong>, a visionary cultural entrepreneur from Benin, AAAM brings together artist managers, promoters and music professionals from across the continent.</>}
            </p>
            <p className="text-text-2 text-lg leading-[1.9] mb-10">
              {fr
                ? "Ensemble, nous œuvrons pour une industrie musicale africaine dynamique, compétitive et tournée vers l'avenir."
                : "Together, we work towards a dynamic, competitive and forward-looking African music industry."}
            </p>
            <Link href="/about" className="btn-outline px-7 py-3">
              {fr ? "En savoir plus" : "Learn more"}
            </Link>
          </AnimatedSection>

          {/* Right — 2 cols — Logo + pillars */}
          <AnimatedSection delay={0.12} className="lg:col-span-2">
            <div className="card p-8 sm:p-10 flex items-center justify-center mb-6">
              <Logo size="lg" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: "M12 21a9.004 9.004 0 008.354-5.646M12 21a9.004 9.004 0 01-8.354-5.646M12 21V3m0 0a9.004 9.004 0 018.354 5.646M12 3a9.004 9.004 0 00-8.354 5.646m16.708 0a9 9 0 01-16.708 0", label: fr ? "Panafricain" : "Pan-African" },
                { icon: "M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342", label: fr ? "Formation" : "Training" },
                { icon: "M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z", label: fr ? "Communauté" : "Community" },
                { icon: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z", label: fr ? "Innovation" : "Innovation" },
              ].map((item, i) => (
                <div key={i} className="card-flat p-5 text-center group hover:!bg-primary/5 transition-all">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-200">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d={item.icon} /></svg>
                  </div>
                  <span className="text-text-1 font-semibold text-sm">{item.label}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
