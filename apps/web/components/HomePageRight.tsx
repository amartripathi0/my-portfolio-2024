'use client'
import { motion } from 'framer-motion'
import React from 'react'
import TextUnderline from './shared/TextUnderline'
import { TextGenerateEffect } from './ui/TextGenEffect'

function HomePageRight({firstName, lastName } : {firstName:string, lastName:string}) {
  console.log(firstName);
  
  return (
    <motion.div className="flex justify-between items-end flex-col max-sm:items-center max-sm:flex-center gap-[1vw]  h-[28vw] max-sm:h-80 mr-2 max-sm:mr-0 ">
        <div
          className="flex flex-col text-[10vw]  items-end max-tablet:flex-center 
            max-tablet:text-6xl  font-bold"
        >
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: 'easeInOut', duration: 1, delay: 1.5 }}
            className=" tracking-wider leading-none uppercase"
          >
            {firstName}{' '}
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: 'easeInOut', duration: 1, delay: 2 }}
            className="   max-tablet:m-0  leading-[110px] max-tablet:leading-none
            bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-700
            uppercase"
          >
            {lastName}
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
  )
}

export default HomePageRight
