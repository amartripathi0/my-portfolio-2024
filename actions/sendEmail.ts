"use server";

import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
  const sendersName = formData.get("name");
  const sendersEmail = formData.get("email");
  const sendersMessage = formData.get("message");
  const validEmailRegex =
    /^[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}$/;

  try {
    if (
      !sendersName ||
      typeof sendersName !== "string" ||
      sendersName.length === 0
    ) {
      return {
        error: "Please enter a valid name.",
      };
    }
    if (
      !sendersEmail ||
      typeof sendersEmail !== "string" ||
      sendersEmail.length === 0 ||
      !sendersEmail.match(validEmailRegex)
    ) {
      return {
        error: "Please enter a valid email address.",
      };
    }
    if (
      !sendersMessage ||
      typeof sendersMessage !== "string" ||
      sendersMessage.length === 0
    ) {
      return {
        error: "Please enter a valid message.",
      };
    }

    const res = await resend.emails.send({
      from: "Amar's Portfolio <onboarding@resend.dev>",
      to: ["theamartripathi@gmail.com"],
      subject: `Message from ${sendersName}`,
      text: `Message from\n ${sendersMessage}`,
      reply_to: sendersEmail,
    });

    return res;
  } catch (error) {
    return { error: "Error occured while sending the message!" };
  }
}
