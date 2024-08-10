import Image from 'next/image'
// import { Badge } from './ui/badge'
// import TextUnderline from './shared/TextUnderline'
import { BackgroundGradient } from './ui/BackgroundGradient'

function Skill({ name, imageSrc }: { name: string; imageSrc: string }) {
  return (
    <BackgroundGradient>
      {/* <div className="max-sm:flex-center flex-between aspect-square md:h-24  lg:h-32 flex-col rounded-3xl bg-zinc-800 p-2 max-sm:h-16 max-sm:p-2"> */}
      <div className="flex-center aspect-square h-16 flex-col rounded-3xl bg-zinc-800 p-2 max-sm:p-2 md:h-16 lg:h-24">
        <Image
          src={imageSrc}
          alt={name}
          width={200}
          height={200}
          // className="aspect square h-2/3 rounded-2xl object-contain max-lg:h-full"
          className="aspect square rounded-2xl object-contain"
        />
        {/* <Badge className="flex-center h-6 w-full bg-prelude-900 max-lg:hidden">
          <TextUnderline text={name} textType="skill" />
        </Badge> */}
      </div>
    </BackgroundGradient>
  )
}

export default Skill
