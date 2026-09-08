"use client";
import React from "react";
import { motion } from "framer-motion";

const experience = [
  {
    phase: "Foundations",
    period: "2021 - 2025",
    title: "B.Sc. CSIT",
    organization: "Nagarjuna College of Information Technology, Lalitpur",
    description: "Built foundational knowledge in Computer Science fundamentals, Software Engineering, and Web Technologies. Focused on data structures, algorithms, and modern web development practices."
  },
  {
    phase: "Building",
    period: "Jan - Apr 2026",
    title: "Frontend Developer Intern",
    organization: "Nepware Pvt. Ltd.",
    description: "Built a Motorcycle Inventory Management System with purchase order lifecycle, Admin Job Card module with role-based access, PDF export (jsPDF + autotable), bulk delete, server-side filtering, notification polling, toast system, and CI/CD pipeline (GitHub Actions + Vercel). Stack: Next.js 14, TypeScript, Redux Toolkit, MongoDB."
  },
  {
    phase: "Building",
    period: "2025 - 2026",
    title: "Frontend Developer Trainee",
    organization: "TechYatra Labs",
    description: "Contributed to PLMS/MentorAI (PLMS-Frontend). Built TutorHub listing/profile UI and a 3-step booking modal. Integrated Django REST APIs via TanStack Query using a 3-layer architecture. Built the Classroom module from scratch (CalendarStrip, ClassCard, ClassDetail, LiveBadge) and fixed infinite API-call loop. Also built the TechYatra Labs marketing site in Next.js 14 with Framer Motion."
  },
  {
    phase: "Now",
    period: "2026",
    title: "Frontend Developer",
    organization: "Freelance & Personal Projects",
    description: "Building full-stack applications including a Driver/Delivery Marketplace Platform, RAG chatbot (AskAnything), and various tools. Focusing on modern React patterns, state management, and performance optimization."
  }
];

const Resume = () => {
  return (
    <section id="resume" className="py-24 bg-[#0d0f18]">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[var(--font-heading-lg)] text-[var(--color-text-primary)] mb-[var(--spacing-7xl)]"
        >
          Journey
        </motion.h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[#3E7BFA]/50 via-[#3E7BFA]/30 to-transparent" />
          
          <div className="space-y-12">
            {experience.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-6 top-6 w-5 h-5 rounded-full bg-[#3E7BFA] border-4 border-[#0d0f18] z-10" />
                
                {/* Phase badge */}
                <div className="inline-block px-4 py-1 bg-[#3E7BFA]/10 border border-[#3E7BFA]/30 rounded-full mb-4">
                  <span className="text-[#3E7BFA] text-[14px] font-medium">{item.phase}</span>
                </div>
                
                <h3 className="text-[var(--color-text-primary)] text-[24px] font-semibold mb-1">
                  {item.title}
                </h3>
                
                <p className="text-[var(--color-text-primary)] text-[16px] mb-1">
                  {item.organization}
                </p>
                
                <p className="text-[#3E7BFA] text-[14px] mb-4">
                  {item.period}
                </p>
                
                <p className="text-[var(--color-text-secondary)] text-[16px] leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
