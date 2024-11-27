'use client'

import Navbar from '@/blocks/Navbar'
import { useEffect, useState } from 'react'

const Appbar = () => {
  const [locomotiveScroll, setLocomotiveScroll] = useState<LocomotiveScroll>()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    ;(async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default
      const scroll = new LocomotiveScroll({
        scrollbarClass: 'scrollbar',
        smooth: true,
        smartphone: { smooth: false },
        tablet: { smooth: false, breakpoint: 768 },
        lerp: 0.08,
      })
      setLocomotiveScroll(scroll)
    })()
  }, [])

  if (!mounted) return null

  return locomotiveScroll && <Navbar locomotiveScroll={locomotiveScroll} />
}

export default Appbar
