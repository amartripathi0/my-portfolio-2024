import { ContactMeForm } from '@/components/ContactMeForm'
import BackgroundBlur from '@/components/shared/BackgroundBlur'
import { MotionSection } from '@/components/shared/Motion'
import PageTitle from '@/components/shared/PageTitle'
import TextUnderline from '@/components/shared/TextUnderline'
import { pageSectionVariant } from '@/constants'
import { IoMail } from 'react-icons/io5'

function Contact() {
  return (
    <MotionSection
      initial={'initial'}
      whileInView={'inView'}
      viewport={{ once: true }}
      variants={pageSectionVariant}
      id="contact-me"
      className="relative flex h-[calc(100vh-3rem)] flex-col items-center gap-4 py-10 sm:h-[calc(100vh-4rem)] sm:gap-2"
    >
      {/* <PageTitle
        pageTitle="Contact Me"
        underlineStyles=""
      /> */}
      <TextUnderline
        textType="pageHeading"
        text="Contact Me"
        underlineStyles=" bg-gradient-to-r from-indigo-600 via-purple-400 to-yellow-500"
      />
      <BackgroundBlur
        blurColor="indigo"
        style="left-1/3 top-20 h-5 sm:left-[45%] sm:top-0 sm:h-20"
      />

      <BackgroundBlur
        blurColor="purple"
        style="bottom-0 right-40 border-2 border-red-500 opacity-0 md:opacity-100 md:h-1/3 lg:right-20 lg:h-2/5 blur-[250px] bg-gradient-to-r from-indigo-500 to-purple-400 overflow-hidden"
      />

      <ContactMeForm />
      <div className="absolute bottom-0 flex items-center text-sm max-sm:flex-col sm:mb-2 sm:gap-2 md:text-base 3xl:text-lg">
        <p className="flex items-center gap-2">
          <span className="text-lg font-bold">&copy;</span> 2024 Amar Tripathi
        </p>
        <p className="flex items-center gap-2">
          <IoMail /> theamartripathi@gmail.com
        </p>
      </div>
    </MotionSection>
  )
}

export default Contact
