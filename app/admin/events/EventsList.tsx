"use client";

import { deleteEvent } from "@/app/actions/events";
import { showSuccess, showError, showConfirm } from "@/app/components/SweetAlertProvider";
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
    const confirmed = await showConfirm(
      "Supprimer cette masterclass ?",
      "Cette action est irréversible."
    );
    if (!confirmed) return;

    const result = await deleteEvent(id);
    if (result.success) {
      showSuccess("Masterclass supprimée !");
    } else {
      showError(result.error || "Erreur");
    }
  }

  if (events.length === 0) {
    return (
      <div className="card p-10 text-center text-text-2">
        Aucune masterclass créée pour le moment.
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
            transition={{ delay: i * 0.05 }}
            className={`card p-6 ${isPast ? "opacity-60" : ""}`}
          >
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-text-1 font-semibold">{event.title}</h3>
                  {isPast ? (
                    <span className="px-2 py-0.5 rounded text-[10px] uppercase tracking-wider border bg-text-3/10 text-text-3 border-text-3/20">
                      Passé
                    </span>
                  ) : (
                    <span className="px-2 py-0.5 rounded text-[10px] uppercase tracking-wider border bg-success/10 text-success border-success/20">
                      À venir
                    </span>
                  )}
                </div>
                <p className="text-text-2 text-sm mb-2">{event.description}</p>
                <div className="flex flex-wrap gap-4 text-xs text-text-2">
                  <span>Intervenant: <strong className="text-text-1">{event.speaker}</strong></span>
                  <span>Date: <strong className="text-text-1">
                    {new Date(event.date).toLocaleDateString("fr-FR", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </strong></span>
                </div>
              </div>
              <div className="flex gap-2 shrink-0">
                <a
                  href={event.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 bg-primary/10 border border-primary/20 text-primary rounded text-xs hover:bg-primary/20 transition-colors"
                >
                  Ouvrir le lien
                </a>
                <button
                  onClick={() => handleDelete(event.id)}
                  className="px-3 py-1.5 border border-border text-text-2 rounded text-xs hover:border-error hover:text-error transition-colors"
                >
                  Supprimer
                </button>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
