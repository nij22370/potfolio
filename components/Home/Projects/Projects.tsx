"use client";
import React from "react";
import { motion } from "framer-motion";
import { BsArrowUpRight, BsGithub, BsBoxArrowUpRight } from "react-icons/bs";
import ProjectIllustration from "@/components/Helper/ProjectIllustration";

interface Project {
  id: number;
  title: string;
  shortDesc: string;
  tags: string[];
  github: string;
  live?: string;
  illustration: string;
  feature?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "ScanPay — Mart POS & Payment Gateway",
    shortDesc:
      "Full mart POS system with QR/barcode generation, camera-based scanner, split-payment flow (equal & custom splits), and Nepal multi-gateway support. Generates one QR per person, tracks confirmations, and auto-generates receipt when total paid equals bill.",
    feature:
      "One QR per person — tracks confirmations and auto-generates receipt when total paid = bill.",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn UI",
      "Zustand",
      "TanStack Query",
      "eSewa",
      "Khalti",
      "FonePay",
    ],
    github: "https://github.com/nij22370/scanpay",
    live: "https://scanpay-murex.vercel.app/",
    illustration: "dashboard",
  },
  {
    id: 2,
    title: "SwiftShip — Driver/Delivery Marketplace",
    shortDesc:
      "Solo-built full-stack delivery marketplace with role-based access (poster, driver, admin). Features real-time GPS tracking via Leaflet + OSRM, Pusher-powered live map and in-app chat, multi-step job posting with Zod validation, driver verification uploads, earnings dashboard, and Google OAuth + cookie-based JWT auth.",
    tags: [
      "Next.js",
      "TypeScript",
      "MongoDB",
      "Tailwind CSS",
      "Pusher",
      "Leaflet",
      "Redux Toolkit",
      "TanStack Query",
      "Zustand",
      "Auth.js",
    ],
    github: "https://github.com/nij22370/delivery",
    illustration: "architecture",
  },
  {
    id: 3,
    title: "Document/Barcode Scanner",
    shortDesc: "Decodes barcodes and PDF417, compiles PDF reports",
    tags: ["React", "FastAPI", "OpenCV"],
    github: "https://github.com/nij22370/Barcode",
    illustration: "barcode",
  },
  {
    id: 4,
    title: "SujhavMitra",
    shortDesc: "Recommendation API with JWT auth and modular endpoints",
    tags: ["Flask", "JWT", "MySQL"],
    github: "https://github.com/nij22370",
    illustration: "recommendation",
  },
  {
    id: 5,
    title: "Task Manager",
    shortDesc: "React + Vite app with Supabase auth and file uploads",
    tags: ["React", "Vite", "Supabase"],
    github: "https://github.com/nij22370/NextJS-Task-Manager",
    live: "https://next-js-task-manager-kappa.vercel.app/",
    illustration: "pipeline",
  },
  {
    id: 6,
    title: "This Portfolio",
    shortDesc: "Modern portfolio with Framer Motion animations",
    tags: ["Next.js", "React", "Framer Motion"],
    github: "https://github.com/nij22370/potfolio",
    illustration: "browser",
  },
  {
    id: 7,
    title: "AskAnthing — RAG Chatbot",
    shortDesc:
      "AI-powered chatbot using Retrieval-Augmented Generation. Indexes documents into Upstash Vector, retrieves relevant chunks at query time, and streams answers via Groq LLM.",
    tags: [
      "Next.js",
      "TypeScript",
      "Upstash Vector",
      "Upstash Redis",
      "Groq",
    ],
    github: "https://github.com/nij22370/askanthing",
    illustration: "browser",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-[var(--color-canvas)]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-14"
        >
          <p className="text-sm font-medium text-[var(--text-accent)] tracking-widest uppercase mb-3">
            Personal Projects
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-heading)] leading-tight">
            Things I&apos;ve Built
          </h2>
          <p className="mt-3 text-[var(--text-body)] max-w-xl">
            Unlike the case studies above, these were built on my own time and are
            public — the links go straight to the repos.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              whileHover={{ y: -6 }}
              className="group relative rounded-3xl overflow-hidden transition-all duration-300 bg-[var(--color-surface)] border border-[#3E7BFA]/20 hover:border-[#3E7BFA]/40"
            >
              {/* Hover glow border */}
              <div
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none border border-[#3E7BFA]/40"
              />

              {/* GitHub link icon top-right */}
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-[var(--color-surface)] border border-[#3E7BFA]/20 text-[var(--text-muted)] hover:text-[var(--text-accent)] hover:border-[#3E7BFA]/40 hover:bg-[#3E7BFA]/10 transition-all duration-300"
              >
                <BsArrowUpRight className="text-sm" />
              </a>

              {/* Illustration panel */}
              <div className="p-4 pb-0">
                <ProjectIllustration type={project.illustration} size="small" />
              </div>

              {/* Card content */}
              <div className="p-5 pt-4">
                <h3 className="text-[var(--text-heading)] text-lg font-semibold mb-1.5">
                  {project.title}
                </h3>
                <p className="text-[var(--text-body)] text-sm leading-relaxed mb-4">
                  {project.shortDesc}
                </p>

                {project.feature && (
                  <div className="mb-4 rounded-xl border border-[#3E7BFA]/20 bg-[#3E7BFA]/10 p-3 text-xs leading-relaxed text-[var(--text-accent)]">
                    <span className="font-semibold">Unique feature: </span>
                    {project.feature}
                  </div>
                )}

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 text-xs rounded-full border bg-[#3E7BFA]/10 text-[var(--text-accent)] border-[#3E7BFA]/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-3 pt-4 border-t border-[#3E7BFA]/12">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-[var(--text-muted)] hover:text-[var(--text-heading)] transition-colors duration-200 group/link"
                  >
                    <BsGithub className="text-sm" />
                    <span>GitHub</span>
                    <BsArrowUpRight className="text-xs opacity-0 group-hover/link:opacity-100 -translate-x-1 group-hover/link:translate-x-0 transition-all duration-200" />
                  </a>
                  {project.live && (
                    <>
                      <span className="text-[var(--color-text-tertiary)]/30">·</span>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-[var(--text-accent)] hover:text-[var(--text-heading)] transition-colors duration-200 group/live"
                      >
                        <BsBoxArrowUpRight className="text-sm" />
                        <span>Live Demo</span>
                        <BsArrowUpRight className="text-xs opacity-0 group-hover/live:opacity-100 -translate-x-1 group-hover/live:translate-x-0 transition-all duration-200" />
                      </a>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
