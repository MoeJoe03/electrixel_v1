"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { ShinyButton, ShinyContainer } from "@/components/ui/shiny-button";

import Image from "next/image";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-4 md:px-12 md:py-8 lg:px-16">
        {/* Electrixel Logo */}
        <Link href="/" className="flex flex-col items-center gap-0.5 md:gap-1 relative z-10 cursor-pointer">
          <div className="relative w-[80px] h-[80px] md:w-[100px] md:h-[100px]">
            <Image
              src="https://qnelsjzfuynqotkwojxv.supabase.co/storage/v1/object/public/Electrixel/logo/Electrixel%20logo.png"
              alt="Electrixel Logo"
              fill
              className="object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
        </Link>

        {/* Center Nav Pills */}
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center rounded-full shadow-2xl">
          <ShinyContainer className="!px-10 lg:!px-12 !py-6">
            <div className="flex items-center gap-8 lg:gap-10 text-base font-medium text-white">
              <Link
                href="/"
                className="text-white font-semibold whitespace-nowrap"
              >
                Home
              </Link>
              <Link
                href="/#services"
                className="hover:text-white/70 transition-colors whitespace-nowrap"
              >
                Services
              </Link>
              <Link
                href="/work"
                className="hover:text-white/70 transition-colors whitespace-nowrap"
              >
                Work
              </Link>
              <Link
                href="#"
                className="hover:text-white/70 transition-colors whitespace-nowrap"
              >
                About
              </Link>
            </div>
          </ShinyContainer>
        </div>

        {/* Right CTA */}
        <div className="flex items-center gap-3 md:gap-4 relative z-10">
          <div className="hidden sm:block">
            <ShinyButton className="!px-6 lg:!px-8 !py-5 lg:!py-6 !text-sm md:!text-base whitespace-nowrap">
              <span className="flex items-center gap-2 md:gap-3">
                <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span>
                Get in touch
              </span>
            </ShinyButton>
          </div>

          <button
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-full transition-colors"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[55] bg-black/20 backdrop-blur-sm md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.95, x: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-24 right-4 z-[60] flex flex-col gap-3 md:hidden items-end"
            >
              <ShinyButton
                onClick={() => setIsMobileMenuOpen(false)}
                className="!px-6 !py-3 !text-base shadow-2xl"
              >
                Close
              </ShinyButton>

              <ShinyContainer className="!rounded-[2rem] !p-6 !py-8 shadow-2xl !min-w-[160px]">
                <div className="flex flex-col gap-6 w-full">
                  <Link
                    href="/"
                    className="text-white text-lg font-medium text-center"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Home
                  </Link>
                  <Link
                    href="/#services"
                    className="text-white text-lg font-medium text-center"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Services
                  </Link>
                  <Link
                    href="/work"
                    className="text-white text-lg font-medium text-center"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Work
                  </Link>
                  <Link
                    href="#"
                    className="text-white text-lg font-medium text-center"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    About
                  </Link>
                </div>
              </ShinyContainer>

              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center gap-3 rounded-full bg-white px-8 py-4 text-lg font-bold text-[#151515] shadow-2xl hover:bg-gray-100 transition-colors w-full"
              >
                <span className="flex items-center justify-center gap-3 w-full">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span>
                  Contact
                </span>
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
