import {
  CardBody,
  CardContainer,
  CardItem,
} from "@/components/ui/3d-container";
import { ProjectContainerProps } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "./ui/badge";
import TextUnderline from "./shared/TextUnderline";

const ProjectContainer = ({
  projectDetail,
  projectTitle,
  projectBio,
  projectThumbnailSrc,
  projectGithubLink,
  projectDeployedLink,
  projectTools,
}: ProjectContainerProps) => {
  return (
    <div className="flex justify-between min-h-[calc(100vh-7rem)] w-full border-l border-purple-600 ">
      {/* Sticky Image */}
      <div className="w-[30%] sticky top-40  ">
        <IndigoVioletBlur />

        <CardContainer
          data-scroll-sticky
          containerClassName="sticky top-40 left-1/2  "
          className=""
        >
          <CardBody className="bg-slate-900 relative group/card h-full rounded-xl p-6 border  ">
            <CardItem translateZ="50" className="text-3xl font-bold text-white">
              {projectTitle}
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-white text-md max-w-sm mt-2 dark:text-neutral-300"
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
                className="px-4 py-2 rounded-xl text-sm font-normal dark:text-white"
              >
                Source Code
              </CardItem>

              <CardItem
                translateZ={20}
                as={Link}
                href={projectDeployedLink}
                target="__blank"
                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-sm font-bold"
              >
                See it live →
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      </div>

      {/* Project Details */}
      <div className="w-[70%] flex flex-col  ">
        <div className="flex flex-col gap-6 p-10 pt-20 pr-0 rounded-xl shadow-md h-full text-lg text-justify">
          <p>{projectDetail.topPara}</p>

          <div className="flex gap-6 flex-wrap">
            {projectTools.map((eachTool) => (
              <Badge
                className=" text-sm p-2 px-4 bg-prelude-900"
                key={eachTool}
              >
                <TextUnderline text={eachTool} />
              </Badge>
            ))}
          </div>
          <div className="flex flex-col gap-6">
            {projectDetail.parasArray?.map((projectDetailPara) => (
              <p key={projectDetailPara}>{projectDetailPara}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProjectContainer;

function IndigoVioletBlur() {
  return (
    <div
      className="absolute opacity-50 h-2/3 top-1/4  w-1/5 blur-[100px]   rounded-full
        bg-gradient-to-r from-violet-600 to-indigo-700  
      "
    />
  );
}