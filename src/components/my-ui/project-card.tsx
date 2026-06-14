import { CardItem, CardBody, CardContainer } from "../ui/3d-card";
import { ProjectVisual } from "./project-visual";
import Link from "next/link";
import type { Project } from "@/lib/projects";

export function ProjectCard({ project }: { project: Project }) {
    return (
        <CardContainer className="h-[600px]">
            <CardBody className="flex flex-col justify-between bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-[90vw] md:w-[30vw] h-[100%] rounded-xl p-6 border">
                <div>
                    <CardItem
                        translateZ="50"
                        className="font-bold text-neutral-600 dark:text-white text-12 md:text-l lg:text-2xl"
                    >
                        {project.name} - {project.year}
                    </CardItem>
                    <CardItem
                        as="p"
                        translateZ="60"
                        className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 text-left md:text-12 h-10 md:hidden lg:block leading-none"
                    >
                        {project.tagline}
                    </CardItem>
                </div>
                <CardItem translateZ="100" className="w-full mt-4">
                    <div className="group-hover/card:shadow-xl rounded-xl overflow-hidden">
                        <ProjectVisual
                            project={project}
                            heightClass="h-[350px]"
                            rounding="rounded-xl"
                            padding="p-10"
                        />
                    </div>
                </CardItem>
                <div className="flex justify-between items-center mt-20">
                    <CardItem
                        translateZ={20}
                        className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                    >
                        Discover →
                    </CardItem>
                    <Link href={`/${project.slug}`}>
                        <CardItem
                            translateZ={20}
                            as="button"
                            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                        >
                            {project.name}
                        </CardItem>
                    </Link>
                </div>
            </CardBody>
        </CardContainer>
    );
}

export default ProjectCard;
