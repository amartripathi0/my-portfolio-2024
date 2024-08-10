import Image from 'next/image'
import React from 'react'
import SocialHandles from './shared/SocialHandles'
import { urlFor } from '@/utils/urlFor'
import { MotionDiv } from './shared/Motion'

function HomePageLeft({ heroImage }: { heroImage: any }) {
  return (
    <MotionDiv
      className="flex-between h-2/5 w-full flex-col gap-4 max-sm:justify-end md:h-1/2 md:w-fit md:gap-0 lg:h-[27.6vw] lg:w-[30%] lg:gap-8"
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ ease: 'easeInOut', duration: 1, delay: 1.2 }}
    >
      {/* Image with Purple Filter */}
      <div className="flex-center custom-cursor-hidden relative -z-10 aspect-square h-40 rounded-full md:size-48 lg:size-[17vw]">
        <MotionDiv
          className="size-5/6 rounded-full bg-purple-400 opacity-90 blur-[70px]"
          initial={{
            opacity: 0,
            scale: 0,
          }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'circInOut' }}
        ></MotionDiv>

        <Image
          src={urlFor(heroImage).url()}
          alt="Main Profile picture"
          sizes="3464"
          fill
          priority
          loading="eager"
          className="custom-cursor-hidden aspect-square rounded-full md:size-40"
        />
      </div>

      <div className="flex w-full flex-col items-center justify-end gap-2 sm:w-5/6 md:gap-2 lg:gap-5">
        <p className="w-full text-center text-sm md:text-[1.3vw]">
          Hey! 👋, Let&apos;s connect 🚀
        </p>
        <SocialHandles additionalStyle="flex-center gap-2 lg:gap-4 rounded-xl max-sm:w-40 " />
      </div>
    </MotionDiv>
  )
}

export default HomePageLeft
