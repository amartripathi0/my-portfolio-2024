import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { links, navbarItems } from "@/constants";
import WrapperContainer from "./shared/WrapperContainer";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <div
      className="flex justify-between items-center w-screen h-24 bg-black 
    px-16 py-2
    "
    >
      {/* Left: Avatar and Name section */}

      <Link href={"/"} className="flex-center h-full">
    <WrapperContainer additionalStyle="flex-center  gap-4">
          <Avatar>
            <AvatarImage src="/assets/profile-photo.jpeg" alt="profile-pic" />
            <AvatarFallback>DP</AvatarFallback>
          </Avatar>

          <h1>Amar</h1>
    </WrapperContainer>
      </Link>

      {/* Middle */}
      <WrapperContainer additionalStyle="flex-center gap-6 rounded-3xl px-6">
        {navbarItems.map((item) => (
          <Link href={item} key={item}>
            <h1>{item}</h1>
          </Link>
        ))}
      </WrapperContainer>

      <WrapperContainer additionalStyle="flex-center gap-4">
        {links.map((link) => (
          <Link key={link.label} href={link.url}>
            <Image src={link.logo} alt={link.label} height={20} width={20} />
          </Link>
        ))}
      </WrapperContainer>
    </div>
  );
};

export default Navbar;
