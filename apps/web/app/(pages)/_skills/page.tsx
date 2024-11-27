'use client'
import { SkillType } from '@/types'
import { motion, MotionValue, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import BackgroundBlur from '@/components/shared/BackgroundBlur'
import { MotionSection } from '@/components/shared/Motion'
import TextUnderline from '@/components/shared/TextUnderline'
import { backendSkills, frontendSkills, pageSectionVariant } from '@/constants'
import Skill from '@/blocks/Skill'

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
      // initial={'initial'}
      // whileInView={'inView'}
      // viewport={{ once: true }}
      // variants={pageSectionVariant}
      id="skills"
      className="relative flex flex-col items-center lg:-mx-24"
    >
      <TextUnderline
        textType="pageHeading"
        text="Skills & Tools"
        containerDivStyles="my-4 md:mt-8 lg:mt-10"
        underlineStyles="bg-gradient-to-r from-indigo-600 via-purple-400"
      />

      {/* bg gradient purple */}
      <BackgroundBlur
        blurColor="purple"
        style="absolute opacity-80 h-1/5 top-10  aspect-square blur-[110px] rounded-full bg-gradient-to-r from-indigo-600 via-yellow-300 to-purple-400"
      />

      <div className="flex-center w-full flex-col gap-4 overflow-hidden py-8 lg:gap-8 lg:py-12">
        <SkillsContainer
          skillsArray={frontendSkills}
          translateXSide={leftSlide}
          opacity={opacity}
        />
        <SkillsContainer  
          skillsArray={backendSkills}
          translateXSide={rightSlide}
          opacity={opacity}
        />
      </div>
    </MotionSection>
  )
}

export default Skills

function SkillsContainer({
  translateXSide,
  opacity,
  skillsArray,
}: {
  translateXSide: MotionValue<string>
  opacity: MotionValue<number>
  skillsArray: SkillType[]
}) {
  return (
    <motion.div
      style={{ translateX: translateXSide, opacity }}
      className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-5 md:grid-rows-none lg:flex"
    >
      {skillsArray.map(({ name, imageSrc }: SkillType) => (
        <Skill key={name} name={name} imageSrc={imageSrc} />
      ))}
    </motion.div>
  )
}
