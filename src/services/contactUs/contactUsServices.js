// contactServices.jsco
import { useMutation } from '@tanstack/react-query';
import emailjs from '@emailjs/browser';

export function useSendContactEmail() {
  return useMutation({
    mutationFn: async (contactData) => {
      const { serviceId, templateId, userId, params } = contactData;
      // EmailJS: replace with your keys
      return await emailjs.send(serviceId, templateId, params, userId);
    },
    // You can add onSuccess, onError, etc., here if desired
    // onSuccess: () => { ... },
    // onError: (err) => { ... },
  });
}
