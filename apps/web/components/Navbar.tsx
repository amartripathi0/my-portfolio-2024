'use client'
import React, { useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { navbarItems, socialMediaLinks } from '@/constants'
import WrapperContainer from './shared/WrapperContainer'
import Link from 'next/link'
import { AiOutlineMenu } from 'react-icons/ai'
import { IoCloseOutline } from 'react-icons/io5'
import { easeInOut, motion, spring, stagger } from 'framer-motion'
import useScrollTop from '@/hooks/use-scroll-top'
import usePageScroll from '@/hooks/use-page-scroll'
import LocomotiveScroll from 'locomotive-scroll'
import TextUnderline from './shared/TextUnderline'
import Image from 'next/image'

const Navbar = ({
  locomotiveScroll,
}: {
  locomotiveScroll: LocomotiveScroll
}) => {
  const [menubarOpen, setMenubarOpen] = useState(false)
  const { scrolled } = useScrollTop()
  const { pageSectionOnViewport } = usePageScroll()

  return (
    <motion.nav
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ease: 'easeInOut', duration: 1 }}
      className={`flex-between fixed top-0 left-0 w-screen h-20 max-tablet:h-[70px]
    px-10 max-mobile:px-4 py-2 max-mobile:py-1 backdrop-blur-md z-50 ${
      scrolled && 'border-b border-violet-700'
    }
    `}
    >
      {/* Left: Avatar and Name section */}
      <WrapperContainer additionalStyle="flex-center  w-28 max-mobile:w-auto max-sm:px-1 sm:pr-1">
        <Link href={'/'} className="flex-around-center w-full ">
          <Image
            src={'/assets/amar-img.png'}
            height={1000}
            width={1000}
            alt={'amar-avatar'}
            className="h-10 w-10"
          />
          <TextUnderline
            text="Amar"
            textStyles="font-medium opacity-90 hover:opacity-100 max-mobile:hidden"
          />
        </Link>
      </WrapperContainer>

      {/* Middle */}
      <WrapperContainer additionalStyle="flex-center gap-8 rounded-full px-[7px] max-tablet:hidden w-1/3">
        {navbarItems.map((item) => (
          <Link
            key={item.label}
            href={item.link}
            onClick={() =>
              locomotiveScroll.scrollTo(item.link, { offset: -83 })
            }
            className={`${
              pageSectionOnViewport === item.label
                ? 'transition-all duration-300 ease-in-out '
                : ''
            } 
           relative z-30 w-1/3 h-3/4 font-medium flex-center rounded-full transition-all duration-150 hover:bg-slate-900 hover:border-transparent`}
          >
            {pageSectionOnViewport === item.label && (
              <motion.span
                layoutId="bubble"
                className="bg-gradient-to-r from-indigo-800 to-violet-500 h-full w-full absolute top-0 left-0 -z-10 "
                style={{ borderRadius: 9999 }}
                transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
              ></motion.span>
            )}
            <TextUnderline text={item.label} />
          </Link>
        ))}
      </WrapperContainer>

      <div className="flex items-center gap-3 relative">
        {/* Contact Me */}

        <WrapperContainer additionalStyle="max-tablet:hidden">
          <Link
            href={'#contact-me'}
            onClick={() =>
              locomotiveScroll.scrollTo('#contact-me', { offset: 0 })
            }
            className={`${
              pageSectionOnViewport === 'contact-me' &&
              'shadow-md shadow-violet-500 rounded-full'
            } font-medium flex-center  w-28 py-2 max-tablet:py-3 max-sm:w-32 max-sm:px-2 `}
          >
            <TextUnderline text="Contact Me" />
          </Link>
        </WrapperContainer>

        {/* Hamberger menubar */}
        <AiOutlineMenu
          className="tablet:hidden"
          size={36}
          onClick={() => setMenubarOpen((prev) => !prev)}
        />

        {menubarOpen && (
          <div className="w-screen h-screen absolute -top-2 -right-4  bg-[#0C0404]  bg-opacity-75">
            <motion.div
              animate={{
                transition: {
                  staggerChildren: 0.5,
                  delayChildren: 0.5,
                },
              }}
              className="flex-col-center justify-center gap-10 rounded-3xl px-6 w-full h-1/2 mt-32 "
            >
              <IoCloseOutline
                className="absolute top-1 right-3 bg-slate-900 rounded-full text-purple-500 border border-gray-700"
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
                  className={`${
                    pageSectionOnViewport === item.label
                      ? 'bg-gradient-to-r from-indigo-800 to-violet-500'
                      : 'bg-slate-900'
                  }
                  text-sm w-2/3 p-4 h-12  hover:bg-rum-600 border-rum-500 flex-center rounded-full

                 `}
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
