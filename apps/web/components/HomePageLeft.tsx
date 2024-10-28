import Image from 'next/image'
import React from 'react'
import SocialHandles from './shared/SocialHandles'
import { urlFor } from '@/utils/urlFor'
import { MotionDiv, MotionSpan } from './shared/Motion'
import Link from 'next/link'
import { FaArrowCircleRight } from 'react-icons/fa'
import { MovingBorder } from './ui/moving-border'
import { BorderBeam } from './ui/border-beam'

function HomePageLeft({ heroImage }: { heroImage: any }) {
  return (
    <MotionDiv
      className="flex-between relative h-2/5 w-full flex-col gap-4 max-sm:justify-end md:h-1/2 md:w-fit md:gap-0 lg:h-[27.9vw] lg:w-[30%] lg:gap-4 lg:pt-5"
      initial={{ opacity: 0, scale: 1, y: -40 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ ease: 'easeInOut', duration: 1, delay: 0 }}
    >
      <span className="left-2/5 absolute -top-3 -rotate-6 rounded-full p-2 text-sm font-medium md:left-0 md:top-0 md:-rotate-12 md:px-2.5 md:text-base lg:left-[4vw]">
        <BorderBeam size={60} duration={5} borderWidth={2} delay={4.6}/>
        Open to Work!
      </span>
      {/* Image with Purple Filter */}
      <div className="flex-center custom-cursor-hidden relative -z-10 aspect-square h-40 rounded-full md:size-48 lg:size-[16vw]">
        <MotionDiv
          className="size-3/4 rounded-full bg-purple-500 blur-[70px]"
          // initial={{
          //   opacity: 0,
          //   scale: 0,
          // }}
          // animate={{ opacity: 1, scale: 1 }}
          // transition={{ duration: 1, ease: 'circInOut' }}
        ></MotionDiv>

        <Image
          src={urlFor(heroImage).url()}
          alt="Main Profile picture"
          sizes="300"
          fill
          priority
          loading="eager"
          className="custom-cursor-hidden aspect-square rounded-full"
        />
      </div>
      <div className="flex-between w-full flex-col gap-4 sm:w-5/6">
        <p className="text-sm md:text-[1.3vw]">
          Hey! 👋, Let&apos;s connect 🚀
        </p>
        <div className="flex gap-4 lg:mr-1 lg:gap-5">
          <SocialHandles additionalStyle="flex-between gap-4 lg:gap-5" />
          <Link
            target="_blank"
            href={
              'https://drive.google.com/file/d/1jYqHQJ93cNthsEKBRLF7tXHaP2v52pmE'
            }
            className="flex-center opacity-76 gap-2 rounded border px-2 py-1.5 text-sm font-medium transition-all duration-200 hover:scale-105 hover:text-purple-300 hover:opacity-100 md:text-[1vw]"
          >
            Resume{' '}
            <FaArrowCircleRight className="-rotate-45 text-sm md:text-[1vw]" />
          </Link>
        </div>
      </div>
    </MotionDiv>
  )
}

export default HomePageLeft
