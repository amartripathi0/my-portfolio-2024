import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-container'
import Image from 'next/image'
import Link from 'next/link'
import { FaGithub } from 'react-icons/fa'
import { PortableText } from 'next-sanity'
import { urlFor } from '@/utils/urlFor'
import ProjectTool from './shared/ProjectTool'
import { Project } from '@/sanity/types'

const ProjectContainer = ({
  projectDetail,
  projectTitle,
  projectBio,
  projectThumbnail,
  projectGithubLink,
  projectDeployedLink,
  projectTools,
}: Partial<Project>) => {
  return (
    <div className="relative max-md:flex-center flex min-h-[calc(100vh-5rem)] justify-between border-l border-purple-600 mt-10 max-md:flex-col max-md:gap-4 pl-4">
      {/* Sticky Image */}
      <div className="max-md:h-96 max-w-[310px] md:max-w-72 lg:max-w-80 md:sticky md:top-40">
        <CardContainer
          data-scroll-sticky
          containerClassName="md:sticky md:top-40 max-md:h-full max-md:mx-auto md:w-full py-2 sm:py-4"
        >
          <CardBody className="group/card relative h-full w-full rounded-xl border border-violet-950 bg-gradient-to-b from-zinc-950 via-indigo-950 lg:p-6 p-4">
            <CardItem
              translateZ="50"
              className="text-lg md:text-xl font-bold text-white lg:text-2xl pink-cursor-md"
            >
              {projectTitle}
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="mt-2 max-w-sm text-justify line-clamp-5 md:text-sm font-normal text-zinc-200 dark:text-neutral-300 text-xs"
            >
              {projectBio}
            </CardItem>
            <CardItem translateZ="100" className="mt-4 w-full">
              <Image
                src={urlFor(projectThumbnail).url()}
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
      </div>

      {/* Project Details */}
      <div className="relative  flex w-full flex-col text-pretty text-base md:w-[70%]">
        <div className="flex h-full flex-col gap-4 rounded-xl text-neutral-200 shadow-md max-md:text-sm md:p-2 md:px-8 lg:px-0">
          {/*  @ts-ignore*/}
          {projectDetail && <PortableText value={projectDetail[0]} />}

          <div className="my-2 flex flex-wrap gap-2 md:gap-4">
            {projectTools?.map((eachTool) => (
              <div key={eachTool}>
                <ProjectTool tool={eachTool} />
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-2">
            {projectDetail &&
              projectDetail
                .slice(1)
                ?.map((detail, index: number) => (
                  <PortableText key={index + 1} value={detail} />
                ))}
          </div>
        </div>
      </div>
    </div>
  )
}
export default ProjectContainer

function IndigoVioletBlur() {
  return (
    <div className="absolute top-1/4 h-2/3 w-1/5 rounded-full bg-gradient-to-r from-violet-600 to-indigo-700 opacity-50 blur-[100px]" />
  )
}
