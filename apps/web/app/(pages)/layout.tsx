'use client'

import Navbar from '@/components/Navbar'
import React, { useEffect, useState } from 'react'
import '../globals.css'
const Home = ({ children }: { children: React.ReactNode }) => {
  const [locomotiveScroll, setLocomotiveScroll] = useState<LocomotiveScroll>()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    ;(async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default
      const scroll = new LocomotiveScroll({ scrollbarClass: 'scrollbar' })
      setLocomotiveScroll(scroll)
    })()
  }, [])

  return (
    mounted && (
      <div className={`relative`}>
        {locomotiveScroll && <Navbar locomotiveScroll={locomotiveScroll} />}
        <div className="mx-0 px-4 pt-20 sm:px-8 md:px-10 lg:mx-28">
          {children}
        </div>
        {/* <div className="mr-10 bottom-4 left-full sticky border p-3 flex-center w-60 max-sm:w-full text-sm max-sm:m-auto max-sm:p-1 max-sm:bottom-1 max-sm:left-0 rounded-xl  ">
        I&apos;m updating the website. Please visit often for the latest changes!
        </div> */}
      </div>
    )
  )
}

export default Home
