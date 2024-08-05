'use client'
import { underlineAnimationVariant } from '@/constants'
import { motion } from 'framer-motion'
import TextUnderline from './TextUnderline'

interface PageTitleProps {
  pageTitle: string
  containerDivStyles?: string
  underlineStyles: string
}
function PageTitle({
  pageTitle,
  containerDivStyles,
  underlineStyles,
}: PageTitleProps) {
  return (
    <motion.div
      initial={'initial'}
      whileInView={'inView'}
      viewport={{ once: true }}
      variants={underlineAnimationVariant}
    >
      <TextUnderline
        textType='pageHeading'
        text={pageTitle}
        containerType='pageHeading'
        containerDivStyles={containerDivStyles} 
        underlineStyles={underlineStyles}
      />
    </motion.div>
  )
}

export default PageTitle
