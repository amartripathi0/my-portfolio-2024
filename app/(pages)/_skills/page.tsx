"use client";
import Skill from "@/components/Skill";
import TextUnderline from "@/components/shared/TextUnderline";
import {
  backendSkills,
  frontendSkills,
  underlineAnimationVariant,
} from "@/constants";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
function Skills() {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end", "start"],
  });

  const leftSlide = useTransform(scrollYProgress, [0, 10], ["0%", "-100vw"]);
  const rightSlide = useTransform(scrollYProgress, [0, 10], ["0%", "100vw"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  return (
    <motion.div
      id="skills"
      className="h-[calc(100vh-7rem)] pt-10 -mx-40 max-sm:mx-0  flex justify-end  flex-col gap-14 max-sm:gap-4 relative  "
    >
      <motion.div
        initial={"initial"}
        whileInView={"inView"}
        variants={underlineAnimationVariant}
      >
        <TextUnderline
          text="Skills"
          textStyles="text-[3.2vw] max-sm:text-4xl font-medium "
          containerDivStyles="w-[10%] max-sm:w-full  max-sm:flex-center mx-40 max-sm:mx-0 "
          underlineStyles=" bg-gradient-to-r from-indigo-600 via-purple-400 to-yellow-500   "
        />
      </motion.div>

      {/* bg gradient purple */}
      <div
        className="absolute opacity-80 left-36 h-1/5 top-4  max-sm:top-20 max-sm:left-28 aspect-square  blur-[100px] rounded-full
      bg-gradient-to-r from-indigo-600 via-yellow-300 to-purple-400    
      "
      ></div>

      <div className="text-sm max-sm:text-sm max-sm:px-5 text-justify h-4/5 max-sm:rounded-3xl w-full  overflow-hidden  flex items-center justify-evenly  max-sm:justify-end   flex-col relative">
        <motion.div
          ref={targetRef}
          style={{ translateX: leftSlide, opacity: opacity }}
          className=" flex flex-wrap gap-4  p-10  max-sm:p-2  max-sm:justify-around "
        >
          {frontendSkills.map(({ name, imageSrc }) => (
            <Skill key={name} name={name} imageSrc={imageSrc} />
          ))}
        </motion.div>
        <motion.div
          ref={targetRef}
          style={{ translateX: rightSlide, opacity: opacity }}
          className=" flex flex-wrap gap-4  p-10  max-sm:p-2  max-sm:justify-around -max-sm:ml-10"
        >
          {backendSkills.map(({ name, imageSrc }) => (
            <Skill key={name} name={name} imageSrc={imageSrc} />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Skills;
