import Image from 'next/image'
// import { Badge } from './ui/badge'
// import TextUnderline from './shared/TextUnderline'
import { BackgroundGradient } from './ui/BackgroundGradient'

function Skill({ name, imageSrc }: { name: string; imageSrc: string }) {
  return (
    <BackgroundGradient className="custom-cursor-hidden">
      {/* <div className="max-sm:flex-center flex-between aspect-square md:h-24  lg:h-32 flex-col rounded-3xl bg-zinc-800 p-2 max-sm:h-16 max-sm:p-2"> */}
      <div className="custom-cursor-hidden flex-center group relative aspect-square h-16 flex-col rounded-3xl bg-zinc-800 p-2 hover:opacity-90 max-sm:p-2 md:h-16 lg:h-20">
        <Image
          src={imageSrc}
          alt={name}
          width={200}
          height={200}
          // className="aspect square h-2/3 rounded-2xl object-contain max-lg:h-full"
          className="custom-cursor-hidden aspect square rounded object-contain sm:rounded-2xl"
        />
        {/* <Badge className="flex-center h-6 w-full bg-prelude-900 max-lg:hidden">
          <TextUnderline text={name} textType="skill" />
        </Badge> */}
        <span className="custom-cursor-hidden invisible absolute w-4/5 rounded-xl bg-prelude-900 p-2 text-center text-[11px] font-bold max-sm:text-[3vw] md:group-hover:visible">
          {name}
        </span>
      </div>
    </BackgroundGradient>
  )
}

export default Skill
