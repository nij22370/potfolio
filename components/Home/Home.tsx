"use client";
import React, { useEffect, useState } from "react";
import Hero from "./Hero/Hero";
import Services from "./Services/Services";
import FeaturedWork from "./FeaturedWork/FeaturedWork";
import Stats from "./Stats/Stats";
import Workflow from "./Workflow/Workflow";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";
import OffTheClock from "./OffTheClock/OffTheClock";
import Contact from "./Contact/Contact";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  const [aosLoaded, setAosLoaded] = useState(false);

  useEffect(() => {
    const isMobile = typeof window !== 'undefined' ? window.innerWidth < 768 : false;
    
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      anchorPlacement: "top-bottom",
      offset: 20,
      delay: 100,
      disable: isMobile,
      ...(isMobile && {
        mobile: {
          disable: false,
          duration: 800,
          easing: 'ease-out',
          once: true
        }
      }),
      ...(process.env.NODE_ENV === 'development' && { debug: true })
    });

    const timer = setTimeout(() => {
      AOS.refresh();
      setAosLoaded(true);
    }, 100);

    const handleResize = () => {
      AOS.refresh();
    };

    window.addEventListener('resize', handleResize);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', handleResize);
      AOS.refreshHard();
    };
  }, []);

  return (
    <div className={`h-auto transition-opacity duration-500 ${aosLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <Hero />
      <Services />
      <FeaturedWork />
      <Stats />
      <Workflow />
      <Projects />
      <Skills />
      <OffTheClock />
      <Contact />
    </div>
  );
};

export default Home;
