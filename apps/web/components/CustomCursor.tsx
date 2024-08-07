'use client'
import { cn } from '@/utils/cn'
import { useEffect, useRef, useState } from 'react'

function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const [cursorStyle, setCursorStyle] = useState('default')

  const [currentCursorPos, setCurrentCursorPos] = useState({ x: -20, y: -20 })
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCurrentCursorPos({ x: e.clientX - 10, y: e.clientY - 10 })
    }
    const handleMouseLeave = () => {

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

    const handleMouseOver = (e: MouseEvent) => {
      if (e.target instanceof Element) {
        const element = e.target
        if (element.classList.contains('pink-cursor-lg')) {
          setCursorStyle('pink-cursor-lg')
        } else if (element.classList.contains('pink-cursor-md')) {
          setCursorStyle('pink-cursor-md')
        } else if (element.classList.contains('pink-cursor-sm')) {
          setCursorStyle('pink-cursor-sm')
        } else if (element.classList.contains('custom-cursor-hidden')) {
          setCursorStyle('custom-cursor-hidden')
        } else {
          setCursorStyle('default')
        }
      }
    }

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('mouseenter', handleMouseEnter)
    document.addEventListener('mouseover', handleMouseOver)
    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mouseenter', handleMouseEnter)
      document.removeEventListener('mouseover', handleMouseOver)
    }
  }, [])

  return (
    <div
      ref={cursorRef}
      style={{
        transform: `translateX(${currentCursorPos.x}px) translateY(${currentCursorPos.y}px)`,
        transition: 'transform 0.75s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      }}
      className={cn(
        `pointer-events-none fixed left-0 top-0 z-[9999] size-4 rounded-full bg-purple-600 mix-blend-plus-lighter blur-[1px] drop-shadow-glow max-sm:hidden`,
        cursorStyle === 'pink-cursor-lg' &&
          'size-10 bg-gradient-to-r from-indigo-800 to-pink-500 opacity-80 mix-blend-darken',
        cursorStyle === 'pink-cursor-md' &&
          'size-7 bg-gradient-to-r from-indigo-800 via-pink-500 to-cyan-900 opacity-80 mix-blend-darken',
        cursorStyle === 'pink-cursor-sm' &&
          'size-6 bg-gradient-to-r from-indigo-800 via-pink-500 to-cyan-900 opacity-80 mix-blend-darken',
        cursorStyle === 'custom-cursor-hidden' && 'hidden',
      )}
    />
  )
}

export default CustomCursor
