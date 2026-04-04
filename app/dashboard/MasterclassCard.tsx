"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface Event {
  id: string;
  title: string;
  description: string;
  date: Date;
  speaker: string;
  link: string;
}

export default function MasterclassCard({ event, isPast }: { event: Event; isPast?: boolean }) {
  const shortDesc = event.description.length > 120
    ? event.description.slice(0, 120).trimEnd() + "…"
    : event.description;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="card card-interactive p-7 flex flex-col"
    >
      <div className="flex items-center justify-between mb-4">
        <span className={`badge ${isPast ? "badge-neutral" : "badge-warning"}`}>
          {isPast ? "Terminé" : "Masterclass"}
        </span>
        <span className="text-text-3 text-sm">
          {new Date(event.date).toLocaleDateString("fr-FR", { day: "numeric", month: "short", year: "numeric" })}
        </span>
      </div>

      <h3 className="text-text-1 font-bold text-xl mb-3">{event.title}</h3>
      <p className="text-text-2 text-base leading-relaxed mb-4 flex-1">{shortDesc}</p>

      <Link href={`/masterclass/${event.id}`} className="text-primary text-sm font-semibold hover:underline mb-4">
        Voir les détails →
      </Link>

      <div className="flex items-center justify-between pt-5 border-t border-border">
        <span className="text-text-2 text-sm">
          Par <strong className="text-text-1">{event.speaker}</strong>
        </span>
        <span className="text-text-3 text-sm">
          {new Date(event.date).toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" })}
        </span>
      </div>

      {!isPast && (
        <Link href={`/masterclass/${event.id}/apply`} className="btn-primary w-full mt-6 py-3">
          Demander l&apos;accès
        </Link>
      )}
    </motion.div>
  );
}
