import { FaGithub, FaTwitter } from "react-icons/fa";
import { IconType } from "react-icons";
import { FaLinkedin } from "react-icons/fa";
export const navbarItems: { label: string; link: string }[] = [
  {
    label: "home",
    link: "#home",
  },
  { label: "about-me", link: "#about-me" },
  // { label: "skills", link: "#skills" },
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
  { label: "Twitter", url: "https://github.com/amartripathi0", icon: FaTwitter },
];
