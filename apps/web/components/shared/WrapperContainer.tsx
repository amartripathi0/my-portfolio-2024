import { cn } from '@/utils/cn'

const WrapperContainer = ({
  children,
  additionalStyle,
}: {
  children: React.ReactNode
  additionalStyle?: string
}) => {
  return (
    <div
      className={cn(
        `h-5/6 rounded-full border-2 border-prelude-600 font-poppins text-sm transition-all duration-200 hover:border-rum-500 hover:shadow-md hover:shadow-violet-500`,
        additionalStyle,
      )}
    >
      {children}
    </div>
  )
}

export default WrapperContainer
