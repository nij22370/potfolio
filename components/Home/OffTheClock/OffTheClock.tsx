"use client";
import React from "react";
import { motion } from "framer-motion";
import { BiFootball, BiTrophy, BiMusic, BiMap } from "react-icons/bi";

const interests = [
  {
    icon: BiFootball,
    title: "Football",
    description: "Passionate supporter of Lionel Messi and following his legendary career."
  },
  {
    icon: BiTrophy,
    title: "Cricket & UFC",
    description: "Keenly follows IPL cricket matches and Ultimate Fighting Championship events."
  },
  {
    icon: BiMusic,
    title: "Music",
    description: "Enjoys exploring various music genres and discovering new artists."
  },
  {
    icon: BiMap,
    title: "Travel",
    description: "Loves exploring new destinations and experiencing different cultures."
  }
];

export default function OffTheClock() {
  return (
    <section id="off-the-clock" className="py-24 bg-[var(--color-canvas)]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center text-[var(--font-label-small)] uppercase text-[var(--text-heading)] mb-[var(--spacing-5xl)] tracking-[2.8px]"
        >
          Clocked Out
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[var(--spacing-md)]">
          {interests.map((interest, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              className="flex flex-col items-center p-[var(--spacing-2xl)] rounded-[var(--radius-3xl)] transition-all duration-300 hover:-translate-y-1 bg-[var(--color-surface)] border border-[#3E7BFA]/20"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: [0, 1.1, 1] }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: index * 0.1 + 0.2, ease: "easeOut" }}
                className="text-[var(--font-heading-xl)] text-[var(--text-accent)] mb-[var(--spacing-md)]"
              >
                <interest.icon />
              </motion.div>
              <h3 className="text-[var(--text-heading)] text-[var(--font-heading-md)] font-semibold mb-[var(--spacing-sm)] text-center">
                {interest.title}
              </h3>
              <p className="text-[var(--text-body)] text-[var(--font-body-regular)] text-center leading-relaxed">
                {interest.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
