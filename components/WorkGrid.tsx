"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import Link from "next/link";

export default function WorkGrid() {
  const projects = [
    { src: "https://qnelsjzfuynqotkwojxv.supabase.co/storage/v1/object/public/Electrixel/our%20work/saiiiw/image_!.jpeg", alt: "SAIIIW", title: "SAIIIW", href: "#" },
    { src: "https://qnelsjzfuynqotkwojxv.supabase.co/storage/v1/object/public/Electrixel/our%20work/sunshine/website_development_johannesburg_spa_website.jpeg", alt: "SUNSHINE THAI MASSAGE", title: "SUNSHINE THAI MASSAGE", href: "#" },
    { src: "https://qnelsjzfuynqotkwojxv.supabase.co/storage/v1/object/public/Electrixel/our%20work/pat%20press/web_design_johannesburg_print_shop.jpeg", alt: "PAT PRESS", title: "PAT PRESS", href: "#" },
    { src: "https://qnelsjzfuynqotkwojxv.supabase.co/storage/v1/object/public/Electrixel/our%20work/movex/website_design_jhb_logistics_company_web_development.jpeg", alt: "MOVEX", title: "MOVEX", href: "#" },
    { src: "https://qnelsjzfuynqotkwojxv.supabase.co/storage/v1/object/public/Electrixel/our%20work/aurelia/website_jhb_furniture_site_.jpeg", alt: "AURELIA HOME", title: "AURELIA HOME", href: "#" },
    { src: "https://picsum.photos/id/669/800/600", alt: "Project 6", title: "Fitness Tracker", href: "#" },
  ];

  return (
    <section className="py-24 md:py-32 px-4 sm:px-6 md:px-12 lg:px-24 max-w-[100rem] mx-auto w-full">
      <div className="mb-16 md:mb-24 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl sm:text-6xl lg:text-[5rem] font-bold text-white mb-6 tracking-tight"
        >
          Our Work
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="text-[#f1f1f1] text-lg sm:text-xl lg:text-2xl leading-relaxed max-w-3xl mx-auto"
        >
          A selection of our latest projects, crafted with precision and driven by strategy.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {projects.map((project, idx) => {
          const content = (
            <motion.div 
              initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
              className="group relative cursor-pointer block"
            >
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden mb-6 bg-white/5">
                <Image
                  src={project.src}
                  alt={project.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight group-hover:text-slate-300 transition-colors">
                {project.title}
              </h3>
            </motion.div>
          );

          return project.href !== "#" ? (
            <Link key={idx} href={project.href} className="block">
              {content}
            </Link>
          ) : (
            <div key={idx} className="block">
              {content}
            </div>
          );
        })}
      </div>
    </section>
  );
}
