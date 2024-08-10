import { cn } from '@/utils/cn'
import React from 'react'

const WrapperContainer = ({
  children,
  additionalStyle,
}: {
  children: React.ReactNode
  additionalStyle?: string
}) => {
  return (
    <div
      className={cn(
        `font-poppins h-5/6 rounded-full border-2 border-prelude-600 text-sm transition-all duration-200 hover:border-rum-500 hover:shadow-md hover:shadow-violet-500`,
        additionalStyle,
      )}
    >
      {children}
    </div>
  )
}

export default WrapperContainer
