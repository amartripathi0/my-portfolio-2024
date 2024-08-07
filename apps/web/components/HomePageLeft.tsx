'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'
import SocialHandles from './shared/SocialHandles'
import { urlFor } from '@/utils/urlFor'

function HomePageLeft({ heroImage }: { heroImage: any }) {
  return (
    <motion.div
      className="flex-between h-2/5 w-full flex-col gap-4 pb-2 max-sm:justify-end sm:h-[28vw] sm:w-[30%] sm:gap-10 sm:pt-4"
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ ease: 'easeInOut', duration: 1, delay: 0.6 }}
    >
      {/* Image with Purple Filter */}
      <div className="flex-center custom-cursor-hidden md:size-[17vw] relative -z-10 aspect-square h-40 rounded-full">
        <motion.div
          className="custom-cursor-hidden size-5/6 rounded-full bg-purple-400 opacity-90 blur-[70px]"
          initial={{
            opacity: 0,
            scale: 0,
          }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'circInOut' }}
        ></motion.div>

        <Image
          src={urlFor(heroImage).url()}
          alt="Main Profile picture"
          sizes="3464"
          fill
          priority
          loading="eager"
          className="custom-cursor-hidden rounded-full"
        />
      </div>

      <div className="flex w-full flex-col items-center justify-end gap-5 sm:w-5/6">
        <p className="md:text-[1.3vw] w-full text-center text-base">
          Hey! 👋, Let&apos;s connect 🚀
        </p>
        <SocialHandles additionalStyle="flex-center gap-2 sm:gap-4 rounded-xl  max-sm:w-40 " />
      </div>
    </motion.div>
  )
}

export default HomePageLeft
