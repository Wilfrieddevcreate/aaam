"use client";

import { logoutAction } from "@/app/actions/auth";
import ThemeToggle from "@/app/components/ThemeToggle";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  user: { name: string; email: string };
}

export default function AdminNav({ user }: Props) {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-overlay backdrop-blur-xl border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-4">
            <Link href="/admin">
              <Image
                src="/images/logo-aaam-banner.jpeg"
                alt="AAAM"
                width={100}
                height={28}
                className="h-8 w-auto rounded"
              />
            </Link>
            <span className="text-primary text-xs font-semibold tracking-widest uppercase">
              Admin
            </span>
          </div>

          <div className="flex items-center gap-2 sm:gap-4">
            <AdminLink href="/admin" active={pathname === "/admin"}>
              Candidatures
            </AdminLink>
            <AdminLink href="/admin/events" active={pathname === "/admin/events"}>
              Masterclass
            </AdminLink>
            <div className="w-px h-5 bg-border hidden sm:block" />
            <ThemeToggle />
            <span className="text-text-3 text-xs hidden lg:block">{user.name}</span>
            <form action={logoutAction}>
              <button type="submit" className="text-xs text-text-2 hover:text-error px-2 py-1.5 rounded-md hover:bg-error/5 transition-all cursor-pointer font-medium">
                Déconnexion
              </button>
            </form>
          </div>
        </div>
      </div>
    </nav>
  );
}

function AdminLink({ href, active, children }: { href: string; active: boolean; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className={`text-xs font-medium px-3 py-1.5 rounded-md transition-all ${
        active
          ? "bg-primary/10 text-primary"
          : "text-text-2 hover:text-primary hover:bg-primary/5"
      }`}
    >
      {children}
    </Link>
  );
}
