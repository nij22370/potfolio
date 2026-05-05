import React from "react";

const Footer = () => {
  return (
    <footer
      className="py-10 text-center text-gray-400 bg-[#050709] border-t border-white/5 relative z-10"
    >
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-lg font-medium">
          &copy; {new Date().getFullYear()} <span className="text-white">Sandesh Dhakal</span>. All rights reserved.
        </p>
        <p className="text-sm mt-2 text-gray-500">
          Built with Next.js, React & Tailwind CSS
        </p>
      </div>
    </footer>
  );
};

export default Footer;
