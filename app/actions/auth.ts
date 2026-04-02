"use server";

import { prisma } from "@/app/lib/prisma";
import { createSession, deleteSession } from "@/app/lib/auth";
import bcryptjs from "bcryptjs";
import { redirect } from "next/navigation";

export async function loginAction(prevState: unknown, formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  if (!email || !password) {
    return { error: "Email et mot de passe requis." };
  }

  const user = await prisma.user.findUnique({ where: { email } });

  if (!user) {
    return { error: "Identifiants incorrects." };
  }

  if (user.role !== "admin") {
    return { error: "Accès réservé aux administrateurs." };
  }

  const valid = await bcryptjs.compare(password, user.password);
  if (!valid) {
    return { error: "Identifiants incorrects." };
  }

  await createSession(user.id, user.role);
  redirect("/admin");
}

export async function logoutAction() {
  await deleteSession();
  redirect("/");
}
