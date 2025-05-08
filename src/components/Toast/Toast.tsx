"use client";

import { motion } from "framer-motion";

interface ToastProps {
  message: string;
  type?: "success" | "error";
  onClose: () => void;
}

export default function Toast({
  message,
  type = "success",
  onClose,
}: ToastProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      className={`fixed bottom-6 right-6 px-4 py-3 rounded-lg shadow-lg text-white z-50 transition-colors
        ${type === "success" ? "bg-green-600" : "bg-red-600"}`}
    >
      <div className="flex items-center gap-2">
        <span>{message}</span>
        <button onClick={onClose} className="ml-4 text-sm underline">
          Fermer
        </button>
      </div>
    </motion.div>
  );
}
