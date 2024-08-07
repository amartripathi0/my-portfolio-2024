import ProjectContainer from '@/components/ProjectContainer'
import BackgroundBlur from '@/components/shared/BackgroundBlur'
import PageTitle from '@/components/shared/PageTitle'
import { PROJECTS_PAGE_QUERY } from '@/sanity/queries'
import { Project } from '@/sanity/types'
import { getSanityData } from '@/utils/getSanityData'

async function Projects() {
  const projectsArray: Project[] = await getSanityData(PROJECTS_PAGE_QUERY)
  return (
    <div id="projects" className="min-h-screen" data-scroll-container>
      <div className="relative pt-10 shadow-md">
        <PageTitle
          pageTitle="My Projects"
          underlineStyles=" bg-gradient-to-r from-indigo-600 via-purple-400 to-cyan-600"
        />
        <BackgroundBlur
          blurColor="indigo"
          style="left-10 max-sm:left-1/3 -top-20 h-5 sm:h-40 sm:top-[32px]"
        />

        {projectsArray?.map(
          (
            {
              projectTitle,
              projectBio,
              projectThumbnail,
              projectGithubLink,
              projectDeployedLink,
              projectDetail,
              projectTools,
            }: Project,
          ) => (
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
              {
                <BackgroundBlur
                  blurColor="purple"
                  style="absolute bottom-3/5 -right-20 max-sm:opacity-0 sm:h-[280px] blur-[300px] bg-gradient-to-r from-indigo-500 to-purple-400 overflow-hidden"
                />
              }
            </>
          ),
        )}
      </div>
    </div>
  )
}

export default Projects
