"use client"
import React, { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { navbarItems, socialMediaLinks } from "@/constants";
import WrapperContainer from "./shared/WrapperContainer";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseOutline } from "react-icons/io5";
import { easeInOut, motion, stagger } from "framer-motion"
import { usePathname } from "next/navigation";

const Navbar = () => {
  // const router = useRouter()
  const [menubarOpen , setMenubarOpen] = useState(false)
  const pathname = usePathname();

    
  return (
    <motion.nav    
    initial={{ opacity: 0 , y: -15}}
    animate={{ opacity: 1  , y : 0  }}
    transition={ { ease : 'easeInOut', duration: 1}}

      className="flex justify-between items-center fixed top-0 left-0  
      border-b border-purple-800  w-screen h-28  max-mobile:h-20
    px-8 max-mobile:px-2 py-4 max-mobile:py-2   bg-opacity-30  backdrop-filter backdrop-blur-lg  
    
    "
    >
      {/* Left: Avatar and Name section */}

      <Link href={"/"} className="flex-center h-full">
        <WrapperContainer additionalStyle="flex-center  gap-4 px-4 max-mobile:px-2">
          <Avatar>
            <AvatarImage src="/assets/profile-photo.jpeg" alt="profile-pic" />
          </Avatar>

          <h1 className="font-semibold">Amar</h1>
        </WrapperContainer> 
      </Link>

      {/* Middle */}
      <WrapperContainer additionalStyle="flex-center gap-6 rounded-3xl px-6  max-mobile:hidden">
        {navbarItems.map((item) => (
            <Link key={item} href={item}
            className={`${pathname === ('/'+item) && 'text-purple-400 font-medium	underline'}`}

            >{item}</Link>
        ))}
      </WrapperContainer>
        
        <div className="flex items-center gap-3 relative">

        {/* Github and Linkedin Icon */}
      <WrapperContainer additionalStyle="flex-center gap-5 max-mobile:px-4 py-4 px-3 max-mobile:py-3 ">
        {socialMediaLinks.map((socialLink) => (
          <Link key={socialLink.label} href={socialLink.url}
          className="px-2"
          >
           {socialLink.icon({size : 20})}
          </Link>
        ))}

      </WrapperContainer>

      {/* Hamberger menubar */}
      <AiOutlineMenu 
      className="  mobile:hidden" 
      size={30}
      onClick={() => setMenubarOpen(prev => !prev)}
      />

      {
        menubarOpen &&
        <motion.div  
        initial={{ opacity: 1 , x: "100vw" }}
        animate={{ opacity: 1  , x : 0 }}
        transition={ { ease : 'easeInOut', duration: 0.3}}
     className="w-screen h-screen absolute top-0 right-0 backdrop:blur-md bg-black flex-center bg-opacity-85 ">

        <div  className="flex-col-center justify-center gap-10 rounded-3xl px-6 ">

        <IoCloseOutline 
        className="absolute top-5 right-5"
        onClick={() => setMenubarOpen(prev => !prev) }
        size={35} />

        {navbarItems.map((item) => (
            <Link key={item} href={item} 
            className={`${pathname === ('/'+item) && 'text-purple-400 font-medium	underline'}
            text-2xl
            `}
            >
              <motion.div
              initial={{ opacity: 0 , scale : 0.7}}
              animate={{ opacity: 1  , scale : 1 ,}}
              transition={ { ease : 'easeInOut', duration: 1 }
            }
              >

              {item}
              </motion.div>
              
              </Link>
            ))}
      </div>
      </motion.div>}
      </div>
    </motion.nav>
  );
};

export default Navbar;
