import Image from "next/image";
import React from "react";
import { Badge } from "./ui/badge";
import TextUnderline from "./shared/TextUnderline";

function Skill({ name, imageSrc }: { name: string; imageSrc: string }) {
  return (
    <div className="h-44  aspect-square rounded-lg p-2 flex-between flex-col">
      <Image
        src={imageSrc}
        alt={name}
        width={1000}
        height={1000}
        className="h-2/3 object-contain aspect square rounded-2xl"
      />
      <Badge className="text-xs p-2 px-4 w-full flex-center bg-prelude-900" key={name}>
        <TextUnderline text={name} />
      </Badge>
    </div>
  );
}

export default Skill;
