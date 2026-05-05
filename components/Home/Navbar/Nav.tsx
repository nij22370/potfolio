"use client";

import { NavLinks } from "@/constant/constant";
import { useEffect, useState } from "react";
import { FaCode } from "react-icons/fa";
import Link from "next/link";
import { BiDownload } from "react-icons/bi";
import { HiBars3BottomRight } from "react-icons/hi2";

type Props = {
  openNav: () => void;
};

const Nav = ({ openNav }: Props) => {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 90) {
        setNavBg(true);
      } else {
        setNavBg(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`transition-all duration-300 h-[12vh] fixed w-full z-[1000] ${
        navBg ? "bg-[#0b0b1ad9] backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="flex items-center h-full justify-between w-[90%] mx-auto">
        {/* LOGO */}
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
            <FaCode className="w-5 h-5 text-black" />
          </div>
          <h1 className="text-xl hidden sm:block md:text-2xl text-white font-bold">
            Sandesh
          </h1>
        </div>

        {/* LINKS */}
        <div className="hidden lg:flex items-center space-x-14">
          {NavLinks.map((link) => (
            <Link
              key={link.id}
              href={link.url}
              className="text-base hover:text-cyan-300 text-white font-medium transition-all duration-300"
            >
              {link.Label}
            </Link>
          ))}
        </div>

        {/* BUTTONS */}
        <div className="flex items-center space-x-4">
          <a
            href="/Sandesh_Dhakal_CV_ATS.pdf"
            download
            className="px-8 py-3.5 text-sm cursor-pointer rounded-lg bg-blue-700 hover:bg-blue-800 text-white transition flex items-center space-x-2"
          >
            <BiDownload className="w-5 h-5" />
            <span>Download CV</span>
          </a>

          {/* Burger menu */}
          <HiBars3BottomRight
            onClick={openNav}
            className="w-8 h-8 text-white lg:hidden cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;
