"use client";

import { NavLinks } from "@/constant/constant";
import { useEffect, useState } from "react";
import { FaCode } from "react-icons/fa";
import Link from "next/link";
import { BiDownload } from "react-icons/bi";
import { HiBars3BottomRight } from "react-icons/hi2";
import { motion } from "framer-motion";
import { useTheme } from "@/components/Helper/ThemeProvider";
import { FaSun, FaMoon } from "react-icons/fa";

type Props = {
  openNav: () => void;
};

const Nav = ({ openNav }: Props) => {
  const [navBg, setNavBg] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { theme, toggleTheme } = useTheme();

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

  useEffect(() => {
    // IntersectionObserver for scroll-spy
    const sections = document.querySelectorAll("section[id]");
    const observerOptions = {
      root: null,
      rootMargin: "-50% 0px -50% 0px", // Trigger when section is at viewport center
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (sectionId: string, url: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className={`transition-all duration-300 h-[var(--spacing-nav-height)] fixed w-full z-[1000] ${
        navBg ? "bg-[var(--color-canvas)]/90 backdrop-blur-[8px]" : "bg-transparent"
      }`}
    >
      <div className="flex items-center h-full justify-between w-[90%] mx-auto">
        {/* LOGO */}
        <div className="flex items-center space-x-[var(--spacing-md)]">
          <div className="w-10 h-10 bg-[#3E7BFA] rounded-[var(--radius-pill)] flex items-center justify-center">
            <FaCode className="w-5 h-5 text-[var(--color-text-on-accent)]" />
          </div>
          <h1 
            className="text-[var(--font-heading-md)] hidden sm:block md:text-[var(--font-heading-lg)] font-bold"
            style={{ color: theme === 'dark' ? '#60a5fa' : '#3b82f6' }}
          >
            Sandesh
          </h1>
        </div>

        {/* LINKS */}
        <div className="hidden lg:flex items-center space-x-[var(--spacing-5xl)] relative">
          {NavLinks.map((link) => (
            <Link
              key={link.id}
              href={link.url}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.id, link.url);
              }}
              className={`relative text-[var(--font-body-base)] font-medium transition-all duration-300 ${
                activeSection === link.id ? "text-[var(--text-accent)]" : "text-[var(--text-muted)]"
              } hover:text-[var(--text-heading)]`}
            >
              {link.Label}
              {activeSection === link.id && (
                <motion.div
                  layoutId="nav-pill"
                  className="absolute -bottom-2 left-0 right-0 h-0.5 bg-[#3E7BFA]"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </div>

        {/* BUTTONS */}
        <div className="flex items-center space-x-[var(--spacing-md)]">
          {/* Theme Toggle */}
          <motion.button
            whileTap={{ scale: 0.92 }}
            onClick={toggleTheme}
            className="w-10 h-10 bg-[var(--color-surface)] border border-[#3E7BFA]/30 rounded-[var(--radius-pill)] flex items-center justify-center hover:bg-[#3E7BFA]/20 hover:border-[#3E7BFA]/50 transition-all duration-300"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <FaSun className="text-[var(--color-text-primary)] text-lg" />
            ) : (
              <FaMoon className="text-[var(--color-text-primary)] text-lg" />
            )}
          </motion.button>

          <a
            href="/Sandesh_Dhakal_CV_ATS.pdf"
            download
            className="px-[var(--spacing-2xl)] py-[var(--spacing-sm)] text-[var(--font-label-medium)] cursor-pointer rounded-[var(--radius-pill)] bg-[#3E7BFA] hover:bg-[#6095FF] text-[var(--color-text-on-accent)] transition flex items-center space-x-[var(--spacing-sm)] font-medium"
          >
            <BiDownload className="w-5 h-5" />
            <span>Download CV</span>
          </a>

          {/* Burger menu */}
          <HiBars3BottomRight
            onClick={openNav}
            className="w-8 h-8 text-[var(--color-text-primary)] lg:hidden cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;
