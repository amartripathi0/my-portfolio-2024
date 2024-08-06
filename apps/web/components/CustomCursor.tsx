'use client'
import { useEffect, useRef, useState } from 'react'

function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  // console.log(cursorRef.current?.classList);

  const [currentCursorPos, setCurrentCursorPos] = useState({ x: -20, y: -20 })
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCurrentCursorPos({ x: e.clientX - 10, y: e.clientY - 10 })
    }
    const handleMouseLeave = () => {
      console.log('mouseleave')

      if (cursorRef.current) {
        cursorRef.current.classList.remove('opacity-100')
        cursorRef.current.classList.add('opacity-0')
      }
    }

    const handleMouseEnter = () => {
      if (cursorRef.current) {
        cursorRef.current.classList.remove('opacity-0')
        cursorRef.current.classList.add('opacity-100')
      }
    }
    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('mouseenter', handleMouseEnter)
    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mouseenter', handleMouseEnter)
    }
  }, [])

  return (
    <div
      ref={cursorRef}
      style={{
        transform: `translateX(${currentCursorPos.x}px) translateY(${currentCursorPos.y}px)`,
        transition: 'transform 0.75s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      }}
      className={`bounce animated max-sm:hidden bg-purple-700 p-2 rounded-full z-[9999] drop-shadow-glow blur-[1px] fixed left-0 top-0 pointer-events-none mix-blend-screen`}
    />
  )
}

export default CustomCursor
