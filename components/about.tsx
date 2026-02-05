"use client";
import React, { useEffect, useState } from "react";
import { ShieldCheck, Zap, Users, Trophy, Award, Sparkles } from "lucide-react";

interface StatCardProps {
  label: string;
  value: number;
  suffix: string;
  icon: React.ReactNode;
}

const StatCard = ({ label, value, suffix, icon }: StatCardProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    if (start === end) return;

    let timer = setInterval(() => {
      start += Math.ceil(end / 50);
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 30);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <div className="group relative p-8 rounded-[2.5rem] bg-white border border-[#E8D9A8]/30 shadow-sm hover:shadow-xl hover:shadow-[#C6A75E]/5 transition-all duration-500">
      <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity text-[#C6A75E]">
        {icon}
      </div>
      <div className="relative z-10">
        <div className="text-4xl md:text-5xl font-bold tracking-tight text-[#2C2620] mb-2">
          {count}
          {suffix}
        </div>
        <p className="text-sm font-semibold uppercase tracking-widest text-[#A39E8F] group-hover:text-[#C6A75E] transition-colors">
          {label}
        </p>
      </div>
    </div>
  );
};

export default function AboutSection() {
  const features = [
    { icon: <ShieldCheck size={18} />, title: "Absolute Discretion" },
    { icon: <Zap size={18} />, title: "Market Intelligence" },
    { icon: <Sparkles size={18} />, title: "Bespoke Portfolios" },
    { icon: <Users size={18} />, title: "Client-Centric Philosophy" },
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-[#FAF7F2] via-[#F3EBDD] to-[#E8DFC9] overflow-hidden">
      {/* Background Consistency Elements */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-[#E8D9A8]/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto max-w-7xl px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* LEFT SIDE: Narrative */}
          <div className="lg:col-span-5 space-y-10">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF7F2] border border-[#E8D9A8]/40">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#BFA76A]">
                  The Advisor
                </span>
              </div>

              <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-[#2C2620] leading-[1.1]">
                A Legacy of <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C6A75E] via-[#E8D9A8] to-[#B8963D]">
                  Trust & Excellence
                </span>
              </h2>

              <p className="text-[#5C584D] leading-relaxed font-light">
                With over a decade of navigating Dubai&apos;s most complex
                high-value transactions, Farha N Mirza has become the silent
                force behind some of the region&apos;s most significant
                residential acquisitions. Her approach blends modern data
                analytics with old-world boutique service.
              </p>
            </div>

            {/* Feature Pills */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-4 rounded-2xl bg-white/50 border border-[#E8D9A8]/20 hover:border-[#C6A75E]/50 transition-colors group"
                >
                  <div className="text-[#C6A75E] group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <span className="text-sm font-semibold text-[#4A463B]">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE: Stats Grid */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative">
              {/* Decorative floating element */}
              <div className="absolute -top-12 -right-12 w-64 h-64 bg-[#E8D9A8]/30 rounded-full blur-3xl -z-10" />

              <div className="space-y-6 pt-12">
                <StatCard
                  label="Properties Sold"
                  value={500}
                  suffix="+"
                  icon={<Trophy size={48} />}
                />
                <StatCard
                  label="Premium Listings"
                  value={100}
                  suffix="+"
                  icon={<Award size={48} />}
                />
              </div>

              <div className="space-y-6">
                <StatCard
                  label="Years Experience"
                  value={12}
                  suffix="+"
                  icon={<Sparkles size={48} />}
                />
                <StatCard
                  label="Happy Clients"
                  value={1000}
                  suffix="+"
                  icon={<Users size={48} />}
                />
              </div>

              {/* Bottom Decorative CTA Card */}
              <div className="sm:col-span-2 mt-6 p-8 rounded-[2.5rem] bg-gradient-to-r from-[#2C2620] to-[#3A332B] text-white flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden relative group">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5" />

                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-1 text-[#F3EBDD]">
                    Ready to find your masterpiece?
                  </h3>
                  <p className="text-[#A39E8F] text-sm font-light">
                    Join our exclusive network of global investors.
                  </p>
                </div>

                <a
                  href="https://wa.me/971503466464?text=Hi%20I%20want%20to%20start%20a%20conversation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative z-10"
                >
                  <button className="px-8 py-3 bg-[#C6A75E] text-white font-bold rounded-xl hover:bg-[#E8D9A8] hover:text-[#2C2620] transition-all duration-300 transform group-hover:translate-x-1 shadow-lg shadow-black/20">
                    Start Conversation
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export { AboutSection as About };