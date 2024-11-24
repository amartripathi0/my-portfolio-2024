import TextUnderline from './TextUnderline'
import { Badge } from '../ui/badge'
import { MotionDiv } from './Motion'
import { cn } from '@/utils/cn'
import { cva } from 'class-variance-authority'

function ProjectTool({
  tool,
  i,
  additionalStyle,
  textStyles,
  toolVariant,
}: {
  tool: string
  i: number
  additionalStyle?: string
  textStyles?: string
  toolVariant: 'projectDetailTool' | 'projectCardTool'
}) {
  const projectToolVariant = cva('', {
    variants: {
      toolVariant: {
        projectDetailTool:
          'bg-prelude-950 px-2 py-1 font-montserrat max-sm:text-[3vw] sm:p-2 sm:px-4',
        projectCardTool:
          'bg-prelude-900 px-2 py-1 font-montserrat max-sm:text-[3vw] 3xl:text-base font-medium',
      },
    },
  })
  return (
    <MotionDiv
    // whileHover={{ scale: 1.06, rotate: `${i % 2 === 0 ? -5 : 5}deg` }}
    >
      <Badge
        className={cn('', projectToolVariant({ toolVariant }), additionalStyle)}
      >
        <TextUnderline
          text={tool}
          textType="skill"
          textStyles={cn('text-xs text-zinc-200 3xl:text-base', textStyles)}
        />
      </Badge>
    </MotionDiv>
  )
}

export default ProjectTool
