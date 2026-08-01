import React from "react";

interface BackdropLoaderProps {
  loader: boolean;
}

export default function BackdropLoader({ loader }: BackdropLoaderProps) {
  if (!loader) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/40">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-white border-t-green-500" />
    </div>
  );
}
