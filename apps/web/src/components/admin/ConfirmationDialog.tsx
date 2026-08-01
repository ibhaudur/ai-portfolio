import React from "react";
import type { AlertTypes } from "@/types/admin";

export default function ConfirmationDialog({
  message,
  open,
  deleteBranches,
  title,
}: AlertTypes) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
      <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-xl">
        <h3 className="text-lg font-semibold text-gray-900">
          {title ?? "Delete Confirmation"}
        </h3>
        <p className="mt-3 text-sm text-gray-600">{message}</p>
        <div className="mt-6 flex justify-end gap-3">
          <button
            className="rounded-md bg-gray-200 px-3 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-300"
            onClick={() => deleteBranches(false)}
          >
            No
          </button>
          <button
            className="rounded-md bg-red-600 px-3 py-2 text-sm font-medium text-white transition hover:bg-red-700"
            onClick={() => deleteBranches(true)}
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  );
}
