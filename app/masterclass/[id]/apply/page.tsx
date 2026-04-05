import { prisma } from "@/app/lib/prisma";
import { notFound } from "next/navigation";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import MasterclassAccessForm from "@/app/dashboard/MasterclassAccessForm";
import T from "@/app/components/T";

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
          <div className="card p-6 sm:p-8 mb-10">
            <div className="flex items-center justify-between mb-4">
              <span className="badge badge-warning"><T k="mc.label" /></span>
              <span className="text-text-3 text-sm">
                {new Date(event.date).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-text-1 mb-3">{event.title}</h1>
            <p className="text-text-2 text-base leading-relaxed mb-4">{event.description}</p>
            <div className="flex items-center gap-4 text-sm text-text-2">
              <span><T k="mc.speaker" /> <strong className="text-text-1">{event.speaker}</strong></span>
              <span>
                {new Date(event.date).toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" })}
              </span>
            </div>
          </div>

          <div className="mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-text-1 mb-2"><T k="mc.apply_title" /></h2>
            <p className="text-text-2 mb-8"><T k="mc.apply_desc" /></p>
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
