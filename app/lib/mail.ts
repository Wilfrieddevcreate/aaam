"use server";

import nodemailer from "nodemailer";

type MailOptions = {
  to: string;
  subject: string;
  text: string;
  html?: string;
};

type ApplicationMailData = {
  name: string;
  email: string;
  phone: string;
  country: string;
  role: string;
  experience: string;
  motivation: string;
};

const globalForMail = globalThis as unknown as {
  mailTransporter?: nodemailer.Transporter;
};

function getMailConfig() {
  return {
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 587),
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
    from: process.env.MAIL_FROM,
    adminRecipient: process.env.MAIL_TO_ADMIN || process.env.MAIL_FROM,
    appUrl: process.env.APP_URL || "http://localhost:3000",
  };
}

function isMailConfigured() {
  const config = getMailConfig();
  return Boolean(config.host && config.user && config.pass && config.from);
}

function getTransporter() {
  const config = getMailConfig();

  if (!isMailConfigured()) {
    return null;
  }

  if (!globalForMail.mailTransporter) {
    globalForMail.mailTransporter = nodemailer.createTransport({
      host: config.host,
      port: config.port,
      secure: config.port === 465,
      auth: {
        user: config.user,
        pass: config.pass,
      },
    });
  }

  return globalForMail.mailTransporter;
}

export async function sendMail(options: MailOptions) {
  const config = getMailConfig();
  const transporter = getTransporter();

  if (!transporter || !config.from) {
    console.warn("[mail] SMTP non configure, email ignore:", options.subject);
    return { success: false, skipped: true };
  }

  await transporter.sendMail({
    from: config.from,
    ...options,
  });

  return { success: true, skipped: false };
}

export async function sendApplicationReceivedEmails(data: ApplicationMailData) {
  const config = getMailConfig();

  await sendMail({
    to: data.email,
    subject: "AAAM - Candidature recue",
    text:
      `Bonjour ${data.name},\n\n` +
      "Nous avons bien recu votre candidature pour rejoindre l'AAAM.\n" +
      "Notre comite l'examinera et reviendra vers vous par email.\n\n" +
      `Role: ${data.role}\n` +
      `Pays: ${data.country}\n\n` +
      "Merci pour votre confiance.\nAAAM",
    html: `
      <p>Bonjour ${escapeHtml(data.name)},</p>
      <p>Nous avons bien recu votre candidature pour rejoindre l'AAAM.</p>
      <p>Notre comite l'examinera et reviendra vers vous par email.</p>
      <p><strong>Role:</strong> ${escapeHtml(data.role)}<br /><strong>Pays:</strong> ${escapeHtml(data.country)}</p>
      <p>Merci pour votre confiance.<br />AAAM</p>
    `,
  });

  if (!config.adminRecipient) {
    return;
  }

  await sendMail({
    to: config.adminRecipient,
    subject: "AAAM - Nouvelle candidature recue",
    text:
      "Une nouvelle candidature a ete soumise.\n\n" +
      `Nom: ${data.name}\n` +
      `Email: ${data.email}\n` +
      `Telephone: ${data.phone}\n` +
      `Pays: ${data.country}\n` +
      `Role: ${data.role}\n\n` +
      `Experience:\n${data.experience}\n\n` +
      `Motivation:\n${data.motivation}\n\n` +
      `Administration: ${config.appUrl}/admin`,
    html: `
      <p>Une nouvelle candidature a ete soumise.</p>
      <p>
        <strong>Nom:</strong> ${escapeHtml(data.name)}<br />
        <strong>Email:</strong> ${escapeHtml(data.email)}<br />
        <strong>Telephone:</strong> ${escapeHtml(data.phone)}<br />
        <strong>Pays:</strong> ${escapeHtml(data.country)}<br />
        <strong>Role:</strong> ${escapeHtml(data.role)}
      </p>
      <p><strong>Experience:</strong><br />${formatMultiline(data.experience)}</p>
      <p><strong>Motivation:</strong><br />${formatMultiline(data.motivation)}</p>
      <p><a href="${escapeHtml(config.appUrl)}/admin">Ouvrir l'administration</a></p>
    `,
  });
}

export async function sendApplicationStatusEmail(data: {
  email: string;
  name: string;
  status: "accepted" | "rejected";
}) {
  const accepted = data.status === "accepted";

  await sendMail({
    to: data.email,
    subject: accepted
      ? "AAAM - Votre candidature a ete acceptee"
      : "AAAM - Mise a jour de votre candidature",
    text:
      `Bonjour ${data.name},\n\n` +
      (accepted
        ? "Nous sommes heureux de vous informer que votre candidature a ete acceptee."
        : "Nous vous informons que votre candidature n'a pas ete retenue a ce stade.") +
      "\n\nMerci pour l'interet porte a l'AAAM.\nAAAM",
    html: `
      <p>Bonjour ${escapeHtml(data.name)},</p>
      <p>${
        accepted
          ? "Nous sommes heureux de vous informer que votre candidature a ete acceptee."
          : "Nous vous informons que votre candidature n'a pas ete retenue a ce stade."
      }</p>
      <p>Merci pour l'interet porte a l'AAAM.<br />AAAM</p>
    `,
  });
}

export async function sendMasterclassRequestAdminEmail(data: {
  eventTitle: string;
  eventDate: Date;
  eventSpeaker: string;
  applicantName: string;
  email: string;
  phone: string;
  alias: string;
}) {
  const config = getMailConfig();

  if (!config.adminRecipient) {
    return;
  }

  await sendMail({
    to: config.adminRecipient,
    subject: `AAAM - Nouvelle demande pour ${data.eventTitle}`,
    text:
      "Une nouvelle demande d'acces a une masterclass a ete soumise.\n\n" +
      `Masterclass: ${data.eventTitle}\n` +
      `Date: ${formatDateTime(data.eventDate)}\n` +
      `Intervenant: ${data.eventSpeaker}\n\n` +
      `Nom: ${data.applicantName}\n` +
      `Alias: ${data.alias}\n` +
      `Email: ${data.email}\n` +
      `Telephone: ${data.phone}\n\n` +
      `Administration: ${config.appUrl}/admin/requests`,
    html: `
      <p>Une nouvelle demande d'acces a une masterclass a ete soumise.</p>
      <p>
        <strong>Masterclass:</strong> ${escapeHtml(data.eventTitle)}<br />
        <strong>Date:</strong> ${escapeHtml(formatDateTime(data.eventDate))}<br />
        <strong>Intervenant:</strong> ${escapeHtml(data.eventSpeaker)}
      </p>
      <p>
        <strong>Nom:</strong> ${escapeHtml(data.applicantName)}<br />
        <strong>Alias:</strong> ${escapeHtml(data.alias)}<br />
        <strong>Email:</strong> ${escapeHtml(data.email)}<br />
        <strong>Telephone:</strong> ${escapeHtml(data.phone)}
      </p>
      <p><a href="${escapeHtml(config.appUrl)}/admin/requests">Ouvrir les demandes</a></p>
    `,
  });
}

export async function sendMasterclassRequestStatusEmail(data: {
  status: "approved" | "rejected";
  email: string;
  firstName: string;
  lastName: string;
  eventTitle: string;
  eventDescription: string;
  eventDate: Date;
  eventSpeaker: string;
  eventLink: string;
}) {
  const approved = data.status === "approved";
  const fullName = `${data.firstName} ${data.lastName}`;

  await sendMail({
    to: data.email,
    subject: approved
      ? `AAAM - Acces valide pour ${data.eventTitle}`
      : `AAAM - Reponse a votre demande pour ${data.eventTitle}`,
    text:
      `Bonjour ${fullName},\n\n` +
      (approved
        ? "Votre demande d'acces a la masterclass a ete validee.\n\n" +
          `Masterclass: ${data.eventTitle}\n` +
          `Intervenant: ${data.eventSpeaker}\n` +
          `Date: ${formatDateTime(data.eventDate)}\n` +
          `Lien d'acces: ${data.eventLink}\n\n` +
          `Description: ${data.eventDescription}\n\n`
        : "Votre demande d'acces a la masterclass n'a pas ete retenue pour le moment.\n\n") +
      "Merci pour votre interet.\nAAAM",
    html: `
      <p>Bonjour ${escapeHtml(fullName)},</p>
      ${
        approved
          ? `<p>Votre demande d'acces a la masterclass a ete validee.</p>
             <p>
               <strong>Masterclass:</strong> ${escapeHtml(data.eventTitle)}<br />
               <strong>Intervenant:</strong> ${escapeHtml(data.eventSpeaker)}<br />
               <strong>Date:</strong> ${escapeHtml(formatDateTime(data.eventDate))}
             </p>
             <p><strong>Description:</strong><br />${escapeHtml(data.eventDescription)}</p>
             <p><a href="${escapeHtml(data.eventLink)}">Acceder a la masterclass</a></p>`
          : "<p>Votre demande d'acces a la masterclass n'a pas ete retenue pour le moment.</p>"
      }
      <p>Merci pour votre interet.<br />AAAM</p>
    `,
  });
}

function formatMultiline(value: string) {
  return escapeHtml(value).replace(/\n/g, "<br />");
}

function formatDateTime(value: Date) {
  return new Date(value).toLocaleString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
