"use client";
import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    name: "Frontend Architecture",
    description: "Designing scalable, maintainable web applications using Next.js and React best practices."
  },
  {
    name: "Complex UI Systems",
    description: "Developing intricate user interfaces with complex state management and real-time updates."
  },
  {
    name: "API & Auth Integration",
    description: "Seamless integration of RESTful APIs, JWT authentication, and secure data handling."
  },
  {
    name: "Performance & SEO",
    description: "Optimizing web products for maximum speed, accessibility, and search engine visibility."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-[var(--color-canvas)]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-[var(--spacing-7xl)]"
        >
          <p className="text-[var(--font-label-small)] font-medium text-[var(--text-accent)] tracking-widest uppercase mb-[var(--spacing-md)]">
            What I Do
          </p>
          <h2 className="text-[var(--font-heading-lg)] text-[var(--text-heading)]">
            Services
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[var(--spacing-md)]">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              whileHover={{ y: -6 }}
          className="group relative rounded-[var(--radius-3xl)] p-[var(--spacing-xl)] transition-all duration-300 bg-[var(--color-surface)] border border-[#3E7BFA]/20 hover:border-[#3E7BFA]/40"
            >
              {/* Hover accent glow */}
              <div className="absolute inset-0 rounded-[var(--radius-3xl)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none border border-[#3E7BFA]/40" />

              <h3 className="text-[var(--text-heading)] text-[var(--font-heading-md)] font-medium mb-[var(--spacing-sm)]">
                {service.name}
              </h3>
              <p className="text-[var(--text-body)] text-[var(--font-body-regular)] leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
