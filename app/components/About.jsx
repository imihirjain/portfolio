import { assets, infoList, toolsData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiExpress, SiMongodb, SiRedux } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { FaGithub, FaNodeJs, FaPhp } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
// import { SiRedux } from "react-icons/si";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full px-[12%] py-10 scroll-mt-20"
      id="about"
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg"
      >
        Introduction
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl font-ovo"
      >
        About me
      </motion.h2>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex w-full flex-col lg:flex-row items-center my-20 gap-20"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-64 sm:w-80 rounded-3xl max-w-none "
        >
          <Image src={assets.logo2} alt="User" className="w-full rounded-3xl" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex-1"
        >
          <p className="mb-10 max-w-2xl">
            I am B.Tech student in Computer Science from PIET, Panipat. I’m
            writing to express my interest in any entry-level Software Developer
            opportunities at your esteemed organization. I have a foundational
            understanding of full-stack development, especially in the MERN
            stack (MongoDB, Express.js, React.js, Node.js), and have applied my
            knowledge in academic projects and on different projects done as
            freelancer
          </p>
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl"
          >
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <motion.li
                whileHover={{ scale: 1.05 }}
                className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:-translate-y-1 duration-500 hover:bg-[#fcf4ff] hover:shadow-[4px_4px_0_#000]"
                key={index}
              >
                <Image src={icon} alt={title} className="w-7 mt-3" />
                <h3 className="my-4 font-semibold text-gray-700 ">{title}</h3>
                <p className="text-gray-600 text-sm">{description}</p>
              </motion.li>
            ))}
          </motion.ul>

          <motion.h4
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.3 }}
            className="my-6 font-ovo text-gray-700"
          >
            Tools I use
          </motion.h4>
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.5 }}
            className="flex items-center gap-4 sm:gap-5"
          >
            {/* {toolsData.map((tool, index) => (
              <motion.li
                whileHover={{ scale: 1.05 }}
                key={index}
                className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500"
              >
                <Image src={tool} alt="Tool" className="w-5 sm:w-7" />
              </motion.li>
              ))} */}
            <SiMongodb className="flex items-center justify-center size-14 p-1 text-green-900 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500" />
            <SiExpress className="flex items-center justify-center size-14 p-2 text-green-500 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500" />
            <RiReactjsLine className="flex items-center justify-center size-14 p-1 text-cyan-300 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500" />
            <FaNodeJs className="flex items-center justify-center size-14 p-1 text-green-500 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500" />
            <TbBrandNextjs className="flex items-center justify-center size-14 p-1 text-black aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500" />

            <RiTailwindCssFill className="flex items-center justify-center size-14 p-2 text-cyan-500 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500" />
            <SiRedux className="flex items-center justify-center size-14 p-2 text-purple-300 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500" />

            <FaGithub className="flex items-center justify-center size-14 p-1 text-black-500 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500" />
          </motion.ul>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
