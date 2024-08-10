import BackgroundBlur from '@/components/shared/BackgroundBlur'
import { MotionSection } from '@/components/shared/Motion'
import PageTitle from '@/components/shared/PageTitle'
import SkillsScrollContainer from '@/components/shared/SkillsScrollContainer'
import {
  backendSkills,
  frontendSkills,
  underlineAnimationVariant,
} from '@/constants'
function Skills() {
  return (
    <MotionSection
      initial={'initial'}
      whileInView={'inView'}
      viewport={{ once: true }}
      variants={underlineAnimationVariant}
      id="skills"
      className="relative flex h-[calc(100vh-4rem)] flex-col items-center gap-4 pt-10 sm:pt-20 md:items-start md:gap-0"
    >
      <PageTitle
        pageTitle="Skills & Tools"
        underlineStyles="bg-gradient-to-r from-indigo-600 via-purple-400"
      />

      {/* bg gradient purple */}
      <BackgroundBlur
        blurColor="purple"
        style="absolute opacity-80 left-2/5 md:left-16 h-1/5 top-10  aspect-square blur-[100px] rounded-full bg-gradient-to-r from-indigo-600 via-yellow-300 to-purple-400"
      />

      <div className="flex-center h-4/5 w-full flex-col overflow-hidden md:h-full">
        <SkillsScrollContainer
          frontendSkillsArray={frontendSkills}
          backendSkillsArray={backendSkills}
          // slideSide="leftSlide"
        />
      </div>
    </MotionSection>
  )
}

export default Skills
