'use client'
import { SkillType } from '@/types'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Skill from '../Skill'

interface SkillsScrollContainerProps {
  frontendSkillsArray: SkillType[]
  backendSkillsArray: SkillType[]
  // slideSide: 'leftSlide' | 'rightSlide'
}
function SkillsScrollContainer({
  frontendSkillsArray,
  backendSkillsArray,
  // slideSide,
}: SkillsScrollContainerProps) {
  const targetRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start 0.9', 'start end'],
  })

  const leftSlide = useTransform(scrollYProgress, [0, 1], ['0%', '-15vw'])
  const rightSlide = useTransform(scrollYProgress, [0, 1], ['0%', '15vw'])
  const opacity = useTransform(scrollYProgress, [0.3, 1], [1, 0])

  return (
    <>
      <motion.div
        ref={targetRef}
        style={{ translateX: leftSlide, opacity: opacity }}
        className="flex flex-wrap justify-center gap-4 md:py-6 p-2 lg:py-10 "
      >
        {frontendSkillsArray.map(({ name, imageSrc }) => (
          <Skill key={name} name={name} imageSrc={imageSrc} />
        ))}
      </motion.div>

      <motion.div
        ref={targetRef}
        style={{ translateX: rightSlide, opacity: opacity }}
        className="flex flex-wrap justify-center gap-4 md:pb-12 max-sm:p-2"
      >
        {backendSkillsArray.map(({ name, imageSrc }) => (
          <Skill key={name} name={name} imageSrc={imageSrc} />
        ))}
      </motion.div>
    </>
  )
}

export default SkillsScrollContainer
