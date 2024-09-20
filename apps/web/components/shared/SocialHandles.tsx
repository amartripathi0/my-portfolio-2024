import { socialMediaLinks } from '@/constants'
import { cn } from '@/utils/cn'
import Link from 'next/link'

function SocialHandles({
  additionalStyle,
  iconStyle,
}: {
  additionalStyle?: string
  iconStyle?: string
}) {
  return (
    <div className={cn('', additionalStyle)}>
      {socialMediaLinks.map(({ label, url, icon: SocialIcon }) => (
        <Link
          key={label}
          target="_blank"
          href={url}
          aria-label={label.toLocaleUpperCase()}
          className="opacity-80 md:opacity-70 transition-all duration-200 ease-in-out hover:scale-105 hover:opacity-100"
        >
          {<SocialIcon className={cn(`text-2xl md:text-[1.4vw] `,
            iconStyle
          )} />}
        </Link>
      ))}
    </div>
  )
}

export default SocialHandles
