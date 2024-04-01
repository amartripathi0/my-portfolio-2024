"use client";
import TextUnderline from "@/components/shared/TextUnderline";
import { BackgroundGradient } from "@/components/ui/BackgroundGradient";

const About = () => {
  return (
    <TextUnderline text= "About Me" additionalStyles="text-3xl" />
    // <div
    //   id="about"
    //   className=" mx-40 h-screen  pt-36 flex flex-col gap-14 relative "
    // >
    //   <h1 className="text-7xl font-semibold p-10">About Me</h1>
    //   <div className="absolute top-1/6  opacity-80 left-16 h-60  aspect-square  blur-[80px] rounded-full
    //   bg-gradient-to-r from-indigo-400 to-cyan-400   
    //   "></div>
    //   <BackgroundGradient
    //     className=" bg-[#0c0910] text-xl text-justify rounded-3xl p-10 flex-col flex-center gap-4 "
    //     containerClassName="w-3/5 opacity-90 hover:opacity-100 transition-all duration-200"
    //   >
        
    //       <h2 className="">
    //         I&apos;m a third-year Computer Science Engineering student from
    //         India, deeply passionate about coding, technology and web. My
    //         journey into Full-Stack web development has been exhilarating,
    //         constantly pushing the boundaries of what&apos;s possible.
    //       </h2>

    //       <p>
    //         My adventure began during my first year of college, and since then,
    //         I&apos;ve worked on diverse web development projects, honing my
    //         skills and seeking innovative solutions. I take pride in my
    //         work&apos;s ability to make a difference and create impactful
    //         results.
    //       </p>

    //       <p>
    //         At the heart of my work is a simple philosophy: to deliver
    //         high-quality solutions with a user-centric approach. This belief
    //         drives every project I undertake, ensuring timely delivery and
    //         creative problem-solving.
    //       </p>

    //       <p>
    //         When I&apos;m not coding, you can find me exploring new music and
    //         producing hip hop beats, cooking and eating food, or surrfing web.
    //         These activities recharge my batteries and bring a fresh perspective
    //         to my professional endeavors.
    //       </p>
   
    //   </BackgroundGradient>
    // </div>
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
