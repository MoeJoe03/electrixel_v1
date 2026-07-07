"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "motion/react";
import { EffectCoverflow, Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

const featuredProjects = [
  {
    title: "SAIIIW",
    src: "https://qnelsjzfuynqotkwojxv.supabase.co/storage/v1/object/public/Electrixel/our%20work/saiiiw/image_!.jpeg",
    alt: "SAIIIW",
  },
  {
    title: "SUNSHINE THAI MASSAGE",
    src: "https://qnelsjzfuynqotkwojxv.supabase.co/storage/v1/object/public/Electrixel/our%20work/sunshine/website_development_johannesburg_spa_website.jpeg",
    alt: "Sunshine Thai Massage",
  },
  {
    title: "PAT PRESS",
    src: "https://qnelsjzfuynqotkwojxv.supabase.co/storage/v1/object/public/Electrixel/our%20work/pat%20press/web_design_johannesburg_print_shop.jpeg",
    alt: "Pat Press",
  },
  {
    title: "MOVEX",
    src: "https://qnelsjzfuynqotkwojxv.supabase.co/storage/v1/object/public/Electrixel/our%20work/movex/website_design_jhb_logistics_company_web_development.jpeg",
    alt: "Movex Dashboard",
  },
  {
    title: "AURELIA HOME",
    src: "https://qnelsjzfuynqotkwojxv.supabase.co/storage/v1/object/public/Electrixel/our%20work/aurelia/website_jhb_furniture_site_.jpeg",
    alt: "Aurelia Home",
  }
];

export default function FeaturedProjects() {
  const [activeIndex, setActiveIndex] = useState(0);

  const css = `
  .featured-swiper .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 85%;
    max-width: 800px;
    height: auto;
    aspect-ratio: 16 / 10;
    opacity: 0.3;
    transition: opacity 0.5s ease, transform 0.5s ease;
  }

  @media (min-width: 768px) {
    .featured-swiper .swiper-slide {
      width: 60%;
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
          className="text-4xl sm:text-5xl lg:text-[4rem] font-bold text-white mb-6 lg:mb-8 tracking-tight">Our Work</motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="text-[#f1f1f1] text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl">
          A selection of our latest projects, crafted with precision and driven by strategy.
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
          spaceBetween={100}
          coverflowEffect={{
            rotate: 0,
            stretch: -40,
            depth: 200,
            modifier: 1,
            slideShadows: false,
          }}
          onSlideChange={(swiper) => {
            setActiveIndex(swiper.realIndex);
          }}
          modules={[EffectCoverflow]}
        >
          {featuredProjects.map((project, index) => (
            <SwiperSlide key={index}>
              {({ isActive }) => (
                <div className="relative w-full h-full group">
                  <Image
                    src={project.src}
                    alt={project.alt}
                    fill
                    className="object-cover rounded-md"
                    referrerPolicy="no-referrer"
                  />
                  {isActive && (
                    <>
                      <div 
                        className="absolute inset-x-0 bottom-0 h-1/2 pointer-events-none rounded-b-md z-0" 
                        style={{ 
                          backdropFilter: 'blur(12px)', 
                          WebkitBackdropFilter: 'blur(12px)',
                          maskImage: 'linear-gradient(to top, black 0%, transparent 100%)',
                          WebkitMaskImage: 'linear-gradient(to top, black 0%, transparent 100%)'
                        }} 
                      />
                      <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none rounded-b-md z-0" />
                      
                      <div className="absolute inset-0 flex items-end justify-start pointer-events-none p-6 sm:p-0">
                        <motion.h3 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.2 }}
                          className="text-3xl sm:text-[50px] font-bold uppercase tracking-wide leading-[1.1] sm:mb-6 sm:-ml-12 md:-ml-24 z-10 font-sans mix-blend-difference"
                        >
                          {project.title.split(' ').map((word, i, arr) => {
                            // Break string roughly in half or after specific words
                            if (i === Math.floor(arr.length / 2)) {
                              return <React.Fragment key={i}><br/>{word} </React.Fragment>;
                            }
                            return word + " ";
                          })}
                        </motion.h3>
                      </div>
                    </>
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
            {featuredProjects.map((_, i) => (
              <div 
                key={i} 
                className={"pagination-line " + (i === activeIndex ? "active" : "")} 
              />
            ))}
          </div>
          <div className="text-xl md:text-3xl font-bold text-gray-500 font-sans tracking-widest">
            <span className="text-white">
              {(activeIndex + 1).toString().padStart(2, '0')}
            </span> <span className="opacity-40">/ {(featuredProjects.length).toString().padStart(2, '0')}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
