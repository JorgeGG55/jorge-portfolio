import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import useDocumentTitle from "../hooks/useDocumentTitle";

const Projects = () => {
  const { t, i18n } = useTranslation();
  useDocumentTitle(t("pageTitles.projects"));

  const [projects, setProjects] = useState([]);
  const [project, setProject] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const swiperRef = useRef(null);

  useEffect(() => {
    const loadProjects = async () => {
      const response = await fetch(`/locales/${i18n.language}/projects.json`);
      const data = await response.json();
      const visibleProjects = data.projects.filter(p => p.visible !== false);
      setProjects(visibleProjects);
      setProject(visibleProjects[0]);
      setActiveIndex(0);
    };
    loadProjects();
  }, [i18n.language]);

  if (!project) return <div className="px-8 py-10 text-white/60">Loading...</div>;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.2, duration: 0.5, ease: "easeIn" } }}
      className="min-h-[80vh] flex flex-col justify-center xl:px-60 py-4 xl:py-10"
    >
      <div className="container mx-auto">
        <div className="flex flex-col px-4 sm:px-6 xl:px-0 xl:flex-row xl:gap-[30px] xl:items-start">
          {/* Image / Swiper - first on mobile, second column on desktop */}
          <div className="w-full xl:w-[50%] xl:h-[480px] order-1 xl:order-2 mb-5 xl:mb-0">
            <Swiper
              spaceBetween={20}
              slidesPerView={1}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              onSlideChange={(swiper) => {
                setActiveIndex(swiper.activeIndex);
                setProject(projects[swiper.activeIndex]);
              }}
              className="h-full"
            >
              {projects.map((proj, index) => (
                <SwiperSlide key={index} className="h-full">
                  <div className="h-[200px] sm:h-[260px] xl:h-[407px] relative group flex justify-center items-center border-2 border-secondary bg-transparent rounded-2xl overflow-hidden">
                    <a href={proj.live} target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-20">
                      <span className="sr-only">Open project {proj.title}</span>
                    </a>
                    <div className="absolute inset-0 bg-dark/10 z-10 rounded-3xl"></div>
                    <img
                      src={proj.image}
                      alt={proj.title}
                      className="object-contain w-full h-full"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Project info */}
          <div className="w-full xl:w-[50%] xl:h-[480px] flex flex-col gap-2 xl:gap-3 order-2 xl:order-1 xl:overflow-y-auto xl:pr-1">
            <div className="flex items-baseline gap-3">
              <div className="text-4xl sm:text-5xl xl:text-6xl font-extrabold text-o leading-none">
                {project.num}
              </div>
              <span className="text-xs sm:text-sm text-white/40 uppercase tracking-wider">
                {activeIndex + 1}/{projects.length}
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl xl:text-3xl font-bold text-white capitalize leading-tight">
              {t(project.category)}
            </h2>
            <p className="text-white/60 text-sm leading-relaxed">
              {t(project.description)}
            </p>
            {project.features && (
              <div>
                <h3 className="text-white font-semibold mb-1 text-sm">
                  {i18n.language === "es" ? "Funcionalidades" : "Key features"}
                </h3>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-x-6 gap-y-0.5 text-white/60 text-sm list-disc list-inside">
                  {project.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}
            <div className="flex flex-wrap gap-x-2 mt-1">
              {project.stack.map((item, index) => (
                <span key={index} className="text-xs sm:text-sm text-secondary">
                  {item.name}{index !== project.stack.length - 1 && ","}
                </span>
              ))}
            </div>
            <div className="border border-white/20 mt-1" />
            <div className="flex items-center gap-3 sm:gap-4">

              {project.live && (
                <div className="flex flex-col items-center gap-0.5">
                  <Link to={project.live} target="_blank" aria-label={`${project.title} - demo en vivo`}>
                    <div className="flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 bg-gray rounded-full hover:bg-white/10 transition">
                      <i className="fa-solid fa-arrow-up-right-from-square text-base sm:text-lg hover:text-secondary" aria-hidden="true"></i>
                    </div>
                  </Link>
                  <span className="text-[10px] sm:text-xs text-white/40">Live</span>
                </div>
              )}

              {project.githubFront && (
                <div className="flex flex-col items-center gap-0.5">
                  <Link to={project.githubFront} target="_blank" aria-label={`${project.title} - GitHub frontend`}>
                    <div className="flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 bg-gray rounded-full hover:bg-white/10 transition">
                      <i className="fab fa-github text-base sm:text-lg hover:text-secondary" aria-hidden="true"></i>
                    </div>
                  </Link>
                  <span className="text-[10px] sm:text-xs text-white/40">Front</span>
                </div>
              )}

              {project.githubBack && (
                <div className="flex flex-col items-center gap-0.5">
                  <Link to={project.githubBack} target="_blank" aria-label={`${project.title} - GitHub backend`}>
                    <div className="flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 bg-gray rounded-full hover:bg-white/10 transition">
                      <i className="fab fa-github text-base sm:text-lg hover:text-secondary" aria-hidden="true"></i>
                    </div>
                  </Link>
                  <span className="text-[10px] sm:text-xs text-white/40">Back</span>
                </div>
              )}

              {!project.githubFront && !project.githubBack && project.github && (
                <div className="flex flex-col items-center gap-0.5">
                  <Link to={project.github} target="_blank" aria-label={`${project.title} - GitHub`}>
                    <div className="flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 bg-gray rounded-full hover:bg-white/10 transition">
                      <i className="fab fa-github text-base sm:text-lg hover:text-secondary" aria-hidden="true"></i>
                    </div>
                  </Link>
                  <span className="text-[10px] sm:text-xs text-white/40">GitHub</span>
                </div>
              )}

            </div>
          </div>
        </div>

        {/* Slider navigation */}
        <div className="mt-6 xl:mt-8 pt-4 xl:pt-6 mx-4 sm:mx-6 xl:mx-0 border-t border-white/10 flex items-center justify-between text-xs sm:text-sm xl:text-base text-white/70 gap-2">

          <button
            onClick={() => swiperRef.current.slidePrev()}
            disabled={activeIndex === 0}
            aria-label="Anterior proyecto"
            className="hover:text-secondary transition disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:text-white/70 whitespace-nowrap"
          >
            <span className="hidden sm:inline">← Anterior proyecto</span>
            <span className="sm:hidden">← Anterior</span>
          </button>

          <div className="text-center text-white/80 min-w-0 truncate">
            <span className="font-semibold">{activeIndex + 1}/{projects.length}</span>
            <span className="hidden sm:inline">{" — "}</span>
            <span className="capitalize hidden sm:inline">{project.title}</span>
          </div>

          <button
            onClick={() => swiperRef.current.slideNext()}
            disabled={activeIndex === projects.length - 1}
            aria-label="Siguiente proyecto"
            className="hover:text-secondary transition disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:text-white/70 whitespace-nowrap"
          >
            <span className="hidden sm:inline">Siguiente proyecto →</span>
            <span className="sm:hidden">Siguiente →</span>
          </button>

        </div>

      </div>
    </motion.div>
  );
};

export default Projects;
