'use client'
import React, { useCallback, useState } from 'react'
import { navbarItems } from '@/constants'
import WrapperContainer from './shared/WrapperContainer'
import Link from 'next/link'
import { AiOutlineMenu } from 'react-icons/ai'
import { IoCloseOutline } from 'react-icons/io5'
import { motion, spring } from 'framer-motion'
import usePageScroll from '@/hooks/use-page-scroll'
import LocomotiveScroll from 'locomotive-scroll'
import TextUnderline from './shared/TextUnderline'
import Image from 'next/image'
import { cn } from '@/utils/cn'

const Navbar = ({
  locomotiveScroll,
}: {
  locomotiveScroll: LocomotiveScroll
}) => {
  const [menubarOpen, setMenubarOpen] = useState(false)
  const { scrolled, pageSectionOnViewport } = usePageScroll()
  const handleScrollTo = useCallback(
    (link: string) => {
      locomotiveScroll.scrollTo(link, { offset: -83 })
    },
    [locomotiveScroll],
  )
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ease: 'easeInOut', duration: 1 }}
      className={cn(
        `flex-between fixed left-0 top-0 z-50 h-20 w-screen px-10 py-2 backdrop-blur-md max-md:h-[70px] max-sm:px-4 max-sm:py-1`,
        scrolled && 'border-b border-purple-950',
      )}
      role="navigation"
    >
      {/* Left: Avatar and Name section */}
      <WrapperContainer additionalStyle="flex-center  w-28 max-sm:w-auto max-sm:px-1 sm:pr-1">
        <Link href={'/'} className="flex-around-center w-full">
          <Image
            src={'/assets/amar-img.png'}
            height={300}
            width={300}
            alt={'amar-avatar'}
            className="h-10 w-10"
          />
          <TextUnderline
            text="Amar"
            textStyles="font-medium opacity-90 hover:opacity-100 max-sm:hidden"
          />
        </Link>
      </WrapperContainer>

      {/* Middle */}
      <WrapperContainer additionalStyle="flex-center md:gap-3 lg:gap-6 rounded-full px-[7px] max-md:hidden md:w-1/2  lg:max-w-[490px]">
        {navbarItems.map((item) => (
          <Link
            key={item.label}
            href={item.link}
            onClick={() => handleScrollTo(item.link)}
            className={cn(
              'flex-center relative z-30 h-3/4 w-1/3 rounded-full font-medium transition-all duration-150 hover:border-transparent hover:bg-slate-900',
              pageSectionOnViewport === item.label &&
                'transition-all duration-300 ease-in-out',
            )}
          >
            {pageSectionOnViewport === item.label && (
              <motion.span
                layoutId="bubble"
                className="absolute left-0 top-0 -z-10 h-full w-full bg-gradient-to-r from-indigo-800 to-violet-500"
                style={{ borderRadius: 9999 }}
                transition={{ type: 'spring', stiffness: 300, damping: 30, duration: 0.8 }}
              ></motion.span>
            )}
            <TextUnderline text={item.label} />
          </Link>
        ))}
      </WrapperContainer>

      <div className="relative flex items-center gap-3">
        {/* Contact Me */}

        <WrapperContainer additionalStyle="max-md:hidden">
          <Link
            href={'#contact-me'}
            onClick={() =>
              locomotiveScroll.scrollTo('#contact-me', { offset: 0 })
            }
            className={cn(
              'flex-center w-28 py-2 font-medium max-md:py-3 max-sm:w-32 max-sm:px-2',
              pageSectionOnViewport === 'contact-me' &&
                'rounded-full shadow-md shadow-violet-500',
            )}
          >
            <TextUnderline text="Contact Me" />
          </Link>
        </WrapperContainer>

        {/* Hamberger menubar */}
        <AiOutlineMenu
          className="md:hidden"
          size={36}
          onClick={() => setMenubarOpen((prev) => !prev)}
        />

        {menubarOpen && (
          <div className="absolute -right-4 -top-2 h-screen w-screen bg-[#0C0404] bg-opacity-75">
            <motion.div
              animate={{
                transition: {
                  staggerChildren: 0.5,
                  delayChildren: 0.5,
                },
              }}
              className="flex-col-center mt-32 h-1/2 w-full justify-center gap-10 rounded-3xl px-6"
            >
              <IoCloseOutline
                className="absolute right-3 top-1 rounded-full border border-gray-700 bg-slate-900 text-purple-500"
                onClick={() => setMenubarOpen((prev) => !prev)}
                size={45}
              />

              {navbarItems.map((item) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -60 }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    transition: {
                      duration: 0.5,
                      staggerChildren: 0.4,
                    },
                  }}
                  className={cn(
                    'flex-center h-12 w-2/3 rounded-full border-rum-500 p-4 text-sm hover:bg-rum-600',
                    pageSectionOnViewport === item.label
                      ? 'bg-gradient-to-r from-indigo-800 to-violet-500'
                      : 'bg-slate-900',
                  )}
                >
                  <Link
                    scroll={true}
                    href={item.link}
                    onClick={() => setMenubarOpen((prev) => !prev)}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        )}
      </div>
    </motion.nav>
  )
}

export default Navbar
