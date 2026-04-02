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

export default function ApplicationsList({ applications }: { applications: Application[] }) {
  const [filter, setFilter] = useState<string>("all");

  const filtered = filter === "all"
    ? applications
    : applications.filter((a) => a.status === filter);

  async function handleStatus(id: string, status: "accepted" | "rejected") {
    const label = status === "accepted" ? "accepter" : "refuser";
    const confirmed = await showConfirm(
      `${status === "accepted" ? "Accepter" : "Refuser"} cette candidature ?`,
      `Voulez-vous vraiment ${label} cette candidature ?`
    );
    if (!confirmed) return;

    const result = await updateApplicationStatus(id, status);
    if (result.success) {
      showSuccess(`Candidature ${status === "accepted" ? "acceptée" : "refusée"} !`);
    } else {
      showError(result.error || "Erreur");
    }
  }

  async function handleDelete(id: string) {
    const confirmed = await showConfirm(
      "Supprimer cette candidature ?",
      "Cette action est irréversible."
    );
    if (!confirmed) return;

    const result = await deleteApplication(id);
    if (result.success) {
      showSuccess("Candidature supprimée !");
    } else {
      showError(result.error || "Erreur");
    }
  }

  return (
    <div>
      {/* Filters */}
      <div className="flex gap-2 mb-6 flex-wrap">
        {[
          { key: "all", label: "Toutes" },
          { key: "pending", label: "En attente" },
          { key: "accepted", label: "Acceptées" },
          { key: "rejected", label: "Refusées" },
        ].map((f) => (
          <button
            key={f.key}
            onClick={() => setFilter(f.key)}
            className={`px-4 py-2 rounded-md text-xs uppercase tracking-wider transition-all ${
              filter === f.key
                ? "bg-primary text-white"
                : "border border-border text-text-2 hover:border-primary hover:text-primary"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* List */}
      {filtered.length === 0 ? (
        <div className="card p-10 text-center text-text-2">
          Aucune candidature trouvée.
        </div>
      ) : (
        <div className="space-y-4">
          {filtered.map((app, i) => (
            <motion.div
              key={app.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="card p-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <h3 className="text-text-1 font-semibold">{app.name}</h3>
                    <StatusBadge status={app.status} />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-x-8 gap-y-1 text-sm text-text-2 mb-3">
                    <p>Email: <span className="text-text-1">{app.email}</span></p>
                    <p>Tél: <span className="text-text-1">{app.phone}</span></p>
                    <p>Pays: <span className="text-text-1">{app.country}</span></p>
                    <p>Rôle: <span className="text-text-1">{app.role}</span></p>
                  </div>
                  <div className="text-sm mb-2">
                    <p className="text-text-2 mb-1">Expérience:</p>
                    <p className="text-text-1/80 text-xs leading-relaxed">{app.experience}</p>
                  </div>
                  <div className="text-sm">
                    <p className="text-text-2 mb-1">Motivation:</p>
                    <p className="text-text-1/80 text-xs leading-relaxed">{app.motivation}</p>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex sm:flex-col gap-2 shrink-0">
                  {app.status === "pending" && (
                    <>
                      <button
                        onClick={() => handleStatus(app.id, "accepted")}
                        className="px-3 py-1.5 bg-success/10 border border-success/20 text-success rounded text-xs hover:bg-success/20 transition-colors"
                      >
                        Accepter
                      </button>
                      <button
                        onClick={() => handleStatus(app.id, "rejected")}
                        className="px-3 py-1.5 bg-error/10 border border-error/20 text-error rounded text-xs hover:bg-error/20 transition-colors"
                      >
                        Refuser
                      </button>
                    </>
                  )}
                  <button
                    onClick={() => handleDelete(app.id)}
                    className="px-3 py-1.5 border border-border text-text-2 rounded text-xs hover:border-error hover:text-error transition-colors"
                  >
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

function StatusBadge({ status }: { status: string }) {
  const styles = {
    pending: "bg-warning/10 text-warning border-warning/20",
    accepted: "bg-success/10 text-success border-success/20",
    rejected: "bg-error/10 text-error border-error/20",
  };

  const labels = {
    pending: "En attente",
    accepted: "Acceptée",
    rejected: "Refusée",
  };

  return (
    <span className={`px-2 py-0.5 rounded text-[10px] uppercase tracking-wider border ${styles[status as keyof typeof styles] || ""}`}>
      {labels[status as keyof typeof labels] || status}
    </span>
  );
}
