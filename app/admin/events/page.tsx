import { prisma } from "@/app/lib/prisma";
import EventForm from "./EventForm";
import EventsList from "./EventsList";

export const metadata = { title: "Masterclass — Admin AAAM" };

export default async function EventsPage() {
  const events = await prisma.event.findMany({ orderBy: { date: "desc" } });

  return (
    <div>
      <div className="mb-10">
        <h1 className="text-2xl sm:text-3xl font-bold text-text-1">Masterclass</h1>
        <p className="text-text-2 mt-2">Créez et gérez les masterclass et événements de l&apos;AAAM.</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div>
          <h2 className="text-lg font-bold text-text-1 mb-5">Nouvelle Masterclass</h2>
          <EventForm />
        </div>
        <div className="lg:col-span-2">
          <h2 className="text-lg font-bold text-text-1 mb-5">
            Événements <span className="text-text-3 font-normal">({events.length})</span>
          </h2>
          <EventsList events={events} />
        </div>
      </div>
    </div>
  );
}
