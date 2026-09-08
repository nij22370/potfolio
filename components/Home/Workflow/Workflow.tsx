"use client";
import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "@/components/Helper/ThemeProvider";

const workflowSteps = [
  { label: "Design", sublabel: "Figma" },
  { label: "Component", sublabel: "React/TS" },
  { label: "State", sublabel: "Redux/TanStack" },
  { label: "API", sublabel: "Integration" },
  { label: "Deploy", sublabel: "Vercel/CI" },
];

export default function Workflow() {
  const { theme } = useTheme();

  return (
    <section className="py-24 bg-[var(--color-canvas)]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-14 text-center"
        >
          <p className="text-[var(--font-label-small)] font-medium text-[var(--text-accent)] tracking-widest uppercase mb-[var(--spacing-md)]">
            How I Build
          </p>
          <h2 
            className="text-[var(--font-heading-xl)] md:text-[var(--font-heading-lg)] font-bold"
            style={{ color: theme === 'dark' ? '#f8fafc' : '#0f172a' }}
          >
            My Workflow
          </h2>
        </motion.div>

        {/* Architecture-style pipeline diagram */}
        <div className="relative overflow-x-auto pb-4">
          <div className="flex items-center min-w-max mx-auto px-4"
            style={{ width: "fit-content", margin: "0 auto" }}>
            {workflowSteps.map((step, index) => (
              <React.Fragment key={index}>
                {/* Node */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
                  className="flex flex-col items-center"
                >
                  {/* Nested ring design matching reference Image 3 */}
                  <div className="relative w-24 h-24 flex items-center justify-center">
                    {/* Outer glow ring */}
                    <motion.div
                      className="absolute inset-0 rounded-[var(--radius-pill)]"
                      style={{
                        border: "1.5px solid rgba(62,123,250,0.35)",
                        boxShadow: "0 0 12px rgba(62,123,250,0.25), inset 0 0 12px rgba(62,123,250,0.1)",
                      }}
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: index * 0.4 }}
                    />
                    {/* Inner ring */}
                    <div
                      className="w-16 h-16 rounded-[var(--radius-pill)] flex items-center justify-center"
                      style={{
                        border: "1.5px solid rgba(62,123,250,0.6)",
                        background: "rgba(62,123,250,0.12)",
                        boxShadow: "0 0 18px rgba(62,123,250,0.35)",
                      }}
                    >
                      {/* Center label */}
                      <span
                        className="text-[var(--font-label-medium)] font-bold text-center leading-tight px-1 text-[var(--text-accent)]"
                      >
                        {step.label}
                      </span>
                    </div>

                    {/* Active pulse for first node */}
                    {index === 0 && (
                      <motion.div
                        className="absolute inset-0 rounded-[var(--radius-pill)]"
                        style={{ border: "1.5px solid rgba(34,211,238,0.6)" }}
                        animate={{ scale: [1, 1.25, 1], opacity: [0.8, 0, 0.8] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                      />
                    )}
                  </div>

                  {/* Sub-label */}
                  <p
                    className="text-[var(--font-label-small)] mt-[var(--spacing-md)] text-center text-[var(--text-muted)]"
                    style={{ maxWidth: "80px" }}
                  >
                    {step.sublabel}
                  </p>
                </motion.div>

                {/* Connector with travelling dot */}
                {index < workflowSteps.length - 1 && (
                  <div className="relative flex-shrink-0 mx-[var(--spacing-2xl)]" style={{ width: "60px", height: "2px" }}>
                    {/* Static line */}
                    <motion.div
                      className="w-full h-full"
                      style={{ background: "rgba(62,123,250,0.2)" }}
                      initial={{ width: 0 }}
                      whileInView={{ width: "60px" }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.8, delay: index * 0.15 + 0.3, ease: "easeOut" }}
                    />
                    {/* Dash overlay */}
                    <motion.div
                      className="absolute top-0 left-0 w-full h-full"
                      style={{
                        background: "repeating-linear-gradient(90deg, rgba(62,123,250,0.5) 0px, rgba(62,123,250,0.5) 6px, transparent 6px, transparent 12px)",
                      }}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.5, delay: index * 0.15 + 0.5, ease: "easeOut" }}
                      animate={{ backgroundPositionX: ["0px", "12px"] }}
                    />
                    {/* Travelling dot */}
                    <motion.div
                      className="absolute top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full"
                      style={{
                        background: "#3E7BFA",
                        boxShadow: "0 0 8px rgba(62,123,250,0.9)",
                      }}
                      animate={{ left: ["-5px", "65px"], opacity: [0, 1, 0] }}
                      transition={{
                        duration: 1.8,
                        delay: index * 0.5,
                        repeat: Infinity,
                        repeatDelay: 2,
                        ease: "easeInOut",
                      }}
                    />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
