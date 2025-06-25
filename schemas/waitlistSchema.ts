import { z } from "zod";

export const waitlistSchema = z.object({
  name: z.string().min(2, { message: "Name is required" }),
  email: z.string().email({ message: "Enter a valid email address" }),
  role: z.string().min(2, { message: "Role is required" }),
  company: z.string().min(2, { message: "Company is required" }),
});

export type WaitlistFormData = z.infer<typeof waitlistSchema>;
