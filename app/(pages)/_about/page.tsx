"use client";
import TextUnderline from "@/components/shared/TextUnderline";
import { BackgroundGradient } from "@/components/ui/BackgroundGradient";
import { motion } from "framer-motion";
motion
const About = () => {
  return (
    <motion.div
      id="about-me"
      className="h-[calc(100vh-7rem)]  pt-28  max-sm:pt-20 flex flex-col  gap-14 relative "
      
    >
      <TextUnderline
        text="About Me"
        textStyles="text-[3.2vw] max-sm:text-4xl font-medium "
        containerDivStyles="w-1/5 max-sm:w-full  max-sm:flex-center"
        underlineStyles=" bg-gradient-to-r from-indigo-600 to-cyan-400"
      />

      {/* bg gradient purple */}
      <div
        className="absolute opacity-80 left-10 h-1/5  aspect-square  blur-[100px] rounded-full
      bg-gradient-to-r from-indigo-600 to-cyan-400   
      "
      ></div>

      <div className="text-2xl max-sm:text-sm max-sm:px-2 text-justify  flex-col flex-center gap-4">
        <p>
          I&apos;m a third-year Computer Science Engineering student from India,
          deeply passionate about coding, technology and web. My journey into
          Full-Stack web development has been exhilarating, constantly pushing
          the boundaries of what&apos;s possible.
        </p>

        <p>
          My adventure began during my first year of college, and since then,
          I&apos;ve worked on diverse web development projects, honing my skills
          and seeking innovative solutions. I take pride in my work&apos;s
          ability to make a difference and create impactful results.
        </p>

        <p>
          At the heart of my work is a simple philosophy: to deliver
          high-quality solutions with a user-centric approach. This belief
          drives every project I undertake, ensuring timely delivery and
          creative problem-solving.
        </p>

        <p>
          When I&apos;m not coding, you can find me exploring new music and
          producing hip hop beats, cooking and eating food, or surfing the web.
          These activities recharge my batteries and bring a fresh perspective
          to my professional endeavors.
        </p>
      </div>

      {/* <BackgroundGradient
        className=" bg-[#0c0910] text-xl text-justify rounded-3xl p-10 flex-col flex-center gap-4 "
        containerClassName="w-3/5 opacity-90 hover:opacity-100 transition-all duration-200"
      >
        
          <h2 className="">
            I&apos;m a third-year Computer Science Engineering student from
            India, deeply passionate about coding, technology and web. My
            journey into Full-Stack web development has been exhilarating,
            constantly pushing the boundaries of what&apos;s possible.
          </h2>

          <p>
            My adventure began during my first year of college, and since then,
            I&apos;ve worked on diverse web development projects, honing my
            skills and seeking innovative solutions. I take pride in my
            work&apos;s ability to make a difference and create impactful
            results.
          </p>

          <p>
            At the heart of my work is a simple philosophy: to deliver
            high-quality solutions with a user-centric approach. This belief
            drives every project I undertake, ensuring timely delivery and
            creative problem-solving.
          </p>

          <p>
            When I&apos;m not coding, you can find me exploring new music and
            producing hip hop beats, cooking and eating food, or surrfing web.
            These activities recharge my batteries and bring a fresh perspective
            to my professional endeavors.
          </p>
   
      </BackgroundGradient> */}
    </motion.div>
  );
};
import React from "react";

function TextContainer({ heading, para }: { heading: string; para: string }) {
  return (
    <div>
      <h3 className="text-2xl">{heading}</h3>
      <p>{para}</p>
    </div>
  );
}

export default About;
