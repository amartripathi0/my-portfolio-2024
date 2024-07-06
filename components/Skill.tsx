import Image from "next/image";
import React from "react";
import { Badge } from "./ui/badge";
import TextUnderline from "./shared/TextUnderline";
import { BackgroundGradient } from "./ui/BackgroundGradient";

function Skill({ name, imageSrc }: { name: string; imageSrc: string }) {
  return (
    <BackgroundGradient>

    <div className="h-32 max-sm:h-16 aspect-square max-sm:p-2 p-2  max-sm:flex-center flex-between flex-col bg-zinc-800 rounded-3xl ">
      <Image
        src={imageSrc}
        alt={name}
        width={200}
        height={200}
        className="h-2/3 max-sm:h-full object-contain aspect square rounded-2xl"
      />
      <Badge className="max-sm:hidden h-6  w-full flex-center bg-prelude-900" >
        <TextUnderline text={name} isSkill = {true} />
      </Badge>
    </div>
    </BackgroundGradient>
  );
}

export default Skill;

