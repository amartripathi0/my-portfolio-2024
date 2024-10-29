import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-container'
import Image from 'next/image'
import Link from 'next/link'
import { FaGithub } from 'react-icons/fa'
import { urlFor } from '@/utils/urlFor'
import ProjectTool from './shared/ProjectTool'
import { Project } from '@/sanity/types'

async function ProjectCard({
  projectDetail,
  projectTitle,
  projectBio,
  projectThumbnail,
  projectGithubLink,
  projectDeployedLink,
  projectTools,
}: Partial<Project>) {
  return (
    <CardContainer containerClassName="w-full md:w-1/3 max-w-lg max-h-4/5">
      <CardBody className="group/card relative size-full rounded-xl border border-violet-950 bg-gradient-to-b from-zinc-950 via-indigo-950 p-4 lg:p-6 3xl:p-8">
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
          {projectTools && projectTools?.length >7 && <p>...</p>}
        </CardItem>
        <CardItem translateZ="60" className="mt-4 w-full">
          <Image
            src={urlFor(projectThumbnail).url()}
            height="1080"
            width="606"
            className="h-3/5 w-full rounded-[5px] object-cover opacity-90 transition-opacity duration-100 hover:opacity-100 group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>

        <div className="mt-6 flex items-center justify-between">
          <CardItem
            translateZ={20}
            as={Link}
            href={projectGithubLink}
            target="__blank"
            className="flex items-center gap-1 rounded-xl px-3 py-2 text-sm font-normal opacity-80 hover:opacity-100 dark:text-white max-md:text-xs 3xl:text-lg"
          >
            Source Code
            <FaGithub />
          </CardItem>

          <CardItem
            translateZ={20}
            as={Link}
            href={projectDeployedLink}
            target="__blank"
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
