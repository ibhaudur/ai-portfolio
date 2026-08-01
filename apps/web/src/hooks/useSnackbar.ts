"use client";
import React, { useState, useEffect } from "react";

interface UseSnackbarReturns {
  open: boolean;
  message: string;
  type: string;
  openSnackBar: (msg: string, type: string) => void;
}

export default function useSnackbar(): UseSnackbarReturns {
  const [open, setOpen] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [type, setType] = useState<string>("");

  useEffect(() => {
    if (open) {
      const timer = setTimeout(() => {
        setOpen(false);
      }, 3000);
      return () => clearTimeout(timer); // Cleanup the timeout on component unmount
    }
  }, [open]);

  const openSnackBar = (
    msg: string = "Something went wrong...",
    type: string = "success"
  ): void => {
    setMessage(msg);
    setOpen(true);
    setType(type);
  };

  return { open, message, openSnackBar, type };
}
