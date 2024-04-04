"use client";
import ProjectContainer from "@/components/ProjectContainer";
import TextUnderline from "@/components/shared/TextUnderline";
import { projectsArray } from "@/constants";

function Projects() {
  return (
    <div
      id="projects"
      className="min-h-screen "
      data-scroll-container
    >
      <div className="top-0 pt-20 shadow-md relative  ">

        <TextUnderline
          text="My Projects"
          textStyles="text-[3.2vw] max-sm:text-4xl font-medium "
          containerDivStyles="w-1/4 max-sm:w-full  max-sm:flex-center"
          underlineStyles=" bg-gradient-to-r from-indigo-600 via-purple-400 to-cyan-600"
        />
         {/* bg gradient indigo cyan */}
      <div
        className="absolute opacity-80 top-0 left-10 h-60  aspect-square  blur-[100px] rounded-full
        bg-gradient-to-r from-blue-600 to-violet-600
      " 
      ></div>

        {
          projectsArray.map(({projectTitle,
            projectBio,
            projectThumbnailSrc,
            projectGithubLink,
            projectDeployedLink,
            projectDetail,}) => (
            <ProjectContainer
              key={projectTitle}
              projectTitle = {projectTitle}
              projectBio = {projectBio}
              projectThumbnailSrc = {projectThumbnailSrc}
              projectGithubLink = {projectGithubLink}
              projectDeployedLink = {projectDeployedLink}
              projectDetail = {projectDetail}
            />
          ))
        }

      </div>
    </div>
  );
}

export default Projects;
