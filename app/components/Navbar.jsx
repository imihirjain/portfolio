import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const sideMenuRef = useRef();

  const [isScroll, setIsScroll] = useState(false);

  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };
  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, []);
  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 -translate-y-[80%] ">
        <Image alt="" src={assets.header_bg_color} className="w-full" />
      </div>

      <nav
        className={`flex justify-between items-center w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 z-50 ${
          isScroll ? "bg-white/50 backdrop-blur-lg shadow-sm" : ""
        } `}
      >
        <a href="#top">
          <h2 className="px-4 py-2 bg-gradient-to-r from-slate-900 to-slate-700 rounded-md text-white tracking-wider font-semibold">
            Mihir Jain
          </h2>
        </a>

        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 px-12 py-3 rounded-full ${
            isScroll ? "" : "shadow-sm bg-white/50"
          }  `}
        >
          <li>
            {" "}
            <a href="#top" className="font-ovo">
              Home
            </a>{" "}
          </li>
          <li>
            {" "}
            <a href="#about" className="font-ovo">
              About me
            </a>{" "}
          </li>

          <li>
            {" "}
            <a href="#work" className="font-ovo">
              My Work
            </a>{" "}
          </li>
          <li>
            {" "}
            <a href="#contact" className="font-ovo">
              Contact me
            </a>{" "}
          </li>
        </ul>

        <div className="flex items-center gap-4">
          {/* <button>
            <Image src={assets.moon_icon} alt="" className="w-6" />
          </button> */}
          <a
            href="#contact"
            className="hidden md:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-ovo"
          >
            Contact
            <Image src={assets.arrow_icon} alt="" className="w-3" />
          </a>
          <button className="block md:hidden ml-3" onClick={openMenu}>
            <Image src={assets.menu_black} alt="" className="w-6" />
          </button>
        </div>

        {/* Mobile menu */}
        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500"
        >
          <div onClick={closeMenu} className="absolute right-6 top-6">
            <Image
              src={assets.close_black}
              alt=""
              className="w-5 cursor-pointer"
            />
          </div>
          <li>
            {" "}
            <a href="#top" onClick={closeMenu} className="font-ovo">
              Home
            </a>{" "}
          </li>
          <li>
            {" "}
            <a href="#about" onClick={closeMenu} className="font-ovo">
              About me
            </a>{" "}
          </li>

          <li>
            {" "}
            <a href="#experience" onClick={closeMenu} className="font-ovo">
              Experience
            </a>{" "}
          </li>

          <li>
            {" "}
            <a href="#work" onClick={closeMenu} className="font-ovo">
              My Work
            </a>{" "}
          </li>
          <li>
            {" "}
            <a href="#contact" onClick={closeMenu} className="font-ovo">
              Contact me
            </a>{" "}
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
