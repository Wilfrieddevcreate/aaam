import { prisma } from "@/app/lib/prisma";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MasterclassCard from "./MasterclassCard";

export const metadata = {
  title: "Masterclass — AAAM",
  description: "Accédez aux masterclass et événements de l'AAAM.",
};

export default async function DashboardPage() {
  const events = await prisma.event.findMany({ orderBy: { date: "asc" } });
  const upcoming = events.filter((e) => new Date(e.date) >= new Date());
  const past = events.filter((e) => new Date(e.date) < new Date());

  return (
    <>
      <Navbar />
      <main className="flex-1 pt-36 pb-24">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-16">
            <span className="section-label block mb-5">Espace membre</span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-1 mb-4">
              Nos <span className="text-primary">Masterclass</span>
            </h1>
            <p className="text-text-2 text-lg">Découvrez les formations et événements organisés par l&apos;AAAM.</p>
          </div>

          {upcoming.length > 0 && (
            <div className="mb-16">
              <h2 className="text-xl font-bold text-text-1 mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-success" />
                À venir
              </h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {upcoming.map((event) => <MasterclassCard key={event.id} event={event} />)}
              </div>
            </div>
          )}

          {past.length > 0 && (
            <div>
              <h2 className="text-xl font-bold text-text-3 mb-6">Événements passés</h2>
              <div className="grid sm:grid-cols-2 gap-6 opacity-50">
                {past.map((event) => <MasterclassCard key={event.id} event={event} isPast />)}
              </div>
            </div>
          )}

          {events.length === 0 && (
            <div className="card p-16 text-center text-text-2 text-lg">
              Aucun événement programmé pour le moment. Revenez bientôt !
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
