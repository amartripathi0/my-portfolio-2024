"use client";
import ProjectContainer from "@/components/ProjectContainer";
import TextUnderline from "@/components/shared/TextUnderline";
import { projectsArray } from "@/constants";

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
