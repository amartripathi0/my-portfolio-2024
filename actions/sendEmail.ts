"use server";

import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
  const sendersName = formData.get("name");
  const sendersEmail = formData.get("email");
  const sendersMessage = formData.get("message");

  if (!sendersEmail || typeof sendersEmail !== "string") {
    return {
      error: "Invalid message",
    };
  }
  if (!sendersMessage || typeof sendersMessage !== "string") {
    return {
      error: "Invalid message",
    };
  }
  
  try {
    resend.emails.send({
      from: "Amar's Portfolio <onboarding@resend.dev>",
      to: ["theamartripathi@gmail.com"],
      subject: `Message from ${sendersName}`,
      text: sendersMessage,
      reply_to: sendersEmail,
    });
  } catch (error) {
    console.log(error);
  }
}
