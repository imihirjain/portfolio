"use client";

import Image from "next/image";
import React from "react";
import { motion } from "motion/react";
import { assets } from "@/assets/assets";
import experienceData from "../data/experience.json";
import HomeCredit from "./HomeCredit";
import BEL from "./BEL";
const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full px-6 md:px-[12%] py-10 scroll-mt-20"
      id="experience"
    >
      {/* Section Heading */}
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-2 text-base sm:text-lg"
      >
        Experience
      </motion.h4>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex lg:flex-row flex-col items-center my-10 gap-10 md:gap-20"
      >
        <BEL />
      </motion.div>
      <hr className="my-10 border-gray-300" />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex lg:flex-row flex-col-reverse items-center gap-10 md:gap-20"
      >
        <HomeCredit />
      </motion.div>
      
    </motion.div>
  );
};

export default Experience;
