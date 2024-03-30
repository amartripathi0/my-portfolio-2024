import { socialMediaLinks } from '@/constants'
import Link from 'next/link'
import React from 'react'

function SocialHandles({additionalStyle}  : { additionalStyle ?: string}) {
  return (
    <div className={`${additionalStyle} `}>
        {socialMediaLinks.map((socialLink) => (
        <Link
          key={socialLink.label}
          target="_blank"
          href={socialLink.url}
          className="px-2 hover:scale-105 transition-all duration-200 ease-in-out opacity-85 hover:opacity-100"
        >
          {socialLink.icon({ size: 25 
          })}
        </Link>
      ))}</div>
  )
}

export default SocialHandles
