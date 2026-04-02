import { getSession } from "@/app/lib/auth";
import { redirect } from "next/navigation";
import LoginForm from "./LoginForm";

export const metadata = {
  title: "Connexion Admin — AAAM",
};

export default async function LoginPage() {
  const session = await getSession();
  if (session?.role === "admin") {
    redirect("/admin");
  }

  return (
    <main className="min-h-screen flex items-center justify-center pattern-bg px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <span className="section-label block mb-4">Espace Administrateur</span>
          <h1 className="text-3xl font-bold text-text-1 mb-3 tracking-tight">
            Connexion <span className="text-primary">AAAM</span>
          </h1>
          <p className="text-text-2 text-sm">
            Accès réservé aux administrateurs de la plateforme.
          </p>
        </div>
        <LoginForm />
      </div>
    </main>
  );
}
