"use client";
import { MdDone } from "react-icons/md";
import { useEffect } from "react";

interface SuccessModalProps {
  open: boolean;
  onClose: () => void;
}

export default function SuccessModal({ open, onClose }: SuccessModalProps) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (open) document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
      <div className="bg-white rounded-xl max-w-sm w-full text-center py-8 px-6 shadow-lg">
        <div className="flex flex-col items-center gap-2">
          <MdDone className="text-green-500 text-4xl" />
          <h2 className="text-xl font-semibold text-green-600">
            You're on the list!
          </h2>
          <p className="text-sm text-gray-600 mt-1">
            Thanks for joining the waitlist. We’ll keep you updated!
          </p>
        </div>
        <button
          onClick={onClose}
          className="mt-6 bg-[#606060] hover:bg-[#4b4a64] px-5 py-2 text-sm sm:text-base cursor-pointer text-white font-semibold rounded-lg transition-colors"
        >
          Okay
        </button>
      </div>
    </div>
  );
}
