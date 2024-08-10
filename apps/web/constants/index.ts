import { FaGithub, FaTwitter } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import {
  NavbarItemType,
  ProjectContainerProps,
  SkillType,
  SocialMediaLinkType,
} from '@/types'
export const navbarItems: NavbarItemType[] = [
  {
    label: 'home',
    link: '#home',
  },
  { label: 'about me', link: '#about-me' },
  { label: 'skills', link: '#skills' },
  { label: 'projects', link: '#projects' },
]

export const socialMediaLinks: SocialMediaLinkType[] = [
  {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/amar-tripathi',
    icon: FaLinkedin,
  },
  { label: 'GitHub', url: 'https://github.com/amartripathi0', icon: FaGithub },
  {
    label: 'Twitter',
    url: 'https://twitter.com/amartripathi_',
    icon: FaTwitter,
  },
]

export const resumeLink: string =
  'https://drive.google.com/file/d/1DwHgcXxXGi1e96Y8UuLhln5To5iCspwj/view'

export const projectsArray: ProjectContainerProps[] = [
  {
    projectTitle: 'Placement Nexus',
    projectBio:
      'Placement Nexus is an ongoing MERN stack-based project streamlining college hiring. It connects students, recruiters, andcolleges for efficient recruitment. Stay tuned for major frontendand backend enhancements.',
    projectThumbnailSrc: '/assets/placement-nexus.png',
    projectGithubLink: 'https://github.com/amartripathi0/Web_Placement_Portal',
    projectDeployedLink: 'https://placement-nexus.vercel.app/',
    projectDetail: {
      topPara:
        "'Placement Nexus' stands as a pivotal Full Stack MERN project I developed for my university minor project. The primary aim behind creating this platform was to delve deep into the intricacies of full-stack web development. I found myself intrigued by fundamental questions, such as the necessity of routing in React and then again on the backend, and sought to understand the nuances of how the frontend and backend communicate.",
      parasArray: [
        'Through this project, I unraveled the efficiencies of React and its component-based architecture, along with the styling capabilities of Tailwind CSS. React Hook Form was a revelation, teaching me about client-side form validation that significantly reduces page re-renders compared to traditional validation methods.',
        'Moreover, the project was a deep dive into Authentication and Authorization, employing libraries such as bcrypt, JWT, and cookies. The concept of hashing passwords before storing them in the database was fascinating, illustrating a level of security and privacy that ensures even developers cannot access user passwords. This project was not just a technical journey but an enlightening experience that broadened my understanding and skills in full-stack web development.',
        'To truly embrace the cloud, deployed the frontend on Vercel and the backend on Cyclic.sh, with the database hosted on MongoDB Atlas cloud. This approach allowed me to experience the seamless integration and advantages of cloud-based development.',
        'This project is an ongoing adventure, with major parts still under development. I invite you to keep an eye on this project as it evolves. For a glimpse into its current state and to follow its progress, click on the live deployed link and visit the GitHub repository for the source code. This journey has been more than just a technical endeavor; it has been a profound learning experience that has expanded my knowledge and skill set in full-stack web development.',
      ],
    },
    projectTools: [
      'React JS',
      'React Hook Form',
      'React Router DOM',
      'Redux Toolkit',
      'Axios',
      'React Toastify',
      'Tailwind CSS',
      'Node JS',
      'Express JS',
      'MongoDB Atlas',
      'Mongoose',
      'Multer',
      'Postman',
      'bcrypt',
      'jsonwebtoken',
      'Vercel',
      'Cyclic.sh',
    ],
  },
  {
    projectTitle: 'Youtube Playlist Analyzer',
    projectDetail: {
      topPara:
        "As a regular YouTube viewer, I've always been curious about the total time required to watch all the videos in my favorite youtube playlists which led me to conceive this project. Beyond its practical utility, my primary motivation was to learn and apply new skills in a real-world scenario, specifically:-",
      parasArray: [
        'Youtube Playlist Analyzer is a web application to calculate the total watch time of YouTube playlists at various playback speeds such as 1x, 1.25x , 1.5x, 1.75x and 2x.It simplifies playlist consumption by calculating the total duration of videos within a given YouTube playlist.',
        "The 'Youtube Playlist Analyzer' fetches details from the Google YouTube API, accessing information about each video within the playlist, including its duration and playback speed. Using this data, the application calculates the total watch time for the playlist, accommodating various playback speeds ranging from 1x to 2x.",
        "'Youtube Playlist Analyzer' currently supports playlists with a maximum of 50 videos. However, I'm planning to increase this upper limit in future updates to accommodate larger playlists. Stay tuned for further developments as I continue to enhance the application's capabilities. For the latest updates, you can check out the code on GitHub and access the deployed application.",
      ],
    },
    projectBio:
      'A simple project to analyze the time required to watch a youtube playlist in various available speed.',

    projectGithubLink:
      'https://github.com/amartripathi0/youtube-playlist-analyzer',
    projectDeployedLink: 'https://youtube-playlist-analyzer-teal.vercel.app/',
    projectThumbnailSrc: '/assets/yt-playlist-analyzer.png',
    projectTools: [
      'React',
      'Vite',
      'Axios',
      'React Toastify',
      'Tailwind CSS',
      'Google YouTube API',
      'Vercel',
    ],
  },
]

export const frontendSkills: SkillType[] = [
  { name: 'HTML', imageSrc: '/logos/html5-logo-31813.png' },
  { name: 'CSS', imageSrc: '/logos/css.png' },
  { name: 'React JS', imageSrc: '/logos/react.png' },
  { name: 'Next JS', imageSrc: '/logos/Next.js.png' },
  { name: 'React Hook Form', imageSrc: '/logos/reacthookform.jpeg' },
  { name: 'React Router DOM', imageSrc: '/logos/react-router-dom.png' },
  { name: 'Redux Toolkit', imageSrc: '/logos/rtk.png' },
  // { name: "React Toastify", imageSrc: "/public/logos/" },
  { name: 'Tailwind CSS', imageSrc: '/logos/Tailwind.png' },
  { name: 'Framer Motion', imageSrc: '/logos/framer.jpg' },
]
export const backendSkills: SkillType[] = [
  { name: 'JavaScript', imageSrc: '/logos/js.png' },
  { name: 'TypeScript', imageSrc: '/logos/typescript.png' },
  { name: 'Java', imageSrc: '/logos/java.png' },
  // { name: "Axios", imageSrc: "/logos/axios.png" },
  { name: 'Node JS', imageSrc: '/logos/node.png' },
  { name: 'Express JS', imageSrc: '/logos/express.png' },
  { name: 'MongoDB Atlas', imageSrc: '/logos/mongo.png' },
  { name: 'GraphQL', imageSrc: '/logos/graphql.png' },
  // { name: "Mongoose", imageSrc: "/public/logos" },
  // { name: "Multer", imageSrc: "/public/logos" },
  { name: 'Postman', imageSrc: '/logos/postman.png' },
  // { name: "bcrypt", imageSrc: "/public/logos" },
  // { name: "jsonwebtoken", imageSrc: "/public/logos" },
  { name: 'Vercel', imageSrc: '/logos/vercel.png' },
  // { name: "Cyclic.sh", imageSrc: "/public/logos" }
]

// animation variants

export const fadeAnimationVariant = {
  beforeView: { opacity: 0 },
  inView: { opacity: 1, transition: { duration: 1.5 } },
}

export const underlineAnimationVariant = {
  initial: { y: 60, opacity: 0, scale:0.95 },
  inView: {
    y: 0,
    scale: 1,
    opacity: 1,
    transition: {
      spring: 1,
      mass: 1,
      stiffness: 200,
      duration: 0.8,
      bounce: 0.25,
      delay: 0.3,
    },
  },
}
