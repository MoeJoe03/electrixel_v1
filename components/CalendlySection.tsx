"use client";

import { motion } from "motion/react";
import ProceduralGroundBackground from "@/components/ui/procedural-ground-background";

export default function CalendlySection() {
  return (
    <section className="py-24 md:py-32 px-4 sm:px-6 md:px-12 lg:px-24 w-full flex flex-col items-center">
      <div className="w-full max-w-[1200px] xl:h-[650px] mx-auto rounded-[2rem] sm:rounded-[3rem] px-4 py-10 sm:p-12 xl:p-16 flex flex-col xl:flex-row relative overflow-hidden shadow-2xl mb-12">
        <ProceduralGroundBackground />
        
        {/* Background decorative gradient */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-white/10 rounded-full blur-[80px]"></div>
        </div>

        {/* Left content */}
        <div className="flex-1 flex flex-col justify-between z-10 xl:pr-12 text-white sm:px-0 px-2">
          <div>
            {/* Logo / Brand Name */}
            <div className="font-bold text-2xl tracking-tighter mb-16 sm:mb-24 flex items-center gap-1.5">
              Electrixel
            </div>

            <motion.h2
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-[42px] sm:text-6xl md:text-7xl lg:text-[79px] font-bold leading-[1.05] tracking-tight mb-6 sm:mb-8"
            >
              We make design
              <br />
              work{" "}
              <span className="font-[family-name:var(--font-instrument)] italic font-normal text-white/95">
                easier for you.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="text-[#f1f1f1] text-[22px] mb-8 sm:mb-12 font-medium"
            >
              Book a quick call to see how we work.
            </motion.p>

            <button className="w-[140px] h-[48px] flex items-center justify-center bg-white text-[#1B263B] rounded-xl font-bold text-[16px] hover:bg-slate-100 transition-colors shadow-lg">
              Book Now
            </button>
          </div>

          <div className="flex gap-3 sm:gap-4 mt-20 xl:mt-12">
            <button className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl border border-white/40 flex items-center justify-center hover:bg-white/10 transition-colors">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="sm:w-6 sm:h-6"
              >
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
              </svg>
            </button>
            <button className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl border border-white/40 flex items-center justify-center hover:bg-white/10 transition-colors">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="sm:w-6 sm:h-6"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </button>
            <button className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl border border-white/40 flex items-center justify-center hover:bg-white/10 transition-colors">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="sm:w-6 sm:h-6"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Right Calendly Widget */}
        <div className="w-full sm:mx-0 xl:w-[450px] 2xl:w-[500px] mt-12 sm:mt-16 xl:mt-0 xl:-my-16 xl:-mr-16 z-10 rounded-2xl sm:rounded-3xl xl:rounded-none xl:rounded-r-[3rem] overflow-hidden shadow-2xl h-[650px] sm:h-[650px] xl:h-[650px] relative xl:border-l border-white/10">
          <ProceduralGroundBackground />
          <div className="absolute inset-0 overflow-hidden rounded-2xl sm:rounded-3xl xl:rounded-none xl:rounded-r-[3rem]">
            <iframe
              src="https://calendly.com/carelife-co/30min?hide_event_type_details=1&hide_gdpr_banner=1&background_color=0a081f&text_color=ffffff&primary_color=4a90e2"
              className="w-full mix-blend-lighten opacity-90 pointer-events-auto"
              frameBorder="0"
              title="Calendly Scheduling"
              style={{ height: "calc(100% + 120px)" }}
            />
          </div>
        </div>
      </div>
      
      <div className="w-full max-w-[1200px] flex flex-col sm:flex-row justify-between items-center text-[#f1f1f1]/60 text-sm font-medium px-4 gap-4 text-center sm:text-left">
        <span>© 2026 Electrixel</span>
        <span>Built for brands that want to be remembered.</span>
      </div>
    </section>
  );
}
