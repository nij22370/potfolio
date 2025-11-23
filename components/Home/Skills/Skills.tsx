"use client";
import React from "react";
import {
  SiJavascript,
  SiNextdotjs,
  SiNumpy,
  SiPandas,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import Tilt from "react-parallax-tilt";

const skills = [
  {
    name: "JavaScript",
    icon: <SiJavascript className="text-yellow-400" />,
    percentage: 88,
  },
  {
    name: "React.js",
    icon: <SiReact className="text-cyan-400" />,
    percentage: 85,
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs className="text-white" />,
    percentage: 82,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-cyan-300" />,
    percentage: 95,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="text-blue-500" />,
    percentage: 80,
  },
  {
    name: "Python",
    icon: <SiPython className="text-blue-400" />,
    percentage: 85,
  },
  {
    name: "Pandas",
    icon: <SiPandas className="text-purple-400" />,
    percentage: 78,
  },
  {
    name: "NumPy",
    icon: <SiNumpy className="text-orange-500" />,
    percentage: 75,
  },
];

const Skills = () => {
  return (
    <section className="py-20 bg-[#0a0a1f]">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-center text-5xl md:text-6xl font-bold text-white mb-16">
          my <span className="text-cyan-400">Skills</span>
        </h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {skills.map((skill, i) => (
            <Tilt
              key={skill.name}
              tiltMaxAngleX={12}
              tiltMaxAngleY={12}
              scale={1.1}
              transitionSpeed={600}
            >
              <div
                data-aos="flip-up"
                data-aos-delay={i * 100}
                className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 flex flex-col items-center justify-center gap-4 h-56 shadow-xl hover:shadow-cyan-500/30 hover:border-cyan-400 transition-all duration-500"
              >
                <div className="text-6xl group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-white">
                    {skill.percentage}%
                  </p>
                  <p className="text-gray-300 text-sm mt-2">{skill.name}</p>
                </div>
              </div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
