import Image from "next/image";
import React from "react";

function Skill({ name, imageSrc }: { name: string; imageSrc: string }) {
  return (
    <div className="h-40 w-40  border rounded-xl p-2 flex-between flex-col">
      <Image src={imageSrc} alt={name} width={1000} height={1000}  className="h-4/5 aspect square rounded-lg" />
      <h1>{name}</h1>
    </div>
  );
}

export default Skill;
