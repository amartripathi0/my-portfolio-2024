'use client'
import { underlineAnimationVariant } from '@/constants'
import { motion } from 'framer-motion'
import TextUnderline from './TextUnderline'

interface PageTitleProps {
  pageTitle: string
  containerDivStyles?: string
  textStyles?: string
  underlineStyles: string
}
function PageTitle({
  pageTitle,
  containerDivStyles,
  underlineStyles,
  textStyles,
}: PageTitleProps) {
  return (
    <motion.div
      initial={'initial'}
      whileInView={'inView'}
      viewport={{ once: true }}
      variants={underlineAnimationVariant}
      className="max-md:flex-center"
    >
      <TextUnderline
        textType="pageHeading"
        text={pageTitle}
        textStyles={textStyles}
        containerDivStyles={containerDivStyles}
        underlineStyles={underlineStyles}
      />
    </motion.div>
  )
}

export default PageTitle
