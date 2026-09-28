"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "motion/react";
import { EffectCoverflow } from "swiper/modules";
import { ArrowUpRight } from "lucide-react";
import { Project, projects } from "@/lib/projects";
import ProjectModal from "@/components/ProjectModal";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function FeaturedProjects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Distinguish dragging from clicking so the carousel remains freely draggable
  const isDraggingRef = useRef(false);
  const pointerStartRef = useRef<{ x: number; y: number } | null>(null);

  const handlePointerDown = (e: React.PointerEvent) => {
    pointerStartRef.current = { x: e.clientX, y: e.clientY };
    isDraggingRef.current = false;
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!pointerStartRef.current) return;
    const dx = Math.abs(e.clientX - pointerStartRef.current.x);
    const dy = Math.abs(e.clientY - pointerStartRef.current.y);
    if (dx > 7 || dy > 7) {
      isDraggingRef.current = true;
    }
  };

  const handlePointerUp = () => {
    // Keep isDraggingRef true for a small tick so native click handlers can check it
    setTimeout(() => {
      pointerStartRef.current = null;
      isDraggingRef.current = false;
    }, 100);
  };

  const handleOpenProject = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseProject = () => {
    setSelectedProject(null);
  };

  const handleSlideClick = (project: Project, isActive: boolean) => {
    if (isDraggingRef.current) {
      // User was dragging the carousel; do not open popup
      return;
    }
    // Clicking the active slide opens the project modal
    if (isActive) {
      handleOpenProject(project);
    }
  };

  const css = `
  .featured-swiper {
    overflow: visible !important;
    padding-top: 10px;
    padding-bottom: 20px;
  }

  .featured-swiper .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 85%;
    max-width: 820px;
    height: auto;
    aspect-ratio: 16 / 10;
    opacity: 0.35;
    transition: opacity 0.4s ease;
    user-select: none;
    -webkit-user-select: none;
  }

  @media (min-width: 768px) {
    .featured-swiper .swiper-slide {
      width: 62%;
    }
  }
  
  .featured-swiper .swiper-slide-active {
    opacity: 1;
  }
  
  .featured-swiper .swiper-3d .swiper-slide-shadow-left,
  .featured-swiper .swiper-3d .swiper-slide-shadow-right {
    background-image: none !important;
  }

  /* Custom Pagination */
  .custom-pagination {
    display: flex;
    align-items: center;
    gap: 24px;
    margin-top: 50px;
    padding-left: 10%;
  }

  .pagination-lines-container {
    display: flex;
    gap: 8px;
  }

  .pagination-line {
    width: 24px;
    height: 2px;
    background-color: #333;
    transition: all 0.3s ease;
  }

  .pagination-line.active {
    background-color: #fff;
  }
  `;

  return (
    <section className="py-20 md:py-32 w-full overflow-hidden relative z-0 bg-[#151515] text-white">
      <style>{css}</style>
      
      <div className="px-4 sm:px-6 md:px-12 lg:pl-16 xl:pl-24 lg:pr-8 mb-12 md:mb-20 w-full relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl sm:text-5xl lg:text-[4rem] font-bold text-white mb-6 lg:mb-8 tracking-tight"
        >
          Our Work
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="text-[#f1f1f1] text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl"
        >
          A selection of our latest projects, crafted with precision and driven by strategy. Drag to explore or click to view case study.
        </motion.p>
      </div>

      <div className="w-full relative">
        <Swiper
          className="featured-swiper"
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={"auto"}
          spaceBetween={60}
          slideToClickedSlide={true}
          touchEventsTarget="container"
          simulateTouch={true}
          touchRatio={1}
          preventClicks={true}
          preventClicksPropagation={true}
          coverflowEffect={{
            rotate: 0,
            stretch: -25,
            depth: 180,
            modifier: 1,
            slideShadows: false,
          }}
          onSlideChange={(swiper) => {
            setActiveIndex(swiper.realIndex);
          }}
          modules={[EffectCoverflow]}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={project.id || index}>
              {({ isActive }) => (
                <div 
                  onPointerDown={handlePointerDown}
                  onPointerMove={handlePointerMove}
                  onPointerUp={handlePointerUp}
                  onClick={() => handleSlideClick(project, isActive)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      handleOpenProject(project);
                    }
                  }}
                  className={`relative w-full h-full group overflow-hidden rounded-2xl border transition-all duration-300 select-none outline-none focus-visible:ring-2 focus-visible:ring-white/50 ${
                    isActive 
                      ? "cursor-pointer border-white/20 shadow-2xl shadow-black/80" 
                      : "cursor-grab active:cursor-grabbing border-white/5"
                  }`}
                >
                  <Image
                    src={project.src}
                    alt={project.alt}
                    fill
                    sizes="(max-width: 768px) 85vw, 62vw"
                    className="object-cover rounded-2xl transition-transform duration-700 group-hover:scale-105 pointer-events-none select-none"
                    referrerPolicy="no-referrer"
                    priority={index < 2}
                  />

                  {/* Gradient overlays for readability */}
                  <div 
                    className="absolute inset-x-0 bottom-0 h-2/3 pointer-events-none rounded-b-2xl z-0" 
                    style={{ 
                      background: 'linear-gradient(to top, rgba(15, 15, 15, 0.95) 0%, rgba(15, 15, 15, 0.55) 55%, transparent 100%)' 
                    }} 
                  />

                  {isActive ? (
                    <>
                      {/* Top Action Badges */}
                      <div className="absolute top-4 sm:top-6 inset-x-4 sm:inset-x-6 z-20 flex items-center justify-between pointer-events-none">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-xs font-mono uppercase tracking-wider text-slate-200 shadow-md">
                          {project.category}
                        </span>

                        <span className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 rounded-full bg-black/70 group-hover:bg-white/20 backdrop-blur-md border border-white/25 text-xs font-medium text-white shadow-xl transition-all">
                          View Project Details
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </span>
                      </div>

                      {/* Bottom Project Name & Info - Clean and Never Clipped */}
                      <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 md:p-10 flex flex-col justify-end pointer-events-none z-10 select-none">
                        <div className="flex items-end justify-between gap-4">
                          <div className="max-w-2xl">
                            <motion.h3 
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.5 }}
                              className="text-2xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-white leading-[1.08] drop-shadow-lg"
                            >
                              {project.title}
                            </motion.h3>

                            <p className="mt-2 text-xs sm:text-sm text-slate-300 font-sans line-clamp-1 max-w-xl hidden sm:block">
                              {project.subtitle}
                            </p>
                          </div>

                          <div className="hidden sm:flex items-center gap-2 shrink-0 pointer-events-none">
                            <span className="text-xs font-mono uppercase tracking-widest text-white/90 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center gap-1.5 shadow-lg">
                              Click to expand
                              <ArrowUpRight className="w-3.5 h-3.5" />
                            </span>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    /* Inactive Slide - Display project name clearly as preview while dragging */
                    <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7 flex flex-col justify-end pointer-events-none z-10 select-none">
                      <span className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-slate-400 mb-1 line-clamp-1">
                        {project.category}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-white/90 line-clamp-1 drop-shadow-md">
                        {project.title}
                      </h3>
                    </div>
                  )}
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Pagination container */}
      <div className="mx-auto max-w-[100rem] w-full">
        <div className="custom-pagination">
          <div className="pagination-lines-container">
            {projects.map((_, i) => (
              <div 
                key={i} 
                className={"pagination-line " + (i === activeIndex ? "active" : "")} 
              />
            ))}
          </div>
          <div className="text-xl md:text-3xl font-bold text-gray-500 font-sans tracking-widest">
            <span className="text-white">
              {(activeIndex + 1).toString().padStart(2, '0')}
            </span> <span className="opacity-40">/ {(projects.length).toString().padStart(2, '0')}</span>
          </div>
        </div>
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
