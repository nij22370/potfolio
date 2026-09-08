"use client";
import React from "react";
import { motion } from "framer-motion";

const skillCategories = [
  {
    category: "Core",
    skills: ["Next.js", "React", "TypeScript", "JavaScript"]
  },
  {
    category: "State & Data",
    skills: ["Redux Toolkit", "TanStack Query", "Zustand"]
  },
  {
    category: "UI",
    skills: ["Tailwind CSS", "Shadcn UI", "Framer Motion"]
  },
  {
    category: "Forms & Validation",
    skills: ["React Hook Form", "Zod"]
  },
  {
    category: "Backend",
    skills: ["Flask", "Python"]
  },
  {
    category: "Databases",
    skills: ["MongoDB", "MySQL"]
  },
  {
    category: "Tooling",
    skills: ["Git", "GitHub Actions", "Vercel CI/CD", "Postman"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-[var(--color-canvas)]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-[var(--spacing-7xl)]"
        >
          <p className="text-[var(--font-label-small)] font-medium text-[var(--text-accent)] tracking-widest uppercase mb-[var(--spacing-md)]">
            Tech Stack
          </p>
          <h2 className="text-[var(--font-heading-lg)] text-[var(--text-heading)]">
            Skills & Technologies
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[var(--spacing-md)]">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1, ease: "easeOut" }}
              className="group relative rounded-[var(--radius-3xl)] p-[var(--spacing-xl)] hover:-translate-y-0.5 transition-all duration-300 bg-[var(--color-surface)] border border-[#3E7BFA]/20"
            >
              <h3 className={`text-[var(--font-label-medium)] font-medium mb-[var(--spacing-md)] ${category.category === "Core" ? "text-[var(--text-accent)]" : "text-[var(--text-heading)]"}`}>
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.3, delay: skillIndex * 0.03, ease: "easeOut" }}
                    className="px-[var(--spacing-sm)] py-[var(--spacing-xs)] bg-[#3E7BFA]/10 text-[var(--text-accent)] text-[var(--font-label-small)] rounded-[var(--radius-pill)] border border-[#3E7BFA]/20 hover:bg-[#3E7BFA]/20 transition-all duration-300"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
