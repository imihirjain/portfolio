import { assets } from "@/assets/assets";
import Image from "next/image";
import { FaRegCopyright } from "react-icons/fa";
import React from "react";

const Footer = () => {
  return (
    <div className="mt-20">
      <div className="text-center">
        <a href="#top">
          <span className="px-6 py-3 bg-gradient-to-r from-slate-900 to-slate-700 rounded-md text-white tracking-wider font-semibold">
            Mihir Jain
          </span>
        </a>
        <div className="flex w-max gap-2 mx-auto items-center mt-2">
          <Image src={assets.mail_icon} className="w-6 " alt="" />{" "}
          jainmanav180@gmail.com
        </div>
      </div>
      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p className="flex items-center lg:gap-2">
          {" "}
          <FaRegCopyright /> 2025 Mihir Jain. All rights reserved.
        </p>
        <ul className=" flex items-center justify-center gap-10 mt-4 sm:mt-0">
          <li>
            <a target="_blank" href="https://github.com/imihirjain">
              Github
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/mihir-jain-583633213"
            >
              Linkedin
            </a>
          </li>
          <li>
            <a target="_blank" href="https://www.instagram.com/imihirjain/">
              Instagram
            </a>
          </li>
        </ul>
      </div>
      <hr />
    </div>
  );
};

export default Footer;
