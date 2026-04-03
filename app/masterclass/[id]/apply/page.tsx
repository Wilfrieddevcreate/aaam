import { prisma } from "@/app/lib/prisma";
import { notFound } from "next/navigation";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import MasterclassAccessForm from "@/app/dashboard/MasterclassAccessForm";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const event = await prisma.event.findUnique({ where: { id }, select: { title: true } });
  return { title: event ? `${event.title} — Candidature AAAM` : "Masterclass — AAAM" };
}

export default async function MasterclassApplyPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const event = await prisma.event.findUnique({ where: { id } });

  if (!event) notFound();

  return (
    <>
      <Navbar />
      <main className="flex-1 pt-36 pb-24">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          {/* Event info */}
          <div className="card p-6 sm:p-8 mb-10">
            <div className="flex items-center justify-between mb-4">
              <span className="badge badge-warning">Masterclass</span>
              <span className="text-text-3 text-sm">
                {new Date(event.date).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-text-1 mb-3">{event.title}</h1>
            <p className="text-text-2 text-base leading-relaxed mb-4">{event.description}</p>
            <div className="flex items-center gap-4 text-sm text-text-2">
              <span>Intervenant : <strong className="text-text-1">{event.speaker}</strong></span>
              <span>
                {new Date(event.date).toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" })}
              </span>
            </div>
          </div>

          {/* Form */}
          <div className="mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-text-1 mb-2">Formulaire de candidature</h2>
            <p className="text-text-2 mb-8">
              Remplissez ce formulaire pour demander l&apos;accès à cette masterclass. L&apos;administration examinera votre demande et vous enverra les informations d&apos;accès par email.
            </p>
          </div>

          <div className="card p-6 sm:p-10">
            <MasterclassAccessForm eventId={event.id} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
