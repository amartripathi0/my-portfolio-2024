import { ContactMeForm } from '@/blocks/ContactMeForm'
import BackgroundBlur from '@/components/shared/BackgroundBlur'
import { MotionSection } from '@/components/shared/Motion'
import PageLayout from '@/components/shared/page-layout'
import TextUnderline from '@/components/shared/TextUnderline'
import { pageSectionVariant } from '@/constants'
import Link from 'next/link'
import { IoMail } from 'react-icons/io5'

function Contact() {
  return (
    <PageLayout
      pageId='contact-me'
      pageTitle='Contact Me'
    >
      <BackgroundBlur
        blurColor="indigo"
        style="left-1/3 top-20 h-5 sm:left-[45%] sm:top-0 sm:h-20"
      />

      <BackgroundBlur
        blurColor="purple"
        style="bottom-0 right-40 border-2 border-red-500 opacity-0 md:opacity-100 md:h-1/3 lg:right-20 lg:h-2/5 blur-[250px] bg-gradient-to-r from-indigo-500 to-purple-400 overflow-hidden"
      />

      <ContactMeForm />
      <div className="flex items-center justify-center sm:gap-3 text-sm max-sm:flex-col 3xl:text-lg w-full mb-2">
        <div className='text-center'>
          Designed & Developed by <Link className='text-purple-400 underline decoration-blue-400' href={'/'}>Amar Tripathi</Link></div>
        <span className='max-sm:hidden text-neutral-400'>|</span>


        <p className="flex items-center gap-2">
          <span className="text-base font-bold mt-px">&copy;</span> 2024 Amar Tripathi
        </p>
        <span className='max-sm:hidden text-neutral-400'>|</span>
        <p className="flex items-center gap-2">
          <IoMail /> theamartripathi@gmail.com
        </p>
      </div>
    </PageLayout>
  )
}

export default Contact
