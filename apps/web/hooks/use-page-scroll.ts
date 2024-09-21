'use client'
import { useEffect, useState, useCallback } from 'react'

function usePageScroll(threshold = 10) {
  const [pageSectionOnViewport, setPageSectionOnViewport] = useState('home')
  // const [isScrolling, setIsScrolling] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // const handleScrollClass = useCallback(() => {
  //   if (isScrolling) {
  //     document.body.classList.add('on-scroll')
  //     document.body.classList.remove('on-not-scroll')
  //   } else {
  //     document.body.classList.add('on-not-scroll')
  //     document.body.classList.remove('on-scroll')
  //   }
  // }, [isScrolling])

  // useEffect(() => {
  //   // handleScrollClass()
  // }, [isScrolling, handleScrollClass])

  useEffect(() => {
    const windowHeight = window.innerHeight
    let scrollTimer: NodeJS.Timeout

    // Function to determine which section is currently in view
    const handlePageNavigation = () => {
      const scrollY = window.scrollY
      const sections = [
        { name: 'home', threshold: 0.8 },
        { name: 'work-exp', threshold: 1.4 },
        { name: 'projects', threshold: 2.4 },
        { name: 'skills', threshold: 4 },
        { name: 'contact-me', threshold: Infinity },
      ]

      const currentSection = sections.find(
        (section) => scrollY < section.threshold * windowHeight,
      )
      if (currentSection) setPageSectionOnViewport(currentSection.name)
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > threshold)
      // setIsScrolling(true)
      clearTimeout(scrollTimer)
      // scrollTimer = setTimeout(() => setIsScrolling(false), 100)
    }

    const handlePageScroll = () => {
      handlePageNavigation()
      handleScroll()
    }

    window.addEventListener('scroll', handlePageScroll)
    return () => {
      window.removeEventListener('scroll', handlePageScroll)
      clearTimeout(scrollTimer)
    }
  }, [threshold])

  return { pageSectionOnViewport, scrolled }
}

export default usePageScroll
