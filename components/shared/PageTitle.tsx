'use client'
import { underlineAnimationVariant } from '@/constants'
import { motion } from 'framer-motion'
import TextUnderline from './TextUnderline'

interface PageTitleProps {
  pageTitle: string
  textStyles: string
  containerDivStyles: string
  underlineStyles: string
}
function PageTitle({
  pageTitle,
  textStyles,
  containerDivStyles,
  underlineStyles,
}: PageTitleProps) {
  return (
    <motion.div
      initial={'initial'}
      whileInView={'inView'}
      variants={underlineAnimationVariant}
    >
      <TextUnderline
        isHeading={true}
        text={pageTitle}
        textStyles={textStyles}
        containerDivStyles={containerDivStyles}
        underlineStyles={underlineStyles}
      />
    </motion.div>
  )
}

export default PageTitle
