"use client";
import Spotlight from "@/components/ui/Spotlight";
import Image from "next/image";
import { TextGenerateEffect } from "@/components/ui/TextGenEffect";
import { motion } from "framer-motion";
import SocialHandles from "@/components/shared/SocialHandles";
import TextUnderline from "@/components/shared/TextUnderline";

const Landing = () => {
  return (
    <div
      id="home"
      className="mx-40 pt-28 max-sm:pt-0 max-sm:pb-20 h-screen flex-between  max-tablet:flex-col max-sm:flex-center max-sm:mx-0 max-sm:gap-10 "
    >
      {/* left image and social handles*/}
      <motion.div
        className=" flex-between flex-col gap-10  "
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ ease: "easeInOut", duration: 1, delay: 0.4 }}
      >
        <div
          className=" rounded-full h-[20vw] w-[20vw] relative -z-10 
          max-tablet:h-40 max-tablet:w-40 flex-center 
        "
        >
          <motion.div
            className="bg-purple-400 rounded-full h-full w-full
          blur-[70px] opacity-90
          "
            initial={{
              opacity: 0,
              scale: 0,
            }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "circInOut" }}
          ></motion.div>

          <Image
            src={"/assets/amar-img.png"}
            alt="Main Profile picture"
            fill
            className="object-cover  backdrop:blur-sm "
          />
        </div>

        <div className="w-5/6 max-sm:w-full flex-col-center gap-2">
          <h1 className="text-[1.3vw] max-tablet:text-base px-0 w-full">
            Hey! 👋, Let&apos;s connect 🚀
          </h1>
          <SocialHandles additionalStyle="flex-center gap-6 max-sm:gap-2 rounded-xl  p-4 max-sm:w-40 " />
        </div>
      </motion.div>

      {/* right side */}
      <motion.div className="flex justify-between items-end flex-col max-sm:items-center gap-[1vw]  h-[28vw] mr-2 max-sm:mr-0">
        <div
          className="flex flex-col text-[10vw]  items-end max-tablet:flex-center 
            max-tablet:text-6xl  font-bold"
        >
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeInOut", duration: 1, delay: 1.5 }}
            className=" tracking-wider leading-none"
          >
            AMAR{" "}
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeInOut", duration: 1, delay: 2 }}
            className="  text-[#A9A9A9] max-tablet:m-0  leading-[100px] max-tablet:leading-none"
          >
            TRIPATHI
          </motion.h1>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ ease: "easeInOut", duration: 1.5, delay: 3 }}
          className="text-[1.3vw] text-right max-tablet:text-center max-tablet:text-sm max-sm:mt-6"
        >
          <div>
            {" "}
            I&apos;m a{" "}
            <TextUnderline
              text="Full-Stack Web Developer"
              textStyles="text-purple-300 font-medium hover:text-purple-400 transition-colors duration-500"
              underlineStyles="bg-purple-400"
            />
            , turning your ideas into reality.
          </div>
          <TextGenerateEffect
            className="text-[1.3vw] text-right max-tablet:text-center max-tablet:text-sm"
            words="Passionate about Coding 👨‍💻, Music  🎵, Video 🎥 ."
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Landing;
