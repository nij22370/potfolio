"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import { BsArrowRight } from "react-icons/bs";
import ParticlesHero from "./ParticleBackground";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
  useEffect(() => {
    AOS.refresh();
  }, []);

  return (
    <div id="home" className="relative h-screen flex items-center justify-center text-white overflow-hidden flex-col">
      <ParticlesHero />
      <div className="relative z-10 flex flex-col items-center px-4">
        {/* Profile Image Container */}
        <div 
          className="relative group animate-float"
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-easing="ease-out-back"
          data-aos-once="true"
        >
          {/* Neon glowing ring background */}
          <div 
            className="absolute -inset-2 bg-indigo-500 rounded-full opacity-60 blur-xl group-hover:blur-2xl group-hover:opacity-90 transition-all duration-700"
            data-aos="fade"
            data-aos-duration="1500"
            data-aos-delay="200"
          ></div>

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
            data-aos-duration="800"
            data-aos-delay="300"
            data-aos-once="true"
            priority
          />
        </div>
        
        <h1
          data-aos="fade-up"
          data-aos-delay="400"
          data-aos-duration="1000"
          data-aos-easing="ease-out-cubic"
          data-aos-once="true"
          className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-center font-bold tracking-tight mt-8 leading-tight"
        >
          Building <span className="text-cyan-400">High-Performance</span>
          <br />
          Web Applications &
          <br />
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Digital Experiences.
          </span>
        </h1>
        
        <h2
          data-aos="fade-up"
          data-aos-delay="700"
          data-aos-duration="1000"
          data-aos-once="true"
          className="mt-8 text-sm px-2 text-center sm:text-2xl font-medium flex flex-wrap justify-center gap-2 items-center"
        >
          <span>Hi! I'm Sandesh — A specialized</span>
          <span className="text-cyan-400 font-bold border-b-2 border-cyan-400/30">
            <Typewriter
              options={{
                strings: [
                  "Frontend Developer",
                  "Next.js Expert",
                  "React Developer",
                  "TypeScript Enthusiast",
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
