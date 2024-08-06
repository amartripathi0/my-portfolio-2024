'use client'
import { motion } from 'framer-motion'
import React from 'react'
import TextUnderline from './shared/TextUnderline'
import { TextGenerateEffect } from './ui/TextGenEffect'

function HomePageRight({
  firstName,
  lastName,
}: {
  firstName: string
  lastName: string
}) {
  return (
    <motion.div className="max-sm:flex-center mr-2 flex h-[28vw] flex-col items-center justify-between gap-[1vw] max-sm:mr-0 max-sm:h-80 sm:items-end">
      <div className="flex-center relative flex flex-col text-6xl font-bold sm:items-end tablet:text-[10vw]">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: 'easeInOut', duration: 1, delay: 1.5 }}
          className="pink-cursor-lg bg-clip-text uppercase leading-none tracking-wider"
        >
          {firstName}{' '}
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: 'easeInOut', duration: 1, delay: 2 }}
          className="pink-cursor-lg bg-gradient-to-b from-neutral-200 to-neutral-700 bg-clip-text uppercase leading-none text-transparent max-tablet:m-0 tablet:leading-[110px]"
        >
          {lastName}
        </motion.h1>
      </div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ ease: 'easeInOut', duration: 1.5, delay: 3 }}
        className="text-right text-[1.3vw] max-tablet:text-center max-tablet:text-sm max-sm:mt-6"
      >
        <div>
          {' '}
          I&apos;m a{' '}
          <TextUnderline
            text="Full-Stack Web Developer"
            textStyles="text-purple-300 font-medium hover:text-purple-400 transition-colors duration-500 sm:text-xl text-sm"
            underlineStyles="bg-purple-400"
          />
          , turning your ideas into reality.
        </div>
        <TextGenerateEffect
          className="text-right text-[1.3vw] max-tablet:text-center max-tablet:text-sm"
          words="Passionate about Coding 👨‍💻, Music  🎵, Video 🎥 ."
        />
      </motion.div>
    </motion.div>
  )
}

export default HomePageRight
