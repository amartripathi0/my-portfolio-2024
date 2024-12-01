"use client"
import { Freelance } from '@/sanity/types'
import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-container'
import Link from 'next/link'
import Autoplay from 'embla-carousel-autoplay'
import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel'
import Image from 'next/image'
import { urlFor } from '@/utils/urlFor'

export default function FreelanceWorkCard({
  freelanceTitle,
  freelanceDeployedLink,
  freelanceThumbnails,
}: Partial<Freelance>) {
  return (
    <CardContainer containerClassName="w-full h-full max-w-sm">
      <CardBody className="group/card size-full max-h-fit rounded-xl border border-violet-950 bg-gradient-to-b from-zinc-950 via-purple-950 p-4 lg:p-6 3xl:p-8">
        <CardItem
          translateZ="30"
          className="pink-cursor-md text-lg font-bold text-white md:text-xl lg:text-2xl 3xl:text-3xl"
        >
          {freelanceTitle}
        </CardItem>
        
        <CardItem translateZ="60" className="group relative mt-4 w-full">
          <Carousel
            orientation="vertical"
            className="w-full"
            plugins={[
              Autoplay({
                delay: 2800,
                // stopOnMouseEnter: true,
              }),
            ]}
          >
            <CarouselContent className='h-56'>
              {freelanceThumbnails?.map((thumbnail, index) => (
                <CarouselItem key={index}>
                    <Image
                      src={urlFor(thumbnail).url()}
                      height="1080"
                      width="606"
                      className="w-full h-52 rounded-[5px] object-cover opacity-90 transition-opacity duration-100 group-hover:opacity-70"
                      alt={`thumbnail-${index}`}
                    />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </CardItem>

        <div className="mt-4 flex items-center justify-between">
          <CardItem
            translateZ={20}
            as={Link}
            href={freelanceDeployedLink}
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
