'use client'
import { SkillType } from '@/types'
import {
  motion,
  MotionValue,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from 'framer-motion'
import { MutableRefObject, useRef } from 'react'
import Skill from '../Skill'

interface SkillsScrollContainerProps {
  frontendSkillsArray: SkillType[]
  backendSkillsArray: SkillType[]
  ref: MutableRefObject<null>
  scrollYProgress: MotionValue<number>
  // slideSide: 'leftSlide' | 'rightSlide'
}
function SkillsScrollContainer({
  frontendSkillsArray,
  backendSkillsArray,
  ref,
  scrollYProgress,
  // slideSide,
}: SkillsScrollContainerProps) {
  // const { scrollYProgress } = useScroll({
  //   target: ref,
  //   offset: ['start 0.9', 'start end'],
  // })

  const leftSlide = useTransform(scrollYProgress, [0, 1], ['-20vw', '0%'])
  const rightSlide = useTransform(scrollYProgress, [0, 1], ['20vw', '0%'])
  const opacity = useTransform(scrollYProgress, [0.3, 1], [0, 1])
  // useMotionValueEvent(scrollYProgress, "change", (latest) => {
  //   console.log("Page scroll: ", latest)
  // })

  return (
    <>
      <motion.div
        // ref={targetRef}
        style={{ translateX: leftSlide, opacity: opacity }}
        className="flex flex-wrap justify-center gap-4 p-2 md:py-6 lg:py-10"
      >
        {frontendSkillsArray.map(({ name, imageSrc }) => (
          <Skill key={name} name={name} imageSrc={imageSrc} />
        ))}
      </motion.div>

      <motion.div
        // ref={targetRef}
        style={{ translateX: rightSlide, opacity: opacity }}
        className="flex flex-wrap justify-center gap-4 max-sm:p-2 md:pb-12"
      >
        {backendSkillsArray.map(({ name, imageSrc }) => (
          <Skill key={name} name={name} imageSrc={imageSrc} />
        ))}
      </motion.div>
    </>
  )
}

export default SkillsScrollContainer
