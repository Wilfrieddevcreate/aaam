import { prisma } from "@/app/lib/prisma";
import EventForm from "./EventForm";
import EventsList from "./EventsList";

export const metadata = {
  title: "Masterclass — Admin AAAM",
};

export default async function EventsPage() {
  const events = await prisma.event.findMany({
    orderBy: { date: "desc" },
  });

  return (
    <div>
      <div className="mb-10">
        <span className="section-label block mb-3">Gestion</span>
        <h1 className="text-2xl sm:text-3xl font-bold text-text-1 tracking-tight">Masterclass</h1>
        <p className="text-text-2 text-sm mt-2">
          Créez et gérez les masterclass et événements de l&apos;AAAM.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <h2 className="text-sm font-semibold text-text-1 mb-4 tracking-tight">Nouvelle Masterclass</h2>
          <EventForm />
        </div>
        <div className="lg:col-span-2">
          <h2 className="text-sm font-semibold text-text-1 mb-4 tracking-tight">
            Événements <span className="text-text-3 font-normal">({events.length})</span>
          </h2>
          <EventsList events={events} />
        </div>
      </div>
    </div>
  );
}
