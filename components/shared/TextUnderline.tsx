"use client"
import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";

const TextUnderline = ({
  text,
  textStyles,
  underlineStyles,
  containerDivStyles
}: {
  text: string;
  textStyles?: string;
  underlineStyles?: string;
  containerDivStyles?: string;
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
      <h1 className={`${textStyles} inline-block relative`}>{text}</h1>
      <motion.div
        initial={{
            scaleX:0
        }}
        animate={controls}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className={`absolute bottom-0 left-0  h-[10%] w-full ${underlineStyles ? underlineStyles : "bg-white" } `}
      ></motion.div>
    </motion.div>
  );
};

export default TextUnderline;
