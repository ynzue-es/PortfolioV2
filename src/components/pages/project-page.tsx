import Contact from "../home/Contact";
import { ProjectCard } from "../my-ui/project-card";
import { ProjectVisual } from "../my-ui/project-visual";
import { Reveal } from "../my-ui/reveal";
import { getOtherProjects, type Project } from "@/lib/projects";

const bubble =
    "inline-block m-[10px] rounded-full border border-neutral-500 px-4 py-2";

// Coins arrondis alternés sur les images des "key moments" (esthétique d'origine).
const momentRounding = [
    "rounded-bl-[100px]",
    "rounded-br-[100px] rounded-tl-[100px]",
    "rounded-b-[50px]",
];

export function ProjectPage({ project }: { project: Project }) {
    const others = getOtherProjects(project.slug).slice(0, 3);
    const domain = project.url?.replace(/^https?:\/\//, "");

    return (
        <div>
            {/* En-tête + image principale */}
            <div className="flex flex-col md:flex-row md:justify-between">
                <div className="md:sticky top-0 md:h-screen flex flex-col md:justify-between text-left p-12">
                    <Reveal className="pb-12">
                        <p className="text-neutral-500">{project.year}</p>
                        <h1>{project.name}</h1>
                        {project.url && (
                            <a
                                href={project.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-mono text-blue-500 hover:underline"
                            >
                                {domain} ↗
                            </a>
                        )}
                    </Reveal>
                    <div className="flex flex-col gap-12">
                        <div>
                            <p className="font-mono text-neutral-500 font-semibold">SERVICES</p>
                            <p>{project.services}</p>
                        </div>
                        <div>
                            <p className="font-mono text-neutral-500 font-semibold">CLIENT</p>
                            <p>{project.client}</p>
                        </div>
                        <div>
                            <p className="font-mono text-neutral-500 font-semibold">TEAM</p>
                            <p>{project.team}</p>
                        </div>
                        {project.repos && project.repos.length > 0 && (
                            <div>
                                <p className="font-mono text-neutral-500 font-semibold">REPOS</p>
                                {project.repos.map((repo) => (
                                    <p key={repo} className="font-mono text-sm">{repo}</p>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                <div className="w-full md:w-[80vw] h-[80vh] md:h-[150vh]">
                    <ProjectVisual project={project} rounding="rounded-bl-[100px]" />
                </div>
            </div>

            {/* Catégories + overview */}
            <div className="flex md:flex-row flex-col p-8 md:p-12 w-[100%] mt-16 md:mt-24 text-left">
                <div className="md:w-[20%]">
                    <p className="p-[10px] font-mono text-neutral-500 font-semibold">CATEGORIES</p>
                    <div className="flex flex-wrap">
                        {project.categories.map((category) => (
                            <span key={category} className={bubble}>{category}</span>
                        ))}
                    </div>
                </div>
                <div className="md:w-[80%] flex justify-center">
                    <Reveal className="md:w-[60%] p-[10px]">
                        <p className="font-mono text-neutral-500 font-semibold">OVERVIEW</p>
                        <p className="text-2xl">{project.overview}</p>
                    </Reveal>
                </div>
            </div>

            <div className="w-[100%] h-[1px] bg-neutral-800 my-32" />

            {/* Key moments */}
            <div className="text-left flex flex-col gap-32">
                {project.keyMoments.map((moment, index) => (
                    <div key={moment.title} className={index === 1 ? "relative md:flex" : ""}>
                        <div
                            className={`sticky top-0 ${
                                index === 1 ? "self-start" : ""
                            } z-0 p-12 lg:w-[40%]`}
                        >
                            <p className="font-mono text-xl text-neutral-500">
                                KEY MOMENT // {index + 1}
                            </p>
                            <h3 className="text-3xl font-bold mb-6">{moment.title}</h3>
                            <p className="font-mono text-sm text-blue-500 mb-4">{moment.tag}</p>
                            <p className="text-neutral-400 text-lg">{moment.text}</p>
                        </div>
                        <div className="h-[100vh] relative z-10">
                            <ProjectVisual
                                project={project}
                                rounding={momentRounding[index % momentRounding.length]}
                            />
                        </div>
                    </div>
                ))}
            </div>

            {/* Résultats */}
            <Reveal className="lg:w-[40%] text-left p-12 mt-24">
                <p className="font-mono text-lg text-neutral-500">RESULTS</p>
                <h2 className="text-4xl md:text-8xl mb-24 font-semibold">{project.results.title}</h2>
                <p className="text-2xl md:text-4xl">{project.results.text}</p>
            </Reveal>

            <div className="w-[100%] h-[1px] bg-neutral-800 my-32" />

            {/* Autres projets */}
            <div>
                <p className="font-mono text-lg text-neutral-500">MORE PROJECTS</p>
                <h2 className="text-6xl p-8 md:text-7xl">You might also like</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 my-24">
                    {others.map((other, index) => (
                        <Reveal key={other.slug} delay={(index % 3) * 0.1}>
                            <ProjectCard project={other} />
                        </Reveal>
                    ))}
                </div>
            </div>
            <Contact />
        </div>
    );
}

export default ProjectPage;
