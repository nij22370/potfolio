import React from "react";

const Footer = () => {
  return (
    <footer
      className="py-10 text-center text-[var(--color-text-secondary)] bg-[var(--color-canvas)] border-t border-[#3E7BFA]/10 relative z-10"
    >
      <div className="max-w-4xl mx-auto px-6">
        <p className="text-[16px] font-medium">
          &copy; {new Date().getFullYear()} <span className="text-[var(--color-text-primary)]">Sandesh Dhakal</span>. Built with Next.js, React & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
