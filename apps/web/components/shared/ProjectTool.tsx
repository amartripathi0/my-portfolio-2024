'use client'
import { motion } from 'framer-motion'
import TextUnderline from './TextUnderline'
import { Badge } from '../ui/badge'

function ProjectTool({ tool }: { tool: string }) {
  return (
    <motion.div key={tool} whileHover={{ scale: 1.06, rotate: -5 }}>
      <Badge className="bg-prelude-900 px-2 py-1 max-sm:text-[3vw] sm:p-2 sm:px-4 font-montserrat">
        <TextUnderline text={tool} textStyles="text-xs text-zinc-200" />
      </Badge>
    </motion.div>
  )
}

export default ProjectTool
