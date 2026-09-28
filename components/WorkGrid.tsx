"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Project, projects } from "@/lib/projects";
import ProjectModal from "@/components/ProjectModal";

export default function WorkGrid() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleOpenProject = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseProject = () => {
    setSelectedProject(null);
  };

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
          A selection of our latest projects, crafted with precision and driven by strategy. Click on any project to explore details.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {projects.map((project, idx) => (
          <motion.div 
            key={project.id}
            initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
            onClick={() => handleOpenProject(project)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                handleOpenProject(project);
              }
            }}
            role="button"
            tabIndex={0}
            className="group relative cursor-pointer block text-left outline-none focus-visible:ring-2 focus-visible:ring-white/40 rounded-3xl"
          >
            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden mb-6 bg-white/5 border border-white/5 group-hover:border-white/20 transition-all duration-500">
              <Image
                src={project.src}
                alt={project.alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 sm:p-8">
                <span className="inline-flex items-center gap-2 text-white font-medium text-sm sm:text-base">
                  View Project Details
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between gap-4">
              <div>
                <span className="text-xs uppercase font-mono tracking-wider text-slate-400 block mb-1">
                  {project.category}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight group-hover:text-slate-300 transition-colors">
                  {project.title}
                </h3>
              </div>
              <span className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-400 group-hover:text-white group-hover:border-white/30 group-hover:bg-white/10 transition-all shrink-0">
                <ArrowUpRight className="w-5 h-5" />
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Project Details Modal Popup */}
      <ProjectModal
        project={selectedProject}
        isOpen={Boolean(selectedProject)}
        onClose={handleCloseProject}
        onSelectProject={(proj) => setSelectedProject(proj)}
        allProjects={projects}
      />
    </section>
  );
}
