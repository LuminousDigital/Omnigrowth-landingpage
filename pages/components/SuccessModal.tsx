"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { MdDone } from "react-icons/md";

interface SuccessModalProps {
  open: boolean;
  onClose: () => void;
}

export default function SuccessModal({ open, onClose }: SuccessModalProps) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="text-center px-4 py-6 sm:px-6 sm:py-8 w-full max-w-xs sm:max-w-sm">
        <DialogHeader>
          <div className="flex flex-col items-center gap-2">
            <MdDone className="text-green-500 text-3xl sm:text-4xl" />
            <DialogTitle className="text-lg sm:text-xl font-semibold text-green-500">
              You're on the list!
            </DialogTitle>
            <DialogDescription className="text-sm sm:text-base text-muted-foreground mt-1">
              Thanks for joining the waitlist.
            </DialogDescription>
          </div>
        </DialogHeader>

        <DialogFooter className="mt-6">
          <Button
            onClick={onClose}
            variant={null} // disables shadcn preset styles
            className="mx-auto bg-[#606060] hover:bg-[#4b4a64] px-5 py-2 text-sm sm:text-base cursor-pointer text-white font-semibold rounded-lg transition-colors"
          >
            Okay
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
