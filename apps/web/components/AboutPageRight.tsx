import IndigoBlurBackground from './shared/IndigoBlurBackground'
import { fadeAnimationVariant } from '@/constants'
import Image from 'next/image'
import { FaArrowCircleRight } from 'react-icons/fa'
import Link from 'next/link'
import { Button } from './ui/button'
import { urlFor } from '@/utils/urlFor'
import { MotionDiv } from './shared/Motion'

function AboutPageRight({
  heroImage,
  resumeUrl,
}: {
  heroImage: any
  resumeUrl: string
}) {
  return (
    <MotionDiv
      data-scroll
      data-scroll-speed={0.26}
      initial={'beforeView'}
      whileInView={'inView'}
      variants={fadeAnimationVariant}
      viewport={{ once: true }}
      className="rounded-4xl relative flex h-4/5 mb-10 flex-col items-center gap-6"
    >
      <IndigoBlurBackground height="1/2 max-md:hidden" />

      <Image
        src={urlFor(heroImage).url()}
        alt="Main Profile picture"
        priority
        loading="eager"
        height={2844}
        width={1680}
        className="z-10 aspect-auto rounded-xl object-cover opacity-80 backdrop:blur-sm max-md:hidden md:max-w-44 lg:max-w-[16vw]"
      />

      <MotionDiv
        initial={{
          y: 0,
        }}
        animate={{
          y: 16,
        }}
        // transition={{
        //   duration: 0.8,
        //   repeat: Infinity,
        //   repeatType: 'reverse',
        //   ease: 'easeInOut',
        // }}
      >
        <Link href={resumeUrl} target="_blank">
          <Button className="relative inline-flex h-12 w-32 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 max-sm:h-12 max-sm:w-32">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="md:text-md flex h-full w-full cursor-pointer items-center justify-around rounded-full bg-slate-950 px-2 py-1 text-sm font-medium text-white backdrop-blur-3xl md:px-3">
              Resume <FaArrowCircleRight size={16} className="-rotate-45" />{' '}
            </span>
          </Button>
        </Link>
      </MotionDiv>
    </MotionDiv>
  )
}

export default AboutPageRight
