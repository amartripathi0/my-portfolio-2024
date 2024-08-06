import AboutPageRight from '@/components/AboutPageRight'
import BackgroundBlur from '@/components/shared/BackgroundBlur'
import IndigoBlurBackground from '@/components/shared/IndigoBlurBackground'
import PageTitle from '@/components/shared/PageTitle'
import { ABOUT_PAGE_QUERY } from '@/sanity/queries'
import { AboutPageDataType } from '@/types'
import { getSanityData } from '@/utils/getSanityData'
import { PortableText } from "@portabletext/react";

const About = async () => {
  const { title, resume, heroImage, aboutContent }: AboutPageDataType = await getSanityData(ABOUT_PAGE_QUERY)
  console.log(aboutContent);

  return (
    <div
      id="about-me"
      className="h-[calc(100vh-5rem)] max-sm:h-[calc(100vh-5rem)] max-sm:pt-0 flex-between relative  max-sm:flex-col"
    >
      {/* Left section */}
      <div className="flex flex-col w-3/4 sm:h-4/5 max-sm:w-full max-sm:gap-2">
        {/* bg gradient indigo cyan */}
        {/* <IndigoBlurBackground height="1/5" additionalStyles="max-sm:left-1/4" /> */}
        <BackgroundBlur 
        blurColor = 'indigo'
        style = 'h-1/6 max-sm:left-1/4' 
        />

        {/* About Me heading */}
        <PageTitle
          pageTitle={title}
          underlineStyles=" bg-gradient-to-r from-indigo-600 via-purple-400 to-cyan-600"
        />

        {/* About me paragraphs */}
        <div
          className="text-base py-4 w-full max-sm:text-sm max-sm:px-2 text-justify  flex-col flex-center gap-4"
        >
          <PortableText
            value={aboutContent} />
        </div>

      </div>

      {/* Right section */}
      <AboutPageRight
        heroImage={heroImage}
        resumeUrl={resume}
      />
    </div>
  )
}

export default About
