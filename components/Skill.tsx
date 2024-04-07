import Image from "next/image";
import React from "react";
import { Badge } from "./ui/badge";
import TextUnderline from "./shared/TextUnderline";
import { BackgroundGradient } from "./ui/BackgroundGradient";

function Skill({ name, imageSrc }: { name: string; imageSrc: string }) {
  return (
    <BackgroundGradient>

    <div className="h-44 max-sm:h-16 aspect-square p-4 max-sm:p-2 max-sm:flex-center flex-between flex-col bg-zinc-800 rounded-3xl ">
      <Image
        src={imageSrc}
        alt={name}
        width={1000}
        height={1000}
        className="h-2/3 max-sm:h-full object-contain aspect square rounded-2xl"
      />
      <Badge className="text-xs max-sm:hidden p-2 px-2 w-full flex-center bg-prelude-900" key={name}>
        <TextUnderline text={name} />
      </Badge>
    </div>
    </BackgroundGradient>
  );
}

export default Skill;
