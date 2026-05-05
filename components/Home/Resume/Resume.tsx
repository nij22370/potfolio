import React from "react";
import ResumeCard from "./ResumeCard";
import { FaCodepen, FaDatabase, FaReact } from "react-icons/fa";
import { BiBadge } from "react-icons/bi";

const Resume = () => {
  return (
    <div id="resume" className="py-20 bg-[#0a0a1f]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-16">
        {/*work part*/}
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white">
            Work <span className="text-cyan-400">Experience</span>
          </h1>
          <div
            className="mt-10"
            data-aos="fade-right"
            data-aos-anchor-placement="top-center"
          >
            <ResumeCard 
              Icon={FaReact} 
              role="Frontend Developer Intern" 
              date="Jan 2026 - Present"
              description="Architected and delivered a Motorcycle Inventory Management System at Nepware Pvt. Ltd. Implemented purchase order lifecycles, real-time notifications, and JWT-based auth using Next.js 14 and Redux Toolkit."
            />
            <ResumeCard 
              Icon={FaCodepen} 
              role="Freelance Frontend Developer" 
              date="2024 - 2025"
              description="Developed responsive and interactive web applications for various clients, focusing on modern UI/UX principles and performant React components."
            />
          </div>
        </div>
        {/*education part*/}
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white">
            Education <span className="text-cyan-400">Path</span>
          </h1>
          <div
            className="mt-10"
            data-aos="fade-left"
            data-aos-anchor-placement="top-center"
            data-aos-delay="200"
          >
            <ResumeCard
              Icon={BiBadge}
              role="B.Sc. CSIT"
              date="2021 - 2025 (Expected)"
              description="Nagarjuna College of IT. Focused on Computer Science fundamentals, Software Engineering, and Web Technologies."
            />
            <ResumeCard
              Icon={FaDatabase}
              role="Data Science Bootcamp"
              date="July 2025 - Oct 2025"
              description="Intensive bootcamp focused on data analysis, machine learning models, and Python-based data visualization."
            />
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
