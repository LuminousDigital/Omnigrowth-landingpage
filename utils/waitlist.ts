import apiClient from '@/pages/api/api-client';
import { WaitlistFormData } from '@/schemas/waitlistSchema';

export const submitWaitlist = async (data: WaitlistFormData) => {
  try {
    const response = await apiClient.post('/waitlist', {
      name: data.name,
      email: data.email,
      role: data.role || "N/A",
      company: data.company || "N/A",
    });
    return response.data;
  } catch (error) {
    // console.error("Waitlist submission error:", error);
    throw new Error((error as Error).message || "Waitlist submission failed");
  }
};