'use client'
import Spotlight from '@/components/ui/Spotlight'
import Image from 'next/image'
import { TextGenerateEffect } from '@/components/ui/TextGenEffect'
import { motion } from 'framer-motion'
import SocialHandles from '@/components/shared/SocialHandles'
import TextUnderline from '@/components/shared/TextUnderline'

const Landing = () => {
  return (
    <div
      id="home"
      className="h-[calc(100vh-5rem)] flex-between  max-tablet:flex-col max-sm:justify-start  max-sm:pt-10 "
    >
      {/* left image and social handles*/}
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
            src={'/assets/amarHome.jpg'}
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

      {/* right side */}
      <motion.div className="flex justify-between items-end flex-col max-sm:items-center max-sm:flex-center gap-[1vw]  h-[28vw] max-sm:h-80 mr-2 max-sm:mr-0 ">
        <div
          className="flex flex-col text-[10vw]  items-end max-tablet:flex-center 
            max-tablet:text-6xl  font-bold"
        >
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: 'easeInOut', duration: 1, delay: 1.5 }}
            className=" tracking-wider leading-none"
          >
            AMAR{' '}
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: 'easeInOut', duration: 1, delay: 2 }}
            className="   max-tablet:m-0  leading-[110px] max-tablet:leading-none
            bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-700
            "
          >
            TRIPATHI
          </motion.h1>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ ease: 'easeInOut', duration: 1.5, delay: 3 }}
          className="text-[1.3vw] text-right max-tablet:text-center max-tablet:text-sm max-sm:mt-6"
        >
          <div>
            {' '}
            I&apos;m a{' '}
            <TextUnderline
              text="Full-Stack Web Developer"
              textStyles="text-purple-300 font-medium hover:text-purple-400 transition-colors duration-500 text-xl max-sm:text-sm"
              underlineStyles="bg-purple-400"
            />
            , turning your ideas into reality.
          </div>
          <TextGenerateEffect
            className="text-[1.3vw] text-right max-tablet:text-center max-tablet:text-sm"
            words="Passionate about Coding 👨‍💻, Music  🎵, Video 🎥 ."
          />
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Landing
