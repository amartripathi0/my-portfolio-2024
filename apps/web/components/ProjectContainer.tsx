import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-container'
import Image from 'next/image'
import Link from 'next/link'
import { Badge } from './ui/badge'
import TextUnderline from './shared/TextUnderline'
import { ProjectType } from '@/types'
import { FaGithub } from 'react-icons/fa'
import { PortableText } from 'next-sanity'
import { urlFor } from '@/utils/urlFor'

const ProjectContainer = ({
  projectDetail,
  projectTitle,
  projectBio,
  projectThumbnail,
  projectGithubLink,
  projectDeployedLink,
  projectTools,
}: ProjectType) => {

  return (
    <div className="flex justify-between min-h-[calc(100vh-5rem)] w-full border-l border-purple-600 max-sm:flex-col max-sm:flex-center max-sm:mt-10 max-sm:gap-10 mt-10">
      {/* Sticky Image */}

      <div className="w-[30%] sm:sticky sm:top-40 max-sm:w-[90%] max-sm:h-96">
        {/* <IndigoVioletBlur /> */}

        <CardContainer
          data-scroll-sticky
          containerClassName="sm:sticky sm:top-40 max-sm:h-full max-sm:w-full w-5/6 m-auto py-6"
        >
          <CardBody className="bg-gradient-to-b from-zinc-950 via-indigo-950 relative group/card h-full w-full rounded-xl p-6 border border-violet-950  ">
            <CardItem
              translateZ="50"
              className="text-2xl max-sm:text-xl font-bold text-white"
            >
              {projectTitle}
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-white text-xs max-sm:text-xs max-w-sm mt-2 text-justify dark:text-neutral-300"
            >
              {projectBio}
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src={urlFor(projectThumbnail).url()}
                height="1000"
                width="1000"
                className="h-3/5 w-full object-cover rounded-[5px] group-hover/card:shadow-xl opacity-90 hover:opacity-100 transition-opacity duration-100"
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex justify-between items-center max-sm:mt-6 mt-10 ">
              <CardItem
                translateZ={20}
                as={Link}
                href={projectGithubLink}
                target="__blank"
                className="flex items-center gap-1 px-3 py-2 rounded-xl text-sm font-normal  max-sm:text-xs  dark:text-white opacity-80 hover:opacity-100"
              >
                Source Code
                <FaGithub />
              </CardItem>

              <CardItem
                translateZ={20}
                as={Link}
                href={projectDeployedLink}
                target="__blank"
                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-sm  max-sm:text-xs font-bold opacity-80 hover:opacity-100"
              >
                See it live ↗
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      </div>

      {/* Project Details */}
      <div className="w-[70%] max-sm:w-full flex flex-col text-sm">
        <div className="flex flex-col gap-6 p-10 pt-6 max-sm:p-2 pr-0 rounded-xl shadow-md h-full max-sm:text-sm text-justify">
          {/*  @ts-ignore*/}
          {projectDetail && <PortableText value={projectDetail[0]} />}

          <div className="flex gap-4 max-sm:gap-2 flex-wrap">
            {projectTools?.map((eachTool) => (
              <Badge
                className="max-sm:text-[3vw] max-sm:px-2 max-sm:py-1 p-2 px-4 bg-prelude-900"
                key={eachTool}
              >
                <TextUnderline text={eachTool} textStyles="text-xs" />
              </Badge>
            ))}
          </div>
          <div className="flex flex-col gap-6">
            {
              // @ts-ignore
              projectDetail && projectDetail.slice(1)?.map((detail, index) => (
                <PortableText 
                key={index + 1}
                value={detail} 
            />
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
    <div
      className="absolute opacity-50 h-2/3 top-1/4  w-1/5 blur-[100px]   rounded-full
        bg-gradient-to-r from-violet-600 to-indigo-700  
      "
    />
  )
}
