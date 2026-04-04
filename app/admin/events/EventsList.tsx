"use client";

import { deleteEvent } from "@/app/actions/events";
import { showSuccess, showError, showConfirm } from "@/app/components/SweetAlertProvider";
import TruncatedText from "@/app/components/TruncatedText";
import { motion } from "framer-motion";

interface Event {
  id: string;
  title: string;
  description: string;
  date: Date;
  speaker: string;
  link: string;
  createdAt: Date;
}

export default function EventsList({ events }: { events: Event[] }) {
  async function handleDelete(id: string) {
    if (!(await showConfirm("Supprimer cette masterclass ?", "Cette action est irréversible."))) return;
    const result = await deleteEvent(id);
    if (result.success) showSuccess("Masterclass supprimée !");
    else showError(result.error || "Erreur");
  }

  if (events.length === 0) {
    return (
      <div className="card p-14 text-center">
        <p className="text-text-3 text-lg">Aucune masterclass créée pour le moment.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {events.map((event, i) => {
        const isPast = new Date(event.date) < new Date();
        return (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.04 }}
            className={`card overflow-hidden ${isPast ? "opacity-50" : ""}`}
          >
            {/* Header */}
            <div className="px-5 py-4 sm:px-6 border-b border-border flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3 min-w-0 flex-wrap">
                <h3 className="text-text-1 font-bold text-base truncate">{event.title}</h3>
                <span className={`badge ${isPast ? "badge-neutral" : "badge-success"}`}>
                  {isPast ? "Passé" : "À venir"}
                </span>
              </div>
              <div className="flex gap-2 shrink-0">
                <a
                  href={event.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-primary/10 text-primary text-xs font-semibold hover:bg-primary/20 transition-colors"
                >
                  Ouvrir le lien
                </a>
                <button
                  onClick={() => handleDelete(event.id)}
                  className="px-3 py-1.5 rounded-lg bg-bg-surface text-text-3 text-xs font-medium hover:text-error hover:bg-error/5 transition-colors cursor-pointer"
                >
                  Supprimer
                </button>
              </div>
            </div>

            {/* Body */}
            <div className="px-5 py-4 sm:px-6 space-y-3">
              <TruncatedText text={event.description} maxLength={180} className="text-sm text-text-2 leading-relaxed" />

              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center gap-2 text-text-3">
                  <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                  <span className="text-text-1 font-medium">{event.speaker}</span>
                </div>
                <div className="flex items-center gap-2 text-text-3">
                  <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                  </svg>
                  <span className="text-text-1 font-medium">
                    {new Date(event.date).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric", hour: "2-digit", minute: "2-digit" })}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
