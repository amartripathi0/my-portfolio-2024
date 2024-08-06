import { socialMediaLinks } from '@/constants'
import { cn } from '@/utils/cn'
import Link from 'next/link'
import React from 'react'

function SocialHandles({
  additionalStyle,
  size = 20,
}: {
  additionalStyle?: string
  size?: number
}) {
  return (
    <div className={cn('', additionalStyle)}>
      {socialMediaLinks.map(({ label, url, icon: SocialIcon }) => (
        <Link
          key={label}
          target="_blank"
          href={url}
          aria-label={label.toLocaleUpperCase()}
          className="px-2 opacity-60 transition-all duration-200 ease-in-out hover:scale-105 hover:opacity-100"
        >
          {<SocialIcon className={`size-6`} />}
        </Link>
      ))}
    </div>
  )
}

export default SocialHandles
