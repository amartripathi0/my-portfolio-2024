import ProjectContainer from '@/components/ProjectContainer'
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
        {/* bg gradient Violet cyan */}
        <CyanVioletBlur />

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
          ),
        )}
      </div>
    </div>
  )
}

export default Projects

const CyanVioletBlur = () => {
  return (
    <div className="absolute top-20 -z-10 h-20 w-96 rounded-full bg-gradient-to-r from-cyan-400 to-violet-600 opacity-80 blur-[100px]" />
  )
}
