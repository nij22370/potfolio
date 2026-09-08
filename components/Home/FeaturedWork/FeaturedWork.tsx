"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
import ProjectIllustration from "@/components/Helper/ProjectIllustration";

const featuredWork = [
  {
    id: 1,
    index: "01/02",
    title: "Motorcycle Inventory Management System",
    company: "Nepware Pvt. Ltd. — Frontend Developer Intern",
    period: "Jan – Apr 2026",
    shortDesc:
      "Built a full inventory platform with purchase order lifecycle, role-based admin access, and CI/CD automation.",
    fullDesc:
      "Developed a comprehensive Motorcycle Inventory Management System at Nepware Pvt. Ltd. Implemented complete purchase order lifecycle management, Admin Job Card module with role-based access control, PDF export functionality using jsPDF and autotable, bulk delete operations, server-side filtering, notification polling system, toast notifications, and a full CI/CD pipeline using GitHub Actions and Vercel deployment. Stack: Next.js 14, TypeScript, Redux Toolkit, MongoDB.",
    tags: ["Next.js 14", "TypeScript", "Redux Toolkit", "MongoDB"],
    illustration: "dashboard",
  },
  {
    id: 2,
    index: "02/02",
    title: "PLMS/MentorAI Platform",
    company: "TechYatra Labs — Frontend Developer Trainee",
    period: "2025 – 2026",
    shortDesc:
      "Built TutorHub, 3-step booking flow, and Classroom module with Django REST API integration.",
    fullDesc:
      "Contributed to PLMS/MentorAI (PLMS-Frontend) at TechYatra Labs. Built the TutorHub listing and profile UI, implemented a 3-step booking modal flow (slot selection → confirmation → success). Integrated Django REST APIs using TanStack Query with a clean 3-layer architecture. Built the Classroom module from scratch including CalendarStrip, ClassCard, ClassDetail, and LiveBadge components. Fixed a critical infinite API-call loop. Also built the TechYatra Labs marketing site using Next.js 14 and Framer Motion.",
    tags: ["Next.js 14", "TanStack Query", "Django REST", "Framer Motion"],
    illustration: "pipeline",
  },
];

export default function FeaturedWork() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="featured-work" className="py-24 bg-[var(--color-canvas)]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-14"
        >
          <p className="text-[var(--font-label-small)] font-medium text-[var(--text-accent)] tracking-widest uppercase mb-[var(--spacing-md)]">
            Featured Work
          </p>
          <h2 className="text-[var(--font-heading-xl)] md:text-[var(--font-heading-lg)] font-bold text-[var(--text-heading)] leading-tight">
            Professional Projects
          </h2>
          <p className="mt-3 text-[var(--text-body)] max-w-xl">
            These case studies were built at real companies. Proprietary client
            work is not shown — these are the ones I can share.
          </p>
        </motion.div>

        <div className="space-y-5">
          {featuredWork.map((work, index) => (
            <motion.div
              key={work.id}
              initial={{ opacity: 0, x: index === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
              className="group rounded-[var(--radius-3xl)] overflow-hidden bg-[var(--color-surface)] border border-[#3E7BFA]/20"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Left — Illustration */}
                <div className="p-6 flex items-center justify-center border-r border-[#3E7BFA]/10">
                  <div className="w-full">
                    <ProjectIllustration type={work.illustration} size="large" />
                  </div>
                </div>

                {/* Right — Content */}
                <div className="p-6 lg:p-8 flex flex-col justify-center">
                  <span className="text-[var(--font-label-small)] font-semibold text-[var(--text-accent)] tracking-widest uppercase mb-[var(--spacing-sm)]">
                    {work.index}
                  </span>
                  <h3 className="text-[var(--text-heading)] text-[var(--font-heading-md)] md:text-[var(--font-heading-lg)] font-bold leading-snug mb-[var(--spacing-sm)]">
                    {work.title}
                  </h3>
                  <p className="text-[var(--text-accent)] text-[var(--font-body-base)] font-medium mb-[var(--spacing-sm)]">{work.company}</p>
                  <p className="text-[var(--text-body)] text-[var(--font-label-small)] mb-[var(--spacing-md)]">{work.period}</p>
                  <p className="text-[var(--text-body)] text-[var(--font-body-regular)] leading-relaxed mb-[var(--spacing-md)]">
                    {work.shortDesc}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {work.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-[var(--spacing-sm)] py-[var(--spacing-xs)] bg-[#3E7BFA]/10 text-[#3E7BFA] text-[var(--font-label-small)] rounded-[var(--radius-pill)] border border-[#3E7BFA]/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => toggleExpand(work.id)}
                    className="inline-flex items-center gap-2 text-[var(--text-accent)] text-[var(--font-body-base)] font-medium hover:gap-3 transition-all duration-300 group/btn w-fit"
                  >
                    <span>View details</span>
                    <BsArrowRight className="group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </button>

                  <AnimatePresence>
                    {expandedId === work.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden mt-4"
                      >
                        <p className="text-[var(--color-text-secondary)] text-[var(--font-body-regular)] leading-relaxed pt-[var(--spacing-md)] border-t border-[#3E7BFA]/20">
                          {work.fullDesc}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
