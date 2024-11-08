import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-container'
import Image from 'next/image'
import Link from 'next/link'
import { FaGithub } from 'react-icons/fa'
import { PortableText } from 'next-sanity'
import { urlFor } from '@/utils/urlFor'
import ProjectTool from './shared/ProjectTool'
import { ProjectCardProps } from '@/types'

const ProjectDetails = ({
  projectDetail,
  projectTitle,
  projectBio,
  projectThumbnails,
  projectGithubLink,
  projectDeployedLink,
  projectTools,
}: ProjectCardProps) => {
  return (
    <div
      // data-scroll-container
      className="max-md:flex-center relative flex max-h-[75vh] max-w-7xl justify-between gap-4 overflow-y-auto rounded border border-purple-900 bg-neutral-900 p-8 max-md:flex-col md:gap-8"
    >
      {/* Sticky Image */}
      <CardContainer containerClassName="md:sticky max-md:mx-auto md:w-full top-0 max-w-[310px] md:max-w-72 lg:max-w-80">
        <CardBody className="group/card relative h-full w-full rounded-xl border border-violet-950 bg-gradient-to-b from-zinc-950 via-indigo-950 p-4 lg:p-6">
          <CardItem
            translateZ="50"
            className="pink-cursor-md text-lg font-bold text-white md:text-xl lg:text-2xl"
          >
            {projectTitle}
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="mt-2 line-clamp-5 max-w-sm text-justify font-poppins text-xs font-light text-zinc-200 dark:text-neutral-300 md:text-sm"
          >
            {projectBio}
          </CardItem>
          <CardItem translateZ="100" className="mt-4 w-full">
            <Image
              src={projectThumbnails ? urlFor(projectThumbnails[0]).url() : ''}
              height="1080"
              width="606"
              className="h-3/5 w-full rounded-[5px] object-cover opacity-90 transition-opacity duration-100 hover:opacity-100 group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
          <div className="mt-10 flex items-center justify-between max-md:mt-6">
            <CardItem
              translateZ={20}
              as={Link}
              href={projectGithubLink}
              target="__blank"
              className="flex items-center gap-1 rounded-xl px-3 py-2 text-sm font-normal opacity-80 hover:opacity-100 dark:text-white max-md:text-xs"
            >
              Source Code
              <FaGithub />
            </CardItem>

            <CardItem
              translateZ={20}
              as={Link}
              href={projectDeployedLink}
              target="__blank"
              className="bg-black dark:text-black rounded-xl px-4 py-2 text-sm font-bold text-white opacity-80 hover:opacity-100 dark:bg-white max-md:text-xs"
            >
              See it live ↗
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>

      {/* Project Details */}
      <div className="flex w-full flex-col gap-4 text-pretty md:w-[70%]">
        <div className="flex flex-wrap gap-4">
          {projectThumbnails?.map((thumbnail) => (
            <Image
              key={thumbnail._key}
              src={urlFor(thumbnail).url()}
              height="1080"
              width="606"
              className="h-32 w-fit rounded object-contain opacity-90 transition-opacity duration-100 hover:opacity-100 group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          ))}
        </div>
        <div className="my-2 flex flex-wrap gap-2 md:gap-3">
          {projectTools?.map((eachTool, index) => (
            <ProjectTool
              key={eachTool}
              tool={eachTool}
              i={index}
              toolVariant="projectCardTool"
            />
          ))}
        </div>
        <div className="flex flex-col gap-1.5 pb-4 font-raleway text-sm text-neutral-100">
          {projectDetail && <PortableText value={projectDetail} />}
        </div>
      </div>
    </div>
  )
}
export default ProjectDetails
