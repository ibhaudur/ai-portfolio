import React from "react";
import ConfirmationDialog from "@/components/admin/ConfirmationDialog";
import type { AlertTypes } from "@/types/admin";

export default function AlertDialog(props: AlertTypes) {
  return <ConfirmationDialog {...props} />;
}
