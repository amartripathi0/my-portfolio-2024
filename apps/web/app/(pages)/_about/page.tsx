import AboutPageRight from '@/components/AboutPageRight'
import BackgroundBlur from '@/components/shared/BackgroundBlur'
import { MotionSection } from '@/components/shared/Motion'
import TextUnderline from '@/components/shared/TextUnderline'
import { pageSectionVariant } from '@/constants'
import { ABOUT_PAGE_QUERY } from '@/sanity/queries'
import { About as AboutType } from '@/sanity/types'
import { getSanityData } from '@/utils/getSanityData'
import { PortableText } from '@portabletext/react'

const About = async () => {
  const { title, resume, heroImage, aboutContent }: AboutType =
    await getSanityData(ABOUT_PAGE_QUERY)

  return (
    <MotionSection
      initial={'initial'}
      whileInView={'inView'}
      viewport={{ once: true }}
      variants={pageSectionVariant}
      id="about-me"
      className="relative flex h-[calc(100vh-6rem)] items-center gap-4 max-md:flex-col max-sm:pt-0 sm:h-[calc(100vh-10rem)] md:gap-[8vw]"
    >
      {/* Left section */}
      <div className="md:max-w-1/2 flex w-full flex-col items-center md:h-4/5 md:items-start lg:w-[70%]">
        <BackgroundBlur blurColor="indigo" style="h-1/6 max-sm:left-1/4" />

        {/* About Me heading */}
        <TextUnderline
          textType='pageHeading'
          text={title || ''}
          underlineStyles=" bg-gradient-to-r from-indigo-600 via-purple-400 to-cyan-600 "
        />

        {/* About me paragraphs */}
        <div className="flex-center w-full flex-col gap-2 text-pretty py-4 text-justify font-raleway text-sm text-neutral-100 sm:py-6 sm:text-base">
          {aboutContent ? <PortableText value={aboutContent} /> : null}
        </div>
      </div>

      {/* Right section */}
      <AboutPageRight heroImage={heroImage} resumeUrl={resume || ''} />
    </MotionSection>
  )
}

export default About
