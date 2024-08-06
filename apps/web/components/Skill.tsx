import Image from 'next/image'
import React from 'react'
import { Badge } from './ui/badge'
import TextUnderline from './shared/TextUnderline'
import { BackgroundGradient } from './ui/BackgroundGradient'

function Skill({ name, imageSrc }: { name: string; imageSrc: string }) {
  return (
    <BackgroundGradient>
      <div className="max-sm:flex-center flex-between aspect-square h-32 flex-col rounded-3xl bg-zinc-800 p-2 max-sm:h-16 max-sm:p-2">
        <Image
          src={imageSrc}
          alt={name}
          width={200}
          height={200}
          className="aspect square h-2/3 rounded-2xl object-contain max-sm:h-full"
        />
        <Badge className="flex-center h-6 w-full bg-prelude-900 max-sm:hidden">
          <TextUnderline text={name} textType="skill" />
        </Badge>
      </div>
    </BackgroundGradient>
  )
}

export default Skill
