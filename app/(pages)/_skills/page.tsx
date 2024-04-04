"use client"
import TextUnderline from '@/components/shared/TextUnderline'
import { motion } from 'framer-motion'
import React from 'react'
function Skills() {
  return (
    <motion.div
      id="skills"
      className="h-[calc(100vh-7rem)]  pt-28  max-sm:pt-20 flex flex-col  gap-14 relative "
      
    >
      <TextUnderline
        text="Skills"
        textStyles="text-[3.2vw] max-sm:text-4xl font-medium "
        containerDivStyles="w-[10%] max-sm:w-full  max-sm:flex-center"
        underlineStyles=" bg-gradient-to-r from-indigo-600 via-purple-400 to-yellow-500   "
      />

      {/* bg gradient purple */}
      <div
        className="absolute opacity-80 left-10 h-1/5  aspect-square  blur-[100px] rounded-full
      bg-gradient-to-r from-indigo-600 via-yellow-300 to-purple-400   
      "
      ></div>

      <div className="text-2xl max-sm:text-sm max-sm:px-2 text-justify  flex-col flex-center gap-4">
          <h2>{"// "}skills page is yet to be implemented {";)"}</h2>
      </div>

     
    </motion.div>
 )
}

export default Skills
