'use client'
import { Dialog, DialogClose, DialogContent, DialogTrigger } from './dialog'
import { Carousel, CarouselContent, CarouselItem } from './carousel'
import Image from 'next/image'
import ProjectDetails from '../../blocks/project-details'
import Autoplay from 'embla-carousel-autoplay'
import { ProjectCardProps } from '@/types'
import { urlFor } from '@/utils/urlFor'

export default function ProjectThumbnails({
  projectDetail,
  projectTitle,
  projectBio,
  projectThumbnails,
  projectGithubLink,
  projectDeployedLink,
  projectTools,
}: ProjectCardProps) {
  return (
    <Dialog>
      <DialogTrigger>
        <span className="absolute left-1/2 top-1/2 z-40 hidden -translate-x-1/2 -translate-y-1/2 cursor-pointer rounded-full bg-prelude-700 p-2 px-2.5 text-xs font-medium backdrop-blur-sm hover:bg-prelude-800 group-hover:block">
          View Project Details
        </span>
        <Carousel
          className="w-full"
          plugins={[
            Autoplay({
              delay: 2800,
              // stopOnMouseEnter: true,
            }),
          ]}
        >
          <CarouselContent>
            {Array.from({ length: projectThumbnails?.length || 0 }).map(
              (_, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Image
                      src={
                        projectThumbnails
                          ? urlFor(projectThumbnails[index]).url()
                          : ''
                      }
                      height="1080"
                      width="606"
                      className="w-full rounded-[5px] object-cover opacity-90 transition-opacity duration-100 group-hover:opacity-70"
                      alt="thumbnail"
                    />
                  </div>
                </CarouselItem>
              ),
            )}
          </CarouselContent>
        </Carousel>
      </DialogTrigger>
      <DialogContent className="mt-10 max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 3xl:max-w-screen-2xl">
        <ProjectDetails
          projectDetail={projectDetail}
          projectTitle={projectTitle}
          projectBio={projectBio}
          projectThumbnails={projectThumbnails}
          projectGithubLink={projectGithubLink}
          projectDeployedLink={projectDeployedLink}
          projectTools={projectTools}
        />
      </DialogContent>
      <DialogClose />
    </Dialog>
  )
}
