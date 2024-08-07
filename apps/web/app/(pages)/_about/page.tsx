import AboutPageRight from '@/components/AboutPageRight'
import BackgroundBlur from '@/components/shared/BackgroundBlur'
import PageTitle from '@/components/shared/PageTitle'
import { ABOUT_PAGE_QUERY } from '@/sanity/queries'
import { About as AboutType } from '@/sanity/types'
import { getSanityData } from '@/utils/getSanityData'
import { PortableText } from '@portabletext/react'

const About = async () => {
  const { title, resume, heroImage, aboutContent }: AboutType =
    await getSanityData(ABOUT_PAGE_QUERY)

  return (
    <div
      id="about-me"
      className="flex-between relative h-[calc(100vh-5rem)] max-sm:h-[calc(100vh-5rem)] max-sm:flex-col max-sm:pt-0"
    >
      {/* Left section */}
      <div className="flex w-3/4 flex-col max-sm:w-full max-sm:gap-2 sm:h-4/5">
        <BackgroundBlur blurColor="indigo" style="h-1/6 max-sm:left-1/4" />

        {/* About Me heading */}
        <PageTitle
          pageTitle={title || ''}
          underlineStyles=" bg-gradient-to-r from-indigo-600 via-purple-400 to-cyan-600"
        />

        {/* About me paragraphs */}
        <div className="flex-center w-full flex-col gap-2 py-10 text-justify text-base max-sm:px-2 max-sm:text-sm">
          {aboutContent ? <PortableText value={aboutContent} /> : <></>}
        </div>
      </div>

      {/* Right section */}
      <AboutPageRight heroImage={heroImage} resumeUrl={resume || ''} />
    </div>
  )
}

export default About
