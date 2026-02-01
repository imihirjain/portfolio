"use client";

import Image from "next/image";
import React from "react";
import { motion } from "motion/react";
import { assets } from "@/assets/assets";
import experienceData from "../data/experience.json"
const HomeCredit = () => {
  return (

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex lg:flex-row flex-col items-center  gap-10 md:gap-20"
      >
         {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-64 sm:w-64 md:w-80 rounded-3xl"
        >
          <Image
            src={assets.homecredit}
            alt="Experience"
            className="w-full rounded-3xl object-cover"
          />
        </motion.div>
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex-1 text-justify"
        >
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xl sm:text-2xl font-bold font-ovo"
          >
            {experienceData.homeCredit.company}{" "}
            <span className="text-sm font-semibold italic">
              {experienceData.homeCredit.location}
            </span>
          </motion.h2>

          <p className="mb-5 max-w-3xl text-sm sm:text-base text-gray-600 font-ovo font-black">
            {experienceData.homeCredit.role} | {experienceData.homeCredit.duration}
          </p>

          {/* Animated List */}
          <motion.ul
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
            className="list-disc pl-5 space-y-2 text-sm sm:text-base text-gray-700"
          >
            {experienceData.homeCredit.responsibilities.map((item, index) => (
              <motion.li
                key={index}
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 },
                }}
                transition={{ duration: 0.4 }}
                whileHover={{ x: 5 }}
                className="font-ovo"
              >
                {item}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

       
      </motion.div>
  );
};

export default HomeCredit;
