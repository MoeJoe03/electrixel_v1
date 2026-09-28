"use client";

import { motion, useScroll, useTransform, MotionValue } from "motion/react";
import { useRef } from "react";

const Word = ({
  children,
  progress,
  range,
}: {
  children: React.ReactNode;
  progress: MotionValue<number>;
  range: [number, number];
}) => {
  const opacity = useTransform(progress, range, [0.1, 1]);
  return (
    <motion.span style={{ opacity }} className="text-white">
      {children}
    </motion.span>
  );
};

export default function ScrollingText() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 45%"], // Start fading in when element hits 80% viewport height, end when it gets to 45%
  });

  const text =
    "We know that developing a new project is a complex undertaking. Every day, we work on developments that are truly defined by quality and detail, with a focus on commitment to Client satisfaction and concept realization.";
  const words = text.split(" ");

  return (
    <section
      ref={containerRef}
      className="py-20 md:py-32 px-4 sm:px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-[70rem] mx-auto text-left">
        <p className="font-sans text-[17px] sm:text-[21px] md:text-[41px] lg:text-[57px] leading-[1.3] md:leading-[1.25] tracking-tight flex flex-wrap gap-x-1.5 sm:gap-x-2 md:gap-x-3 lg:gap-x-4">
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;

            return (
              <Word key={i} progress={scrollYProgress} range={[start, end]}>
                {word}
              </Word>
            );
          })}
        </p>
      </div>
    </section>
  );
}
