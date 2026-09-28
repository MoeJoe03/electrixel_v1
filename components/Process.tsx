"use client";

import { motion } from "motion/react";

export default function Process() {
  const steps = [
    {
      num: "01",
      title: "Discovery &\nKickoff",
      text: "We dive deep into your business, goals, audience, and competition through workshops and thorough research to understand the full picture.",
    },
    {
      num: "02",
      title: "Strategy &\nPlanning",
      text: "Based on insights, we craft a tailored digital strategy and project roadmap, defining clear objectives, milestones, and KPIs.",
    },
    {
      num: "03",
      title: "Design &\nDevelopment",
      text: "Our team transforms the strategy into reality, designing intuitive user experiences and writing clean, scalable code for robust performance.",
    },
    {
      num: "04",
      title: "Launch &\nOptimization",
      text: "We ensure a smooth deployment, monitor initial metrics, and continuously iterate to maximize ROI and operational efficiency.",
    },
  ];

  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 md:px-12 lg:px-24 max-w-[100rem] mx-auto overflow-visible">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 relative">
        <div className="lg:w-[35%] relative z-10 w-full mb-8 lg:mb-0">
          <div className="lg:sticky lg:top-40">
            <motion.h2
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-4xl sm:text-5xl lg:text-[4rem] font-bold text-white mb-6 lg:mb-8 tracking-tight"
            >
              Our Process
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="text-[#f1f1f1] text-base sm:text-lg lg:text-xl leading-relaxed"
            >
              Our collaborative approach ensures tailored solutions and
              impactful results through these key phases.
            </motion.p>
          </div>
        </div>

        {/* We give the container flex column layout. 
            The sticky positioning on the cards combined with a bottom padding on the container 
            creates the stacking effect. */}
        <div className="lg:w-[65%] flex flex-col gap-6 lg:pl-16 pb-[10vh] lg:pb-[40vh] relative w-full mt-4 lg:mt-0">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className={`lg:sticky flex flex-col md:flex-row min-h-[450px] lg:h-[600px] w-full bg-[#0a0d14] rounded-[2rem] lg:rounded-[2.5rem] border border-white/5 overflow-hidden shadow-2xl transition-all duration-300`}
              style={{ top: `calc(10rem + ${idx * 20}px)` }} // Adjusted for mobile/desktop stacking offset
            >
              <div className="w-full md:w-[45%] p-8 sm:p-10 lg:p-14 flex flex-col justify-center bg-[#0a0d14] relative z-10 text-left order-2 md:order-1">
                <span className="text-slate-500 mb-6 lg:mb-10 font-mono text-sm lg:text-base">
                  {step.num}
                </span>
                <motion.h3
                  initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="text-[1.75rem] lg:text-[2.25rem] font-bold text-white mb-4 lg:mb-6 leading-[1.1] whitespace-pre-line tracking-tight"
                >
                  {step.title}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                  className="text-[#f1f1f1] leading-relaxed text-sm sm:text-base lg:text-lg"
                >
                  {step.text}
                </motion.p>
              </div>

              {/* Graphic Placeholder Side */}
              <div className="w-full md:w-[55%] bg-black m-2 md:m-4 rounded-[1.5rem] md:rounded-[2rem] overflow-hidden relative border border-white/5 flex items-center justify-center p-4 sm:p-8 order-1 md:order-2 h-[250px] sm:h-[350px] md:h-auto">
                {/* Abstract graphic representation loosely matching screenshot */}
                <div className="relative w-full h-full max-w-sm max-h-sm rounded-[1rem] sm:rounded-3xl flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.08)_0%,transparent_80%)]"></div>

                  {/* Elements for abstract graphic */}
                  <div className="w-[14rem] sm:w-[18rem] h-[10rem] sm:h-[12rem] bg-[#121212] rounded-xl sm:rounded-2xl border border-white/10 relative z-10 shadow-2xl flex items-center p-4 sm:p-6 gap-3 sm:gap-4 backdrop-blur-sm">
                    <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-emerald-500/20 flex items-center justify-center text-xs sm:text-sm font-bold text-emerald-400 border border-emerald-500/30">
                      AA
                    </div>
                    <div className="flex flex-col gap-2 sm:gap-3 flex-1">
                      <div className="h-2.5 sm:h-3 bg-white/20 rounded-full w-full"></div>
                      <div className="h-2.5 sm:h-3 bg-white/10 rounded-full w-2/3"></div>
                    </div>
                  </div>

                  {/* Background mesh grid effect box */}
                  <div className="absolute top-1/2 left-[55%] -translate-x-1/2 -translate-y-[45%] w-[12rem] sm:w-[16rem] h-[12rem] sm:h-[16rem] bg-white/5 rounded-[1.5rem] sm:rounded-3xl opacity-40 border border-white/10 z-0">
                    <svg
                      width="100%"
                      height="100%"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <defs>
                        <pattern
                          id="smallGrid"
                          width="10"
                          height="10"
                          patternUnits="userSpaceOnUse"
                        >
                          <path
                            d="M 10 0 L 0 0 0 10"
                            fill="none"
                            stroke="rgba(255,255,255,0.15)"
                            strokeWidth="0.5"
                          />
                        </pattern>
                      </defs>
                      <rect
                        width="100%"
                        height="100%"
                        fill="url(#smallGrid)"
                        rx="24"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
