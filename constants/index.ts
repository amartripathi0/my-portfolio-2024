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
  {
    label: "Twitter",
    url: "https://twitter.com/amartripathi_",
    icon: FaTwitter,
  },
];

export const resumeLink: string =
  "https://drive.google.com/file/d/1pzhRz_U4GPml2qQMDWewn6uE0Ugl9N5K/view";

export type ProjectContainerProps = {
  projectDetail: {
    topPara: string;
    parasArray?: string[];
  };
  projectTitle: string;
  projectBio: string;
  projectGithubLink: string;
  projectTools: string[];
  projectDeployedLink?: string;
  projectThumbnailSrc: string;
};
export const projectsArray: ProjectContainerProps[] = [
  {
    projectTitle: "Placement Nexus",
    projectBio:
      "Placement Nexus is an ongoing MERN stack-based projectstreamlining college hiring. It connects students, recruiters, andcolleges for efficient recruitment. Stay tuned for major frontendand backend enhancements.",
    projectThumbnailSrc: "/assets/placement-nexus.png",
    projectGithubLink: "https://github.com/amartripathi0/Web_Placement_Portal",
    projectDeployedLink: "https://placement-nexus.vercel.app/",
    projectDetail: {
      topPara:
        "'Placement Nexus' stands as a pivotal Full Stack MERN project I developed for my university minor project. The primary aim behind creating this platform was to delve deep into the intricacies of full-stack web development. I found myself intrigued by fundamental questions, such as the necessity of routing in React and then again on the backend, and sought to understand the nuances of how the frontend and backend communicate.",
      parasArray: [
        "Through this project, I unraveled the efficiencies of React and its component-based architecture, along with the styling capabilities of Tailwind CSS. React Hook Form was a revelation, teaching me about client-side form validation that significantly reduces page re-renders compared to traditional validation methods.",
        "Moreover, the project was a deep dive into Authentication and Authorization, employing libraries such as bcrypt, JWT, and cookies. The concept of hashing passwords before storing them in the database was fascinating, illustrating a level of security and privacy that ensures even developers cannot access user passwords. This project was not just a technical journey but an enlightening experience that broadened my understanding and skills in full-stack web development.",
        "To truly embrace the cloud, deployed the frontend on Vercel and the backend on Cyclic.sh, with the database hosted on MongoDB Atlas cloud. This approach allowed me to experience the seamless integration and advantages of cloud-based development.",
        "This project is an ongoing adventure, with major parts still under development. I invite you to keep an eye on this project as it evolves. For a glimpse into its current state and to follow its progress, click on the live deployed link and visit the GitHub repository for the source code. This journey has been more than just a technical endeavor; it has been a profound learning experience that has expanded my knowledge and skill set in full-stack web development."
      ],
    },
    projectTools: [
      "React",
      "React Hook Form",
      "React Router DOM",
      "Redux Toolkit",
      "Axios",
      "React Toastify",
      "TailwindCSS",
      "NodeJS",
      "ExpressJs",
      "MongoDB Atlas",
      "Mongoose",
      "Multer",
      "Postman",
      "bcrypt",
      "jsonwebtoken",
      "Vercel",
      "Cyclic.sh",
    ],
  },
  {
    projectTitle: "Youtube Playlist Analyzer",
    projectDetail: {
      topPara:
        "A simple project to analyze the time required to watch a youtube playlist in various available speed.",
    },
    projectBio:
      "A simple project to analyze the time required to watch a youtube playlist in various available speed.",
    projectGithubLink:
      "https://github.com/amartripathi0/youtube-playlist-analyzer",
    projectDeployedLink: "https://youtube-playlist-analyzer-teal.vercel.app/",
    projectThumbnailSrc: "/assets/yt-playlist-analyzer.png",
    projectTools: [],
  },
];
