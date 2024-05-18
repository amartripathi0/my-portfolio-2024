"use client";
import React from "react";
import { cn } from "@/utils/cn";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import Link from "next/link";
import { socialMediaLinks } from "@/constants";
import { sendEmail } from "@/actions/sendEmail";
import { toast } from "sonner";
import { Button } from "./ui/moving-border";

const clientAction = async (formData: FormData) => {
  const emailResponse = await sendEmail(formData);

  if (emailResponse?.error) {
    toast.error(emailResponse?.error.toString());
  } else {
    toast.success("Message sent, I'll reach out to you soon.");
  }
};
export function ContactMeForm() {
  return (
    <Button 
    duration={10000}
    borderClassName="h-12 w-12 blur-[24px]"
    borderRadius="6px"
    containerClassName="mx-auto border border-slate-800 p-6 max-sm:w-full shadow-input">

      <form action={clientAction}>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            name="name"
            placeholder="Please enter your name here"
            type="text"
          />
        </LabelInputContainer>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            name="email"
            placeholder="Please enter your email here"
            type="email"
          />
        </LabelInputContainer>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="message">Message</Label>
          <textarea
            id="message"
            name="message"
            placeholder="Please enter your message here"
            className="w-full min-h-20 border-none bg-zinc-800 text-white shadow-input rounded-[6px] px-3 py-2 text-sm  file:border-0 file:bg-transparent 
          file:text-sm file:font-medium placeholder:text-neutral-400 dark:placeholder-text-neutral-600 
          focus-visible:outline-none focus-visible:ring-[2px]  focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600
           disabled:cursor-not-allowed disabled:opacity-50
           dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
           group-hover/input:shadow-none transition duration-400"
          ></textarea>
        </LabelInputContainer>

        <button
          className="my-6 bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Let&apos;s Connect
          <BottomGradient />
        </button>

        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-6 h-[1px] w-full" />

        <div className="flex items-center justify-between gap-4 max-sm:flex-col max-sm:gap-2">
          {socialMediaLinks.map(({ label, url, icon: SocialIcon }) => (
            <Link
              key={label}
              className=" relative group/btn flex space-x-2 items-center justify-center px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
              href={url}
            >
              <SocialIcon className="h-4 w-4 text-neutral-300" />
              <span className="text-neutral-300 text-sm">{label}</span>
              <BottomGradient />
            </Link>
          ))}
        </div>
      </form>
    </Button>
  );
}

const BottomGradient = () => {
  return (
    <div>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </div>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
