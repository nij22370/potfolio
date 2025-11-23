"use client";
import React from "react";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import { BsArrowRight } from "react-icons/bs";
import ParticlesHero from "./ParticleBackground";

const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center text-white overflow-hidden flex-col">
      <ParticlesHero />
      <div className="relative z-10 flex flex-col items-center">
        <div className="relative group animate-float">
          {/* Neon glowing ring background */}
          <div className="absolute -inset-2 bg-indigo-500 rounded-full opacity-60 blur-xl group-hover:blur-2xl group-hover:opacity-90 transition-all duration-700"></div>

          {/* Profile Image - Perfectly round */}
          <Image
            src="/images/profile.jpg"
            alt="Profile picture"
            width={150}
            height={150}
            className="relative rounded-full border-4 border-indigo-400 
               shadow-[0_0_30px_rgba(129,140,248,0.8)]
               object-cover
               transition-all duration-500
               group-hover:scale-105 
               group-hover:shadow-[0_0_50px_rgba(167,139,250,1)]
               group-hover:border-purple-400
               z-10"
            data-aos="fade-up"
          />
        </div>
        <h1
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-center font-bold tracking-wide"
        >
          Creating web products,
          <br />
          brands,
          <span className="text-cyan-200"> and experiences.</span>
        </h1>
        <h2
          data-aos="fade-up"
          data-aos-delay="400"
          className="mt-5 text-sm px-2 text-center sm:text-2xl font-medium flex items-center"
        >
          Hi! I'm Sandesh - A Passionate
          <span className="text-cyan-200 font-bold">
            <Typewriter
              options={{
                strings: [
                  "Backend Developer ",
                  "Frontend Developer ",
                  "Web Developer ",
                ],
                autoStart: true,
                loop: true,
                delay: 75,
                deleteSpeed: 50,
                wrapperClassName: "pl-2",
              }}
            />
          </span>
        </h2>
        <button
          data-aos="fade-up"
          data-aos-delay="600"
          className="mt-6 px-10 bg-blue-800 hover:bg-blue-900 transition-all duration-300 cursor-pointer rounded-full text-lg font-medium "
        >
          <span>See my Work</span>
          <BsArrowRight className="inline-block ml-2 w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
