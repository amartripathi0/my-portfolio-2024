import { ContactMeForm } from '@/components/ContactMeForm'
import IndigoBlurBackground from '@/components/shared/IndigoBlurBackground'
import PageTitle from '@/components/shared/PageTitle'

function Contact() {
  return (
    <div
      className="h-[calc(100vh-4rem)] max-sm:h-[calc(100vh-3rem)] max-sm:pt-10  py-10 flex flex-col  gap-2 max-sm:gap-4 relative "
      id="contact-me"
    >
      <PageTitle
        pageTitle="Contact Me"
        textStyles="text-[3.2vw] max-sm:text-4xl font-bold"
        containerDivStyles="w-[24%] max-sm:w-full  max-sm:flex-center"
        underlineStyles=" bg-gradient-to-r from-indigo-600 via-purple-400 to-yellow-500"
      />

      <IndigoBlurBackground
        height="1/5"
        mobHeight="5"
        additionalStyles="left-10 max-sm:left-1/3 -max-sm:top-20"
      />

      {/* <div
        className="absolute opacity-80 left-10 h-1/5  aspect-square  blur-[100px] rounded-full
      bg-gradient-to-r from-indigo-600 via-yellow-300 to-purple-400   
      "
      /> */}
      <ContactMeForm />
      <p className="absolute bottom-0 mb-2 max-sm:mb-1 max-sm:text-sm flex items-center gap-2 max-sm:gap-1">
        <span className="font-bold text-lg">&copy;</span> 2024 Amar Tripathi
      </p>
    </div>
  )
}

export default Contact
