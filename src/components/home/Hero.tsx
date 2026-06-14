"use client";

import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import ButtonHero from "../my-ui/button-hero";

const easeOut: [number, number, number, number] = [0.21, 0.47, 0.32, 0.98];

const leftArrow = "/images/arrow/left-break.png";
const ynzue = "/images/ynzue-es.jpeg";

const Hero = () => {

  const jobs = ['Backend Development', 'Frontend Development', 'Entrepreneur']

  return (
    <div className="flex flex-col gap-8" id="home">
      <motion.h1
        className="text-[14vw] md:text-[9vw] md:mt-0 mt-8"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: easeOut }}
      >
        YANNIS <br className="block md:hidden"/> NZUE ESSONO
      </motion.h1>
      <motion.div
        className="flex flex-col md:flex-row justify-between items-center h-[100px] md:h-12 w-[100%] md:px-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.35, ease: easeOut }}
      >
        <div className="w-[100%] md:w-[80%] ">
          <Marquee autoFill={true} gradient={true} gradientColor="hsl(var(--background))">
            <ul className="flex items-center">
              {jobs.map((item, index) => (
                  <li className="border border-gray-500 rounded-full p-2 ml-1" key={index}>
                      {item}
                  </li>
              ))}
              <li className="mx-8 text-3xl text-gray-500">FULL-STACK DEVELOPER</li>
              <li className="flex flex-col font-mono">
                    <span>AVAILABLE FOR FREELANCE</span>
                    <span className="flex">(WORKING REMOTE)<img src={leftArrow} className="size-5" alt="left arrow" /></span>
              </li>
              <li className="mx-8 text-3xl text-gray-500">BASED IN FRANCE</li>
            </ul>
          </Marquee>
        </div>
        <div className="w-[100%] h-[100%] flex justify-center mt-[20px] md:mt-0">
          <ButtonHero />
        </div>
      </motion.div>
      <motion.img
        className="rounded-bl-[20vw] md:h-auto h-[60vh] object-cover"
        src={ynzue}
        alt="42 image"
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.5, ease: easeOut }}
      />
    </div>
  );
};

export default Hero;
