"use client";

import { updateMasterclassRequestStatus } from "@/app/actions/masterclass-requests";
import {
  showConfirm,
  showError,
  showSuccess,
} from "@/app/components/SweetAlertProvider";
import { motion } from "framer-motion";

interface RequestItem {
  id: string;
  lastName: string;
  firstName: string;
  email: string;
  alias: string;
  gender: string;
  ageRange: string;
  phone: string;
  nationality: string;
  city: string;
  associationName: string | null;
  associationRole: string | null;
  representedArtist: string;
  profession: string;
  socialLinks: string;
  yearsInIndustry: string;
  bioText: string | null;
  cvFilePath: string | null;
  cvOriginalName: string | null;
  status: string;
  createdAt: Date;
  event: {
    title: string;
    date: Date;
    speaker: string;
  };
}

export default function RequestsList({ requests }: { requests: RequestItem[] }) {
  async function handleStatus(id: string, status: "approved" | "rejected") {
    const confirmed = await showConfirm(
      status === "approved" ? "Valider cette demande ?" : "Refuser cette demande ?",
      status === "approved"
        ? "Un email d'acces sera envoye au demandeur."
        : "Un email de reponse sera envoye au demandeur."
    );

    if (!confirmed) {
      return;
    }

    const result = await updateMasterclassRequestStatus(id, status);
    if (result.success) {
      showSuccess(status === "approved" ? "Demande validee." : "Demande refusee.");
    } else {
      showError(result.error || "Erreur");
    }
  }

  if (requests.length === 0) {
    return <div className="card p-10 text-center text-text-2">Aucune demande pour le moment.</div>;
  }

  return (
    <div className="space-y-4">
      {requests.map((request, index) => (
        <motion.div
          key={request.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.04 }}
          className="card p-6"
        >
          <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
            <div className="flex-1 space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="font-semibold text-text-1">
                  {request.firstName} {request.lastName}
                </h3>
                <StatusBadge status={request.status} />
                <span className="text-xs text-text-3">
                  {new Date(request.createdAt).toLocaleDateString("fr-FR")}
                </span>
              </div>

              <div className="rounded-xl border border-border bg-bg-surface/50 p-4">
                <p className="text-sm font-medium text-text-1">{request.event.title}</p>
                <p className="mt-1 text-xs text-text-2">
                  {new Date(request.event.date).toLocaleString("fr-FR", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  })}{" "}
                  • {request.event.speaker}
                </p>
              </div>

              <div className="grid gap-3 text-sm text-text-2 sm:grid-cols-2">
                <Info label="Email" value={request.email} />
                <Info label="Alias" value={request.alias} />
                <Info label="Telephone" value={request.phone} />
                <Info label="Genre" value={request.gender} />
                <Info label="Tranche d'age" value={request.ageRange} />
                <Info label="Nationalite" value={request.nationality} />
                <Info label="Ville" value={request.city} />
                <Info label="Anciennete" value={request.yearsInIndustry} />
                <Info label="Artiste represente" value={request.representedArtist} />
                <Info label="Metier" value={request.profession} />
              </div>

              <div className="text-sm text-text-2">
                <p className="mb-1 font-medium text-text-1">Reseaux sociaux</p>
                <p className="whitespace-pre-wrap break-words">{request.socialLinks}</p>
              </div>

              {(request.associationName || request.associationRole) && (
                <div className="text-sm text-text-2">
                  <p className="mb-1 font-medium text-text-1">Association</p>
                  <p>{request.associationName || "Non renseigne"}</p>
                  <p>{request.associationRole || "Role non renseigne"}</p>
                </div>
              )}

              {request.bioText && (
                <div className="text-sm text-text-2">
                  <p className="mb-1 font-medium text-text-1">Biographie professionnelle</p>
                  <p className="whitespace-pre-wrap">{request.bioText}</p>
                </div>
              )}

              {request.cvFilePath && (
                <div className="text-sm text-text-2">
                  <p className="mb-1 font-medium text-text-1">CV joint</p>
                  <a
                    href={request.cvFilePath}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    {request.cvOriginalName || "Ouvrir le CV"}
                  </a>
                </div>
              )}
            </div>

            <div className="flex shrink-0 gap-2 lg:flex-col">
              {request.status === "pending" && (
                <>
                  <button
                    type="button"
                    onClick={() => handleStatus(request.id, "approved")}
                    className="rounded border border-success/20 bg-success/10 px-3 py-1.5 text-xs text-success transition-colors hover:bg-success/20"
                  >
                    Valider
                  </button>
                  <button
                    type="button"
                    onClick={() => handleStatus(request.id, "rejected")}
                    className="rounded border border-error/20 bg-error/10 px-3 py-1.5 text-xs text-error transition-colors hover:bg-error/20"
                  >
                    Refuser
                  </button>
                </>
              )}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <p>
      {label}: <span className="text-text-1">{value}</span>
    </p>
  );
}

function StatusBadge({ status }: { status: string }) {
  const styles = {
    pending: "border-warning/20 bg-warning/10 text-warning",
    approved: "border-success/20 bg-success/10 text-success",
    rejected: "border-error/20 bg-error/10 text-error",
  };

  const labels = {
    pending: "En attente",
    approved: "Validee",
    rejected: "Refusee",
  };

  return (
    <span
      className={`rounded border px-2 py-0.5 text-[10px] uppercase tracking-wider ${
        styles[status as keyof typeof styles] || ""
      }`}
    >
      {labels[status as keyof typeof labels] || status}
    </span>
  );
}
