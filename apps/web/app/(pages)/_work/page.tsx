'use client'
import BackgroundBlur from '@/components/shared/BackgroundBlur'
import { MotionDiv, MotionSection } from '@/components/shared/Motion'
import TextUnderline from '@/components/shared/TextUnderline'
import WorkExpCard from '@/components/WorkExp'
import { pageSectionVariant, workExperiences } from '@/constants'
import { cn } from '@/utils/cn'
import { useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

function WorkExp() {
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
      id="work-exp"
      className="relative flex size-full flex-col items-center"
    >
      <TextUnderline
        textType="pageHeading"
        text="Work Experiences"
        containerDivStyles="my-4 md:my-8"
        underlineStyles=" bg-gradient-to-r from-indigo-600 via-purple-400 to-cyan-600 text-center"
      />
      <BackgroundBlur
        blurColor="indigo"
        style="left-2/5 max-md:left-1/3 -top-6 h-28 blur-[180px] sm:h-48 -z-20 sm:top-16"
      />

      <div className="flex w-full max-w-7xl flex-col space-y-4 overflow-hidden pt-2 md:space-y-6">
        {workExperiences.map((exp, index) => (
          <MotionDiv
            key={index}
            style={{
              translateX: index % 2 === 0 ? leftSlide : rightSlide,
              opacity: opacity,
            }}
            className={cn(
              `flex w-full`,
              index % 2 === 0
                ? 'justify-start md:pl-10 xl:pl-40'
                : 'justify-end md:pr-10 xl:pl-40',
            )}
          >
            <WorkExpCard
              companyName={exp.companyName}
              companyImg={exp.companyImg}
              designation={exp.designation}
              workType={exp.workType as 'Intern' | 'Fulltime' | 'Freelance'}
              startDate={exp.startDate ?? ''}
              endDate={exp.endDate ?? ''}
              location={exp.location}
              workMode={exp.workMode as 'Remote' | 'Onsite'}
              description={exp.description}
              index={index}
            />
          </MotionDiv>
        ))}
      </div>
    </MotionSection>
  )
}

export default WorkExp
