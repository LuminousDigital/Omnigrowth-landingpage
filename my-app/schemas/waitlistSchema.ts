
import { z } from "zod";

export const waitlistSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email"),
  role: z.string().min(1, "Role is required"),
  company: z.string().min(2, "Company name is required"),
});

export type WaitlistFormData = z.infer<typeof waitlistSchema>;
