"use client";

import { motion } from "motion/react";

export default function Services() {
  const services = [
    {
      title: "Website Creation",
      items: ["Websites", "Strategy", "Project management", "Optimised"],
      topColor: "bg-[#9c9a96]",
      videoUrl:
        "https://qnelsjzfuynqotkwojxv.supabase.co/storage/v1/object/public/Electrixel/our%20services/web_design.mp4",
    },
    {
      title: "Social Media",
      items: [
        "Social Strategy",
        "Content Creation",
        "Community Management",
        "Paid Campaigns",
      ],
      topColor: "bg-[#818791]",
      videoUrl:
        "https://qnelsjzfuynqotkwojxv.supabase.co/storage/v1/object/public/Electrixel/our%20services/Social%20Media_Marketing.mp4",
    },
    {
      title: "Brand Identity",
      items: ["Logo Design", "Brand Guidelines", "Typography", "Visual Assets"],
      topColor: "bg-[#91968d]",
      videoUrl:
        "https://qnelsjzfuynqotkwojxv.supabase.co/storage/v1/object/public/Electrixel/our%20services/brand_identity.mp4",
    },
    {
      title: "App Development",
      items: [
        "iOS & Android",
        "React Native",
        "UI/UX Design",
        "Launch Support",
      ],
      topColor: "bg-[#9e928a]",
      videoUrl:
        "https://qnelsjzfuynqotkwojxv.supabase.co/storage/v1/object/public/Electrixel/our%20services/app_development.mp4",
    },
  ];

  return (
    <section id="services" className="py-20 md:py-32 w-full">
      <div className="flex flex-col lg:flex-row justify-between relative w-full">
        <div className="w-full lg:w-[35%] xl:w-[30%] px-4 sm:px-6 md:px-12 lg:pl-16 xl:pl-24 lg:pr-8 relative z-10">
          <div className="lg:sticky lg:top-40 relative">
            <motion.h2
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-4xl sm:text-5xl lg:text-[4rem] font-bold text-white mb-6 lg:mb-8 tracking-tight"
            >
              Services
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="text-[#f1f1f1] text-base sm:text-lg lg:text-xl leading-relaxed"
            >
              We offer big agency services at small agency prices. Focused on
              three core disciplines we use our expertise to help you uncover
              your business needs, create traction and accelerate growth.
            </motion.p>
          </div>
        </div>

        <div className="w-full lg:w-[65%] xl:w-[70%] max-w-[1000px] flex flex-col gap-10 md:gap-16 lg:gap-24 px-4 sm:px-6 md:px-12 lg:pr-16 xl:pr-24 lg:pl-0 mt-8 lg:mt-0 ml-auto">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 100, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: idx * 0.1, ease: "easeOut" }}
              className="rounded-[1.5rem] sm:rounded-[2rem] lg:rounded-[2.5rem] overflow-hidden bg-[#242424] flex flex-col w-full shadow-2xl"
            >
              <div
                className={`h-[220px] sm:h-[300px] md:h-[400px] ${service.topColor} relative overflow-hidden`}
              >
                <video
                  src={service.videoUrl}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover absolute inset-0"
                />
              </div>
              <div className="p-8 sm:p-12 lg:p-16 bg-[#242424]">
                <motion.h3
                  initial={{ opacity: 0, y: 10, filter: "blur(10px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 0.6,
                    delay: 0.2 + idx * 0.1,
                    ease: "easeOut",
                  }}
                  className="text-2xl sm:text-3xl lg:text-[2.25rem] font-bold text-white mb-6 sm:mb-10 tracking-tight"
                >
                  {service.title}
                </motion.h3>
                <ul className="space-y-3 sm:space-y-4">
                  {service.items.map((item, i) => (
                    <li
                      key={i}
                      className="text-slate-300 font-medium text-base sm:text-lg tracking-wide"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
