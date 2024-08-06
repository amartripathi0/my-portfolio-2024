import ProjectContainer from '@/components/ProjectContainer'
import PageTitle from '@/components/shared/PageTitle'
// import { projectsArray } from '@/constants'
import { PROJECTS_PAGE_QUERY } from '@/sanity/queries'
import { ProjectType } from '@/types'
import { getSanityData } from '@/utils/getSanityData'

async function Projects() {
  const projectsArray: ProjectType[] = await getSanityData(PROJECTS_PAGE_QUERY)
  console.log(projectsArray);
  
  return (
    <div id="projects" className="min-h-screen " data-scroll-container>
      <div className="pt-10 shadow-md relative">
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
          }: ProjectType) => (
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
    <div
      className="absolute opacity-80 top-20  h-20  w-96  -z-10 blur-[100px] rounded-full
        bg-gradient-to-r from-cyan-400 to-violet-600
      "
    />
  )
}
