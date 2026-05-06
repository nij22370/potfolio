"use client";
import React, { useEffect, useState } from "react";
import Hero from "./Hero/Hero";
import Services from "./Services/Services";
import Resume from "./Resume/Resume";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";
import ClientReview from "./ClientReview/ClientReview";
import Blog from "./Blog/Blog";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";
import ScrollToTop from "../Helper/ScrollToTop";
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
      disable: isMobile, // Disable on mobile if needed
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

    // Handle window resize
    const handleResize = () => {
      AOS.refresh();
    };

    window.addEventListener('resize', handleResize);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', handleResize);
      AOS.refreshHard(); // Reset AOS on unmount
    };
  }, []);

  return (
    <div className={`h-auto transition-opacity duration-500 ${aosLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <Hero />
      <Services />
      <Resume />
      <Projects />
      <Skills />
      <ClientReview />
      <Blog />
      <Contact />
    </div>
  );
};

export default Home;
