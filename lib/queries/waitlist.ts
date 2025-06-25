import { useMutation } from '@tanstack/react-query';
import { WaitlistFormData } from '@/schemas/waitlistSchema';
import { submitWaitlist } from '@/utils/waitlist';

export function useWaitlist() {
  const waitlistMutation = (formData: WaitlistFormData) => submitWaitlist(formData);
  return useMutation({
    mutationFn: waitlistMutation,
    onSuccess: (data) => {
      return data;
    },
  });
}