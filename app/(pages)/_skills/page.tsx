import PageTitle from '@/components/shared/PageTitle'
import SkillsScrollContainer from '@/components/shared/SkillsScrollContainer'
import { backendSkills, frontendSkills } from '@/constants'
function Skills() {
  return (
    <div
      id="skills"
      className="h-[calc(100vh-4rem)] pt-10 -mx-28 max-sm:mx-0 max-sm:pt-20 flex justify-around flex-col sm:gap-14 relative "
    >
      <PageTitle
        pageTitle="Skills & Tools"
        containerDivStyles="max-sm:w-full  max-sm:flex-center  max-sm:mx-0 mx-28"
        underlineStyles=" bg-gradient-to-r from-indigo-600 via-purple-400 to-yellow-500"
      />

      {/* bg gradient purple */}
      <div
        className="absolute opacity-80 left-36 h-1/5 top-4 max-sm:top-10 max-sm:left-28 aspect-square blur-[100px] rounded-full bg-gradient-to-r from-indigo-600 via-yellow-300 to-purple-400    
      "
      />

      <div className="h-full text-sm max-sm:text-sm max-sm:px-5 text-justify max-sm:rounded-3xl w-full overflow-hidden flex items-center sm:gap-20 max-sm:justify-center flex-col relative">
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
