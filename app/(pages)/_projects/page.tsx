import { CardBody, CardContainer, CardItem} from "@/components/ui/3d-container";
import Image from "next/image";
import Link from "next/link";


function Projects() {
  return (
    <div className=" mx-40 h-[calc(100vh-7rem)]  pt-28" id="projects">
    <h1 className="text-6xl">Projects</h1>

    <CardContainer className="inter-var">
      <CardBody className="bg-gray-800 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-white"
        >
          Placement Nexus
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-white text-lg max-w-sm mt-2 dark:text-neutral-300"
        >
          Placement Nexus is an ongoing MERN stack-based project streamlining college hiring. It connects students, recruiters, and colleges for efficient recruitment. Stay tuned for major frontend and backend enhancements.        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src="/assets/placement-nexus.png"
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
        <CardItem
            translateZ={20}
            as={Link}
            href="https://github.com/amartripathi0/Web_Placement_Portal"
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            Source Code
          </CardItem>

          <CardItem
            translateZ={20}
            as={Link}
            href="https://placement-nexus.vercel.app/"
            target="__blank"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            See it live →
          </CardItem>
         
        </div>
      </CardBody>
    </CardContainer>
</div>  )
}

export default Projects
