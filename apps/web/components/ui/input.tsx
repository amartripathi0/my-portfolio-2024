// Input component extends from shadcnui - https://ui.shadcn.com/docs/components/input
'use client'
import * as React from 'react'
import { cn } from '@/utils/cn'
import { useMotionTemplate, useMotionValue, motion } from 'framer-motion'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    const radius = 100 // change this to increase the rdaius of the hover effect
    const [visible, setVisible] = React.useState(false)

    let mouseX = useMotionValue(0)
    let mouseY = useMotionValue(0)

    function handleMouseMove({ currentTarget, clientX, clientY }: any) {
      let { left, top } = currentTarget.getBoundingClientRect()

      mouseX.set(clientX - left)
      mouseY.set(clientY - top)
    }
    return (
      <motion.div
        style={{
          background: useMotionTemplate`
        radial-gradient(
          ${visible ? radius + 'px' : '0px'} circle at ${mouseX}px ${mouseY}px,
          var(--blue-500),
          transparent 80%
        )
      `,
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        className="group/input rounded-lg p-[2px] transition duration-300"
      >
        <input
          type={type}
          className={cn(
            `dark:placeholder-text-neutral-600 duration-400 custom-cursor-hidden flex h-10 w-full rounded-[6px] border-none bg-zinc-800 px-3 py-2 text-sm text-white shadow-input transition file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-400 focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-400 disabled:cursor-not-allowed disabled:opacity-50 group-hover/input:shadow-none dark:shadow-[0px_0px_1px_1px_var(--neutral-700)] dark:focus-visible:ring-neutral-600 3xl:h-14 3xl:text-lg`,
            className,
          )}
          ref={ref}
          {...props}
        />
      </motion.div>
    )
  },
)
Input.displayName = 'Input'

export { Input }
