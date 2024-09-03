import { ContactMeForm } from '@/components/ContactMeForm'
import BackgroundBlur from '@/components/shared/BackgroundBlur'
import { MotionSection } from '@/components/shared/Motion'
import PageTitle from '@/components/shared/PageTitle'
import { pageSectionVariant } from '@/constants'

function Contact() {
  return (
    <MotionSection
      initial={'initial'}
      whileInView={'inView'}
      viewport={{ once: true }}
      variants={pageSectionVariant}
      id="contact-me"
      className="relative flex h-[calc(100vh-3rem)] flex-col gap-4 py-10 sm:h-[calc(100vh-4rem)] sm:gap-2"
    >
      <PageTitle
        pageTitle="Contact Me"
        underlineStyles=" bg-gradient-to-r from-indigo-600 via-purple-400 to-yellow-500"
      />

      <BackgroundBlur
        blurColor="indigo"
        style="left-1/3 top-20 h-5 sm:left-10 sm:top-0 sm:h-1/6"
      />

      <BackgroundBlur
        blurColor="purple"
        style="bottom-0 right-40 border-2 border-red-500 opacity-0 md:opacity-100 md:h-1/3 lg:right-20 lg:h-2/5 blur-[250px] bg-gradient-to-r from-indigo-500 to-purple-400 overflow-hidden"
      />

      <ContactMeForm />
      <p className="absolute bottom-0 mb-1 flex items-center gap-1 text-sm sm:mb-2 sm:gap-2 md:text-base">
        <span className="text-lg font-bold">&copy;</span> 2024 Amar Tripathi
      </p>
    </MotionSection>
  )
}

export default Contact
