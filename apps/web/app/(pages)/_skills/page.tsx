import BackgroundBlur from '@/components/shared/BackgroundBlur'
import PageTitle from '@/components/shared/PageTitle'
import SkillsScrollContainer from '@/components/shared/SkillsScrollContainer'
import { backendSkills, frontendSkills } from '@/constants'
function Skills() {
  return (
    <div
      id="skills"
      className="relative -mx-28 flex h-[calc(100vh-4rem)] flex-col justify-around pt-10 max-sm:mx-0 max-sm:pt-20 sm:gap-14"
    >
      <PageTitle
        pageTitle="Skills & Tools"
        containerDivStyles="max-sm:w-full  max-sm:flex-center  max-sm:mx-0 mx-28"
        underlineStyles=" bg-gradient-to-r from-indigo-600 via-purple-400"
      />

      {/* bg gradient purple */}
      <BackgroundBlur
        blurColor="purple"
        style="absolute opacity-80 left-36 h-1/5 top-4 max-sm:top-10 max-sm:left-28 aspect-square blur-[100px] rounded-full bg-gradient-to-r from-indigo-600 via-yellow-300 to-purple-400"
      />

      <div className="relative flex h-full w-full flex-col items-center overflow-hidden text-justify text-sm max-sm:justify-center max-sm:rounded-3xl max-sm:px-5 max-sm:text-sm sm:gap-20">
        <SkillsScrollContainer
          skillsArray={frontendSkills}
          slideSide="leftSlide"
        />
        <SkillsScrollContainer
          skillsArray={backendSkills}
          slideSide="rightSlide"
        />
      </div>
    </div>
  )
}

export default Skills
