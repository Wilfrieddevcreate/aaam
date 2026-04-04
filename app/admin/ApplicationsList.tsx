"use client";

import { updateApplicationStatus, deleteApplication } from "@/app/actions/applications";
import { showSuccess, showError, showConfirm } from "@/app/components/SweetAlertProvider";
import TruncatedText from "@/app/components/TruncatedText";
import { motion } from "framer-motion";
import { useState } from "react";

interface Application {
  id: string;
  name: string;
  email: string;
  phone: string;
  country: string;
  role: string;
  experience: string;
  motivation: string;
  status: string;
  createdAt: Date;
}

function StatusBadge({ status }: { status: string }) {
  const map: Record<string, { cls: string; label: string }> = {
    pending: { cls: "badge-warning", label: "En attente" },
    accepted: { cls: "badge-success", label: "Acceptée" },
    rejected: { cls: "badge-error", label: "Refusée" },
  };
  const s = map[status] || { cls: "badge-neutral", label: status };
  return <span className={`badge ${s.cls}`}>{s.label}</span>;
}

export default function ApplicationsList({ applications }: { applications: Application[] }) {
  const [filter, setFilter] = useState("all");

  const filtered = filter === "all" ? applications : applications.filter((a) => a.status === filter);

  async function handleStatus(id: string, status: "accepted" | "rejected") {
    const label = status === "accepted" ? "accepter" : "refuser";
    if (!(await showConfirm(`${status === "accepted" ? "Accepter" : "Refuser"} cette candidature ?`, `Voulez-vous vraiment ${label} cette candidature ?`))) return;
    const result = await updateApplicationStatus(id, status);
    if (result.success) showSuccess(`Candidature ${status === "accepted" ? "acceptée" : "refusée"} !`);
    else showError(result.error || "Erreur");
  }

  async function handleDelete(id: string) {
    if (!(await showConfirm("Supprimer cette candidature ?", "Cette action est irréversible."))) return;
    const result = await deleteApplication(id);
    if (result.success) showSuccess("Candidature supprimée !");
    else showError(result.error || "Erreur");
  }

  return (
    <div>
      {/* Filters */}
      <div className="flex gap-2 mb-8 flex-wrap">
        {[
          { key: "all", label: "Toutes" },
          { key: "pending", label: "En attente" },
          { key: "accepted", label: "Acceptées" },
          { key: "rejected", label: "Refusées" },
        ].map((f) => (
          <button
            key={f.key}
            onClick={() => setFilter(f.key)}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all cursor-pointer ${
              filter === f.key
                ? "bg-primary text-white shadow-sm"
                : "bg-bg-surface text-text-2 hover:bg-bg-surface-hover"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Empty state */}
      {filtered.length === 0 ? (
        <div className="card p-14 text-center">
          <p className="text-text-3 text-lg">Aucune candidature trouvée.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {filtered.map((app, i) => (
            <motion.div
              key={app.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.04 }}
              className="card overflow-hidden"
            >
              {/* Header row */}
              <div className="px-5 py-4 sm:px-6 border-b border-border flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3 flex-wrap min-w-0">
                  {/* Avatar */}
                  <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="text-primary text-sm font-bold">{app.name.charAt(0).toUpperCase()}</span>
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-text-1 font-bold text-base truncate">{app.name}</h3>
                    <p className="text-text-3 text-xs">{new Date(app.createdAt).toLocaleDateString("fr-FR", { day: "numeric", month: "short", year: "numeric" })}</p>
                  </div>
                  <StatusBadge status={app.status} />
                </div>

                {/* Actions */}
                <div className="flex gap-2 shrink-0">
                  {app.status === "pending" && (
                    <>
                      <button
                        onClick={() => handleStatus(app.id, "accepted")}
                        className="px-3 py-1.5 rounded-lg bg-success/10 text-success text-xs font-semibold hover:bg-success/20 transition-colors cursor-pointer"
                      >
                        Accepter
                      </button>
                      <button
                        onClick={() => handleStatus(app.id, "rejected")}
                        className="px-3 py-1.5 rounded-lg bg-error/10 text-error text-xs font-semibold hover:bg-error/20 transition-colors cursor-pointer"
                      >
                        Refuser
                      </button>
                    </>
                  )}
                  <button
                    onClick={() => handleDelete(app.id)}
                    className="px-3 py-1.5 rounded-lg bg-bg-surface text-text-3 text-xs font-medium hover:text-error hover:bg-error/5 transition-colors cursor-pointer"
                  >
                    Supprimer
                  </button>
                </div>
              </div>

              {/* Body */}
              <div className="px-5 py-4 sm:px-6 space-y-4">
                {/* Info grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                  <InfoRow label="Email" value={app.email} />
                  <InfoRow label="Téléphone" value={app.phone} />
                  <InfoRow label="Pays" value={app.country} />
                  <InfoRow label="Rôle" value={app.role} />
                </div>

                {/* Divider */}
                <div className="border-t border-border" />

                {/* Experience */}
                <div>
                  <p className="text-xs font-semibold text-text-3 uppercase tracking-wider mb-1.5">Expérience</p>
                  <TruncatedText text={app.experience} maxLength={150} className="text-sm text-text-2 leading-relaxed" />
                </div>

                {/* Motivation */}
                <div>
                  <p className="text-xs font-semibold text-text-3 uppercase tracking-wider mb-1.5">Motivation</p>
                  <TruncatedText text={app.motivation} maxLength={150} className="text-sm text-text-2 leading-relaxed" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline gap-2 text-sm">
      <span className="text-text-3 shrink-0">{label}:</span>
      <span className="text-text-1 font-medium truncate">{value}</span>
    </div>
  );
}
