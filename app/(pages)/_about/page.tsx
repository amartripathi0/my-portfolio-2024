"use client";
import IndigoBlurBackground from "@/components/shared/IndigoBlurBackground";
import TextUnderline from "@/components/shared/TextUnderline";
import { Button } from "@/components/ui/button";
import {
  fadeAnimationVariant,
  resumeLink,
  underlineAnimationVariant,
} from "@/constants";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaArrowCircleRight } from "react-icons/fa";
const About = () => {
  return (
    <div
      id="about-me"
      className="h-[calc(100vh-7rem)] max-sm:pt-10 flex-between relative  max-sm:flex-col  "
    >
      {/* Left section */}
      <div className="flex flex-col w-3/4 sm:h-4/5 max-sm:w-full gap-10 max-sm:gap-2  ">
        {/* bg gradient indigo cyan */}
        <IndigoBlurBackground height="1/5" additionalStyles="max-sm:left-1/4" />
        {/* About Me heading */}
        <motion.div
          initial={"initial"}
          whileInView={"inView"}
          variants={underlineAnimationVariant}
        >
          <TextUnderline
            text="About Me"
            textStyles="text-[3.2vw] max-sm:text-4xl font-medium "
            containerDivStyles="w-[29%] max-sm:w-full  max-sm:flex-center"
            underlineStyles=" bg-gradient-to-r from-indigo-600 via-purple-400 to-cyan-600"
          />
        </motion.div>

        {/* About me paragraphs */}
        <motion.div
          initial={"beforeView"}
          whileInView={"inView"}
          variants={fadeAnimationVariant}
          viewport={{ once: true }}
          className="text-xl p-4 w-full max-sm:text-sm max-sm:px-2 text-justify  flex-col flex-center gap-4"
        >
          <p>
            I&apos;m a third-year Computer Science Engineering student from
            India, deeply passionate about coding, technology and web. My
            journey into Full-Stack web development has been exhilarating,
            constantly pushing the boundaries of what&apos;s possible.
          </p>

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
            producing hip hop beats, cooking and eating food, or surfing the
            web. These activities recharge my batteries and bring a fresh
            perspective to my professional endeavors.
          </p>
        </motion.div>
      </div>

      {/* Right section */}
      <motion.div
        initial={"beforeView"}
        whileInView={"inView"}
        variants={fadeAnimationVariant}
        viewport={{ once: true }}
        className="h-4/5 rounded-4xl w-1/3 flex-center flex-col gap-10 relative  
          max-tablet:h-40 max-tablet:w-40 flex-center
        "
      >
        <IndigoBlurBackground height="1/2" />

        <Image
          src={"/assets/amar-image-2.jpg"}
          alt="Main Profile picture"
          height={1000}
          width={1000}
          className="object-cover h-3/5 w-3/5 aspect-auto rounded-3xl z-10  backdrop:blur-sm opacity-80 max-sm:hidden"
        />

        <motion.div
          initial={{
            y: 0,
          }}
          animate={{
            y: 20,
          }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        >
          <Link href={resumeLink} target="_blank">
            <Button className="relative inline-flex h-16 w-40 max-sm:h-12 max-sm:w-32 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="flex justify-around  h-full w-full cursor-pointer items-center  rounded-full bg-slate-950 px-3 py-1 text-lg max-sm:text-base font-medium text-white backdrop-blur-3xl">
                Resume <FaArrowCircleRight size={16} />{" "}
              </span>
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
