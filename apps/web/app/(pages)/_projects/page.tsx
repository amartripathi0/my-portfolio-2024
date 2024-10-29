import ProjectCard from '@/components/project-card'
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
      className="lg:-mx-28 xl:mx-0 lg:px-0"
      // data-scroll-container
    >
      <div className="relative flex flex-col items-center pt-10">
        <TextUnderline
          textType="pageHeading"
          text="My Projects"
          underlineStyles=" bg-gradient-to-r from-indigo-600 via-purple-400 to-cyan-600"
        />
        <BackgroundBlur
          blurColor="indigo"
          style="left-2/5 max-md:left-1/3 -top-6 h-40 blur-[150px] sm:h-60 sm:top-1/4"
        />
        <div className="mt-6 flex justify-between gap-4 max-md:flex-col sm:gap-4 sm:py-4 lg:justify-center lg:px-8 xl:gap-10">
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

{
  /* <ProjectContainer
                projectTitle={projectTitle}
                projectBio={projectBio}
                projectTools={projectTools}
                projectThumbnail={projectThumbnail}
                projectGithubLink={projectGithubLink}
                projectDeployedLink={projectDeployedLink}
                projectDetail={projectDetail}
                /> */
}
