"use server";

import { prisma } from "@/app/lib/prisma";
import { getSession } from "@/app/lib/auth";
import { revalidatePath } from "next/cache";

export async function createEvent(prevState: unknown, formData: FormData) {
  const session = await getSession();
  if (!session || session.role !== "admin") {
    return { error: "Non autorisé." };
  }

  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const date = formData.get("date") as string;
  const speaker = formData.get("speaker") as string;
  const link = formData.get("link") as string;

  if (!title || !description || !date || !speaker || !link) {
    return { error: "Tous les champs sont obligatoires." };
  }

  try {
    await prisma.event.create({
      data: {
        title,
        description,
        date: new Date(date),
        speaker,
        link,
      },
    });
    revalidatePath("/admin");
    revalidatePath("/dashboard");
    return { success: true };
  } catch {
    return { error: "Erreur lors de la création." };
  }
}

export async function deleteEvent(id: string) {
  const session = await getSession();
  if (!session || session.role !== "admin") {
    return { error: "Non autorisé." };
  }

  await prisma.event.delete({ where: { id } });
  revalidatePath("/admin");
  revalidatePath("/dashboard");
  return { success: true };
}
