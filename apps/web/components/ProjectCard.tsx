import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-container'

import Image from 'next/image'
import Link from 'next/link'
function ProjectCard() {
  return (
    <CardContainer
      data-scroll-sticky
      containerClassName="sticky top-40"
      className=""
    >
      <CardBody className="group/card relative h-full rounded-xl border bg-gray-800 p-6">
        <CardItem translateZ="50" className="text-xl font-bold text-white">
          Placement Nexus
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="mt-2 max-w-sm text-sm text-white dark:text-neutral-300"
        >
          Placement Nexus is an ongoing MERN stack-based project streamlining
          college hiring. It connects students, recruiters, and colleges for
          efficient recruitment. Stay tuned for major frontend and backend
          enhancements.{' '}
        </CardItem>
        <CardItem translateZ="100" className="mt-4 w-full">
          <Image
            src="/assets/placement-nexus.png"
            height="1000"
            width="1000"
            className="h-3/5 w-full rounded-xl object-cover group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="mt-20 flex items-center justify-between">
          <CardItem
            translateZ={20}
            as={Link}
            href="https://github.com/amartripathi0/Web_Placement_Portal"
            target="__blank"
            className="rounded-xl px-4 py-2 text-xs font-normal dark:text-white"
          >
            Source Code
          </CardItem>

          <CardItem
            translateZ={20}
            as={Link}
            href="https://placement-nexus.vercel.app/"
            target="__blank"
            className="bg-black dark:text-black rounded-xl px-4 py-2 text-xs font-bold text-white dark:bg-white"
          >
            See it live →
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  )
}

export default ProjectCard
