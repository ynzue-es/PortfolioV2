
import { Globe } from "@/components/ui/globe"
import Clock from "../my-ui/clock";
import { Reveal } from "../my-ui/reveal";
import Link from "next/link";
import { projects } from "@/lib/projects";

const sections = [
    { label: "Home", href: "/#home" },
    { label: "Projects", href: "/#projects" },
    { label: "AI", href: "/#ai" },
    { label: "Contact", href: "/#contact" },
];

const Contact = () => {
    return (
        <div className="bg-white flex flex-col md:flex-row justify-between md:h-[100vh] pb-16 md:pb-0" id="contact">
            <div className="md:w-[35%] w-[100%] md:text-left p-8 md:p-16 flex flex-col justify-between border-b border-gray-200">
                <p className="text-neutral-400 font-mono text-left">GO TO TOP</p>
                <div className="flex flex-col">
                    <Reveal>
                        <h2 className="text-neutral-800 text-5xl md:text-[3vw] leading-[60px] mt-8">Let's Talk About <br/> Your Vision</h2>
                    </Reveal>
                    <div className="flex justify-between mt-16 md:mt-32 text-left">
                        <div>
                            <p className="text-neutral-400">PHONE NUMBER</p>
                            <p className="text-neutral-800 font-bold">06 09 63 05 23</p>
                            <p className="text-neutral-400">EMAIL</p>
                            <p className="text-neutral-800 font-bold">yannis.nzuepro@gmail.com</p>
                            <p className="text-neutral-400">CURRENT RESIDENCE</p>
                            <p className="text-neutral-800 font-bold">Lyon</p>
                            <p className="text-neutral-400">CURRENT TIME</p>
                            <p className="text-neutral-800 font-bold"><Clock/></p>
                        </div>
                        <div className="md:ml-12 text-right">
                            <p className="text-neutral-400">SOCIALS</p>
                            <div className="flex flex-col">
                                <a className="font-mono text-neutral-800" href="https://www.linkedin.com/in/yannis-nzue-essono-0089571a6/">Linkedin</a>
                                <a className="font-mono text-neutral-800" href="https://www.youtube.com/@LeMondeDeYannis42">Youtube</a>
                                <a className="font-mono text-neutral-800" href="https://github.com/xxbadgame">Github</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-neutral-800 mt-16 md:mt-0">
                    <p className="text-2xl font-bold">Yannis Nzue Essono</p>
                    <p>FULL-STACK DEVELOPER</p>
                </div>
            </div>
            <div className="relative flex size-full items-center justify-center overflow-hidden md:h-[100vh] w-0 lg:w-[50%]">
                <Globe className="top-28"/>
            </div>
            <div className="w-[100%] md:w-[40%] lg:w-[15%] p-8 md:border-l border-neutral-200 flex flex-col-reverse md:flex-col justify-between">
                <div className="text-neutral-400 text-sm font-mono md:text-left pt-8 md:pt-0">
                    <p>MADE BY YANNIS</p>
                    <p>CREATE IN FEBRUARY 2025</p>
                    <p>MADE WITH LOVE AND REACT</p>
                    <p>@ All rights reserved</p>
                </div>
                <div className="flex md:flex-col gap-8 border-b border-gray-200 pb-16 text-left">
                    <div>
                        <p className="text-neutral-400 text-sm font-mono mb-2">SITE MAP</p>
                        <div className="flex flex-col font-mono text-sm">
                            {sections.map((section) => (
                                <Link
                                    key={section.href}
                                    href={section.href}
                                    className="text-neutral-800 hover:text-neutral-500 transition-colors"
                                >
                                    {section.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div>
                        <p className="text-neutral-400 text-sm font-mono mb-2">PROJECTS</p>
                        <div className="flex flex-col font-mono text-sm">
                            {projects.map((project) => (
                                <Link
                                    key={project.slug}
                                    href={`/${project.slug}`}
                                    className="text-neutral-800 hover:text-neutral-500 transition-colors"
                                >
                                    {project.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact