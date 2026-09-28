"use client";

import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import {
  useState,
  useRef,
  useEffect,
  MouseEvent as ReactMouseEvent,
} from "react";

const trailImages = Array.from(
  { length: 20 },
  (_, i) =>
    `https://qnelsjzfuynqotkwojxv.supabase.co/storage/v1/object/public/Electrixel/hero/hero_image_${i + 1}.png`,
);

type Drop = {
  id: string;
  x: number;
  y: number;
  imageUrl: string;
  rotation: number;
};

function MobileImageSwitcher({ images }: { images: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 500);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <span className="md:hidden block w-48 h-60 mx-auto my-6 rounded-2xl overflow-hidden relative shadow-2xl border border-white/10">
      <span key={currentIndex} className="absolute inset-0 block">
        <Image
          src={images[currentIndex]}
          alt="Hero showcase"
          fill
          className="object-cover"
          sizes="192px"
          referrerPolicy="no-referrer"
        />
      </span>
    </span>
  );
}

export default function Hero() {
  const [trail, setTrail] = useState<Drop[]>([]);
  const globalIndex = useRef(0);
  const lastPosition = useRef({ x: 0, y: 0 });

  const handleMouseMove = (e: ReactMouseEvent<HTMLElement>) => {
    // Only capture if not on a small mobile device where mouse doesn't make as much sense
    if (typeof window !== "undefined" && window.innerWidth < 768) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Calculate distance from last drop
    const distance = Math.hypot(
      x - lastPosition.current.x,
      y - lastPosition.current.y,
    );

    // Create new drop if moved enough distance
    if (distance > 120) {
      const newDrop: Drop = {
        id: Math.random().toString(36).substr(2, 9),
        x: x,
        y: y,
        imageUrl: trailImages[globalIndex.current % trailImages.length],
        rotation: Math.random() * 30 - 15, // random rotation between -15 and 15 degrees
      };

      globalIndex.current += 1;
      lastPosition.current = { x: x, y: y };

      setTrail((prev) => [...prev, newDrop]);

      // Remove the drop after a short delay
      setTimeout(() => {
        setTrail((prev) => prev.filter((d) => d.id !== newDrop.id));
      }, 1000); // image disappears after 1s
    }
  };

  return (
    <section
      className="relative min-h-[100dvh] flex items-center justify-center pt-32 pb-16 px-4 md:px-8 overflow-hidden cursor-crosshair"
      onMouseMove={handleMouseMove}
    >
      {/* Subtle radial gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent opacity-40 pointer-events-none"></div>

      {/* Image Trail Layer (Behind the text) */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <AnimatePresence>
          {trail.map((drop) => (
            <motion.div
              key={drop.id}
              initial={{ opacity: 0, scale: 0.5, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0, rotate: drop.rotation }}
              exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.4 } }}
              transition={{ duration: 0.5, type: "spring" }}
              className="absolute w-48 h-64 md:w-56 md:h-72 rounded-2xl overflow-hidden border border-white/10 shadow-2xl origin-center will-change-transform"
              style={{
                left: drop.x - 112, // center approximately (half width)
                top: drop.y - 144, // center approximately (half height)
              }}
            >
              <Image
                src={drop.imageUrl}
                alt="Trail visual"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 192px, 224px"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className="max-w-[100rem] mx-auto text-center relative z-10 w-full px-2 pointer-events-none">
        <motion.h1
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="font-sans text-[3rem] sm:text-6xl md:text-7xl lg:text-[7.5rem] leading-[1.1] md:leading-[1.1] lg:leading-[1.15] tracking-tight text-slate-100 mb-8 max-w-[18ch] mx-auto drop-shadow-2xl"
        >
          <span className="block md:inline">
            Building brands that <br className="hidden md:block" />
            <span className="font-[family-name:var(--font-instrument)] italic font-light text-slate-300">
              resonate
            </span>
            ,
          </span>

          <MobileImageSwitcher images={trailImages} />

          <span className="hidden md:inline">
            {" "}
            websites <br className="hidden md:block" /> that{" "}
          </span>
          <span className="md:hidden block mt-2">websites that </span>
          <span className="font-[family-name:var(--font-instrument)] italic font-light text-slate-300">
            convert.
          </span>
        </motion.h1>
      </div>
    </section>
  );
}
