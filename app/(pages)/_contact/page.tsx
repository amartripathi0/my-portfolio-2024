"use client";
import { ContactMeForm } from "@/components/ContactMeForm";
import TextUnderline from "@/components/shared/TextUnderline";
import { underlineAnimationVariant } from "@/constants";
import { motion } from "framer-motion";

function Contact() {
  return (
    <div
      className="h-[calc(100vh-4rem)] py-10 max-sm:pt-20 flex flex-col  gap-2 relative "
      id="contact-me"
    >
      <motion.div
        initial={"initial"}
        whileInView={"inView"}
        variants={underlineAnimationVariant}
      >
        <TextUnderline
          isHeading={true}
          text="Contact me"
          textStyles="text-[3.2vw] max-sm:text-4xl font-medium "
          containerDivStyles="w-[24%] max-sm:w-full  max-sm:flex-center"
          underlineStyles=" bg-gradient-to-r from-indigo-600 via-purple-400 to-yellow-500   "
        />
      </motion.div>
      <div
        className="absolute opacity-80 left-10 h-1/5  aspect-square  blur-[100px] rounded-full
      bg-gradient-to-r from-indigo-600 via-yellow-300 to-purple-400   
      "
      />
      <ContactMeForm />
      <p className="mt-4 max-sm:text-sm flex items-center gap-2 max-sm:gap-1"><span className="font-bold text-lg">&copy;</span> 2024 Amar Tripathi</p>
    </div>
  );
}

export default Contact;
