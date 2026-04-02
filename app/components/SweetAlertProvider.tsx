"use client";

import Swal from "sweetalert2";

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
