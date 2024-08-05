'use client'
import React, { useState } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { cn } from '@/lib/utils'
import { cva } from "class-variance-authority";

type textVariant = "skill" | "pageHeading"

type TextUnderlineProps = {
  textVariant: textVariant,
  text: string
}

type TextUnderlineVariantFunction = (props: TextUnderlineProps) => string;

const TextUnderlineVariants = cva(
  "inline-block relative w-fit",
  {
    variants: {
      textType: {
        pageHeading: 'text-4xl sm:text-[3.2vw] font-bold',
        skill: 'text-[9.1px]',
        default: 'text-sm'
      },
      containerType: {
        pageHeading: 'w-full flex-center sm:w-fit',
      },
    },
    defaultVariants: {
      textType: "default"
    }
  }
)
const TextUnderline = ({
  text,
  textType,
  textStyles,
  containerType,
  underlineStyles,
  containerDivStyles,
}: {
  text: string
  textType?: "skill" | "pageHeading"
  textStyles?: string
  containerType?: "skill" | "pageHeading"
  underlineStyles?: string
  containerDivStyles?: string
}) => {
  const [isHovered, setIsHovered] = useState(false)
  const controls = useAnimation()

  const handleHoverStart = () => {
    setIsHovered(true)
    controls.start({
      scaleX: 1,
      originX: 'left',
      opacity: 1,
    })
  }

  const handleHoverEnd = () => {
    setIsHovered(false)
    controls.start({
      scaleX: 0,
      originX: 'right',
      opacity: 1,
    })
  }

  return (
    <motion.div
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
      className={cn("inline-block relative", containerDivStyles)}
    >
      <h1
        className={cn("inline-block relative", TextUnderlineVariants({ textType }), textStyles)}
      >
        {text}
      </h1>
      <motion.div
        initial={{
          scaleX: 0,
        }}
        animate={controls}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
        className={cn("absolute bottom-0 mb-1 left-0 h-[7%] w-full rounded-xl drop-shadow-lg bg-white ",
          underlineStyles,
          {
            'h-[12%] -mb-1 -z-10' :  textType === 'pageHeading',
            'h-[9%] mb-0' :  textType === 'skill',
          }
        )} 
      ></motion.div>
    </motion.div>
  )
}

export default TextUnderline
