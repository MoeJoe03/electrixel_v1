"use client";

import { motion } from "motion/react";
import { ShinyButton } from "@/components/ui/shiny-button";

export default function ValueProps() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 md:px-12 lg:px-24">
      <div className="flex justify-center mb-16 md:mb-28">
        <ShinyButton className="!px-10 sm:!px-16 !py-4 !text-base md:!text-lg !font-semibold !tracking-wide !w-full sm:!w-[80%] md:!w-[60%] lg:!w-auto !text-center">
          Book Now
        </ShinyButton>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0 max-w-[100rem] mx-auto">
        <div className="md:pr-10 lg:pr-20 relative">
          <motion.h3
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-2xl sm:text-3xl lg:text-[1.75rem] font-bold text-white mb-4 md:mb-6 leading-snug tracking-tight"
          >
            Helping you understand your business
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="text-[#f1f1f1] leading-relaxed text-sm sm:text-base lg:text-lg"
          >
            No matter the industry or sector our first task is always to
            understand your offering better than you. By uncovering what makes
            your business exceptional, we craft a strategy that highlights your
            strengths and connects you with your audience and beyond.
          </motion.p>
        </div>

        <div className="md:px-10 lg:px-20 relative pt-8 md:pt-0 border-t border-white/5 md:border-t-0">
          {/* Left Vertical Line */}
          <motion.div
            initial={{ height: 0, bottom: 0, top: "auto" }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-0 w-[1px] bg-gradient-to-b from-transparent via-[#4a90e2] to-transparent hidden md:block"
          />

          {/* Right Vertical Line */}
          <motion.div
            initial={{ height: 0, bottom: 0, top: "auto" }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="absolute right-0 w-[1px] bg-gradient-to-b from-transparent via-[#4a90e2] to-transparent hidden md:block"
          />

          <motion.h3
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-2xl sm:text-3xl lg:text-[1.75rem] font-bold text-white mb-4 md:mb-6 leading-snug tracking-tight"
          >
            Don&apos;t worry, <br className="hidden lg:block" />
            we&apos;ve got this
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="text-[#f1f1f1] leading-relaxed text-sm sm:text-base lg:text-lg"
          >
            We take full ownership of your projects, so you can focus on what
            matters most. With our expertise delivering real results, you gain a
            competitive edge without the added hassle.
          </motion.p>
        </div>

        <div className="md:pl-10 lg:pl-20 pt-8 md:pt-0 border-t border-white/5 md:border-t-0">
          <motion.h3
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-2xl sm:text-3xl lg:text-[1.75rem] font-bold text-white mb-4 md:mb-6 leading-snug tracking-tight"
          >
            Stay ahead, <br className="hidden lg:block" />
            don&apos;t follow
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="text-[#f1f1f1] leading-relaxed text-sm sm:text-base lg:text-lg"
          >
            Forget chasing competitors, you&apos;ll be too busy outpacing them.
            True market leaders thrive by embracing change, and we&apos;ll
            position you at the forefront with smart strategies that never
            compromise on quality.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
