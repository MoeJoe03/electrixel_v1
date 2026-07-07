"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

export default function Footer() {
  return (
    <footer className="w-full mt-12 md:mt-24">
      <div className="bg-[#f0ece6] text-[#0f0f0f] rounded-t-[2rem] md:rounded-t-[3rem] pt-12 md:pt-16 lg:pt-24 px-6 md:px-12 lg:px-16 relative overflow-hidden flex flex-col justify-between min-h-[500px] w-full">
        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-8 relative z-10 mb-32 md:mb-48">
          {/* Col 1: Intro */}
          <div className="lg:w-1/3 max-w-sm">
            <motion.h3
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-xl md:text-2xl font-semibold font-serif leading-snug tracking-tight"
            >
              Electrixel is an independent creative agency and development
              studio
            </motion.h3>
          </div>

          {/* Col 2: Explore */}
          <div className="flex flex-col sm:flex-row gap-12 md:gap-16 lg:gap-24 lg:w-2/3 justify-between lg:justify-end flex-wrap">
            <div className="flex flex-col gap-4">
              <h4 className="font-medium text-sm text-[#0f0f0f]">Explore</h4>
              <nav className="flex flex-col gap-3">
                <Link
                  href="#"
                  className="text-[#666] hover:text-[#0f0f0f] text-sm transition-colors"
                >
                  Bio
                </Link>
                <Link
                  href="#"
                  className="text-[#666] hover:text-[#0f0f0f] text-sm transition-colors"
                >
                  Newsletter
                </Link>
                <Link
                  href="#"
                  className="text-[#666] hover:text-[#0f0f0f] text-sm transition-colors"
                >
                  Contact
                </Link>
              </nav>
            </div>

            {/* Col 3: Socials */}
            <div className="flex flex-col gap-4">
              <h4 className="font-medium text-sm text-[#0f0f0f]">Follow us</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 gap-x-8">
                <Link
                  href="#"
                  className="flex items-center gap-2 text-[#666] hover:text-[#0f0f0f] text-sm bg-white/60 px-3 py-1.5 rounded-full transition-colors border border-black/5 whitespace-nowrap w-fit font-medium"
                >
                  <span className="font-bold text-black">X</span> @electrixel
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-2 text-[#666] hover:text-[#0f0f0f] text-sm bg-white/60 px-3 py-1.5 rounded-full transition-colors border border-black/5 whitespace-nowrap w-fit font-medium"
                >
                  <span className="text-pink-600">◎</span> @electrixel
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-2 text-[#666] hover:text-[#0f0f0f] text-sm bg-white/60 px-3 py-1.5 rounded-full transition-colors border border-black/5 whitespace-nowrap w-fit font-medium"
                >
                  <span className="text-pink-500">d</span> @electrixel
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-2 text-[#666] hover:text-[#0f0f0f] text-sm bg-white/60 px-3 py-1.5 rounded-full transition-colors border border-black/5 whitespace-nowrap w-fit font-medium"
                >
                  <span className="text-red-500">▶</span> @electrixel
                </Link>
              </div>
            </div>

            {/* Col 4: Actions */}
            <div className="flex flex-col gap-8 w-full sm:w-auto mt-4 sm:mt-0">
              <div className="flex flex-col gap-1 border-b border-black/10 pb-6 min-w-[200px]">
                <Link
                  href="#"
                  className="group flex items-center justify-between gap-4"
                >
                  <span className="text-[#ff3b30] text-xl font-medium tracking-tight group-hover:opacity-80 transition-opacity">
                    Contact Us
                  </span>
                  <div className="bg-[#ff3b30] text-white p-1 rounded-full group-hover:scale-110 transition-transform">
                    <ArrowUpRight size={16} strokeWidth={3} />
                  </div>
                </Link>
                <span className="text-[#666] text-xs">
                  Let&apos;s work together
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <Link
                  href="/#services"
                  className="group flex items-center justify-between gap-4"
                >
                  <span className="text-[#0f0f0f] text-xl font-medium tracking-tight group-hover:opacity-80 transition-opacity">
                    Our Services
                  </span>
                  <div className="bg-[#0f0f0f] text-white p-1 rounded-full group-hover:scale-110 transition-transform">
                    <ArrowUpRight size={16} strokeWidth={3} />
                  </div>
                </Link>
                <span className="text-[#666] text-xs">Creative solutions</span>
              </div>
            </div>
          </div>
        </div>

        {/* Huge Bottom Text */}
        <div className="absolute bottom-0 left-0 w-full flex justify-center items-end select-none pointer-events-none translate-y-[25%] sm:translate-y-[20%]">
          <motion.h2
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="text-[25vw] sm:text-[23vw] md:text-[22vw] lg:text-[21vw] font-black leading-[0.75] tracking-tighter text-[#0f0f0f] w-full text-center whitespace-nowrap font-sans"
          >
            electrixel
          </motion.h2>
        </div>

        {/* Very Bottom Bar */}
        <div className="relative z-10 flex flex-col sm:flex-row justify-between items-center py-6 text-xs text-[#666] gap-4 font-medium mt-16 md:mt-24 w-full mix-blend-difference text-white">
          <div className="flex gap-2 sm:gap-4 flex-wrap justify-center">
            <span>Electrixel ©2024</span>
            <span className="hidden sm:inline">·</span>
            <Link href="#" className="hover:text-white/80 transition-colors">
              Privacy Policy
            </Link>
          </div>
          <div className="flex gap-4">
            <span>London 1:24 PM 9°C ☁️</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
