import React from "react";

interface ToastTypes {
  open: boolean;
  type: string;
  message: string;
}

const toneClasses: Record<string, string> = {
  success: "border-green-500 bg-green-50 text-green-700",
  error: "border-red-500 bg-red-50 text-red-700",
  info: "border-sky-500 bg-sky-50 text-sky-700",
};

export default function Toast({ open, type, message }: ToastTypes) {
  if (!open) return null;

  return (
    <div className="fixed right-4 top-4 z-[70] max-w-sm rounded-lg border border-gray-200 bg-white/95 p-2 shadow-lg">
      <div className={`rounded-md border px-4 py-3 ${toneClasses[type] ?? toneClasses.info}`}>
        <p className="text-sm font-medium">{message}</p>
      </div>
    </div>
  );
}
