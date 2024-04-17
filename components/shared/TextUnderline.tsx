"use client"
import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";

const TextUnderline = ({
  text,
  textStyles,
  underlineStyles,
  containerDivStyles,
  isHeading,
  isSkill
}: {
  text: string;
  textStyles?: string;
  underlineStyles?: string;
  containerDivStyles?: string;
  isHeading ?: boolean
  isSkill?: boolean
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimation();

  const handleHoverStart = () => {
    setIsHovered(true);
    controls.start({
      scaleX: 1,
      originX: "left",
      opacity :1,
    });
  };

  const handleHoverEnd = () => {
    setIsHovered(false);
    controls.start({
      scaleX: 0,
      originX: "right",
      opacity :1
    });
  };

  return (
    <motion.div
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
      className={`inline-block relative ${containerDivStyles}`}
    >
      <h1 className={`${textStyles} inline-block relative ${isHeading ? "text-[3.2vw]" : "text-sm"} ${isSkill && "text-[9.2px]"}` }>{text}</h1>
      <motion.div
        initial={{
            scaleX:0
        }}
        animate={controls}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className={`absolute bottom-0 left-0  h-[8%] w-full rounded-2xl drop-shadow-lg ${underlineStyles ? underlineStyles : "bg-white" } `}
      ></motion.div>
    </motion.div>
  );
};

export default TextUnderline;
