"use client";
import React, { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { navbarItems, socialMediaLinks } from "@/constants";
import WrapperContainer from "./shared/WrapperContainer";
import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseOutline } from "react-icons/io5";
import { easeInOut, motion, stagger } from "framer-motion";
import useScrollTop from "@/hooks/use-scroll-top";
import usePageScroll from "@/hooks/use-page-scroll";
import LocomotiveScroll from "locomotive-scroll";

const Navbar = ({
  locomotiveScroll,
}: {
  locomotiveScroll: LocomotiveScroll;
}) => {
  const [menubarOpen, setMenubarOpen] = useState(false);
  const { scrolled } = useScrollTop();
  const { pageSectionOnViewport } = usePageScroll();

  return (
    <motion.nav
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ease: "easeInOut", duration: 1 }}
      className={`flex-between fixed top-0 left-0 w-screen h-28  max-mobile:h-20
    px-10 max-mobile:px-4 py-4 max-mobile:py-2 backdrop-blur-md z-50 ${
      scrolled && "border-b border-violet-700"
    }
    `}
    >
      {/* Left: Avatar and Name section */}
      <WrapperContainer additionalStyle="flex-center  gap-4 px-4  w-40 max-mobile:w-auto max-sm:px-1">
        <Link href={"/"} className="flex-between w-full  ">
          <Avatar>
            <AvatarImage src={"/assets/profile-photo.jpeg"} alt="profile-pic" />
          </Avatar>

          <h1 className="font-medium opacity-90 hover:opacity-100 max-mobile:hidden">
            Amar
          </h1>
        </Link>
      </WrapperContainer>

      {/* Middle */}
      <WrapperContainer additionalStyle="flex-center gap-8 rounded-full px-3  max-tablet:hidden w-1/3">
        {navbarItems.map((item) => (
          <Link
            key={item.label}
            href={item.link}
            onClick={() => locomotiveScroll.scrollTo(item.link)}
            className={`${
              pageSectionOnViewport === item.label
                ? "transition-all duration-300 ease-in-out"
                : "bg-slate-900"
            } 
           relative z-30 w-1/3 h-3/4 font-medium hover:bg-rum-500  flex-center rounded-full transition-all duration-150`}
          >
            { pageSectionOnViewport === item.label && (
            <motion.span
              layoutId="bubble"
              className="bg-gradient-to-r from-indigo-800 to-violet-500  h-full w-full absolute top-0 left-0 -z-10 "
              style={{ borderRadius: 9999 }}
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            >
              
            </motion.span>
            )}

            {item.label}
          </Link>
        ))}
      </WrapperContainer>

      <div className="flex items-center gap-3 relative">
        {/* Contact  */}

        <WrapperContainer>
          <Link
            href={"#contact"}
            className="font-medium flex-center  w-40 py-4 max-tablet:py-3 max-sm:w-32 max-sm:px-2 px-3"
          >
            Contact Me
          </Link>
        </WrapperContainer>

        {/* Hamberger menubar */}
        <AiOutlineMenu
          className="tablet:hidden"
          size={30}
          onClick={() => setMenubarOpen((prev) => !prev)}
        />

        {menubarOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100vw" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ ease: "easeInOut", duration: 0.5 }}
            className="w-screen h-screen absolute -top-2 -right-4  bg-[#0C0404]  bg-opacity-75 
            
              "
          >
            <div className="flex-col-center justify-center gap-10 rounded-3xl px-6 w-full h-1/2 mt-32 ">
              <IoCloseOutline
                className="absolute top-5 right-5"
                onClick={() => setMenubarOpen((prev) => !prev)}
                size={35}
              />

              {navbarItems.map((item) => (
                <Link
                  scroll={true}
                  key={item.label}
                  href={item.link}
                  className={`${
                    pageSectionOnViewport === item.label
                      ? "bg-gradient-to-r bg-violet-700"
                      : "bg-rum-800"
                  }
                  text-xl w-2/3 p-4 h-12 hover:bg-rum-600 border-rum-500 flex-center rounded-full transition-all duration-150

            `}
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.7 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ ease: "easeInOut", duration: 1 }}
                  >
                    {item.label}
                  </motion.div>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
