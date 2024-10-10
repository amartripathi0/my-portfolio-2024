'use client'
import { cn } from '@/utils/cn'
import { Label } from './ui/label'
import { Input } from './ui/input'
import Link from 'next/link'
import { socialMediaLinks } from '@/constants'
import { sendEmail } from '@/actions/sendEmail'
import { toast } from 'sonner'
import { Button } from './ui/moving-border'

const clientAction = async (formData: FormData) => {
  const emailResponse = await sendEmail(formData)

  if (emailResponse?.error) {
    toast.error(emailResponse?.error.toString())
  } else {
    toast.success("Message sent, I'll reach out to you soon.")
  }
}
export function ContactMeForm() {
  return (
    <Button
      duration={15000}
      borderClassName="h-16 w-16 blur-[20px]"
      borderRadius="6px"
      containerClassName="mx-auto border border-slate-800 p-6 max-sm:w-full 3xl:w-1/3 3xl:h-3/4 shadow-input"
    >
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
            className="dark:placeholder-text-neutral-600 duration-400 custom-cursor-hidden max-h-[135px] min-h-20 w-full rounded-[6px] border-none bg-zinc-800 px-3 py-2 text-sm text-white shadow-input transition file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-400 focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-400 disabled:cursor-not-allowed disabled:opacity-50 group-hover/input:shadow-none dark:shadow-[0px_0px_1px_1px_var(--neutral-700)] dark:focus-visible:ring-neutral-600 max-sm:max-h-24 3xl:max-h-52 3xl:min-h-40 3xl:text-lg"
          ></textarea>
        </LabelInputContainer>

        <button
          className="group/btn from-black relative my-6 block h-10 w-full rounded-md bg-gradient-to-br to-neutral-600 font-semibold text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] 3xl:h-12"
          type="submit"
        >
          <p className="pink-cursor-sm 3xl:text-xl">Let&apos;s Connect 🚀 </p>
          <BottomGradient />
        </button>

        <div className="my-6 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />

        <div className="flex items-center justify-between gap-4 max-sm:flex-col max-sm:gap-2">
          {socialMediaLinks.map(({ label, url, icon: SocialIcon }) => (
            <Link
              target="_blank"
              key={label}
              className="group/btn text-black relative flex h-10 w-full items-center justify-center space-x-2 rounded-md bg-zinc-900 px-4 font-medium shadow-input dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
              href={url}
            >
              <SocialIcon className="pink-cursor-sm h-4 w-4 text-neutral-300" />
              <span className="pink-cursor-sm text-sm text-neutral-300 3xl:text-lg">
                {label}
              </span>
              <BottomGradient />
            </Link>
          ))}
        </div>
      </form>
    </Button>
  )
}

const BottomGradient = () => {
  return (
    <div>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </div>
  )
}

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <div className={cn('flex w-full flex-col space-y-2', className)}>
      {children}
    </div>
  )
}
