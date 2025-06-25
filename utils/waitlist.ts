import apiClient from '@/pages/api/api-client';
import { WaitlistFormData } from '@/schemas/waitlistSchema';

export const submitWaitlist = async (data: WaitlistFormData) => {
  //  console.log(" Sending waitlist data to API:", data);
  try {
    const response = await apiClient.post('/waitlist', {
      name: data.name,
      email: data.email,
      role: data.role || "N/A",
      company: data.company || "N/A",
    });
    //  console.log(" API responded with:", response.data);
    return response.data;
  } catch (error) {
    // console.error("Waitlist submission error:", error);
    throw new Error((error as Error).message || "Waitlist submission failed");
  }
};