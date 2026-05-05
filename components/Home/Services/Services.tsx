import React, { useEffect } from "react";
import ServicesCard from "./ServicesCard";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Services = () => {
  useEffect(() => {
    AOS.refresh();
  }, []);

  const services = [
    {
      icon: "/images/s1.png",
      name: "Frontend Architecture",
      description: "Designing scalable, maintainable web applications using Next.js and React best practices.",
      delay: 0
    },
    {
      icon: "/images/s2.png",
      name: "Complex UI Systems",
      description: "Developing intricate user interfaces with complex state management and real-time updates.",
      delay: 100
    },
    {
      icon: "/images/s3.png",
      name: "API & Auth Integration",
      description: "Seamless integration of RESTful APIs, JWT authentication, and secure data handling.",
      delay: 200
    },
    {
      icon: "/images/s4.png",
      name: "Performance & SEO",
      description: "Optimizing web products for maximum speed, accessibility, and search engine visibility.",
      delay: 300
    }
  ];

  return (
    <section id="services" className="py-20 lg:py-32 bg-gradient-to-b from-[#0d0d1f] to-[#1a1a2e] relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute w-64 h-64 bg-indigo-500 rounded-full -top-32 -left-32 mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute w-64 h-64 bg-purple-500 rounded-full -bottom-24 -right-24 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div 
          className="text-center mb-20"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-once="true"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Services</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Delivering exceptional digital experiences through innovative solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay={service.delay}
              data-aos-once="true"
              data-aos-anchor-placement="top-center"
              className="transform transition-all duration-500 hover:scale-105"
            >
              <ServicesCard
                icon={service.icon}
                name={service.name}
                description={service.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
