import { socialMediaLinks } from "@/constants";
import Link from "next/link";
import React from "react";

function SocialHandles({
  additionalStyle,
  size = 20,
}: {
  additionalStyle?: string;
  size?: number;
}) {
  return (
    <div className={`${additionalStyle} `}>
      {socialMediaLinks.map(({ label, url, icon: SocialIcon }) => (
        <Link
          key={label}
          target="_blank"
          href={url}
          aria-label={label.toLocaleUpperCase()}
          className="px-2 hover:scale-105 transition-all duration-200 ease-in-out opacity-85 hover:opacity-100"
        >
          {<SocialIcon className={`h-6 w-6 `} />}
        </Link>
      ))}
    </div>
  );
}

export default SocialHandles;
