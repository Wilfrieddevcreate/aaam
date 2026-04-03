"use client";

import { updateApplicationStatus, deleteApplication } from "@/app/actions/applications";
import { showSuccess, showError, showConfirm } from "@/app/components/SweetAlertProvider";
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
              filter === f.key ? "bg-primary text-white shadow-sm" : "bg-bg-surface text-text-2 hover:bg-bg-surface-hover"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className="card p-14 text-center text-text-3 text-lg">Aucune candidature trouvée.</div>
      ) : (
        <div className="space-y-4">
          {filtered.map((app, i) => (
            <motion.div key={app.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.04 }} className="card p-6 sm:p-7">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-5">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-3 flex-wrap">
                    <h3 className="text-text-1 font-bold text-lg">{app.name}</h3>
                    <StatusBadge status={app.status} />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-x-8 gap-y-1.5 text-sm text-text-2 mb-4">
                    <p>Email: <span className="text-text-1 font-medium">{app.email}</span></p>
                    <p>Tél: <span className="text-text-1 font-medium">{app.phone}</span></p>
                    <p>Pays: <span className="text-text-1 font-medium">{app.country}</span></p>
                    <p>Rôle: <span className="text-text-1 font-medium">{app.role}</span></p>
                  </div>
                  <div className="text-sm mb-3">
                    <p className="text-text-3 font-medium mb-1">Expérience</p>
                    <p className="text-text-2 leading-relaxed">{app.experience}</p>
                  </div>
                  <div className="text-sm">
                    <p className="text-text-3 font-medium mb-1">Motivation</p>
                    <p className="text-text-2 leading-relaxed">{app.motivation}</p>
                  </div>
                </div>

                <div className="flex sm:flex-col gap-2 shrink-0">
                  {app.status === "pending" && (
                    <>
                      <button onClick={() => handleStatus(app.id, "accepted")} className="px-4 py-2 rounded-xl bg-success/10 text-success text-sm font-medium hover:bg-success/20 transition-colors cursor-pointer">
                        Accepter
                      </button>
                      <button onClick={() => handleStatus(app.id, "rejected")} className="px-4 py-2 rounded-xl bg-error/10 text-error text-sm font-medium hover:bg-error/20 transition-colors cursor-pointer">
                        Refuser
                      </button>
                    </>
                  )}
                  <button onClick={() => handleDelete(app.id)} className="px-4 py-2 rounded-xl bg-bg-surface text-text-3 text-sm font-medium hover:text-error hover:bg-error/5 transition-colors cursor-pointer">
                    Supprimer
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}
