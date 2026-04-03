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
    if (!(await showConfirm("Supprimer cette masterclass ?", "Cette action est irréversible."))) return;
    const result = await deleteEvent(id);
    if (result.success) showSuccess("Masterclass supprimée !");
    else showError(result.error || "Erreur");
  }

  if (events.length === 0) {
    return <div className="card p-14 text-center text-text-3 text-lg">Aucune masterclass créée pour le moment.</div>;
  }

  return (
    <div className="space-y-4">
      {events.map((event, i) => {
        const isPast = new Date(event.date) < new Date();
        return (
          <motion.div key={event.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.04 }} className={`card p-6 sm:p-7 ${isPast ? "opacity-50" : ""}`}>
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="text-text-1 font-bold text-lg">{event.title}</h3>
                  <span className={`badge ${isPast ? "badge-neutral" : "badge-success"}`}>
                    {isPast ? "Passé" : "À venir"}
                  </span>
                </div>
                <p className="text-text-2 mb-3">{event.description}</p>
                <div className="flex flex-wrap gap-4 text-sm text-text-2">
                  <span>Intervenant: <strong className="text-text-1">{event.speaker}</strong></span>
                  <span>Date: <strong className="text-text-1">
                    {new Date(event.date).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric", hour: "2-digit", minute: "2-digit" })}
                  </strong></span>
                </div>
              </div>
              <div className="flex gap-2 shrink-0">
                <a href={event.link} target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-xl bg-primary/10 text-primary text-sm font-medium hover:bg-primary/20 transition-colors">
                  Ouvrir le lien
                </a>
                <button onClick={() => handleDelete(event.id)} className="px-4 py-2 rounded-xl bg-bg-surface text-text-3 text-sm font-medium hover:text-error hover:bg-error/5 transition-colors cursor-pointer">
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
