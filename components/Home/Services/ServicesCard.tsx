"use client";
import React, { useState, useCallback } from "react";
import Image from "next/image";

type ServiceCardProps = {
  icon: string;
  name: string;
  description: string;
};

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  icon, 
  name, 
  description 
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
  }, []);

  return (
    <div 
      className={`relative p-8 rounded-2xl bg-[#1a1a2e]/80 group
        border border-gray-800 overflow-hidden transition-all duration-500 h-full 
        hover:shadow-[0_0_30px_rgba(99,102,241,0.2)] hover:-translate-y-2 hover:border-indigo-500/50
        hover:bg-[#1a1a2e]/90`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      role="article"
      aria-label={`Service: ${name}`}
    >
      {/* Animated background */}
      <div 
        className={`absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 
          transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
        aria-hidden="true"
      />
      
      {/* Content */}
      <div className="relative z-10 h-full flex flex-col">
        <div 
          className={`w-16 h-16 flex items-center justify-center rounded-xl mb-6 transition-all duration-500 ${
            isHovered 
              ? 'bg-gradient-to-r from-indigo-500 to-purple-600 shadow-lg shadow-indigo-500/30'
              : 'bg-gray-800/50 border border-gray-700/50'
          }`}
        >
          <Image 
            src={icon} 
            alt="" 
            width={32} 
            height={32}
            className={`transition-transform duration-500 ${
              isHovered ? 'scale-110' : 'scale-100'
            }`}
            aria-hidden="true"
          />
        </div>
        
        <h3 className="text-xl font-bold text-white mb-4 group-hover:text-white 
          transition-colors duration-300">
          {name}
        </h3>
        
        <p className="text-gray-300 text-sm leading-relaxed mb-6 flex-grow">
          {description}
        </p>
        
        {/* Animated read more link */}
        <div 
          className="mt-auto flex items-center text-indigo-400 group-hover:text-indigo-300 
            transition-colors duration-300"
          aria-hidden="true"
        >
          <span className="text-sm font-medium mr-2">Learn more</span>
          <svg 
            className={`w-4 h-4 transition-transform duration-300 ${
              isHovered ? 'translate-x-1' : ''
            }`} 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M14 5l7 7m0 0l-7 7m7-7H3" 
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default React.memo(ServiceCard);
