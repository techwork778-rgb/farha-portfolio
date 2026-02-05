"use client";
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-[#FAF7F2] via-[#F3EBDD] to-[#E8DFC9] border-t border-[#E8D9A8]/40 py-16">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center text-center space-y-8">
          
          {/* Identity Section */}
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-[#2C2620] tracking-tight">
              Farha N <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#C6A75E] via-[#E8D9A8] to-[#B8963D]">Mirza</span>
            </h2>
            <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#BFA76A]">
              Luxury Real Estate Advisor
            </p>
          </div>

          {/* Contact Row */}
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-sm font-medium text-[#5C584D]">
            <a 
              href="tel:+971503466464" 
              className="hover:text-[#C6A75E] transition-colors duration-300 flex items-center gap-2"
            >
              +971 50 346 6464
            </a>
            
            <span className="hidden md:block w-1 h-1 rounded-full bg-[#E8D9A8]" aria-hidden="true" />
            
            <a 
              href="mailto:farha@deenpropertiesuae.com" 
              className="hover:text-[#C6A75E] transition-colors duration-300 flex items-center gap-2"
            >
              farha@deenpropertiesuae.com
            </a>
          </div>

          {/* Divider */}
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#E8D9A8] to-transparent" />

          {/* Copyright */}
          <div className="text-[#A39E8F] text-xs font-light tracking-wide">
            <p>© {currentYear} Farha N Mirza. All rights reserved.</p>
          </div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;