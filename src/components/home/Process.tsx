"use client";

import { useRef, useEffect, useState } from "react";
import Lottie from "lottie-react";
import animationData from "../../assets/animations/confeti.json";
import { motion, useScroll, useTransform } from "framer-motion";
import { Reveal } from "../my-ui/reveal";

const Process = () => {
    const targetRef1 = useRef(null);
    const targetRef2 = useRef(null);
    const targetRef3 = useRef(null);
    const targetRef4 = useRef(null);

    const { scrollYProgress: scrollYProgress1 } = useScroll({
        target: targetRef1,
        offset: ["start center", "end center"],
    });
    const { scrollYProgress: scrollYProgress2 } = useScroll({
        target: targetRef2,
        offset: ["start center", "end center"],
    });
    const { scrollYProgress: scrollYProgress3 } = useScroll({
        target: targetRef3,
        offset: ["start center", "end center"],
    });
    const { scrollYProgress: scrollYProgress4 } = useScroll({
        target: targetRef4,
        offset: ["center center", "center center"],
    });

    const bgColor1 = useTransform(scrollYProgress1, [0, 1], ["hsl(var(--background))", "#3b82f6"]);
    const bgColor2 = useTransform(scrollYProgress2, [0, 1], ["hsl(var(--background))", "#3b82f6"]);
    const bgColor3 = useTransform(scrollYProgress3, [0, 1], ["hsl(var(--background))", "#3b82f6"]);
    const color4 = useTransform(scrollYProgress4, [0, 1], ["hsl(var(--border))", "#3b82f6"]);

    const height1 = useTransform(scrollYProgress1, [0,1], ["0vh", "500px"]);
    const height2 = useTransform(scrollYProgress2, [0,1], ["0vh", "500px"]);
    const height3 = useTransform(scrollYProgress3, [0,1], ["0vh", "500px"]);

    const [playLottie, setPlayLottie] = useState(false);

    useEffect(() => {
        const unsubscribe = scrollYProgress4.on("change", (latest) => {
            if (latest === 1 && !playLottie) {
                setPlayLottie(true); 
            } else if (latest === 0) {
                setPlayLottie(false);
            }
        });
        
        return () => unsubscribe();
    }, [scrollYProgress4]);

    return (
        <div className="flex flex-col gap-16 mt-24">
            <Reveal>
                <p className="font-mono text-gray-400 font-semibold">PROCESS</p>
                <h2 className="text-[9vw] md:text-[5vw] leading-none">3 Steps & <br/> It's Finished</h2>
            </Reveal>
            <div>
                <p className="px-8 text-2xl lg:text-4xl">Quick and efficient, from concept to execution.</p>
                <p className="px-12 mt-4 text-gray-400">The process may vary depending on the project's scope, so if you have questions or need more info, feel free to reach out!</p>
            </div>
            <div className="flex flex-col items-center pt-16 w-[15%] md:w-[100%]">
                <motion.div className="relative w-12 h-12 border-[2px] border-neutral-800 rounded-full flex justify-center items-center"
                    style={{ backgroundColor: bgColor1, transition: "all 0.5s" }}
                >01</motion.div>
                <div className="relative h-[500px] w-[2px] bg-neutral-800" ref={targetRef1}>
                    <motion.div style={{ height: height1 }} className="absolute w-[2px] bg-blue-500 origin-top" />
                    <div className="absolute top-6 left-12 text-left w-56 md:w-80 lg:w-96">
                        <h3 className="text-2xl font-bold">Discovery</h3>
                        <div className="mt-4">
                            <h4 className="font-semibold mt-4">Consultation</h4>
                            <p className="text-neutral-400 text-sm md:text-lg">Engage in discussions to explore your needs, target audience, and overall objectives.</p>
                            <h4 className="font-semibold mt-4">Research</h4>
                            <p className="text-neutral-400 text-sm md:text-lg">Conduct thorough research to analyze market trends, user behavior, and competitor offerings for deeper insights.</p>
                            <h4 className="font-semibold mt-4">Define Objectives</h4>
                            <p className="text-neutral-400 text-sm md:text-lg">Set clear project goals, deliverables, and timelines to create a structured approach.</p>
                        </div>
                    </div>
                </div>      

                <motion.div className="w-12 h-12 border-[2px] border-neutral-800 rounded-full flex justify-center items-center"
                    style={{ backgroundColor: bgColor2, transition: "all 0.5s" }}
                >02</motion.div>
                <div className="relative h-[500px] w-[2px] bg-neutral-800" ref={targetRef2}>
                    <motion.div style={{ height: height2 }} className="absolute w-[2px] bg-blue-500 origin-top" />
                    <div className="absolute top-6 left-12 md:left-auto md:right-12 text-left w-56 md:w-80 lg:w-96">
                        <h3 className="text-2xl font-bold">Concept Development</h3>
                        <div className="mt-4">
                            <h4 className="font-semibold mt-4">Ideation</h4>
                            <p className="text-neutral-400 text-sm md:text-lg">Brainstorm various design solutions to capture the essence of your brand.</p>
                            <h4 className="font-semibold mt-4">Sketching and Prototyping</h4>
                            <p className="text-neutral-400 text-sm md:text-lg">Create initial sketches and prototypes to visualize concepts and explore different directions.</p>
                            <h4 className="font-semibold mt-4">Feedback Loop</h4>
                            <p className="text-neutral-400 text-sm md:text-lg">Share concepts for your input, refining ideas based on your thoughts and preferences.</p>
                        </div>
                    </div>
                </div>

                <motion.div className="w-12 h-12 border-[2px] border-neutral-800 rounded-full flex justify-center items-center"
                    style={{ backgroundColor: bgColor3, transition: "all 0.5s" }}
                >03</motion.div>
                <div className="relative h-[500px] w-[2px] bg-neutral-800" ref={targetRef3}>
                    <motion.div style={{ height: height3 }} className="absolute w-[2px] bg-blue-500 origin-top" />
                    <div className="absolute top-6 left-12 text-left w-56 md:w-80 lg:w-96">
                        <h3 className="text-2xl font-bold">Execution</h3>
                        <div className="mt-4">
                            <h4 className="font-semibold mt-4">Final Design</h4>
                            <p className="text-neutral-400 text-sm md:text-lg">Develop detailed designs, ensuring consistency with your brand identity and user experience principles.</p>
                            <h4 className="font-semibold mt-4">Style Guide</h4>
                            <p className="text-neutral-400 text-sm md:text-lg">Create a style guide that outlines colors, typography, and visual elements for cohesive branding.</p>
                            <h4 className="font-semibold mt-4">Handoff</h4>
                            <p className="text-neutral-400 text-sm md:text-lg">Prepare all assets and documentation needed for production or development.</p>
                        </div>
                    </div>
                </div>

                <motion.div
                    style={{ borderColor: color4, transition: "all 0.3s" }}
                    className="relative md:w-44 md:h-44 w-72 h-[30vh] border-[2px] md:border-[2px] ml-[286px] top-[-2px] md:ml-0 border-neutral-800 md:rounded-full rounded-bl-[100px] rounded-tr-[100px] flex justify-center items-center overflow-hidden"
                >
                    <Lottie
                        key={playLottie ? 'play' : 'pause'}
                        style={{
                            position: "absolute",
                            width: "100%",
                            height: "100%",
                            borderRadius: 20,
                            visibility: playLottie ? "visible" : "hidden",
                        }}
                        animationData={animationData}
                        loop={false}
                    />
                    <span className="absolute z-10 md:text-3xl text-4xl" ref={targetRef4}>launch</span>
                </motion.div>
            </div>
        </div>
    );
};

export default Process;