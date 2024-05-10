"use client";
import { sendEmail } from "@/actions/sendEmail";
import { ContactMeForm } from "@/components/ContactMeForm";
import SocialHandles from "@/components/shared/SocialHandles";
import TextUnderline from "@/components/shared/TextUnderline";
import { underlineAnimationVariant } from "@/constants";
import { motion } from "framer-motion";
import { IoMail } from "react-icons/io5";

function Contact() {
 
  return (
    <div
      className="h-[calc(100vh-5rem)] pt-10 max-sm:pt-20 flex flex-col  gap-6 relative "
      id="contact-me"
    >
      <motion.div
        initial={"initial"}
        whileInView={"inView"}
        variants={underlineAnimationVariant}
      >
        <TextUnderline
          isHeading = {true}
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

      <ContactMeForm/>
    </div>
  );
}

export default Contact;
