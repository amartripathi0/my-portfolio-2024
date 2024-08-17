import ProjectContainer from '@/components/ProjectContainer'
import BackgroundBlur from '@/components/shared/BackgroundBlur'
import { MotionSection } from '@/components/shared/Motion'
import PageTitle from '@/components/shared/PageTitle'
import { pageSectionVariant } from '@/constants'
import { PROJECTS_PAGE_QUERY } from '@/sanity/queries'
import { Project } from '@/sanity/types'
import { getSanityData } from '@/utils/getSanityData'

async function Projects() {
  const projectsArray: Project[] = await getSanityData(PROJECTS_PAGE_QUERY)
  return (
    <MotionSection
      initial={'initial'}
      whileInView={'inView'}
      viewport={{ once: true }}
      variants={pageSectionVariant}
      id="projects"
      className="min-h-screen max-xl:mx-0"
      data-scroll-container
    >
      <div className="relative pt-10">
        <PageTitle
          pageTitle="My Projects"
          underlineStyles=" bg-gradient-to-r from-indigo-600 via-purple-400 to-cyan-600"
        />
        <BackgroundBlur
          blurColor="indigo"
          style="left-10 max-md:left-1/3 -top-6 h-32 sm:h-40 sm:top-[32px]"
        />

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
            <>
              <ProjectContainer
                key={projectTitle}
                projectTitle={projectTitle}
                projectBio={projectBio}
                projectTools={projectTools}
                projectThumbnail={projectThumbnail}
                projectGithubLink={projectGithubLink}
                projectDeployedLink={projectDeployedLink}
                projectDetail={projectDetail}
              />

              <BackgroundBlur
                blurColor="purple"
                style="absolute bottom-3/5 lg:-right-20  h-48 md:h-[280px] blur-[300px] bg-gradient-to-r from-indigo-500 to-purple-400 overflow-hidden"
              />
            </>
          ),
        )}
      </div>
    </MotionSection>
  )
}

export default Projects
