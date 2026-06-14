import { ProjectCard } from "../my-ui/project-card";
import { Reveal } from "../my-ui/reveal";
import { projects } from "@/lib/projects";

const Projects = () => {
    return (
        <div className="mb-12" id="projects">
            <Reveal className="pt-32 pb-16 flex flex-col justify-center items-center">
                <p className="font-mono md:text-base md:h-[5vh] flex justify-center items-center text-gray-400">PROJECTS 2023 - 2025</p>
                <h2 className="md:text-[5vw] text-4xl md:h-[10vh] flex justify-center items-center">Selected Projects</h2>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-3">
                {projects.map((project, index) => (
                    <Reveal key={project.slug} delay={(index % 3) * 0.1}>
                        <ProjectCard project={project} />
                    </Reveal>
                ))}
            </div>
        </div>
    );
};

export default Projects;
