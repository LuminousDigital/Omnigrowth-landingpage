
import { z } from "zod";

export const waitlistSchema = z.object({
  name: z.string()
    .min(2, { message: "Please enter at least 2 characters" })
    .max(50, { message: "Name cannot exceed 50 characters" })
    .transform(str => str.trim()),

  email: z.string()
    .min(1, { message: "Email is required" })
    .email({ message: "Please enter a valid email (e.g., you@example.com)" })
    .max(100, { message: "Email is too long (max 100 characters)" })
    .transform(str => str.toLowerCase().trim()),

  role: z.string()
    .max(50, { message: "Role title is too long (max 50 characters)" })
    .optional(),

  company: z.string()
    .max(100, { message: "Company name is too long (max 100 characters)" })
    .optional()
}).refine(data => {
  if (data.company && !data.role) {
    return false;
  }
  return true;
}, {
  message: "Please specify your role when providing a company",
  path: ["role"]
});

export type WaitlistFormData = z.infer<typeof waitlistSchema>;
