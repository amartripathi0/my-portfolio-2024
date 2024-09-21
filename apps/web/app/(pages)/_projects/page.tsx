import ProjectCard from '@/components/project-card'
import ProjectContainer from '@/components/ProjectContainer'
import BackgroundBlur from '@/components/shared/BackgroundBlur'
import { MotionSection } from '@/components/shared/Motion'
import TextUnderline from '@/components/shared/TextUnderline'
import { pageSectionVariant } from '@/constants'
import { PROJECTS_PAGE_QUERY } from '@/sanity/queries'
import { Project } from '@/sanity/types'
import { getSanityData } from '@/utils/getSanityData'

async function Projects() {
  const { projectsArray }: { projectsArray: Project[] } =
    await getSanityData(PROJECTS_PAGE_QUERY)

  return (
    <MotionSection
      initial={'initial'}
      whileInView={'inView'}
      viewport={{ once: true }}
      variants={pageSectionVariant}
      id="projects"
      className="min-h-screen max-xl:mx-0"
      // data-scroll-container
    >
      <div className="relative pt-10 flex flex-col items-center">
        <TextUnderline
          textType="pageHeading"
          text="My Projects"
          underlineStyles=" bg-gradient-to-r from-indigo-600 via-purple-400 to-cyan-600"
        />
        <BackgroundBlur
          blurColor="indigo"
          style="left-2/5 max-md:left-1/3 -top-6 h-40 blur-[150px] sm:h-60 sm:top-1/4"
        />
        <div className='flex max-sm:flex-col justify-center py-10 md:px-10 xl:gap-20 gap-4 sm:gap-8 lg:gap-10'  >

        {projectsArray?.map(
          ({
            projectTitle,
            projectBio,
            projectThumbnail,
            projectGithubLink,
            projectDeployedLink,
            projectDetail,
            projectTools,
          }: Project) => (

              <ProjectCard
              key={projectTitle}
              projectTitle={projectTitle}
              projectBio={projectBio}
              projectTools={projectTools}
              projectThumbnail={projectThumbnail}
              projectGithubLink={projectGithubLink}
              projectDeployedLink={projectDeployedLink}
              projectDetail={projectDetail}
              />
              
          ),
        )}
        </div>
      </div>
    </MotionSection>
  )
}

export default Projects

              {/* <ProjectContainer
                projectTitle={projectTitle}
                projectBio={projectBio}
                projectTools={projectTools}
                projectThumbnail={projectThumbnail}
                projectGithubLink={projectGithubLink}
                projectDeployedLink={projectDeployedLink}
                projectDetail={projectDetail}
                /> */}
