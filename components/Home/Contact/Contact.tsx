"use client";
import React from "react";
import { BiEnvelope, BiMap } from "react-icons/bi";
import {
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";
import { ContactForm } from "./ContactForm";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-[var(--color-canvas)]">
      <div className="max-w-6xl mx-auto px-6">
         <div className="mb-[var(--spacing-7xl)]">
          <p className="text-[var(--font-label-small)] font-medium text-[var(--text-accent)] tracking-widest uppercase mb-[var(--spacing-md)]">
            Contact
          </p>
          <h2 className="text-[var(--font-heading-lg)] text-[var(--text-heading)]">
            Get in Touch
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[var(--spacing-5xl)] items-start">
          {/* Left Side */}
          <div
            className="space-y-[var(--spacing-2xl)]"
          >
             <div>
               <h3 className="text-[var(--text-heading)] text-[var(--font-heading-md)] font-medium mb-[var(--spacing-md)]">
                 Let&apos;s work together
               </h3>
               <p className="text-[var(--text-body)] text-[var(--font-body-regular)] leading-relaxed">
                 I&apos;m currently available for freelance work and full-time opportunities. If you have a project in mind or just want to chat, feel free to reach out.
               </p>
            </div>

            <div className="space-y-[var(--spacing-md)]">
              <div className="flex items-center gap-[var(--spacing-md)]">
                <BiEnvelope className="w-6 h-6 text-[var(--text-accent)]" />
                <a
                  href="mailto:sandeshd531@gmail.com"
                  className="text-[var(--text-accent)] text-[var(--font-body-base)] hover:text-[var(--text-heading)] transition-colors"
                >
                  sandeshd531@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-[var(--spacing-md)]">
                <BiMap className="w-6 h-6 text-[var(--text-accent)]" />
                <span className="text-[var(--text-body)] text-[var(--font-body-base)]">
                  Lalitpur, Nepal
                </span>
              </div>
            </div>

            <div className="flex gap-[var(--spacing-md)] pt-[var(--spacing-md)]">
              <a
                href="https://github.com/nij22370"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-[var(--color-surface)] border border-[#3E7BFA]/20 rounded-[var(--radius-pill)] flex items-center justify-center hover:bg-[#3E7BFA]/10 hover:border-[#3E7BFA]/40 transition-all duration-300"
              >
                <FaGithub className="text-[var(--text-heading)] text-xl" />
              </a>
              <a
                href="https://www.linkedin.com/in/sandesh-dhakal-432420365"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-[var(--color-surface)] border border-[#3E7BFA]/20 rounded-[var(--radius-pill)] flex items-center justify-center hover:bg-[#3E7BFA]/10 hover:border-[#3E7BFA]/40 transition-all duration-300"
              >
                <FaLinkedinIn className="text-[var(--text-heading)] text-xl" />
              </a>
            </div>
          </div>

          {/* Right Side - Form */}
          <div
            className="bg-[var(--color-surface)] border border-[#3E7BFA]/20 p-[var(--spacing-2xl)] rounded-[var(--radius-3xl)]"
          >
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
