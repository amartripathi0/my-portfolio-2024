"use client"
import React from 'react'
import IndigoBlurBackground from './shared/IndigoBlurBackground'
import { motion } from 'framer-motion'
import { fadeAnimationVariant } from '@/constants'
import Image from 'next/image'
import { FaArrowCircleRight } from 'react-icons/fa'
import Link from 'next/link'
import { Button } from './ui/button'
import { urlFor } from '@/utils/urlFor'

function AboutPageRight({ heroImage, resumeUrl }) {
    return (
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
                src={urlFor(heroImage).url()}
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
                <Link href={resumeUrl} target="_blank">
                    <Button className="relative inline-flex h-12 w-32 max-sm:h-12 max-sm:w-32 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                        <span className="flex justify-around  h-full w-full cursor-pointer items-center  rounded-full bg-slate-950 px-3 py-1 text-md max-sm:text-base font-medium text-white backdrop-blur-3xl">
                            Resume <FaArrowCircleRight size={16} />{' '}
                        </span>
                    </Button>
                </Link>
            </motion.div>
        </motion.div>
    )
}

export default AboutPageRight
