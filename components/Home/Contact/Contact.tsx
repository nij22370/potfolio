import React from "react";
import { BiEnvelope, BiMap, BiPhone } from "react-icons/bi";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-[#0f0f2e]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Side */}
          <div className="space-y-10">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                Schedule a call with <br />
                me to see if I can help
              </h1>
              <p className="text-gray-400 text-lg mt-6">
                Reach out to me today and let's discuss how I can help you
                achieve your goals.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-5">
                <BiPhone className="w-8 h-8 text-cyan-400" />
                <span className="text-gray-300 text-xl">+977-9825360845</span>
              </div>
              <div className="flex items-center gap-5">
                <BiEnvelope className="w-8 h-8 text-cyan-400" />
                <span className="text-gray-300 text-xl">
                  sandeshd531@gmail.com
                </span>
              </div>
              <div className="flex items-center gap-5">
                <BiMap className="w-8 h-8 text-cyan-400" />
                <span className="text-gray-300 text-xl">
                  Khandbari-9, Sankhuwasava
                </span>
              </div>
            </div>

            <div className="flex gap-4 pt-8">
              <a
                href="#"
                className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center hover:bg-blue-600 transition-all duration-300"
              >
                <FaFacebook className="text-white text-2xl" />
              </a>
              <a
                href="https://github.com/nij22370"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center hover:bg-gray-700 transition-all duration-300"
              >
                <FaGithub className="text-white text-2xl" />
              </a>
              <a
                href="https://www.linkedin.com/in/sandesh-dhakal-432420365"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center hover:bg-blue-600 transition-all duration-300"
              >
                <FaLinkedinIn className="text-white text-2xl" />
              </a>
              <a
                href="https://www.instagram.com/sandesh_dhkal/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center hover:bg-pink-600 transition-all duration-300"
              >
                <FaInstagram className="text-white text-2xl" />
              </a>
            </div>
          </div>

          {/* Right Side - Form */}
          <div
            data-aos="zoom-in"
            className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-3xl shadow-2xl"
          >
            <form className="space-y-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition"
              />
              <input
                type="tel"
                placeholder="Mobile Number"
                className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition"
              />
              <textarea
                placeholder="Your Message"
                rows={5}
                className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition resize-none"
              />

              {/* Replaced bg-gradient-to-r with a solid + animated background */}
              <button
                type="submit"
                className="w-full py-4 bg-cyan-500 hover:bg-cyan-400 text-white font-bold rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/50"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
