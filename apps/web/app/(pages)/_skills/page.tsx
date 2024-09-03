'use client'
import { SkillType } from '@/types'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import BackgroundBlur from '@/components/shared/BackgroundBlur'
import { MotionSection } from '@/components/shared/Motion'
import TextUnderline from '@/components/shared/TextUnderline'
import { backendSkills, frontendSkills, pageSectionVariant } from '@/constants'
import Skill from '@/components/Skill'

function Skills() {
  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', '0.2 0.4'],
  })
  const leftSlide = useTransform(scrollYProgress, [0, 1], ['-20vw', '0%'])
  const rightSlide = useTransform(scrollYProgress, [0, 1], ['20vw', '0%'])
  const opacity = useTransform(scrollYProgress, [0.3, 1], [0, 1])
  return (
    <MotionSection
      ref={targetRef}
      initial={'initial'}
      whileInView={'inView'}
      viewport={{ once: true }}
      variants={pageSectionVariant}
      id="skills"
      className="relative flex h-[calc(100vh-4rem)] flex-col items-center gap-4 pt-10 sm:pt-20 md:items-start md:gap-0"
    >
      <TextUnderline
        textType='pageHeading'
        text="Skills & Tools"
        underlineStyles="bg-gradient-to-r from-indigo-600 via-purple-400"
      />

      {/* bg gradient purple */}
      <BackgroundBlur
        blurColor="purple"
        style="absolute opacity-80 left-2/5 md:left-16 h-1/5 top-10  aspect-square blur-[100px] rounded-full bg-gradient-to-r from-indigo-600 via-yellow-300 to-purple-400"
      />

      <div className="flex-center h-4/5 w-full flex-col overflow-hidden md:h-full">
        <motion.div
          style={{ translateX: leftSlide, opacity: opacity }}
          className="flex flex-wrap justify-center gap-4 p-2 md:py-6 lg:py-10"
        >
          {frontendSkills.map(({ name, imageSrc }: SkillType) => (
            <Skill key={name} name={name} imageSrc={imageSrc} />
          ))}
        </motion.div>

        <motion.div
          style={{ translateX: rightSlide, opacity: opacity }}
          className="flex flex-wrap justify-center gap-4 max-sm:p-2 md:pb-12"
        >
          {backendSkills.map(({ name, imageSrc }: SkillType) => (
            <Skill key={name} name={name} imageSrc={imageSrc} />
          ))}
        </motion.div>
      </div>
    </MotionSection>
  )
}

export default Skills
