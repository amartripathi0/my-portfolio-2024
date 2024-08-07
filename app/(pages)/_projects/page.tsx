import ProjectContainer from '@/components/ProjectContainer'
import PageTitle from '@/components/shared/PageTitle'
import { projectsArray } from '@/constants'

function Projects() {
  return (
    <div id="projects" className="min-h-screen " data-scroll-container>
      <div className="pt-10 shadow-md relative">
        <PageTitle
          pageTitle="My Projects"
          textStyles=" max-sm:text-4xl font-bold"
          containerDivStyles="w-[24%] max-sm:w-full  max-sm:flex-center"
          underlineStyles=" bg-gradient-to-r from-indigo-600 via-purple-400 to-cyan-600"
        />
        {/* bg gradient Violet cyan */}
        <CyanVioletBlur />

        {projectsArray.map(
          ({
            projectTitle,
            projectBio,
            projectThumbnailSrc,
            projectGithubLink,
            projectDeployedLink,
            projectDetail,
            projectTools,
          }) => (
            <ProjectContainer
              key={projectTitle}
              projectTitle={projectTitle}
              projectBio={projectBio}
              projectTools={projectTools}
              projectThumbnailSrc={projectThumbnailSrc}
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
