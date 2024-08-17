import { pageSectionVariant } from '@/constants'
import TextUnderline from './TextUnderline'
import { MotionDiv } from './Motion'

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
    <MotionDiv className="max-md:flex-center">
      <TextUnderline
        textType="pageHeading"
        text={pageTitle}
        textStyles={textStyles}
        containerDivStyles={containerDivStyles}
        underlineStyles={underlineStyles}
      />
    </MotionDiv>
  )
}

export default PageTitle
