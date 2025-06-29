"use client";

import { assets, infoList } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";
import { RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiExpress, SiMongodb, SiRedux } from "react-icons/si";
import { FaGithub, FaNodeJs } from "react-icons/fa";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full px-6 md:px-[12%] py-10 scroll-mt-20"
      id="about"
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-base sm:text-lg"
      >
        Introduction
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-3xl sm:text-5xl font-ovo"
      >
        About me
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col lg:flex-row items-center my-10 gap-10 md:gap-20"
      >
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-48 sm:w-64 md:w-80 rounded-3xl"
        >
          <Image
            src={assets.logo2}
            alt="User"
            className="w-full rounded-3xl object-cover"
          />
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex-1 text-justify"
        >
          <p className="mb-10 max-w-3xl text-sm sm:text-base">
            I am a B.Tech student in Computer Science from PIET, Panipat. I’m
            writing to express my interest in any entry-level Software Developer
            opportunities at your esteemed organization. I have a foundational
            understanding of full-stack development, especially in the MERN
            stack (MongoDB, Express.js, React.js, Node.js), and have applied my
            knowledge in academic projects and freelance work.
          </p>

          {/* Info Cards */}
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-3xl"
          >
            {infoList.map(({ icon, title, description }, index) => (
              <motion.li
                whileHover={{ scale: 1.05 }}
                className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:-translate-y-1 duration-500 hover:bg-[#fcf4ff] hover:shadow-[4px_4px_0_#000]"
                key={index}
              >
                <Image src={icon} alt={title} className="w-7 mt-3" />
                <h3 className="my-4 font-semibold text-gray-700 text-sm sm:text-base">
                  {title}
                </h3>
                <p className="text-gray-600 text-sm">{description}</p>
              </motion.li>
            ))}
          </motion.ul>

          {/* Tools Section */}
          <motion.h4
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.3 }}
            className="my-6 font-ovo text-gray-700 text-base sm:text-lg"
          >
            Tools I use
          </motion.h4>

          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.5 }}
            className="flex flex-wrap justify-center sm:justify-start  gap-4 sm:gap-5"
          >
            <li className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500">
              <SiMongodb className="text-green-900 text-2xl sm:text-3xl" />
            </li>
            <li className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500">
              <SiExpress className="text-green-500 text-2xl sm:text-3xl" />
            </li>
            <li className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500">
              <RiReactjsLine className="text-cyan-300 text-2xl sm:text-3xl" />
            </li>
            <li className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500">
              <FaNodeJs className="text-green-500 text-2xl sm:text-3xl" />
            </li>
            <li className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500">
              <TbBrandNextjs className="text-black text-2xl sm:text-3xl" />
            </li>
            <li className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500">
              <RiTailwindCssFill className="text-cyan-500 text-2xl sm:text-3xl" />
            </li>
            <li className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500">
              <SiRedux className="text-purple-300 text-2xl sm:text-3xl" />
            </li>
            <li className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500">
              <FaGithub className="text-black text-2xl sm:text-3xl" />
            </li>
          </motion.ul>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
