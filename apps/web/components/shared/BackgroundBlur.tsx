import { cn } from '@/utils/cn'
import { cva } from 'class-variance-authority'

const BackgroundBlurVariants = cva(
  'aspect-square blur-[100px] rounded-full absolute opacity-80',
  {
    variants: {
      blurColor: {
        indigo: 'bg-gradient-to-r from-indigo-600  to-cyan-400',
        purple: 'bg-purple-400',
      },
      height: {
        mobile: 'h-5',
        default: '1/5',
      },
    },
  },
)
function BackgroundBlur({
  style,
  blurColor,
}: {
  style: string
  blurColor?: 'indigo' | 'purple'
}) {
  return (
    <div className={cn(`${BackgroundBlurVariants({ blurColor })}`, style)} />
  )
}

export default BackgroundBlur
