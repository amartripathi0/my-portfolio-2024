"use client"

import Spotlight from "@/components/ui/Spotlight";
import Image from "next/image";
import { TextGenerateEffect } from "@/components/ui/TextGenEffect";
import { motion } from "framer-motion";
const MainPage = () => {
  return (
    <>
      <div
        id="/ "
        className=" mx-44 gap-6 h-screen  flex-between max-tablet:flex max-tablet:flex-col max-tablet:flex-center"
      >
        {/* left image*/}

        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ ease: "easeInOut", duration: 1, delay: 0.4 }}
          className="ml-[1vw] rounded-full   border-1   h-[20vw] w-[20vw] relative -z-10 
          max-tablet:h-40 max-tablet:w-40
        "
        >
          <Image
            src={"/assets/8a06122a-216f-4197-acb3-5bad9770561e_2k-modified.png"}
            alt="Main Profile picture"
            fill
            className="object-cover  "
          />
        </motion.div>

        <motion.div className="flex flex-col gap-[6vw]">
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
              Hey!! 👋, I&apos;m a{" "}
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

      <div className=" mx-40 h-screen  pt-28" id="about">
        overview Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Nesciunt officiis eum id quas quidem ipsam quaerat repudiandae a
        reprehenderit maiores repellat placeat culpa, dolorum impedit nulla
        labore autem aliquid, obcaecati, cumque distinctio error. Temporibus nam
        non voluptatum dolorum dignissimos nostrum debitis perspiciatis amet
        nihil vel doloribus voluptatibus totam nesciunt quo quaerat, quos
        consequuntur repellendus! Cumque consequatur molestiae modi ea velit,
        aliquid delectus saepe tempora blanditiis hic similique enim laboriosam
        quos necessitatibus animi nihil magni incidunt voluptatum neque amet?
        Ipsum maxime tenetur cum minus voluptates et voluptatum dolorum esse
        officiis ratione amet eaque iure aspernatur sunt accusamus deserunt
        veniam magnam, dolores minima similique inventore ex impedit unde.
        Possimus iusto voluptatum quidem praesentium ullam, sunt ipsam iste, est
        explicabo temporibus atque facilis nemo ex alias repellendus eveniet!
        Ullam totam assumenda consequuntur suscipit, reiciendis consectetur quod
        odit nemo temporibus expedita deserunt autem est consequatur perferendis
        doloremque recusandae possimus quas at? Exercitationem tenetur minus
        harum explicabo illum vero voluptatum ullam soluta voluptas? Officia
        earum iste quo, eveniet sunt consectetur eligendi, harum sequi
        exercitationem unde sit iusto porro sapiente pariatur aliquam illo
        illum, laborum quisquam suscipit nisi dolores maxime! Harum facilis
        consectetur voluptatem? Voluptatibus in porro nulla, placeat ducimus
        perferendis blanditiis provident tempore adipisci, recusandae sunt nam
        numquam ipsum sed, magni nisi. Repudiandae laboriosam tenetur
        repellendus quisquam aut fuga minima quidem, quasi ipsum velit
        aspernatur et quas cumque culpa temporibus! A quidem inventore ab ut
        error nobis nisi dolor aut possimus quam esse eos sapiente autem impedit
        harum, vero explicabo non excepturi quasi corporis! Eaque, dolorum.
        Nihil, exercitationem id, ipsam non temporibus molestiae veniam dolor
        sint laboriosam quos libero itaque nostrum a labore? Optio maiores
        adipisci, id est, voluptates, cum officiis excepturi officia nihil
        quaerat deleniti sed! Autem, eligendi ipsum iusto fugiat esse saepe,
        maiores pariatur, beatae cumque nulla praesentium placeat distinctio
        error ut debitis!
      </div>

      <div className=" mx-40 h-screen pt-28" id="skills">
        overview Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Nesciunt officiis eum id quas quidem ipsam quaerat repudiandae a
        reprehenderit maiores repellat placeat culpa, dolorum impedit nulla
        labore autem aliquid, obcaecati, cumque distinctio error. Temporibus nam
        non voluptatum dolorum dignissimos nostrum debitis perspiciatis amet
        nihil vel doloribus voluptatibus totam nesciunt quo quaerat, quos
        consequuntur repellendus! Cumque consequatur molestiae modi ea velit,
        aliquid delectus saepe tempora blanditiis hic similique enim laboriosam
        quos necessitatibus animi nihil magni incidunt voluptatum neque amet?
        Ipsum maxime tenetur cum minus voluptates et voluptatum dolorum esse
        officiis ratione amet eaque iure aspernatur sunt accusamus deserunt
        veniam magnam, dolores minima similique inventore ex impedit unde.
        Possimus iusto voluptatum quidem praesentium ullam, sunt ipsam iste, est
        explicabo temporibus atque facilis nemo ex alias repellendus eveniet!
        Ullam totam assumenda consequuntur suscipit, reiciendis consectetur quod
        odit nemo temporibus expedita deserunt autem est consequatur perferendis
        doloremque recusandae possimus quas at? Exercitationem tenetur minus
        harum explicabo illum vero voluptatum ullam soluta voluptas? Officia
        earum iste quo, eveniet sunt consectetur eligendi, harum sequi
        exercitationem unde sit iusto porro sapiente pariatur aliquam illo
        illum, laborum quisquam suscipit nisi dolores maxime! Harum facilis
        consectetur voluptatem? Voluptatibus in porro nulla, placeat ducimus
        perferendis blanditiis provident tempore adipisci, recusandae sunt nam
        numquam ipsum sed, magni nisi. Repudiandae laboriosam tenetur
        repellendus quisquam aut fuga minima quidem, quasi ipsum velit
        aspernatur et quas cumque culpa temporibus! A quidem inventore ab ut
        error nobis nisi dolor aut possimus quam esse eos sapiente autem impedit
        harum, vero explicabo non excepturi quasi corporis! Eaque, dolorum.
        Nihil, exercitationem id, ipsam non temporibus molestiae veniam dolor
        sint laboriosam quos libero itaque nostrum a labore? Optio maiores
        adipisci, id est, voluptates, cum officiis excepturi officia nihil
        quaerat deleniti sed! Autem, eligendi ipsum iusto fugiat esse saepe,
        maiores pariatur, beatae cumque nulla praesentium placeat distinctio
        error ut debitis!
      </div>
      <div className=" mx-40 h-screen pt-28" id="projects">
        overview Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Nesciunt officiis eum id quas quidem ipsam quaerat repudiandae a
        reprehenderit maiores repellat placeat culpa, dolorum impedit nulla
        labore autem aliquid, obcaecati, cumque distinctio error. Temporibus nam
        non voluptatum dolorum dignissimos nostrum debitis perspiciatis amet
        nihil vel doloribus voluptatibus totam nesciunt quo quaerat, quos
        consequuntur repellendus! Cumque consequatur molestiae modi ea velit,
        aliquid delectus saepe tempora blanditiis hic similique enim laboriosam
        quos necessitatibus animi nihil magni incidunt voluptatum neque amet?
        Ipsum maxime tenetur cum minus voluptates et voluptatum dolorum esse
        officiis ratione amet eaque iure aspernatur sunt accusamus deserunt
        veniam magnam, dolores minima similique inventore ex impedit unde.
        Possimus iusto voluptatum quidem praesentium ullam, sunt ipsam iste, est
        explicabo temporibus atque facilis nemo ex alias repellendus eveniet!
        Ullam totam assumenda consequuntur suscipit, reiciendis consectetur quod
        odit nemo temporibus expedita deserunt autem est consequatur perferendis
        doloremque recusandae possimus quas at? Exercitationem tenetur minus
        harum explicabo illum vero voluptatum ullam soluta voluptas? Officia
        earum iste quo, eveniet sunt consectetur eligendi, harum sequi
        exercitationem unde sit iusto porro sapiente pariatur aliquam illo
        illum, laborum quisquam suscipit nisi dolores maxime! Harum facilis
        consectetur voluptatem? Voluptatibus in porro nulla, placeat ducimus
        perferendis blanditiis provident tempore adipisci, recusandae sunt nam
        numquam ipsum sed, magni nisi. Repudiandae laboriosam tenetur
        repellendus quisquam aut fuga minima quidem, quasi ipsum velit
        aspernatur et quas cumque culpa temporibus! A quidem inventore ab ut
        error nobis nisi dolor aut possimus quam esse eos sapiente autem impedit
        harum, vero explicabo non excepturi quasi corporis! Eaque, dolorum.
        Nihil, exercitationem id, ipsam non temporibus molestiae veniam dolor
        sint laboriosam quos libero itaque nostrum a labore? Optio maiores
        adipisci, id est, voluptates, cum officiis excepturi officia nihil
        quaerat deleniti sed! Autem, eligendi ipsum iusto fugiat esse saepe,
        maiores pariatur, beatae cumque nulla praesentium placeat distinctio
        error ut debitis!
      </div>
    </>
  );
};

export default MainPage;
