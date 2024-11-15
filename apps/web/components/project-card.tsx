import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-container'
import Link from 'next/link'
import { FaGithub } from 'react-icons/fa'
import ProjectTool from './shared/ProjectTool'
import { ProjectCardProps } from '@/types'
import ProjectThumbnails from './ui/project-thumbnails'

async function ProjectCard({
  projectDetail,
  projectTitle,
  projectBio,
  projectThumbnails,
  projectGithubLink,
  projectDeployedLink,
  projectTools,
}: ProjectCardProps) {
  return (
    <CardContainer containerClassName="w-full h-full md:w-1/3 max-w-lg">
      <CardBody className="group/card size-full max-h-fit rounded-xl border border-violet-950 bg-gradient-to-b from-zinc-950 via-indigo-950 p-4 lg:p-6 3xl:p-8">
        <CardItem
          translateZ="30"
          className="pink-cursor-md text-lg font-bold text-white md:text-xl lg:text-2xl 3xl:text-3xl"
        >
          {projectTitle}
        </CardItem>
        <CardItem
          as="p"
          translateZ="40"
          className="mt-2 line-clamp-3 text-justify font-poppins text-xs font-light text-zinc-200 dark:text-neutral-300 md:text-sm 3xl:text-lg"
        >
          {projectBio}
        </CardItem>
        <CardItem translateZ="60" className="mt-4 flex w-full flex-wrap gap-2">
          {projectTools
            ?.slice(0, 8)
            .map((eachTool, index) => (
              <ProjectTool
                key={eachTool}
                tool={eachTool}
                i={index}
                toolVariant="projectCardTool"
              />
            ))}
          {projectTools && projectTools?.length > 7 && <p>...</p>}
        </CardItem>
        <CardItem translateZ="60" className="group relative mt-4 w-full">
          <ProjectThumbnails
            projectTitle={projectTitle}
            projectBio={projectBio}
            projectTools={projectTools}
            projectThumbnails={projectThumbnails}
            projectGithubLink={projectGithubLink}
            projectDeployedLink={projectDeployedLink}
            projectDetail={projectDetail}
          />
        </CardItem>

        <div className="mt-4 flex items-center justify-between">
          <CardItem
            translateZ={20}
            as={Link}
            href={projectGithubLink}
            target="_blank"
            className="flex items-center gap-1 rounded-xl px-3 py-2 text-sm font-normal opacity-80 hover:opacity-100 dark:text-white max-md:text-xs 3xl:text-lg"
          >
            Source Code
            <FaGithub />
          </CardItem>

          <CardItem
            translateZ={20}
            as={Link}
            href={projectDeployedLink}
            target="_blank"
            className="bg-black dark:text-black rounded-xl px-4 py-2 text-sm font-bold text-white opacity-80 hover:opacity-100 dark:bg-white max-md:text-xs 3xl:text-lg"
          >
            See it live ↗
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  )
}

export default ProjectCard
