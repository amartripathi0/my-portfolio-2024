'use client'
import { SkillType } from '@/types'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Skill from '../Skill'

interface SkillsScrollContainerProps {
  skillsArray: SkillType[]
  slideSide: 'leftSlide' | 'rightSlide'
}
function SkillsScrollContainer({
  skillsArray,
  slideSide,
}: SkillsScrollContainerProps) {
  const targetRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start 0.7', 'start end'],
  })

  const leftSlide = useTransform(scrollYProgress, [0, 10], ['0%', '-100vw'])
  const rightSlide = useTransform(scrollYProgress, [0, 10], ['0%', '100vw'])
  const opacity = useTransform(scrollYProgress, [0.3, 1], [1, 0])

  return slideSide === 'leftSlide' ? (
    <motion.div
      ref={targetRef}
      style={{ translateX: leftSlide, opacity: opacity }}
      className="flex flex-wrap gap-4 px-10 py-6 max-sm:justify-around max-sm:p-2"
    >
      {skillsArray.map(({ name, imageSrc }) => (
        <Skill key={name} name={name} imageSrc={imageSrc} />
      ))}
    </motion.div>
  ) : (
    <motion.div
      ref={targetRef}
      style={{ translateX: rightSlide, opacity: opacity }}
      className="flex flex-wrap gap-4 px-10 max-sm:justify-around max-sm:p-2"
    >
      {skillsArray.map(({ name, imageSrc }) => (
        <Skill key={name} name={name} imageSrc={imageSrc} />
      ))}
    </motion.div>
  )
}

export default SkillsScrollContainer
