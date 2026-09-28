"use client";

import React, { useEffect } from "react";
import { motion } from "motion/react";
import "./OurProcessSection.css";

export default function OurProcessSection() {
  useEffect(() => {
    let rafId: number;
    const handleScroll = () => {
      const cards = document.querySelectorAll("#cards .card");
      cards.forEach((card, index) => {
        if (index < cards.length - 1) {
          const currentRect = card.getBoundingClientRect();
          const nextCard = cards[index + 1];
          const nextRect = nextCard.getBoundingClientRect();

          if (nextRect.top <= currentRect.top + 40) {
            card.classList.add("card-blurred");
          } else {
            card.classList.remove("card-blurred");
          }
        }
      });
      rafId = requestAnimationFrame(handleScroll);
    };

    rafId = requestAnimationFrame(handleScroll);

    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <section id="process" className="stacking-cards-section">
      <div className="flex flex-col lg:flex-row justify-between relative w-full cards-container">
        <div className="w-full lg:w-[35%] xl:w-[30%] px-4 sm:px-6 md:px-12 lg:pl-16 xl:pl-24 lg:pr-8 relative z-10">
          <div className="lg:sticky lg:top-40 relative">
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
              Our collaborative approach ensures tailored solutions and impactful
              results through these key phases.
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-[65%] xl:w-[70%] max-w-[1000px] px-4 sm:px-6 md:px-12 lg:pr-16 xl:pr-24 lg:pl-0 mt-8 lg:mt-0 ml-auto cards-stack-wrapper">
          <ul id="cards">
            <li className="card" id="card1" style={{ top: "120px", zIndex: 1 }}>
              <div className="card-body">
                <div className="card-text-column">
                  <span className="card-step-number">01</span>
                  <motion.h3
                    initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="card-title"
                  >
                    Discovery &amp; Kickoff
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                    className="card-text"
                  >
                    We dive deep into your business, goals, audience, and
                    competition through workshops and thorough research to
                    understand the full picture.
                  </motion.p>
                </div>
                <div className="card-image-column">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://qnelsjzfuynqotkwojxv.supabase.co/storage/v1/object/public/Electrixel/our%20process/card-1.gif"
                    alt="Discovery"
                  />
                </div>
              </div>
            </li>

            <li className="card" id="card2" style={{ top: "150px", zIndex: 2 }}>
              <div className="card-body">
                <div className="card-text-column">
                  <span className="card-step-number">02</span>
                  <motion.h3
                    initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="card-title"
                  >
                    Strategy &amp; Planning
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                    className="card-text"
                  >
                    Based on insights, we craft a tailored digital strategy and
                    project roadmap, defining clear objectives, milestones, and
                    KPIs.
                  </motion.p>
                </div>
                <div className="card-image-column">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://qnelsjzfuynqotkwojxv.supabase.co/storage/v1/object/public/Electrixel/our%20process/card-2.gif"
                    alt="Strategy"
                  />
                </div>
              </div>
            </li>

            <li className="card" id="card3" style={{ top: "180px", zIndex: 3 }}>
              <div className="card-body">
                <div className="card-text-column">
                  <span className="card-step-number">03</span>
                  <motion.h3
                    initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="card-title"
                  >
                    Design &amp; Development
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                    className="card-text"
                  >
                    Our team transforms the strategy into reality, designing
                    intuitive user experiences and writing clean, scalable code
                    for robust performance.
                  </motion.p>
                </div>
                <div className="card-image-column">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://qnelsjzfuynqotkwojxv.supabase.co/storage/v1/object/public/Electrixel/our%20process/card-3.gif"
                    alt="Design"
                  />
                </div>
              </div>
            </li>

            <li className="card" id="card4" style={{ top: "210px", zIndex: 4 }}>
              <div className="card-body">
                <div className="card-text-column">
                  <span className="card-step-number">04</span>
                  <motion.h3
                    initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="card-title"
                  >
                    Launch &amp; Optimization
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                    className="card-text"
                  >
                    We ensure a smooth deployment, monitor initial metrics, and
                    continuously iterate to maximize ROI and operational
                    efficiency.
                  </motion.p>
                </div>
                <div className="card-image-column">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://qnelsjzfuynqotkwojxv.supabase.co/storage/v1/object/public/Electrixel/our%20process/card-4.gif"
                    alt="Launch"
                  />
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
