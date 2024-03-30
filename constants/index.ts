import React from "react";
import { FaGithub } from "react-icons/fa";
import { IconType } from "react-icons";
import { FaLinkedin } from "react-icons/fa";

export const navbarItems: { label: string; link: string }[] = [
  {
    label: "home",
    link: "#/",
  },
  { label: "about", link: "#about" },
  { label: "skills", link: "#skills" },
  { label: "projects", link: "#projects" },
];

export const socialMediaLinks: {
  label: string;
  url: string;
  icon: IconType;
}[] = [
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/amar-tripathi",
    icon: FaLinkedin,
  },
  { label: "GitHub", url: "https://github.com/amartripathi0", icon: FaGithub },
];
