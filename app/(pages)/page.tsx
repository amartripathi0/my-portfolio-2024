import React from "react";
import Spotlight from "@/components/ui/Spotlight";
import Image from "next/image";
import { TextGenerateEffect } from "@/components/ui/TextGenEffect";

const page = () => {
  return (
    <div >

      <div className="mx-44 gap-6 h-screen flex-between max-tablet:flex max-tablet:flex-col max-tablet:flex-center">
        {/* left image*/}

        <div className="ml-[1vw] rounded-full   border-1   h-[20vw] w-[20vw] relative -z-10 
          max-tablet:h-40 max-tablet:w-40
        ">

          <Image
            src={"/assets/8a06122a-216f-4197-acb3-5bad9770561e_2k-modified.png"}
            alt="Main Profile picture"
            fill
            className="object-cover  "
          />
        </div>

        <div className="flex flex-col gap-[6vw]">
          <div className="flex  flex-col text-[10vw]  items-end max-tablet:items-center 
          max-tablet:text-6xl  font-bold">
            
          <h1 className=" tracking-wider ">AMAR </h1>
          <h1 className="  opacity-60 max-tablet:m-0 leading-10 max-tablet:leading-none">
            TRIPATHI
          </h1>
          </div>

            <div className="text-[1.3vw] text-right max-tablet:text-center max-tablet:text-sm">
          
          
          <p> Hey!! 👋, 
           I'm a <span className="text-purple-300 font-medium hover:text-purple-400 transition-colors duration-500">Full-Stack Web Developer
            </span>, turning your ideas into reality.
          </p> 
          <TextGenerateEffect className="text-[1.3vw] text-right max-tablet:text-center max-tablet:text-sm" words="Passionate about Coding 👨‍💻, Music  🎵, Video 🎥 ."/>
            </div>
        </div>
    
      </div>


    </div>
  );
};

export default page;
