"use client";

import { logoutAction } from "@/app/actions/auth";
import ThemeToggle from "@/app/components/ThemeToggle";
import Logo from "@/app/components/Logo";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  user: { name: string; email: string };
}

export default function AdminNav({ user }: Props) {
  const pathname = usePathname();

  const links = [
    { href: "/admin", label: "Candidatures" },
    { href: "/admin/events", label: "Masterclass" },
    { href: "/admin/requests", label: "Demandes" },
  ];

  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-overlay backdrop-blur-xl border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          <div className="flex items-center gap-5">
            <Link href="/admin">
              <Logo size="sm" />
            </Link>
            <span className="badge badge-warning text-xs">Admin</span>
          </div>

          <div className="flex items-center gap-1 sm:gap-2">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className={`px-3 py-1.5 rounded-xl text-sm font-medium transition-all ${pathname === l.href ? "bg-primary/10 text-primary" : "text-text-2 hover:text-text-1 hover:bg-bg-surface"}`}>
                {l.label}
              </Link>
            ))}
            <div className="w-px h-5 bg-border mx-1 hidden sm:block" />
            <ThemeToggle />
            <span className="text-text-3 text-xs hidden lg:block ml-1">{user.name}</span>
            <form action={logoutAction}>
              <button type="submit" className="btn-ghost text-xs text-text-3 hover:text-error! hover:bg-error/5!">
                Déconnexion
              </button>
            </form>
          </div>
        </div>
      </div>
    </nav>
  );
}
