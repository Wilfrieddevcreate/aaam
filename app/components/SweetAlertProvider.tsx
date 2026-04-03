"use client";

import Swal from "sweetalert2";
import { createRoot, type Root } from "react-dom/client";
import type { ReactNode } from "react";

function isDark() {
  if (typeof document === "undefined") return true;
  return document.documentElement.classList.contains("dark");
}

function getToast() {
  return Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    background: isDark() ? "#151a30" : "#ffffff",
    color: isDark() ? "#e8ecf4" : "#0f1729",
    customClass: {
      popup: "!border !border-[var(--border-color)] !rounded-xl !shadow-lg",
    },
  });
}

export const showSuccess = (title: string) => {
  getToast().fire({ icon: "success", title });
};

export const showError = (title: string) => {
  getToast().fire({ icon: "error", title });
};

export const showConfirm = async (title: string, text: string) => {
  const result = await Swal.fire({
    title,
    text,
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#2d7dd2",
    cancelButtonColor: "#ef4444",
    confirmButtonText: "Confirmer",
    cancelButtonText: "Annuler",
    background: isDark() ? "#151a30" : "#ffffff",
    color: isDark() ? "#e8ecf4" : "#0f1729",
  });
  return result.isConfirmed;
};

export const showReactModal = async ({
  title,
  content,
  width = 920,
}: {
  title: string;
  content: ReactNode;
  width?: number;
}) => {
  let root: Root | null = null;

  await Swal.fire({
    title,
    width,
    showConfirmButton: false,
    showCloseButton: true,
    background: isDark() ? "#0c1021" : "#ffffff",
    color: isDark() ? "#e8ecf4" : "#0f1729",
    html: '<div id="aaam-react-modal" class="text-left"></div>',
    customClass: {
      popup: "!rounded-[1.5rem] !border !border-[var(--border-color)] !p-0 !overflow-hidden",
      title: "!text-left !text-2xl !font-bold !px-6 !pt-6 !pb-0",
      htmlContainer: "!mx-0 !my-0 !px-6 !pb-6 !pt-4",
      closeButton: "!text-text-2 hover:!text-primary",
    },
    didOpen: () => {
      const container = document.getElementById("aaam-react-modal");
      if (!container) return;
      root = createRoot(container);
      root.render(content);
    },
    willClose: () => {
      root?.unmount();
      root = null;
    },
  });
};
