import { ContactMeForm } from '@/components/ContactMeForm'
import BackgroundBlur from '@/components/shared/BackgroundBlur'
import PageTitle from '@/components/shared/PageTitle'

function Contact() {
  return (
    <div
      className="relative flex h-[calc(100vh-4rem)] flex-col gap-4 py-10 max-sm:h-[calc(100vh-3rem)] sm:gap-2"
      id="contact-me"
    >
      <PageTitle
        pageTitle="Contact Me"
        underlineStyles=" bg-gradient-to-r from-indigo-600 via-purple-400 to-yellow-500"
      />

      <BackgroundBlur
        blurColor="indigo"
        style="left-10 max-sm:left-1/3 -max-sm:top-20 h-5 sm:h-1/6"
      />
      <BackgroundBlur
        blurColor="purple"
        style="bottom-0 -right-20 max-sm:opacity-0 sm:h-2/5 blur-[250px] bg-gradient-to-r from-indigo-500 to-purple-400 overflow-hidden"
      />

      <ContactMeForm />
      <p className="absolute bottom-0 sm:mb-2 flex items-center sm:gap-2 mb-1 gap-1">
        <span className="text-sm sm:text-lg font-bold text-opacity-0">&copy;</span> 2024 Amar Tripathi
      </p>
    </div>
  )
}

export default Contact
