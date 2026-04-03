import { prisma } from "@/app/lib/prisma";
import RequestsList from "./RequestsList";

export const metadata = {
  title: "Demandes Masterclass — Admin AAAM",
};

export default async function RequestsPage() {
  const requests = await prisma.masterclassRequest.findMany({
    orderBy: { createdAt: "desc" },
    include: {
      event: {
        select: {
          title: true,
          date: true,
          speaker: true,
        },
      },
    },
  });

  const stats = {
    total: requests.length,
    pending: requests.filter((request) => request.status === "pending").length,
    approved: requests.filter((request) => request.status === "approved").length,
    rejected: requests.filter((request) => request.status === "rejected").length,
  };

  return (
    <div>
      <div className="mb-10">
        <span className="section-label block mb-3">Gestion</span>
        <h1 className="text-2xl sm:text-3xl font-bold text-text-1 tracking-tight">
          Demandes d&apos;acces
        </h1>
        <p className="mt-2 text-sm text-text-2">
          Validez ou refusez les demandes d&apos;acces aux masterclass. Le lien prive est envoye par email uniquement apres approbation.
        </p>
      </div>

      <div className="mb-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {[
          { label: "Total", value: stats.total, color: "text-text-1" },
          { label: "En attente", value: stats.pending, color: "text-warning" },
          { label: "Validees", value: stats.approved, color: "text-success" },
          { label: "Refusees", value: stats.rejected, color: "text-error" },
        ].map((item) => (
          <div key={item.label} className="card p-5 text-center sm:p-6">
            <div className={`text-2xl font-bold sm:text-3xl ${item.color}`}>{item.value}</div>
            <div className="mt-2 text-xs font-semibold uppercase tracking-wider text-text-3">
              {item.label}
            </div>
          </div>
        ))}
      </div>

      <RequestsList requests={requests} />
    </div>
  );
}
