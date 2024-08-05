'use client'
import IndigoBlurBackground from '@/components/shared/IndigoBlurBackground'
import PageTitle from '@/components/shared/PageTitle'
import { Button } from '@/components/ui/button'
import {
  fadeAnimationVariant,
  resumeLink,
} from '@/constants'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { FaArrowCircleRight } from 'react-icons/fa'
const About = () => {
  return (
    <div
      id="about-me"
      className="h-[calc(100vh-5rem)] max-sm:h-[calc(100vh-5rem)] max-sm:pt-0 flex-between relative  max-sm:flex-col"
    >
      {/* Left section */}
      <div className="flex flex-col w-3/4 sm:h-4/5 max-sm:w-full max-sm:gap-2">
        {/* bg gradient indigo cyan */}
        <IndigoBlurBackground height="1/5" additionalStyles="max-sm:left-1/4" />
        {/* About Me heading */}
        <PageTitle
          pageTitle="About Me"
          underlineStyles=" bg-gradient-to-r from-indigo-600 via-purple-400 to-cyan-600"
        />

        {/* About me paragraphs */}
        <motion.div
          initial={'beforeView'}
          whileInView={'inView'}
          variants={fadeAnimationVariant}
          viewport={{ once: true }}
          className="text-base py-4 w-full max-sm:text-sm max-sm:px-2 text-justify  flex-col flex-center gap-4"
        >
          <p>
            I&apos;m a third-year Computer Science Engineering student from
            India, deeply passionate about coding, technology and web. My
            journey into Full-Stack web development has been exhilarating,
            constantly pushing the boundaries of what&apos;s possible.
          </p>

          <p>
            My adventure began during my first year of college, and since then,
            I&apos;ve worked on diverse web development projects, honing my
            skills and seeking innovative solutions. I take pride in my
            work&apos;s ability to make a difference and create impactful
            results.
          </p>

          <p>
            At the heart of my work is a simple philosophy: to deliver
            high-quality solutions with a user-centric approach. This belief
            drives every project I undertake, ensuring timely delivery and
            creative problem-solving.
          </p>

          <p>
            When I&apos;m not coding, you can find me exploring new music and
            producing hip hop beats, cooking and eating food, or surfing the
            web. These activities recharge my batteries and bring a fresh
            perspective to my professional endeavors.
          </p>

          <motion.div
            initial={{
              y: 0,
            }}
            animate={{
              y: 20,
            }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
            }}
            className="sm:hidden"
          >
            <Link href={resumeLink} target="_blank">
              <Button className="relative inline-flex h-16 w-40 max-sm:h-12 max-sm:w-32 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="flex justify-around  h-full w-full cursor-pointer items-center  rounded-full bg-slate-950 px-3 py-1 text-lg max-sm:text-base font-medium text-white backdrop-blur-3xl">
                  Resume <FaArrowCircleRight size={16} />{' '}
                </span>
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Right section */}
      <motion.div
        initial={'beforeView'}
        whileInView={'inView'}
        variants={fadeAnimationVariant}
        viewport={{ once: true }}
        className="rounded-4xl w-[30%] flex-center flex-col gap-6 relative  
          max-tablet:h-40 max-tablet:w-40 max-sm:hidden mb-14
        "
      >
        <IndigoBlurBackground height="1/2" />

        <Image
          src={'/assets/amarImgPool2.jpg'}
          alt="Main Profile picture"
          priority
          loading='eager'
          height={2844}
          width={1680}
          className="object-cover w-[65%] aspect-auto rounded-xl z-10  backdrop:blur-sm opacity-80 max-sm:hidden"
        />

        <motion.div
          initial={{
            y: 0,
          }}
          animate={{
            y: 20,
          }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
        >
          <Link href={resumeLink} target="_blank">
            <Button className="relative inline-flex h-12 w-32 max-sm:h-12 max-sm:w-32 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="flex justify-around  h-full w-full cursor-pointer items-center  rounded-full bg-slate-950 px-3 py-1 text-md max-sm:text-base font-medium text-white backdrop-blur-3xl">
                Resume <FaArrowCircleRight size={16} />{' '}
              </span>
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default About
