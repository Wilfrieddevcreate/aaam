import { getSession } from "@/app/lib/auth";
import { redirect } from "next/navigation";
import AdminNav from "./AdminNav";

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const session = await getSession();
  if (!session || session.role !== "admin") redirect("/login");

  return (
    <div className="min-h-screen flex flex-col">
      <AdminNav user={session} />
      <main className="flex-1 pt-28 pb-12">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">{children}</div>
      </main>
    </div>
  );
}
