"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
import ParticlesHero from "./ParticleBackground";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
  useEffect(() => {
    AOS.refresh();
  }, []);

  return (
    <div id="home" className="relative min-h-screen flex items-center justify-center text-[var(--color-text-primary)] overflow-hidden flex-col bg-[var(--color-canvas)]">
      <ParticlesHero />
      <div className="relative z-10 flex flex-col items-center px-4 max-w-6xl mx-auto">
        {/* Profile Image Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative group"
        >
          {/* Subtle glowing ring background */}
          <div 
            className="absolute -inset-2 bg-[#3E7BFA] rounded-[var(--radius-pill)] opacity-20 blur-xl group-hover:blur-2xl group-hover:opacity-40 transition-all duration-700"
          ></div>

          {/* Profile Image */}
          <Image
            src="/images/profile.jpg"
            alt="Profile picture"
            width={150}
            height={150}
            className="relative rounded-[var(--radius-pill)] border-2 border-[#3E7BFA]/30 object-cover transition-all duration-500 group-hover:scale-105 group-hover:border-[#3E7BFA]/60 z-10"
            priority
          />
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
          className="text-[40px] sm:text-[50px] md:text-[60px] lg:text-[84px] font-semibold leading-[84px] text-center tracking-[-1.2px] mt-[var(--spacing-6xl)]"
        >
          Hi, I&apos;m{" "}
          <span className="text-[var(--text-accent)]">Sandesh Dhakal</span>
        </motion.h1>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          className="mt-[var(--spacing-xl)] text-[var(--font-body-regular)] text-[var(--color-text-secondary)] text-center font-normal max-w-2xl leading-relaxed"
        >
          Frontend Developer based in Lalitpur, Nepal. I build high-performance web applications with Next.js, React, and TypeScript.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45, ease: "easeOut" }}
          className="mt-[var(--spacing-5xl)] flex flex-col sm:flex-row gap-[var(--spacing-base)] items-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-[var(--spacing-2xl)] py-[var(--spacing-base)] bg-[#3E7BFA] hover:bg-[#6095FF] transition-all duration-300 cursor-pointer rounded-[var(--radius-pill)] text-[var(--font-body-base)] font-medium text-[var(--color-text-on-accent)]"
          >
            <span>View my work</span>
            <BsArrowRight className="inline-block ml-2 w-5 h-5" />
          </motion.button>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/nij22370"
            target="_blank"
            rel="noopener noreferrer"
            className="px-[var(--spacing-2xl)] py-[var(--spacing-base)] border border-[#3E7BFA]/30 hover:border-[#3E7BFA]/60 transition-all duration-300 rounded-[var(--radius-pill)] text-[var(--font-body-base)] font-medium text-[var(--color-text-primary)]"
          >
            GitHub
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
