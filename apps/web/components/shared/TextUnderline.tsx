'use client'
import React, { useState } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { cn } from '@/lib/utils'
import { cva } from 'class-variance-authority'

const TextUnderlineVariants = cva('inline-block relative w-fit', {
  variants: {
    textType: {
      pageHeading: 'text-4xl sm:text-[3.2vw] font-bold', //for page title
      skill: 'text-[9.1px]', //for skill page
      default: 'text-sm', //for project tool and navbar items
    },
  },
  defaultVariants: {
    textType: 'default',
  },
})

interface TextUnderlineProps {
  text: string
  textType?: 'skill' | 'pageHeading'
  textStyles?: string
  underlineStyles?: string
  containerDivStyles?: string
}

const TextUnderline = ({
  text,
  textType,
  textStyles,
  underlineStyles,
  containerDivStyles, // container styles of entire div
}: TextUnderlineProps) => {
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
      className={cn('relative inline-block', containerDivStyles)}
    >
      {textType === 'pageHeading' ? (
        <h1
          className={cn(
            'relative inline-block',
            TextUnderlineVariants({ textType }),
            textStyles,
          )}
        >
          {text}
        </h1>
      ) : (
        <span
          className={cn(
            'relative inline-block',
            TextUnderlineVariants({ textType }),
            textStyles,
          )}
        >
          {text}
        </span>
      )}
      {/* underline div */}
      <motion.div
        initial={{
          scaleX: 0,
        }}
        animate={controls}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
        className={cn(
          'absolute bottom-0 left-0 mb-1 h-[7%] w-full rounded-xl bg-white drop-shadow-lg',
          underlineStyles,
          textType === 'pageHeading' && '-z-10 -mb-1 h-[12%]',
          textType === 'skill' && 'mb-0 h-[9%]',
        )}
      ></motion.div>
    </motion.div>
  )
}

export default TextUnderline
