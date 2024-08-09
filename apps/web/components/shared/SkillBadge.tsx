import React from 'react'
import { Badge } from '../ui/badge'
import TextUnderline from './TextUnderline'
import { cva } from 'class-variance-authority'
import { cn } from '@/utils/cn'

const SkillBadgeVariant = cva('bg-prelude-900', {
  variants: {
    badgeType: {
      skillBadge: 'text-xs max-sm:text-[3vw] px-2 max-sm:py-1 p-2 sm:px-4',
      projectTool: 'max-sm:hidden h-6 flex-center',
      default: 'max-sm:text-[3vw] px-2 max-sm:py-1 p-2 sm:px-4',
    },
  },
  defaultVariants: {
    badgeType: 'default',
  },
})
function SkillBadge({
  badgeType,
}: {
  badgeType: 'skillBadge' | 'projectTool'
}) {
  return (
    <Badge className={cn('', SkillBadgeVariant({ badgeType }))}>
      <TextUnderline text={badgeType} />
    </Badge>
  )
}

export default SkillBadge
