"use client";
import React, { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

// Real computable stats based on the data provided
const statsData = [
  { label: "Projects Shipped", value: 6 },
  { label: "Core Technologies", value: 14 },
  { label: "Internships Completed", value: 3 },
  { label: "Years Building", value: 2 },
];

const StatCounter = ({ value, label }: { value: number; label: string }) => {
  const [displayCount, setDisplayCount] = useState(0);
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

  useEffect(() => {
    if (!isInView) return;

    let animationFrame: number;
    const start = performance.now();
    const duration = 1500;

    const updateCount = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      setDisplayCount(Math.round(progress * value));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(updateCount);
      }
    };

    animationFrame = requestAnimationFrame(updateCount);
    return () => cancelAnimationFrame(animationFrame);
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
