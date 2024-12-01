import React from 'react'
import { MotionSection } from './Motion'
import TextUnderline from './TextUnderline'
import BackgroundBlur from './BackgroundBlur'

interface PageLayoutProps {
  children: React.ReactNode
  pageId: string
  pageTitle: string
}

export default function PageLayout({
  children,
  pageId,
  pageTitle,
}: PageLayoutProps) {
  return (
    <MotionSection
      id={pageId}
      className="relative flex flex-col items-center justify-center gap-8 3xl:gap-16"
    >
      <TextUnderline textType="pageHeading" text={pageTitle} />
      {children}
    </MotionSection>
  )
}
