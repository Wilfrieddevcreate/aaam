"use client";

import { motion } from "framer-motion";

interface Event {
  id: string;
  title: string;
  description: string;
  date: Date;
  speaker: string;
  link: string;
}

export default function MasterclassCard({ event, isPast }: { event: Event; isPast?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      className="card p-6 flex flex-col"
    >
      <div className="flex items-center justify-between mb-3">
        <span className="text-primary text-xs font-semibold tracking-wider uppercase">
          Masterclass
        </span>
        <span className="text-text-2 text-xs">
          {new Date(event.date).toLocaleDateString("fr-FR", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })}
        </span>
      </div>

      <h3 className="text-text-1 font-bold text-lg mb-2">{event.title}</h3>
      <p className="text-text-2 text-sm mb-4 flex-1 leading-relaxed">{event.description}</p>

      <div className="flex items-center justify-between mt-auto pt-4 border-t border-border">
        <span className="text-text-2 text-xs">
          Par <strong className="text-text-1">{event.speaker}</strong>
        </span>
        <span className="text-text-2 text-xs">
          {new Date(event.date).toLocaleTimeString("fr-FR", {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </span>
      </div>

      {!isPast && (
        <a
          href={event.link}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary w-full mt-4 py-2.5 text-xs"
        >
          Rejoindre la session
        </a>
      )}
    </motion.div>
  );
}
