import { prisma } from "@/app/lib/prisma";
import { notFound } from "next/navigation";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import ShareButtons from "./ShareButtons";
import Link from "next/link";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const event = await prisma.event.findUnique({ where: { id }, select: { title: true, description: true } });
  if (!event) return { title: "Masterclass — AAAM" };
  return {
    title: `${event.title} — AAAM`,
    description: event.description.slice(0, 160),
  };
}

export default async function MasterclassDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const event = await prisma.event.findUnique({ where: { id } });
  if (!event) notFound();

  const isPast = new Date(event.date) < new Date();
  const dateFormatted = new Date(event.date).toLocaleDateString("fr-FR", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const timeFormatted = new Date(event.date).toLocaleTimeString("fr-FR", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <>
      <Navbar />
      <main className="flex-1 pt-36 pb-24">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          {/* Header */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-6">
              <span className={`badge ${isPast ? "badge-neutral" : "badge-warning"}`}>
                {isPast ? "Terminé" : "Masterclass"}
              </span>
              <Link href="/dashboard" className="text-text-3 text-sm hover:text-primary transition-colors">
                ← Toutes les masterclass
              </Link>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-1 tracking-tight mb-6 leading-tight">
              {event.title}
            </h1>

            {/* Meta */}
            <div className="flex flex-wrap gap-6 text-base text-text-2 mb-8">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-text-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                </svg>
                <span className="capitalize">{dateFormatted}</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-text-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{timeFormatted}</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-text-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
                <span>{event.speaker}</span>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="card p-8 sm:p-10 mb-10">
            <h2 className="text-lg font-bold text-text-1 mb-5">Description</h2>
            <div className="text-text-2 text-base leading-[1.9] whitespace-pre-wrap">
              {event.description}
            </div>
          </div>

          {/* Share */}
          <div className="card p-6 sm:p-8 mb-10">
            <h2 className="text-lg font-bold text-text-1 mb-4">Partager</h2>
            <ShareButtons title={event.title} />
          </div>

          {/* CTA */}
          {!isPast && (
            <div className="text-center">
              <Link href={`/masterclass/${event.id}/apply`} className="btn-primary px-10 py-4 text-base">
                Demander l&apos;accès à cette masterclass
              </Link>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
