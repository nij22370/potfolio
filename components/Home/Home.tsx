"use client";
import React, { useEffect } from "react";
import Hero from "./Hero/Hero";
import Services from "./Services/Services";
import Resume from "./Resume/Resume";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";
import ClientReview from "./ClientReview/ClientReview";
import Blog from "./Blog/Blog";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";
import ScrollToTop from "../Hepler/ScrollToTop";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false, // IMPORTANT
      anchorPlacement: "top-bottom",
    });

    // Refresh AFTER everything is rendered
    setTimeout(() => {
      AOS.refresh();
    }, 300);
  }, []);

  return (
    <div className="h-auto">
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
