"use client";
import Skill from "@/components/Skill";
import TextUnderline from "@/components/shared/TextUnderline";
import {
  backendSkills,
  frontendSkills,
} from "@/constants";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
function Skills() {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start 0.68", "start end"]
  });

  const leftSlide = useTransform(scrollYProgress, [0, 10], ["0%", "-100vw"]);
  const rightSlide = useTransform(scrollYProgress, [0, 10], ["0%", "100vw"]);
  const opacity = useTransform(scrollYProgress, [0.3, 1], [1, 0]);
  return (
    <motion.div
      id="skills"
      className="h-[calc(100vh-4rem)] pt-10 -mx-28 max-sm:mx-0 max-sm:pt-20  flex justify-aroundrem flex-col gap-14 max-sm:gap-10 relative "
    >
      <motion.div
        initial={{ x: -100 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 1, bounce: 1 }}
      >
        <TextUnderline
          isHeading={true}
          text="Skills & Tools"
          textStyles="max-sm:text-4xl font-medium "
          containerDivStyles="max-sm:w-full  max-sm:flex-center  max-sm:mx-0 mx-24"
          underlineStyles=" bg-gradient-to-r from-indigo-600 via-purple-400 to-yellow-500"
        />
      </motion.div>

      {/* bg gradient purple */}
      <div
        className="absolute opacity-80 left-36 h-1/5 top-4  max-sm:top-10 max-sm:left-28 aspect-square blur-[100px] rounded-full
      bg-gradient-to-r from-indigo-600 via-yellow-300 to-purple-400    
      "
      />

      <div className="h-full text-sm max-sm:text-sm max-sm:px-5 text-justify max-sm:h-5/6 max-sm:rounded-3xl w-full  overflow-hidden flex items-center  gap-20  max-sm:justify-end  flex-col relative">
        <motion.div
          ref={targetRef}
          style={{ translateX: leftSlide, opacity: opacity }}
          className=" flex flex-wrap gap-4  px-10  max-sm:p-2  max-sm:justify-around"
        >
          {frontendSkills.map(({ name, imageSrc }) => (
            <Skill key={name} name={name} imageSrc={imageSrc} />
          ))}
        </motion.div>
        <motion.div
          ref={targetRef}
          style={{ translateX: rightSlide, opacity: opacity }}
          className=" flex flex-wrap gap-4  px-10  max-sm:p-2  max-sm:justify-around -max-sm:ml-10"
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
