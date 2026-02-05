"use client";
import React from "react";
import Image from "next/image";
import {
  Phone,
  MessageCircle,
  Instagram,
  Linkedin,
  Globe,
  Mail,
  ArrowUpRight,
} from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] w-full flex items-center justify-center bg-[#FAF7F2] px-6 py-20 overflow-hidden">
      {/* 2026 Luxury Background Elements - Warm Champagne Theme */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#F3EBDD]/60 to-[#FAF7F2]/30 blur-3xl" />
        <div className="absolute bottom-[-5%] left-[-2%] w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-[#E8D9A8]/20 to-[#FAF7F2]/50 blur-3xl" />
      </div>

      <div className="container mx-auto max-w-7xl relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* CONTENT COLUMN - Asymmetric Layout */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="relative z-10 space-y-8">
              {/* Ultra-Modern Badge */}
              <div className="inline-flex items-center gap-3 px-3 py-1 rounded-full bg-white/90 border border-[#E8D9A8]/40 shadow-sm backdrop-blur-md">
                <span className="flex h-2 w-2 rounded-full bg-[#C6A75E] animate-pulse" />
                <span className="text-[11px] font-semibold uppercase tracking-widest text-[#BFA76A]">
                  Luxury Real Estate Advisor
                </span>
              </div>

              {/* Typography with Dubai aesthetics */}
              <div className="space-y-4">
                <h1 className="text-6xl md:text-8xl font-bold tracking-tight leading-[0.9] bg-gradient-to-r from-[#C6A75E] via-[#E8D9A8] to-[#B8963D] bg-clip-text text-transparent">
                  Farha N <br />
                  <span>
                    Mirza
                  </span>
                </h1>
                <p className="text-xl md:text-2xl font-medium text-[#C6A75E] italic">
                  Luxury Real Estate Advisor
                </p>
              </div>

              <p className="max-w-xl text-lg text-[#8F8A7A] leading-relaxed font-light">
                Redefining the luxury real estate experience in Dubai. From
                penthouse acquisitions to waterfront estates, we bridge the gap
                between visionary architecture and discerning ownership.
              </p>

              {/* Modern Glass CTA Row */}
              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href="tel:+971503466464"
                  className="group relative flex items-center gap-2 bg-[#1A1814] text-white px-8 py-4 rounded-2xl overflow-hidden transition-all hover:scale-[1.02] active:scale-95"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#C6A75E] to-[#B8963D] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <Phone size={18} className="relative z-10" />
                  <span className="relative z-10 font-medium">Call Now</span>
                </a>

                <a
                  href="https://wa.me/971503466464"
                  className="flex items-center gap-2 bg-white border border-[#E8D9A8]/50 px-8 py-4 rounded-2xl text-[#5C584D] font-medium hover:bg-[#FDFCFB] hover:shadow-xl hover:shadow-[#C6A75E]/10 transition-all"
                >
                  <MessageCircle size={18} className="text-[#C6A75E]" />
                  <span>Direct Message</span>
                  <ArrowUpRight size={14} className="opacity-40" />
                </a>
              </div>

              {/* Tech-Style Contact Row */}
              <div className="pt-8 flex flex-wrap gap-x-12 gap-y-4 border-t border-[#E8D9A8]/40">
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] uppercase tracking-tighter text-[#BFA76A] font-bold">
                    Email Inquiries
                  </span>
                  <a
                    href="mailto:farha@deenpropertiesuae.com"
                    className="text-sm font-medium text-[#4A463B] hover:text-[#C6A75E] transition-colors"
                  >
                    farha@deenpropertiesuae.com
                  </a>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] uppercase tracking-tighter text-[#BFA76A] font-bold">
                    Connect
                  </span>

                  <div className="flex gap-4">
                    <a
                      href="https://www.instagram.com/aliya_adean?igsh=MTUybXczOGRzMXNzdg=="
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Instagram
                        size={18}
                        className="text-[#A39E8F] hover:text-[#C6A75E] cursor-pointer transition-colors"
                      />
                    </a>

                    <a
                      href="https://www.linkedin.com/in/farha-n-162477114"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin
                        size={18}
                        className="text-[#A39E8F] hover:text-[#C6A75E] cursor-pointer transition-colors"
                      />
                    </a>

                    <a
                      href="https://deenpropertiesuae.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Globe
                        size={18}
                        className="text-[#A39E8F] hover:text-[#C6A75E] cursor-pointer transition-colors"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* IMAGE COLUMN - Floating Card Aesthetic */}
          <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[480px]">
              {/* Layered Glass Panels */}
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-[#E8D9A8]/20 rounded-3xl -z-10 animate-bounce-slow" />
              <div className="absolute -bottom-10 -right-6 w-48 h-48 bg-[#C6A75E]/10 rounded-[4rem] -z-10 blur-2xl" />

              {/* Main Portrait Card */}
              <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-[0_32px_64px_-16px_rgba(198,167,94,0.15)] border-[8px] border-white group">
                <Image
                  src="/farha.jpg"
                  alt="farha AB Mirza"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-10px) rotate(5deg);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-bounce-slow {
          animation: bounce-slow 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
export { HeroSection as Hero };