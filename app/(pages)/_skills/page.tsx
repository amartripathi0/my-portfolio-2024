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
    target : targetRef,
    offset: ["end center", "start end"],
  });

  const leftSlide = useTransform(scrollYProgress, [0,2], ["0%", "-100vw"]);
  const rightSlide = useTransform(scrollYProgress, [0, 2], ["0%", "100vw"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.2]);
  return (
    <motion.div
      id="skills"
      className="h-[calc(100vh-7rem)] pt-10 -mx-40 max-sm:pt-20 flex flex-col gap-14 relative "
    >
      <motion.div
        initial={"initial"}
        whileInView={"inView"}
        variants={underlineAnimationVariant}
      >
        <TextUnderline
          text="Skills"
          textStyles="text-[3.2vw] max-sm:text-4xl font-medium "
          containerDivStyles="w-[10%] max-sm:w-full  max-sm:flex-center mx-40  "
          underlineStyles=" bg-gradient-to-r from-indigo-600 via-purple-400 to-yellow-500   "
        />
      </motion.div>

      {/* bg gradient purple */}
      <div
        className="absolute opacity-80 left-10 h-1/5  aspect-square  blur-[100px] rounded-full
      bg-gradient-to-r from-indigo-600 via-yellow-300 to-purple-400    
      "
      ></div>

      <div     
        className="text-sm max-sm:text-sm max-sm:px-2 text-justify h-4/5 overflow-x-hidden   flex-col gap-4 ">
        <h2>
          {"// "}skills page is yet to be implemented {";)"}
        </h2>



      
          
        <motion.div
          ref={targetRef}
          style={{ translateX: leftSlide, opacity: opacity }}
          className=" flex gap-4  p-10 "
        >
          {frontendSkills.map(({ name, imageSrc }) => (
            <Skill key={name} name={name} imageSrc={imageSrc} />
          ))}
        </motion.div>
        {/* <motion.div
          ref={targetRef}
          style={{ translateX: rightSlide, opacity: opacity }}
          className=" flex gap-4  bg-blue-600  p-10 "
        >
          {backendSkills.map((skill) => (
            <div key={skill} className="h-20 aspect-square bg-purple-300">
              {skill}
            </div>
          ))}
        </motion.div> */}

      </div>
    </motion.div>
  );
}

export default Skills;
