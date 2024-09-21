'use client'
import BackgroundBlur from '@/components/shared/BackgroundBlur'
import { MotionDiv, MotionSection } from '@/components/shared/Motion'
import TextUnderline from '@/components/shared/TextUnderline'
import WorkExpCard from '@/components/WorkExp'
import { pageSectionVariant } from '@/constants'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
const workExperiences = [
  {
    companyName: 'Roboto Studio',
    companyImg: 'https://roboto.studio/logo.svg',
    designation: 'Web Developer',
    workType: 'Intern',
    description:
      'I had the opportunity to work remotely with a friendly and highly skilled team of developers from the UK and India. This experience introduced me to SanityUI, Slack, and Linear project management tool, while also deepening my understanding of Next.js, Figma, Tailwind CSS, and frontend best practices.',
    location: 'London, United Kingdom',
    workMode: 'Remote',
    startDate: 'Jun 2024',
    endDate: 'Aug 2024',
  },
  {
    companyName: 'GCT Pvt Ltd',
    companyImg: 'https://media.licdn.com/dms/image/v2/D560BAQGVPRvj-OLaHg/company-logo_200_200/company-logo_200_200/0/1700211863272/galaxycard_logo?e=2147483647&v=beta&t=i29J-_tuI2uQzEkuJ43Rl8IdIDC_vvUwF-jFtPD7afU',
    designation: 'Software Developer Engineer',
    workType: 'Intern',
    description:
      'I began by writing GraphQL queries before moving into frontend development, gaining experience with Next.js, React Expo, Monorepo setups, Tamagui CSS, and Grafana. I also learned about microservices and effective collaboration in a shared GitHub repository, including resolving merge conflicts and managing PRs.',
    location: 'Delhi, India',
    workMode: 'Remote',
    startDate: 'Apr 2024',
    endDate: 'Jun 2024',
  },
]


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
      initial={'initial'}
      whileInView={'inView'}
      viewport={{ once: true }}
      variants={pageSectionVariant}
      id="work-exp"
      className="relative h-[calc(100vh-4rem)]"
    >
      <div className="relative flex size-full flex-col items-center md:pt-10">
        <TextUnderline
          textType="pageHeading"
          text="Work Experiences"
          underlineStyles=" bg-gradient-to-r from-indigo-600 via-purple-400 to-cyan-600 text-center"
        />
        <BackgroundBlur
          blurColor="indigo"
          style="left-2/5 max-md:left-1/3 -top-6 h-28 blur-[120px] sm:h-40 sm:top-0"
        />

        <div className="flex w-full flex-col space-y-8 pt-10 overflow-hidden ">
          {workExperiences.map((exp, index) => (
            <motion.div
              key={index}
            style={{ translateX: index % 2 === 0 ? leftSlide : rightSlide, opacity: opacity }}

              className={`flex w-full ${index % 2 === 0 ? 'justify-start md:pl-40' : 'justify-end md:pr-40'}`}
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
              />
            </motion.div>
          ))}
        </div>
      </div>
    </MotionSection>
  )
}

export default WorkExp

export function WorkExpDemo() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="mb-8 text-center text-3xl font-bold">Work Experience</h2>
    </div>
  )
}
