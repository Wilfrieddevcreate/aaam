"use client";

import { logoutAction } from "@/app/actions/auth";
import ThemeToggle from "@/app/components/ThemeToggle";
import Logo from "@/app/components/Logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

interface Props {
  user: { name: string; email: string };
}

const links = [
  { href: "/admin", label: "Candidatures" },
  { href: "/admin/events", label: "Masterclass" },
  { href: "/admin/requests", label: "Demandes" },
];

export default function AdminNav({ user }: Props) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-overlay backdrop-blur-xl border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          {/* Left: logo */}
          <Link href="/admin" className="shrink-0">
            <Logo size="sm" />
          </Link>

          {/* Center: desktop nav links */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                  pathname === l.href
                    ? "bg-primary/10 text-primary"
                    : "text-text-2 hover:text-text-1 hover:bg-bg-surface"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Right: desktop actions */}
          <div className="hidden md:flex items-center gap-2">
            <span className="badge badge-warning text-xs">Admin</span>
            <span className="text-text-3 text-xs hidden lg:block px-2">{user.name}</span>
            <ThemeToggle />
            <form action={logoutAction}>
              <button type="submit" className="btn-ghost text-xs text-text-3 hover:text-error">
                Déconnexion
              </button>
            </form>
          </div>

          {/* Right: mobile actions */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setOpen(!open)}
              className="w-10 h-10 rounded-xl border border-border bg-bg-surface flex items-center justify-center cursor-pointer"
              aria-label="Menu"
            >
              {open ? (
                <svg className="w-5 h-5 text-text-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-text-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden border-t border-border bg-bg-elevated">
          <div className="px-4 py-4 space-y-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                  pathname === l.href
                    ? "bg-primary/10 text-primary"
                    : "text-text-2 hover:text-text-1 hover:bg-bg-surface"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </div>
          <div className="border-t border-border px-4 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-primary text-sm font-bold">{user.name.charAt(0)}</span>
              </div>
              <div>
                <p className="text-text-1 text-sm font-medium">{user.name}</p>
                <p className="text-text-3 text-xs">{user.email}</p>
              </div>
            </div>
            <form action={logoutAction}>
              <button type="submit" className="px-3 py-1.5 rounded-lg text-xs font-medium text-error bg-error/5 hover:bg-error/10 transition-colors cursor-pointer">
                Déconnexion
              </button>
            </form>
          </div>
        </div>
      )}
    </nav>
  );
}
