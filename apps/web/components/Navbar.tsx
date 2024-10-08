import React, { useCallback, useState } from 'react'
import { navbarItems } from '@/constants'
import WrapperContainer from './shared/WrapperContainer'
import Link from 'next/link'
import { AiOutlineMenu } from 'react-icons/ai'
import { IoCloseOutline } from 'react-icons/io5'
import usePageScroll from '@/hooks/use-page-scroll'
import LocomotiveScroll from 'locomotive-scroll'
import TextUnderline from './shared/TextUnderline'
import Image from 'next/image'
import { cn } from '@/utils/cn'
import { MotionDiv, MotionNav, MotionSpan, MotionLink } from './shared/Motion'
import { AnimatePresence } from 'framer-motion'

const Navbar = ({
  locomotiveScroll,
}: {
  locomotiveScroll: LocomotiveScroll
}) => {
  const [menubarOpen, setMenubarOpen] = useState(false)
  const { scrolled, pageSectionOnViewport } = usePageScroll()
  const menubarVariant = {
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30,
        when: 'beforeChildren',
        staggerChildren: 0.1,
      },
    },
    hide: {
      opacity: 0,
      y: '-100%',
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30,
        when: 'afterChildren',
        staggerChildren: 0.1,
      },
    },
  }
  const menubarItemVariant = {
    show: {
      opacity: 1,
      scale: 1,
      y: 0,
    },
    hide: {
      opacity: 0,
      scale: 0.4,
      y: -40,
    },
  }
  const handleScrollTo = useCallback(
    (link: string) => {
      locomotiveScroll.scrollTo(link, { offset: -83 })
    },
    [locomotiveScroll],
  )
  return (
    <MotionNav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ease: 'easeInOut', duration: 1 }}
      className={cn(
        `flex-between fixed left-0 top-0 z-50 h-[70px] w-screen px-4 py-1 backdrop-blur-sm sm:px-10 sm:py-2 md:h-20`,
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
      <WrapperContainer additionalStyle="flex-center md:gap-3 p-1.5 lg:gap-6 rounded-full max-md:hidden md:w-1/2  lg:max-w-[490px]  bg-[#0C0910]">
        {navbarItems.map((item) => (
          <Link
            key={item.label}
            href={item.link}
            onClick={() => handleScrollTo(item.link)}
            className={cn(
              'flex-center relative z-30 h-full w-1/3 rounded-full transition-all duration-150 hover:bg-neutral-900',
              pageSectionOnViewport === item.label &&
                'transition-all duration-300 ease-in-out',
            )}
          >
            {pageSectionOnViewport.replace(/\s+/g, '-') ===
              item.label.replace(/\s+/g, '-') && (
              <MotionSpan
                layoutId="bubble"
                className="absolute z-[-60] size-full rounded-full bg-gradient-to-r from-indigo-800 to-violet-500 font-medium"
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 30,
                  duration: 0.8,
                }}
              ></MotionSpan>
            )}
            <TextUnderline
              text={item.label}
              textStyles={
                pageSectionOnViewport.replace(/\s+/g, '-') ===
                item.label.replace(/\s+/g, '-')
                  ? 'font-medium'
                  : 'font-normal'
              }
            />
          </Link>
        ))}
      </WrapperContainer>

      <div className="relative flex h-full items-center">
        {/* Contact Me */}

        <WrapperContainer
          additionalStyle={`max-md:hidden flex-center w-32 sm:w-28 ${pageSectionOnViewport === 'contact-me' && 'rounded-full shadow-md shadow-violet-500'}`}
        >
          <Link
            href={'#contact-me'}
            onClick={() =>
              locomotiveScroll.scrollTo('#contact-me', { offset: 0 })
            }
          >
            <TextUnderline text="Contact Me" />
          </Link>
        </WrapperContainer>

        {/* Hamburger menu */}
        <AiOutlineMenu
          className="md:hidden"
          size={36}
          onClick={() => setMenubarOpen(true)}
        />

        <AnimatePresence>
          {menubarOpen && (
            <MotionDiv
              variants={menubarVariant}
              initial="hide"
              animate="show"
              exit="hide"
              className="flex-center fixed right-0 top-0 h-screen w-screen flex-col space-y-4 bg-[#0C0404] bg-opacity-75"
            >
              <IoCloseOutline
                className="absolute right-3 top-4 rounded-full border border-gray-700 bg-neutral-900 p-1 text-purple-500"
                onClick={() => setMenubarOpen((prev) => !prev)}
                size={45}
              />

              {navbarItems.map((item) => (
                <MotionLink
                  key={item.label}
                  variants={menubarItemVariant}
                  onClick={() => setMenubarOpen((prev) => !prev)}
                  scroll={true}
                  href={item.link}
                  className={cn(
                    'flex-center h-12 w-3/5 rounded-full text-sm',
                    pageSectionOnViewport.replace(/\s+/g, '-') ===
                      item.label.replace(/\s+/g, '-')
                      ? 'bg-gradient-to-r from-indigo-800 to-violet-500 font-semibold'
                      : 'bg-neutral-900',
                  )}
                >
                  {item.label}
                </MotionLink>
              ))}
              <MotionLink
                variants={menubarItemVariant}
                onClick={() => setMenubarOpen((prev) => !prev)}
                scroll={true}
                href={'#contact-me'}
                className={cn(
                  'flex-center h-12 w-3/5 rounded-full text-sm',
                  pageSectionOnViewport === 'contact-me'
                    ? 'bg-gradient-to-r from-indigo-800 to-violet-500 font-semibold'
                    : 'bg-neutral-900',
                )}
              >
                contact me
              </MotionLink>
            </MotionDiv>
          )}
        </AnimatePresence>
      </div>
    </MotionNav>
  )
}

export default Navbar
