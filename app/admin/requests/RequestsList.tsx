"use client";

import { updateMasterclassRequestStatus } from "@/app/actions/masterclass-requests";
import { showConfirm, showError, showSuccess } from "@/app/components/SweetAlertProvider";
import TruncatedText from "@/app/components/TruncatedText";
import { motion } from "framer-motion";
import { useState } from "react";

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
        ? "Un email d'accès sera envoyé au demandeur."
        : "Un email de réponse sera envoyé au demandeur."
    );
    if (!confirmed) return;

    const result = await updateMasterclassRequestStatus(id, status);
    if (result.success) showSuccess(status === "approved" ? "Demande validée." : "Demande refusée.");
    else showError(result.error || "Erreur");
  }

  if (requests.length === 0) {
    return (
      <div className="card p-14 text-center">
        <p className="text-text-3 text-lg">Aucune demande pour le moment.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {requests.map((request, index) => (
        <RequestCard key={request.id} request={request} index={index} onStatus={handleStatus} />
      ))}
    </div>
  );
}

function RequestCard({
  request,
  index,
  onStatus,
}: {
  request: RequestItem;
  index: number;
  onStatus: (id: string, status: "approved" | "rejected") => void;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.04 }}
      className="card overflow-hidden"
    >
      {/* Header */}
      <div className="px-5 py-4 sm:px-6 border-b border-border flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-3 flex-wrap min-w-0">
          <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
            <span className="text-primary text-sm font-bold">{request.firstName.charAt(0)}</span>
          </div>
          <div className="min-w-0">
            <h3 className="text-text-1 font-bold text-base truncate">
              {request.firstName} {request.lastName}
            </h3>
            <p className="text-text-3 text-xs">
              {new Date(request.createdAt).toLocaleDateString("fr-FR", { day: "numeric", month: "short", year: "numeric" })}
            </p>
          </div>
          <StatusBadge status={request.status} />
        </div>

        <div className="flex gap-2 shrink-0">
          {request.status === "pending" && (
            <>
              <button
                onClick={() => onStatus(request.id, "approved")}
                className="px-3 py-1.5 rounded-lg bg-success/10 text-success text-xs font-semibold hover:bg-success/20 transition-colors cursor-pointer"
              >
                Valider
              </button>
              <button
                onClick={() => onStatus(request.id, "rejected")}
                className="px-3 py-1.5 rounded-lg bg-error/10 text-error text-xs font-semibold hover:bg-error/20 transition-colors cursor-pointer"
              >
                Refuser
              </button>
            </>
          )}
          <button
            onClick={() => setExpanded(!expanded)}
            className="px-3 py-1.5 rounded-lg bg-bg-surface text-text-2 text-xs font-medium hover:bg-bg-surface-hover transition-colors cursor-pointer"
          >
            {expanded ? "Réduire" : "Détails"}
          </button>
        </div>
      </div>

      {/* Summary (always visible) */}
      <div className="px-5 py-4 sm:px-6">
        {/* Event tag */}
        <div className="rounded-xl border border-border bg-bg-surface/50 px-4 py-3 mb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
          <p className="text-sm font-semibold text-text-1 truncate">{request.event.title}</p>
          <p className="text-xs text-text-3 shrink-0">
            {new Date(request.event.date).toLocaleDateString("fr-FR", { day: "numeric", month: "short", year: "numeric" })}
            {" — "}{request.event.speaker}
          </p>
        </div>

        {/* Key info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-2">
          <InfoRow label="Email" value={request.email} />
          <InfoRow label="Téléphone" value={request.phone} />
          <InfoRow label="Métier" value={request.profession} />
          <InfoRow label="Artiste" value={request.representedArtist} />
          <InfoRow label="Nationalité" value={request.nationality} />
          <InfoRow label="Ville" value={request.city} />
        </div>
      </div>

      {/* Expanded details */}
      {expanded && (
        <div className="px-5 pb-5 sm:px-6 space-y-4 border-t border-border pt-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-2">
            <InfoRow label="Alias" value={request.alias} />
            <InfoRow label="Genre" value={request.gender} />
            <InfoRow label="Tranche d'âge" value={request.ageRange} />
            <InfoRow label="Ancienneté" value={request.yearsInIndustry} />
            {request.associationName && <InfoRow label="Association" value={request.associationName} />}
            {request.associationRole && <InfoRow label="Rôle association" value={request.associationRole} />}
          </div>

          {/* Social links */}
          <div>
            <p className="text-xs font-semibold text-text-3 uppercase tracking-wider mb-1.5">Réseaux sociaux</p>
            <TruncatedText text={request.socialLinks} maxLength={200} className="text-sm text-text-2 leading-relaxed break-all" />
          </div>

          {/* Bio */}
          {request.bioText && (
            <div>
              <p className="text-xs font-semibold text-text-3 uppercase tracking-wider mb-1.5">Biographie</p>
              <TruncatedText text={request.bioText} maxLength={200} className="text-sm text-text-2 leading-relaxed" />
            </div>
          )}

          {/* CV */}
          {request.cvFilePath && (
            <div>
              <p className="text-xs font-semibold text-text-3 uppercase tracking-wider mb-1.5">CV joint</p>
              <a
                href={request.cvFilePath}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                {request.cvOriginalName || "Télécharger le CV"}
              </a>
            </div>
          )}
        </div>
      )}
    </motion.div>
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

function StatusBadge({ status }: { status: string }) {
  const map: Record<string, { cls: string; label: string }> = {
    pending: { cls: "badge-warning", label: "En attente" },
    approved: { cls: "badge-success", label: "Validée" },
    rejected: { cls: "badge-error", label: "Refusée" },
  };
  const s = map[status] || { cls: "badge-neutral", label: status };
  return <span className={`badge ${s.cls}`}>{s.label}</span>;
}
