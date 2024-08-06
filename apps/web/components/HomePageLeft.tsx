'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'
import SocialHandles from './shared/SocialHandles'
import { urlFor } from '@/utils/urlFor'

function HomePageLeft({heroImage}: {heroImage : any}) {
  return (
    <motion.div
      className=" flex-between flex-col max-sm:justify-end gap-10 max-sm:gap-4 w-[30%] h-[28vw] max-sm:h-2/5 max-sm:w-full sm:pt-4 pb-2 "
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ ease: 'easeInOut', duration: 1, delay: 0.4 }}
    >
      <div
        className=" rounded-full h-[17vw] w-[17vw] relative -z-10 
          max-tablet:h-40 max-tablet:w-40 flex-center 
        "
      >
        <motion.div
          className="bg-purple-400 rounded-full h-5/6 w-5/6
          blur-[70px] opacity-90
          "
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

      <div className="w-5/6 max-sm:w-full flex flex-col justify-end items-center gap-2 ">
        <p className="text-[1.3vw] max-tablet:text-base w-full text-center">
          Hey! 👋, Let&apos;s connect 🚀
        </p>
        <SocialHandles additionalStyle="flex-center gap-4 max-sm:gap-2 rounded-xl   max-sm:w-40 " />
      </div>
    </motion.div>
  )
}

export default HomePageLeft
