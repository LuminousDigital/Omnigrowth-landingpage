import { WaitlistFormData } from "@/schemas/waitlistSchema";
import { useMutation } from "@tanstack/react-query";

export const submitWaitlist = async (data: WaitlistFormData) => {
  const res = await fetch("/api/waitlist", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    const message = await res.text();
    throw new Error(message || "Submission failed");
  }

  return res.json();
};

export const useWaitlist = () => {
  return useMutation({
    mutationFn: submitWaitlist,
  });
};
