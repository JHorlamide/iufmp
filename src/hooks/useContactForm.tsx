import React from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

interface ContactFormData {
  formData: HTMLFormElement | string;
}

const useContactForm = ({ formData }: ContactFormData) => {
  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const pubKey = process.env.REACT_APP_PUB_KEY as string;
    const serviceID = process.env.REACT_APP_SERVICE_ID as string;
    const templateID = process.env.REACT_APP_TEMPLATE_ID as string;

    try {
      const response = await emailjs.sendForm(
        serviceID,
        templateID,
        formData,
        pubKey
      );

      if (response?.status === 200) {
        toast.success("Message sent successfully");
      }
    } catch (error) {
      toast.error(
        "Can't send your message at this time. Please try again later"
      );
    }
  };

  return {
    sendEmail
  };
};

export default useContactForm;
