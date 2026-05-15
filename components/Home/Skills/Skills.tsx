"use client";
import React from "react";
import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiRedux,
  SiMongodb,
  SiPostman,
  SiGithub,
} from "react-icons/si";
import Tilt from "react-parallax-tilt";

const skills = [
  {
    name: "React.js",
    icon: <SiReact className="text-cyan-400" />,
    percentage: 84,
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs className="text-white" />,
    percentage: 82,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="text-blue-500" />,
    percentage: 80,
  },
  {
    name: "Redux",
    icon: <SiRedux className="text-purple-500" />,
    percentage: 78,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-cyan-300" />,
    percentage: 84,
  },
  {
    name: "MongoDB",
    icon: <SiMongodb className="text-green-500" />,
    percentage: 75,
  },
  {
    name: "Postman",
    icon: <SiPostman className="text-orange-500" />,
    percentage: 80,
  },
  {
    name: "GitHub",
    icon: <SiGithub className="text-white" />,
    percentage: 84,
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-[#0a0a1f]">
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
