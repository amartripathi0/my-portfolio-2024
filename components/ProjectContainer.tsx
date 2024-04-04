import {
  CardBody,
  CardContainer,
  CardItem,
} from "@/components/ui/3d-container";
import { ProjectContainerProps } from "@/constants";
import Image from "next/image";
import Link from "next/link";

 const ProjectContainer = ({ projectDetail ,  projectTitle , projectBio , projectThumbnailSrc, projectGithubLink , projectDeployedLink ,}: ProjectContainerProps) => {
    return (
      <div className="flex justify-between min-h-screen border-b">
      {/* Sticky Image */}
      <div className="w-1/3 sticky top-">
        <CardContainer        
        data-scroll-sticky	
         containerClassName="sticky top-40   "
         className=""
       >
         <CardBody className="bg-gray-800 relative group/card h-full rounded-xl p-6 border  ">
           <CardItem translateZ="50" className="text-xl font-bold text-white">
             {projectTitle}
           </CardItem>
           <CardItem
             as="p"
             translateZ="60"
             className="text-white text-sm max-w-sm mt-2 dark:text-neutral-300"
           >
             {projectBio}
           </CardItem>
           <CardItem translateZ="100" className="w-full mt-4">
             <Image
               src={projectThumbnailSrc}
               height="1000"
               width="1000"
               className="h-3/5 w-full object-cover rounded-xl group-hover/card:shadow-xl"
               alt="thumbnail"
             />
           </CardItem>
           <div className="flex justify-between items-center mt-20">
             <CardItem
               translateZ={20}
               as={Link}
               href={projectGithubLink}
               target="__blank"
               className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
             >
               Source Code
             </CardItem>

             <CardItem
               translateZ={20}
               as={Link}
               href={projectDeployedLink}
               target="__blank"
               className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
             >
               See it live →
             </CardItem>
           </div>
         </CardBody>
       </CardContainer>
      </div>

      {/* Project Details */}
      <div className="w-2/3 flex flex-col p-8">
        <div className="bg-black-900 p-6 rounded-xl shadow-md h-[calc(100vh-7rem)]">{projectDetail} /</div>
       
        {/* <div className="bg-black-900 p-6 rounded-xl shadow-md h-[calc(100vh-7rem)]">Detail 2 of {projectDetail}</div>
        <div className="bg-black-900 p-6 rounded-xl shadow-md h-[calc(100vh-7rem)]">Detail 3 of {projectDetail}</div> */}
      </div>
    </div>
    );
  };
export default ProjectContainer;
