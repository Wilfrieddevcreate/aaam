import { prisma } from "@/app/lib/prisma";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MasterclassCard from "./MasterclassCard";

export const metadata = {
  title: "Masterclass — AAAM",
  description: "Accédez aux masterclass et événements de l'AAAM.",
};

export default async function DashboardPage() {
  const events = await prisma.event.findMany({
    orderBy: { date: "asc" },
  });

  const upcoming = events.filter((e) => new Date(e.date) >= new Date());
  const past = events.filter((e) => new Date(e.date) < new Date());

  return (
    <>
      <Navbar />
      <main className="flex-1 pt-24 pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-primary text-xs font-semibold tracking-[0.3em] uppercase block mb-4">
              Espace membre
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold text-text-1 mb-4">
              Nos <span className="text-primary">Masterclass</span>
            </h1>
            <p className="text-text-2">
              Découvrez les formations et événements organisés par l&apos;AAAM.
            </p>
          </div>

          {/* Upcoming */}
          {upcoming.length > 0 && (
            <div className="mb-12">
              <h2 className="text-lg font-semibold text-text-1 mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
                À venir
              </h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {upcoming.map((event) => (
                  <MasterclassCard key={event.id} event={event} />
                ))}
              </div>
            </div>
          )}

          {/* Past */}
          {past.length > 0 && (
            <div>
              <h2 className="text-lg font-semibold text-text-2 mb-6">
                Événements passés
              </h2>
              <div className="grid sm:grid-cols-2 gap-6 opacity-60">
                {past.map((event) => (
                  <MasterclassCard key={event.id} event={event} isPast />
                ))}
              </div>
            </div>
          )}

          {events.length === 0 && (
            <div className="card p-12 text-center text-text-2">
              Aucun événement programmé pour le moment. Revenez bientôt !
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
