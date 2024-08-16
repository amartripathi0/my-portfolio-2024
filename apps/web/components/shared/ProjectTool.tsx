import TextUnderline from './TextUnderline'
import { Badge } from '../ui/badge'
import { MotionDiv } from './Motion'

function ProjectTool({ tool, i }: { tool: string; i: number }) {
  
  return (
    <MotionDiv
      key={tool}
      whileHover={{ scale: 1.06, rotate: `${i % 2 === 0 ? -5 : 5}deg` }}
    >
      <Badge className="bg-prelude-900 px-2 py-1 font-montserrat max-sm:text-[3vw] sm:p-2 sm:px-4">
        <TextUnderline text={tool} textStyles="text-xs text-zinc-200" />
      </Badge>
    </MotionDiv>
  )
}

export default ProjectTool
