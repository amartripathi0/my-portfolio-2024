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
        style="bottom-0 lg:-right-20 right-40 border-2 border-red-500 max-sm:opacity-0 md:h-1/3 lg:h-2/5 blur-[250px] bg-gradient-to-r from-indigo-500 to-purple-400 overflow-hidden"
      />

      <ContactMeForm />
      <p className="absolute bottom-0 mb-1 flex items-center gap-1 sm:mb-2 sm:gap-2 text-sm md:text-lg">
        <span className="font-bold text-lg">
          &copy;
        </span>{' '}
        2024 Amar Tripathi
      </p>
    </div>
  )
}

export default Contact
