import { prisma } from "@/app/lib/prisma";
import ApplicationsList from "./ApplicationsList";

export const metadata = {
  title: "Candidatures — Admin AAAM",
};

export default async function AdminPage() {
  const applications = await prisma.application.findMany({
    orderBy: { createdAt: "desc" },
  });

  const stats = {
    total: applications.length,
    pending: applications.filter((a) => a.status === "pending").length,
    accepted: applications.filter((a) => a.status === "accepted").length,
    rejected: applications.filter((a) => a.status === "rejected").length,
  };

  return (
    <div>
      <div className="mb-10">
        <span className="section-label block mb-3">Gestion</span>
        <h1 className="text-2xl sm:text-3xl font-bold text-text-1 tracking-tight">Candidatures</h1>
        <p className="text-text-2 text-sm mt-2">Gérez les demandes d&apos;adhésion à l&apos;AAAM.</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
        {[
          { label: "Total", value: stats.total, color: "text-text-1" },
          { label: "En attente", value: stats.pending, color: "text-warning" },
          { label: "Acceptées", value: stats.accepted, color: "text-success" },
          { label: "Refusées", value: stats.rejected, color: "text-error" },
        ].map((s, i) => (
          <div key={i} className="card p-5 sm:p-6 text-center">
            <div className={`text-2xl sm:text-3xl font-bold ${s.color}`}>{s.value}</div>
            <div className="text-text-3 text-xs tracking-wider uppercase font-semibold mt-2">{s.label}</div>
          </div>
        ))}
      </div>

      <ApplicationsList applications={applications} />
    </div>
  );
}
