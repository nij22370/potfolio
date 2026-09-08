"use client";
import React, { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

// Real computable stats based on the data provided
const statsData = [
  { label: "Projects Shipped", value: 5 }, // 5 personal projects
  { label: "Core Technologies", value: 16 }, // Count from skills: Next.js, React, TypeScript, JavaScript, Redux Toolkit, TanStack Query, Zustand, Tailwind CSS, Shadcn UI, Framer Motion, React Hook Form, Zod, Flask, Python, MongoDB, MySQL
  { label: "Internships Completed", value: 2 }, // Nepware + TechYatra Labs
  { label: "Years Building", value: 4 } // B.Sc. CSIT 2021-2025 + work in 2026 = ~4 years
];

const StatCounter = ({ value, label }: { value: number; label: string }) => {
  const [displayCount, setDisplayCount] = useState(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 1500;
      const incrementTime = duration / end;

      const timer = setInterval(() => {
        start += 1;
        setDisplayCount(start);
        if (start >= end) {
          clearInterval(timer);
        }
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <div ref={ref} className="text-center">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <span className="text-[var(--font-heading-xl)] font-bold text-[var(--text-heading)] leading-none">
          {displayCount}
        </span>
      </motion.div>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        className="text-[var(--text-accent)] text-[var(--font-body-base)] mt-[var(--spacing-sm)]"
      >
        {label}
      </motion.p>
    </div>
  );
};

export default function Stats() {
  return (
    <section className="py-24 bg-[var(--color-canvas)] border-y border-[#3E7BFA]/10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-[var(--spacing-md)]">
          {statsData.map((stat, index) => (
            <StatCounter key={index} value={stat.value} label={stat.label} />
          ))}
        </div>
      </div>
    </section>
  );
}
