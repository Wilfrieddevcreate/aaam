import { getSession } from "@/app/lib/auth";
import { redirect } from "next/navigation";
import LoginForm from "./LoginForm";
import T from "@/app/components/T";

export const metadata = {
  title: "Connexion Admin",
  description: "Espace de connexion réservé aux administrateurs de la plateforme AAAM.",
  robots: { index: false, follow: false },
};

export default async function LoginPage() {
  const session = await getSession();
  if (session?.role === "admin") redirect("/admin");

  return (
    <main className="min-h-screen flex items-center justify-center px-5 hero-gradient">
      <div className="w-full max-w-md">
        <div className="text-center mb-10">
          <span className="section-label block mb-4"><T k="login.label" /></span>
          <h1 className="text-3xl sm:text-4xl font-bold text-text-1 mb-3">
            <T k="login.title" /><span className="text-primary">AAAM</span>
          </h1>
          <p className="text-text-2 text-base"><T k="login.desc" /></p>
        </div>
        <LoginForm />
      </div>
    </main>
  );
}
