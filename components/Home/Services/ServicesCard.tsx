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
      className={`relative p-8 rounded-[var(--radius-2xl)] bg-[var(--color-surface)] 
        border border-[#3E7BFA]/20 overflow-hidden transition-all duration-500 h-full 
        hover:shadow-[0_0_30px_rgba(62,123,250,0.2)] hover:-translate-y-2 hover:border-[#3E7BFA]/50
        ${isHovered ? 'bg-opacity-90' : 'bg-opacity-80'}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      role="article"
      aria-label={`Service: ${name}`}
    >
      {/* Animated background */}
      <div
        className={`absolute inset-0 bg-gradient-to-br from-[#3E7BFA]/10 to-[#3E7BFA]/20
          transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
        aria-hidden="true"
      />
      
      {/* Content */}
      <div className="relative z-10 h-full flex flex-col">
        <div
          className={`w-16 h-16 flex items-center justify-center rounded-[var(--radius-xl)] mb-[var(--spacing-md)] transition-all duration-500 ${
            isHovered
              ? 'bg-gradient-to-r from-[#3E7BFA] to-[#6095FF] shadow-lg shadow-[#3E7BFA]/30'
              : 'bg-[var(--color-surface-hover)] border border-[#3E7BFA]/20'
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
        
        <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-4 group-hover:text-[#3E7BFA] 
          transition-colors duration-300">
          {name}
        </h3>
        
        <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed mb-6 flex-grow">
          {description}
        </p>
        
        {/* Animated read more link */}
        <div 
          className="mt-auto flex items-center text-[#3E7BFA] group-hover:text-[#6095FF] 
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
