import { FaGithub, FaTwitter } from "react-icons/fa";
import { IconType } from "react-icons";
import { FaLinkedin } from "react-icons/fa";
export const navbarItems: { label: string; link: string }[] = [
  {
    label: "home",
    link: "#home",
  },
  { label: "about-me", link: "#about-me" },
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
  { label: "Twitter", url: "https://github.com/amartripathi0", icon: FaTwitter },
];

export type ProjectContainerProps = {
  projectDetail : string ;
  projectTitle : string;
  projectBio : string;
  projectGithubLink : string;
  projectDeployedLink ?: string;
  projectThumbnailSrc : string;
  
}
export const projectsArray :ProjectContainerProps[] = [
        {
          projectTitle : "Placement Nexus",
          projectBio : "Placement Nexus is an ongoing MERN stack-based projectstreamlining college hiring. It connects students, recruiters, andcolleges for efficient recruitment. Stay tuned for major frontendand backend enhancements.",
          projectThumbnailSrc : "/assets/placement-nexus.png",
          projectGithubLink : "https://github.com/amartripathi0/Web_Placement_Portal",
          projectDeployedLink : "https://placement-nexus.vercel.app/",
          projectDetail : " The College Placement Portal isn't just a static platform; it's an ongoing endeavor aimed at simplifying and managing the dynamic process of job placements for students, colleges, and companies. Serving as a digital nexus, it fosters seamless communication and interaction among these stakeholders, ensuring a smooth and transparent journey through placements.Notably  ongoing major updates to both the frontend and backend ensure that the portal remains at the forefront of innovation, continuously evolving to meet the changing needs of its users."
        },
        {
          projectTitle : 'Youtube Playlist Analyzer',
          projectDetail : "A simple project to analyze the time required to watch a youtube playlist in various available speed." ,
          projectBio : "A simple project to analyze the time required to watch a youtube playlist in various available speed." ,
          projectGithubLink : "https://github.com/amartripathi0/youtube-playlist-analyzer",
          projectDeployedLink : "https://youtube-playlist-analyzer-teal.vercel.app/",
          projectThumbnailSrc : '/assets/yt-playlist-analyzer.png',
        },
       
]
