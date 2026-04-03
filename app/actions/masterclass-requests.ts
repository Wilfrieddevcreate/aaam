"use server";

import { prisma } from "@/app/lib/prisma";
import {
  sendMasterclassRequestAdminEmail,
  sendMasterclassRequestStatusEmail,
} from "@/app/lib/mail";
import { getSession } from "@/app/lib/auth";
import { revalidatePath } from "next/cache";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { randomUUID } from "node:crypto";

const allowedCvExtensions = new Set([".pdf", ".doc", ".docx"]);
const maxCvSizeBytes = 5 * 1024 * 1024;

export async function submitMasterclassRequest(prevState: unknown, formData: FormData) {
  const eventId = getString(formData, "eventId");
  const lastName = getString(formData, "lastName");
  const firstName = getString(formData, "firstName");
  const email = getString(formData, "email");
  const alias = getString(formData, "alias");
  const gender = getString(formData, "gender");
  const ageRange = getString(formData, "ageRange");
  const phone = getString(formData, "phone");
  const nationality = getString(formData, "nationality");
  const city = getString(formData, "city");
  const associationName = getOptionalString(formData, "associationName");
  const associationRole = getOptionalString(formData, "associationRole");
  const representedArtist = getString(formData, "representedArtist");
  const profession = getString(formData, "profession");
  const socialLinks = getString(formData, "socialLinks");
  const yearsInIndustry = getString(formData, "yearsInIndustry");
  const useCv = formData.get("useCv") === "on";
  const bioText = getOptionalString(formData, "bioText");
  const cvFile = formData.get("cvFile");

  if (
    !eventId ||
    !lastName ||
    !firstName ||
    !email ||
    !alias ||
    !gender ||
    !ageRange ||
    !phone ||
    !nationality ||
    !city ||
    !representedArtist ||
    !profession ||
    !socialLinks ||
    !yearsInIndustry
  ) {
    return { error: "Merci de remplir tous les champs obligatoires." };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { error: "Adresse email invalide." };
  }

  if (useCv) {
    if (!(cvFile instanceof File) || cvFile.size === 0) {
      return { error: "Merci de joindre votre CV." };
    }
  } else if (!bioText) {
    return { error: "Merci de renseigner votre biographie professionnelle." };
  }

  const event = await prisma.event.findUnique({
    where: { id: eventId },
    select: {
      id: true,
      title: true,
      date: true,
      speaker: true,
    },
  });

  if (!event) {
    return { error: "Cette masterclass est introuvable." };
  }

  let storedCvPath: string | null = null;
  let storedCvName: string | null = null;

  try {
    if (useCv && cvFile instanceof File && cvFile.size > 0) {
      if (cvFile.size > maxCvSizeBytes) {
        return { error: "Le CV ne doit pas depasser 5 Mo." };
      }

      const extension = path.extname(cvFile.name).toLowerCase();
      if (!allowedCvExtensions.has(extension)) {
        return { error: "Formats acceptes pour le CV: PDF, DOC, DOCX." };
      }

      const uploadDir = path.join(process.cwd(), "public", "uploads", "masterclass-cv");
      await mkdir(uploadDir, { recursive: true });

      const filename = `${Date.now()}-${randomUUID()}${extension}`;
      const absolutePath = path.join(uploadDir, filename);
      const buffer = Buffer.from(await cvFile.arrayBuffer());

      await writeFile(absolutePath, buffer);
      storedCvPath = `/uploads/masterclass-cv/${filename}`;
      storedCvName = cvFile.name;
    }

    await prisma.masterclassRequest.create({
      data: {
        eventId,
        lastName,
        firstName,
        email,
        alias,
        gender,
        ageRange,
        phone,
        nationality,
        city,
        associationName,
        associationRole,
        representedArtist,
        profession,
        socialLinks,
        yearsInIndustry,
        bioText: useCv ? null : bioText,
        cvFilePath: storedCvPath,
        cvOriginalName: storedCvName,
      },
    });

    try {
      await sendMasterclassRequestAdminEmail({
        eventTitle: event.title,
        eventDate: event.date,
        eventSpeaker: event.speaker,
        applicantName: `${firstName} ${lastName}`,
        email,
        phone,
        alias,
      });
    } catch (error) {
      console.error("[mail] Erreur notification demande masterclass:", error);
    }

    revalidatePath("/admin/requests");
    return { success: true };
  } catch (error) {
    console.error("[masterclass-request] Erreur creation:", error);
    return { error: "Une erreur est survenue. Veuillez reessayer." };
  }
}

export async function updateMasterclassRequestStatus(
  id: string,
  status: "approved" | "rejected"
) {
  const session = await getSession();
  if (!session || session.role !== "admin") {
    return { error: "Non autorise." };
  }

  const request = await prisma.masterclassRequest.update({
    where: { id },
    data: {
      status,
      reviewedAt: new Date(),
    },
    select: {
      email: true,
      firstName: true,
      lastName: true,
      event: {
        select: {
          title: true,
          description: true,
          date: true,
          speaker: true,
          link: true,
        },
      },
    },
  });

  try {
    await sendMasterclassRequestStatusEmail({
      status,
      email: request.email,
      firstName: request.firstName,
      lastName: request.lastName,
      eventTitle: request.event.title,
      eventDescription: request.event.description,
      eventDate: request.event.date,
      eventSpeaker: request.event.speaker,
      eventLink: request.event.link,
    });
  } catch (error) {
    console.error("[mail] Erreur statut masterclass:", error);
  }

  revalidatePath("/admin/requests");
  return { success: true };
}

function getString(formData: FormData, key: string) {
  return String(formData.get(key) || "").trim();
}

function getOptionalString(formData: FormData, key: string) {
  const value = getString(formData, key);
  return value || null;
}
