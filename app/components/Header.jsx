import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const Header = () => {
  return (
    <div className="flex flex-col  justify-center items-center w-11/12 max-w-3xl mx-auto text-center h-screen gap-4">
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      >
        <Image
          src={assets.logo1}
          alt="Mihir Jain"
          className="rounded-full w-32 mt-32 sm:mt-0"
        />
      </motion.div>
      <motion.h3
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex gap-2 text-left items-end font-ovo md:text-2xl mb-3"
      >
        Hi ! I'm Mihir Jain
        <Image src={assets.hand_icon} alt="" className="w-6" />
      </motion.h3>
      {/* <motion.h1
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-3xl sm:text-6xl font-ovo lg:text-[66px]"
      >
        frontend web developer
      </motion.h1> */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="max-w-4xl mx-auto font-ovo "
      >
        Results-driven Engineer with hands-on experience at Bharat Electronics
        Limited (Radar SBU), working on Air Traffic Control (ATC) surveillance
        and ATMS display systems in mission-critical aviation environments.
        Skilled in Linux (RHEL), shell scripting, networking, and system
        integration, with practical exposure to radar data processing, ADS-B
        integration, and real-time system debugging using tools like Wireshark
        and PostgreSQL. Also experienced in software development with a strong
        foundation in full-stack technologies (React, Node.js) and modern
        development practices. Passionate about building reliable,
        high-performance systems and seeking opportunities in Aviation Systems
        Engineering, Radar/ATMS, or Software Development roles.
      </motion.p>
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          href="#contact"
          className="px-10 py-3 rounded-full border border-white flex items-center gap-2 bg-black text-white
        "
        >
          Contact me{" "}
          <Image src={assets.right_arrow_white} alt="" className="w-4" />
        </motion.a>
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          href="/MIHIR.pdf"
          download
          className="px-10 py-3 rounded-full border border-gray-500 flex items-center gap-2
        "
        >
          My resume <Image src={assets.download_icon} alt="" className="w-4" />
        </motion.a>
      </div>
    </div>
  );
};

export default Header;
