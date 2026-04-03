"use server";

import { prisma } from "@/app/lib/prisma";
import { getSession } from "@/app/lib/auth";
import {
  sendApplicationReceivedEmails,
  sendApplicationStatusEmail,
} from "@/app/lib/mail";
import { revalidatePath } from "next/cache";

export async function submitApplication(prevState: unknown, formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const country = formData.get("country") as string;
  const role = formData.get("role") as string;
  const experience = formData.get("experience") as string;
  const motivation = formData.get("motivation") as string;

  if (!name || !email || !phone || !country || !role || !experience || !motivation) {
    return { error: "Tous les champs sont obligatoires." };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { error: "Adresse email invalide." };
  }

  try {
    await prisma.application.create({
      data: { name, email, phone, country, role, experience, motivation },
    });

    try {
      await sendApplicationReceivedEmails({
        name,
        email,
        phone,
        country,
        role,
        experience,
        motivation,
      });
    } catch (error) {
      console.error("[mail] Erreur envoi candidature:", error);
    }

    return { success: true };
  } catch {
    return { error: "Une erreur est survenue. Veuillez réessayer." };
  }
}

export async function updateApplicationStatus(id: string, status: "accepted" | "rejected") {
  const session = await getSession();
  if (!session || session.role !== "admin") {
    return { error: "Non autorisé." };
  }

  const application = await prisma.application.update({
    where: { id },
    data: { status },
    select: {
      email: true,
      name: true,
    },
  });

  try {
    await sendApplicationStatusEmail({
      email: application.email,
      name: application.name,
      status,
    });
  } catch (error) {
    console.error("[mail] Erreur envoi statut candidature:", error);
  }

  revalidatePath("/admin");
  return { success: true };
}

export async function deleteApplication(id: string) {
  const session = await getSession();
  if (!session || session.role !== "admin") {
    return { error: "Non autorisé." };
  }

  await prisma.application.delete({ where: { id } });
  revalidatePath("/admin");
  return { success: true };
}
