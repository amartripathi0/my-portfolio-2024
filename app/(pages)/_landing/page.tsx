"use client";
import Spotlight from "@/components/ui/Spotlight";
import Image from "next/image";
import { TextGenerateEffect } from "@/components/ui/TextGenEffect";
import { motion } from "framer-motion";
import SocialHandles from "@/components/shared/SocialHandles";

const Landing = () => {
  return (
    <>
      <div
        id="home"
        className=" mx-44 gap-6 h-screen  flex-between max-tablet:flex max-tablet:flex-col max-tablet:flex-center"
      >
        {/* left image and social handles*/}

        <motion.div
          className=" flex-between flex-col gap-10
        
         ml-[1vw]"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ ease: "easeInOut", duration: 1, delay: 0.4 }}
        >
          <div
            className=" rounded-full   border-1   h-[20vw] w-[20vw] relative -z-10 
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

          <div className="w-4/5 flex-col-center gap-6">
            <h1 className="text-[1.3vw]">Hey!! 👋, Let&apos;s connect</h1>
            <SocialHandles additionalStyle="flex-center gap-6 border rounded-xl  p-4  " />
          </div>
        </motion.div>

        <motion.div className="flex flex-col gap-[6vw] ">
          <div
            className="flex  flex-col text-[10vw]  items-end max-tablet:items-center 
          max-tablet:text-6xl  font-bold"
          >
            <motion.h1
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ease: "easeInOut", duration: 1, delay: 1.5 }}
              className=" tracking-wider "
            >
              AMAR{" "}
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ease: "easeInOut", duration: 1, delay: 2 }}
              className="  text-[#A9A9A9] max-tablet:m-0 leading-10 max-tablet:leading-none"
            >
              TRIPATHI
            </motion.h1>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ ease: "easeInOut", duration: 1.5, delay: 3 }}
            className="text-[1.3vw] text-right max-tablet:text-center max-tablet:text-sm"
          >
            <p>
              {" "}
              I&apos;m a{" "}
              <span className="text-purple-300 font-medium hover:text-purple-400 transition-colors duration-500">
                Full-Stack Web Developer
              </span>
              , turning your ideas into reality.
            </p>
            <TextGenerateEffect
              className="text-[1.3vw] text-right max-tablet:text-center max-tablet:text-sm"
              words="Passionate about Coding 👨‍💻, Music  🎵, Video 🎥 ."
            />
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default Landing;
