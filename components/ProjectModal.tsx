"use client";

import React, { useEffect, useState, useRef, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { X, ChevronLeft, ChevronRight, CheckCircle2, ArrowUpRight, Calendar, ExternalLink } from "lucide-react";
import { useLenis } from "lenis/react";
import { Project, projects as defaultProjects } from "@/lib/projects";

const emptySubscribe = () => () => {};

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
  onSelectProject?: (project: Project) => void;
  allProjects?: Project[];
}

export default function ProjectModal({
  project,
  isOpen,
  onClose,
  onSelectProject,
  allProjects = defaultProjects,
}: ProjectModalProps) {
  const isMounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  const lenis = useLenis();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [selectedImageState, setSelectedImageState] = useState<{ projectId: string; index: number } | null>(null);

  // Keep latest handlers and projects in refs for keyboard event listeners
  const onCloseRef = useRef(onClose);
  const onSelectProjectRef = useRef(onSelectProject);
  const nextProjectRef = useRef<Project | null>(null);
  const prevProjectRef = useRef<Project | null>(null);

  const currentIndex = project
    ? Math.max(0, allProjects.findIndex((p) => p.id === project.id))
    : 0;

  const prevProject =
    allProjects.length > 0
      ? allProjects[(currentIndex - 1 + allProjects.length) % allProjects.length]
      : null;

  const nextProject =
    allProjects.length > 0
      ? allProjects[(currentIndex + 1) % allProjects.length]
      : null;

  useEffect(() => {
    onCloseRef.current = onClose;
    onSelectProjectRef.current = onSelectProject;
    nextProjectRef.current = nextProject;
    prevProjectRef.current = prevProject;
  });

  const activeImageIndex =
    selectedImageState && project && selectedImageState.projectId === project.id
      ? selectedImageState.index
      : 0;

  // Reset scroll position to top whenever project changes
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = 0;
    }
  }, [project?.id]);

  // Lock page scrolling (native body/html and Lenis virtual scroll) when open
  useEffect(() => {
    if (!isOpen) return;

    lenis?.stop();

    const originalBodyOverflow = document.body.style.overflow;
    const originalHtmlOverflow = document.documentElement.style.overflow;

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    document.body.classList.add("modal-open");

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onCloseRef.current();
      } else if (e.key === "ArrowRight") {
        if (nextProjectRef.current && onSelectProjectRef.current) {
          e.preventDefault();
          onSelectProjectRef.current(nextProjectRef.current);
        }
      } else if (e.key === "ArrowLeft") {
        if (prevProjectRef.current && onSelectProjectRef.current) {
          e.preventDefault();
          onSelectProjectRef.current(prevProjectRef.current);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      lenis?.start();
      document.body.style.overflow = originalBodyOverflow;
      document.documentElement.style.overflow = originalHtmlOverflow;
      document.body.classList.remove("modal-open");
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, lenis]);

  if (!isMounted) return null;

  const handlePrev = (e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    if (onSelectProject && prevProject) {
      onSelectProject(prevProject);
    }
  };

  const handleNext = (e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    if (onSelectProject && nextProject) {
      onSelectProject(nextProject);
    }
  };

  const handleClose = (e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    onClose();
  };

  const handleBookCallClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onClose();
    setTimeout(() => {
      const calendlyElem =
        document.getElementById("calendly") ||
        document.getElementById("book-call") ||
        document.querySelector("iframe[title*='Calendly']")?.closest("section");
      if (calendlyElem) {
        calendlyElem.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 150);
  };

  const displayImage =
    project && project.gallery && project.gallery.length > activeImageIndex
      ? project.gallery[activeImageIndex]
      : project?.src || "";

  return createPortal(
    <AnimatePresence>
      {isOpen && project && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
          data-lenis-prevent
          className="fixed inset-0 z-[999999] flex items-center justify-center p-3 sm:p-5 md:p-8 overscroll-contain"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={handleClose}
            data-lenis-prevent
            className="fixed inset-0 bg-black/85 backdrop-blur-md cursor-pointer"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 15 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            data-lenis-prevent
            className="relative w-full max-w-5xl max-h-[92vh] flex flex-col bg-[#141414] border border-white/15 rounded-2xl sm:rounded-3xl shadow-2xl text-white overflow-hidden z-10 overscroll-contain"
          >
            {/* Top Bar Header */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-4 border-b border-white/10 bg-[#171717] sticky top-0 z-30">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-400 font-mono">
                <span className="uppercase tracking-wider text-white font-semibold">
                  {project.title}
                </span>
                <span aria-hidden="true" className="text-white/30">
                  /
                </span>
                <span className="truncate max-w-[150px] sm:max-w-xs text-slate-300">
                  {project.category}
                </span>
              </div>

              <div className="flex items-center gap-2 sm:gap-3">
                {/* View Site Direct Link in Top Bar */}
                {project.href && (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-xs font-medium text-white transition-colors cursor-pointer"
                  >
                    <span>View Site</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}

                {/* Navigation through projects */}
                {allProjects.length > 1 && (
                  <div className="flex items-center gap-1 bg-white/5 border border-white/10 rounded-full p-1">
                    <button
                      type="button"
                      onClick={handlePrev}
                      className="w-8 h-8 flex items-center justify-center hover:text-white text-slate-300 hover:bg-white/15 rounded-full transition-colors cursor-pointer"
                      title={prevProject ? `Previous: ${prevProject.title}` : "Previous project"}
                      aria-label="Previous Project"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <span className="text-xs font-mono px-2 text-slate-300 select-none">
                      {currentIndex + 1} / {allProjects.length}
                    </span>
                    <button
                      type="button"
                      onClick={handleNext}
                      className="w-8 h-8 flex items-center justify-center hover:text-white text-slate-300 hover:bg-white/15 rounded-full transition-colors cursor-pointer"
                      title={nextProject ? `Next: ${nextProject.title}` : "Next project"}
                      aria-label="Next Project"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                )}

                {/* Close Button */}
                <button
                  type="button"
                  onClick={handleClose}
                  aria-label="Close project modal"
                  className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all focus:outline-none focus:ring-2 focus:ring-white/40 cursor-pointer shadow-md"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Scrollable Body */}
            <div
              ref={scrollRef}
              data-lenis-prevent
              className="overflow-y-auto px-5 sm:px-8 md:px-10 py-6 sm:py-8 space-y-10 custom-scrollbar overscroll-contain"
            >
              {/* Media Gallery / Hero Visual */}
              <div className="space-y-4">
                {project.href ? (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={`Click to visit ${project.title} live site`}
                    className="group/img relative block w-full aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden bg-white/5 border border-white/15 hover:border-white/35 transition-all duration-300 shadow-xl cursor-pointer"
                  >
                    <Image
                      src={displayImage}
                      alt={project.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 1000px"
                      className="object-cover transition-transform duration-700 group-hover/img:scale-105"
                      referrerPolicy="no-referrer"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between pointer-events-none">
                      <span className="text-xs uppercase tracking-widest px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-white/90">
                        Case Study
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white text-[#121212] font-semibold text-xs shadow-xl group-hover/img:bg-slate-200 transition-all pointer-events-none">
                        <span>View Live Site</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </a>
                ) : (
                  <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden bg-white/5 border border-white/10 shadow-lg">
                    <Image
                      src={displayImage}
                      alt={project.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 1000px"
                      className="object-cover transition-all duration-500"
                      referrerPolicy="no-referrer"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between pointer-events-none">
                      <span className="text-xs uppercase tracking-widest px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-white/90">
                        Case Study
                      </span>
                    </div>
                  </div>
                )}

                {/* Gallery Thumbnails (if multiple images) */}
                {project.gallery && project.gallery.length > 1 && (
                  <div className="flex gap-3 overflow-x-auto pb-1 pt-1">
                    {project.gallery.map((imgUrl, idx) => (
                      <button
                        type="button"
                        key={idx}
                        onClick={() => setSelectedImageState({ projectId: project.id, index: idx })}
                        className={`relative w-20 sm:w-24 aspect-[16/10] rounded-lg overflow-hidden border-2 transition-all flex-shrink-0 cursor-pointer ${
                          activeImageIndex === idx
                            ? "border-white shadow-md scale-[1.02]"
                            : "border-white/15 opacity-60 hover:opacity-100"
                        }`}
                      >
                        <Image
                          src={imgUrl}
                          alt={`${project.title} view ${idx + 1}`}
                          fill
                          className="object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Title & Subtitle */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                <div className="max-w-3xl">
                  <h2
                    id="project-modal-title"
                    className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4"
                  >
                    {project.title}
                  </h2>
                  <p className="text-base sm:text-xl text-[#e5e5e5] leading-relaxed font-light">
                    {project.subtitle}
                  </p>
                </div>
                {project.href && (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white text-black font-semibold text-xs sm:text-sm hover:bg-slate-200 transition-all shadow-md shrink-0 w-fit cursor-pointer"
                  >
                    <span>View Site</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                )}
              </div>

              {/* Project Meta: Client, Role, Deliverables */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-6 sm:p-7 rounded-2xl bg-white/[0.03] border border-white/5">
                <div>
                  <div className="text-xs uppercase font-mono tracking-wider text-slate-500 mb-1.5">
                    Client
                  </div>
                  <div className="text-sm sm:text-base font-semibold text-white">
                    {project.client}
                  </div>
                </div>
                <div>
                  <div className="text-xs uppercase font-mono tracking-wider text-slate-500 mb-1.5">
                    Role
                  </div>
                  <div className="text-sm sm:text-base font-semibold text-white">
                    {project.role || "Lead Creative Developer & E-Commerce Architect"}
                  </div>
                </div>
                <div>
                  <div className="text-xs uppercase font-mono tracking-wider text-slate-500 mb-1.5">
                    Deliverables
                  </div>
                  <div className="text-sm sm:text-base font-semibold text-white">
                    {project.deliverablesType || "Production Concept"}
                  </div>
                </div>
              </div>

              {/* Project Narrative: Executive Summary / Overview */}
              <div className="space-y-4">
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Executive Summary
                </h3>
                <p className="text-[#d8d8d8] text-base sm:text-lg leading-relaxed">
                  {project.executiveSummary || project.overview}
                </p>
              </div>

              {/* Challenge & Solution Side by Side */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 space-y-3">
                  <h4 className="text-lg font-semibold text-white flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-red-400" />
                    The Challenge
                  </h4>
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                    {project.challenge}
                  </p>
                </div>
                <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 space-y-3">
                  <h4 className="text-lg font-semibold text-white flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    The Solution
                  </h4>
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              </div>

              {/* Key Deliverables & Tech Stack */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
                {/* Deliverables List (2 cols) */}
                <div className="md:col-span-2 space-y-4">
                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                    Deliverables
                  </h3>
                  {project.deliverableSummary && (
                    <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-3">
                      {project.deliverableSummary}
                    </p>
                  )}
                  <div className="space-y-3">
                    {project.keyDeliverables.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="text-sm sm:text-base text-[#e0e0e0] leading-snug">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack (1 col) */}
                <div className="space-y-4">
                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                    Tech Stack &amp; Disciplines
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-xs font-mono font-medium rounded-md bg-white/10 text-white/90 border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom CTA & Navigation Bar */}
              <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="text-center md:text-left">
                  <h4 className="text-base sm:text-lg font-bold text-white">
                    Ready to build something extraordinary?
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-400">
                    Let&apos;s discuss how we can engineer similar results for your business.
                  </p>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-2.5 w-full md:w-auto">
                  {allProjects.length > 1 && (
                    <>
                      <button
                        type="button"
                        onClick={handlePrev}
                        className="px-3.5 py-2.5 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 text-white text-xs sm:text-sm font-medium transition-colors flex items-center gap-1.5 cursor-pointer"
                      >
                        <ChevronLeft className="w-4 h-4" />
                        Prev
                      </button>
                      <button
                        type="button"
                        onClick={handleNext}
                        className="px-3.5 py-2.5 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 text-white text-xs sm:text-sm font-medium transition-colors flex items-center gap-1.5 cursor-pointer"
                      >
                        Next
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </>
                  )}

                  {project.href && (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2.5 rounded-xl bg-white text-[#121212] font-semibold text-xs sm:text-sm hover:bg-slate-200 transition-colors flex items-center justify-center gap-2 shadow-lg cursor-pointer"
                    >
                      <span>View Site</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  )}

                  <button
                    type="button"
                    onClick={handleBookCallClick}
                    className="px-4 py-2.5 rounded-xl border border-white/20 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm transition-colors flex items-center justify-center gap-2 shadow-md cursor-pointer"
                  >
                    <Calendar className="w-4 h-4" />
                    Book Call
                  </button>

                  <button
                    type="button"
                    onClick={handleClose}
                    className="px-3.5 py-2.5 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white text-xs sm:text-sm font-medium transition-colors cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
}
