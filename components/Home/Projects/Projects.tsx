import React from "react";
import Image from "next/image";
export default function Projects() {
  return (
    <div id="projects" className="pt-16 pb-16 bg-[#050709]">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-center text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-16">
          A small selection of recent <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">projects</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mt-16">
        {/*first project */}
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-delay="0"
          className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-cyan-500/50 transition-all duration-300"
        >
          <div className="relative overflow-hidden rounded-xl">
            <Image
              src="/images/image1.png"
              alt="Motorcycle Inventory System"
              width={1000}
              height={800}
              className="rounded-xl transform hover:scale-110 transition-transform duration-500"
            />
          </div>
          <h1 className="mt-6 text-2xl font-bold text-white">
            Motorcycle Inventory System
          </h1>
          <div className="flex flex-wrap gap-2 mt-4">
            {["Next.js 14", "TypeScript", "Redux Toolkit", "MongoDB"].map((tech) => (
              <span key={tech} className="px-3 py-1 bg-cyan-500/10 text-cyan-400 text-xs rounded-full border border-cyan-500/20">
                {tech}
              </span>
            ))}
          </div>
          <p className="mt-4 text-gray-400 text-sm leading-relaxed">
            Full-stack inventory platform with purchase order flows, real-time notifications, and JWT authentication.
          </p>
        </div>

        {/*Second project */}
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-delay="100"
          className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-cyan-500/50 transition-all duration-300"
        >
          <div className="relative overflow-hidden rounded-xl">
            <Image
              src="/images/image4.png"
              alt="Barcode Scanner"
              width={800}
              height={650}
              className="rounded-xl transform hover:scale-110 transition-transform duration-500"
            />
          </div>
          <h1 className="mt-6 text-2xl font-bold text-white">
            Multipurpose Document Scanner
          </h1>
          <div className="flex flex-wrap gap-2 mt-4">
            {["React.js", "FastAPI", "OpenCV", "Python"].map((tech) => (
              <span key={tech} className="px-3 py-1 bg-purple-500/10 text-purple-400 text-xs rounded-full border border-purple-500/20">
                {tech}
              </span>
            ))}
          </div>
          <p className="mt-4 text-gray-400 text-sm leading-relaxed">
            Decodes barcodes, PDF417 codes, and compiles secure PDF reports from uploaded images.
          </p>
        </div>

        {/*Third project */}
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-delay="200"
          className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-cyan-500/50 transition-all duration-300"
        >
          <div className="relative overflow-hidden rounded-xl">
            <Image
              src="/images/image3.png"
              alt="Recommendation API"
              width={800}
              height={500}
              className="rounded-xl transform hover:scale-110 transition-transform duration-500"
            />
          </div>
          <h1 className="mt-6 text-2xl font-bold text-white">
            SujhavMitra - Recommendation API
          </h1>
          <div className="flex flex-wrap gap-2 mt-4">
            {["Flask", "JWT", "MySQL", "Postman"].map((tech) => (
              <span key={tech} className="px-3 py-1 bg-orange-500/10 text-orange-400 text-xs rounded-full border border-orange-500/20">
                {tech}
              </span>
            ))}
          </div>
          <p className="mt-4 text-gray-400 text-sm leading-relaxed">
            Backend API with JWT auth, password hashing, and modular REST endpoints for content retrieval.
          </p>
        </div>

        {/*4th project */}
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-delay="300"
          className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-cyan-500/50 transition-all duration-300"
        >
          <div className="relative overflow-hidden rounded-xl">
            <Image
              src="/images/image2.png"
              alt="Personal Portfolio"
              width={800}
              height={800}
              className="rounded-xl transform hover:scale-110 transition-transform duration-500"
            />
          </div>
          <h1 className="mt-6 text-2xl font-bold text-white">
            Modern Developer Portfolio
          </h1>
          <div className="flex flex-wrap gap-2 mt-4">
            {["Next.js 16", "React 19", "Tailwind 4", "AOS"].map((tech) => (
              <span key={tech} className="px-3 py-1 bg-green-500/10 text-green-400 text-xs rounded-full border border-green-500/20">
                {tech}
              </span>
            ))}
          </div>
          <p className="mt-4 text-gray-400 text-sm leading-relaxed">
            This very portfolio! Showcasing advanced animations, particle effects, and high-fidelity UI/UX.
          </p>
        </div>
      </div>
    </div>
    </div>
  );
}
