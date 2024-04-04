"use client";
import ProjectContainer from "@/components/ProjectContainer";
import TextUnderline from "@/components/shared/TextUnderline";

function Projects() {
  return (
    <div
      id="projects"
      className="min-h-screen border-red-500 border-2"
      data-scroll-container
    >
      <div id="containerA" className="top-0 pt-20 shadow-md">
        <TextUnderline
          text="My Projects"
          textStyles="text-[3.2vw] max-sm:text-4xl font-medium "
          containerDivStyles="w-1/4 max-sm:w-full  max-sm:flex-center sticky top-32"
          underlineStyles=" bg-gradient-to-r from-indigo-600 via-purple-400 to-cyan-600"
        />
        <ProjectContainer
          projectTitle="Placement Nexus"
          projectBio="Placement Nexus is an ongoing MERN stack-based project
          streamlining college hiring. It connects students, recruiters, and
          colleges for efficient recruitment. Stay tuned for major frontend
          and backend enhancements."
          projectThumbnailSrc="/assets/placement-nexus.png"
          projectGithubLink="https://github.com/amartripathi0/Web_Placement_Portal"
          projectDeployedLink="https://placement-nexus.vercel.app/"
          projectDetail=" The College Placement Portal isn't just a static platform; it's an ongoing endeavor aimed at simplifying and managing the dynamic process of job placements for students, colleges, and companies. Serving as a digital nexus, it fosters seamless communication and interaction among these stakeholders, ensuring a smooth and transparent journey through placements.Notably  ongoing major updates to both the frontend and backend ensure that the portal remains at the forefront of innovation, continuously evolving to meet the changing needs of its users."
        />

      </div>
    </div>
  );
}

export default Projects;
