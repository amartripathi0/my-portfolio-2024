'use client'

import Navbar from '@/components/Navbar'
import { useEffect, useState } from 'react'

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
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

  if (!mounted) return null

  return (
    <div className={`relative`}>
      {locomotiveScroll && <Navbar locomotiveScroll={locomotiveScroll} />}
      {children}
    </div>
  )
}

export default ClientLayout
