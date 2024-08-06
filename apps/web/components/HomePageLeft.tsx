'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'
import SocialHandles from './shared/SocialHandles'
import { urlFor } from '@/utils/urlFor'

function HomePageLeft({ heroImage }: { heroImage: any }) {
  return (
    <motion.div
      className=" flex-between flex-col max-sm:justify-end gap-4 sm:gap-10 w-full sm:w-[30%] h-2/5 sm:h-[28vw] sm:pt-4 pb-2"
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ ease: 'easeInOut', duration: 1, delay: 0.6 }}
    >
      {/* Image with Purple Filter */}
      <div
        className=" rounded-full h-40 aspect-square tablet:size-[17vw] relative -z-10 flex-center"
      >
        <motion.div
          className="bg-purple-400 rounded-full size-5/6 blur-[70px] opacity-90"
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
          className="rounded-full"
        />
      </div>

      <div className="w-full sm:w-5/6 flex flex-col justify-end items-center gap-5 ">
        <p className="text-base tablet:text-[1.3vw] w-full text-center">
          Hey! 👋, Let&apos;s connect 🚀
        </p>
        <SocialHandles additionalStyle="flex-center gap-2 sm:gap-4 rounded-xl  max-sm:w-40 " />
      </div>
    </motion.div>
  )
}

export default HomePageLeft
