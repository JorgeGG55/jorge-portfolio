import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

const Projects = () => {
  const { t, i18n } = useTranslation();

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

  if (!project) return <div>Loading...</div>;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.2, duration: 0.5, ease: "easeIn" } }}
      className="min-h-[80vh] flex flex-col justify-center xl:px-60 py-10"
    >
      <div className="container mx-auto">
        <div className="flex flex-col px-8 xl:px-0 xl:flex-row xl:gap-[30px] xl:items-start">
          <div className="w-full xl:w-[50%] xl:h-[480px] flex flex-col gap-3 order-2 xl:order-none overflow-y-auto pr-1">
            <div className="text-[4rem] xl:text-6xl font-extrabold text-o leading-none">
              {project.num}
            </div>
            <h2 className="text-2xl xl:text-3xl font-bold text-white capitalize leading-tight">
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
                <ul className="grid grid-cols-2 gap-x-8 gap-y-0.5 text-white/60 text-sm list-disc list-inside">
                  {project.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}
            <div className="flex flex-wrap gap-x-2">
              {project.stack.map((item, index) => (
                <span key={index} className="text-sm text-secondary">
                  {item.name}{index !== project.stack.length - 1 && ","}
                </span>
              ))}
            </div>
            <div className="border border-white/20" />
            <div className="flex items-center gap-4">
              <div className="flex flex-col items-center gap-0.5">
                <Link to={project.live} target="_blank">
                  <div className="flex items-center justify-center w-12 h-12 bg-gray rounded-full hover:bg-white/10 transition">
                    <i className="fa-solid fa-arrow-up-right-from-square text-lg hover:text-secondary"></i>
                  </div>
                </Link>
                <span className="text-xs text-white/40">Live</span>
              </div>
              <div className="flex flex-col items-center gap-0.5">
                <Link to={project.githubFront} target="_blank">
                  <div className="flex items-center justify-center w-12 h-12 bg-gray rounded-full hover:bg-white/10 transition">
                    <i className="fab fa-github text-lg hover:text-secondary"></i>
                  </div>
                </Link>
                <span className="text-xs text-white/40">Front</span>
              </div>
              <div className="flex flex-col items-center gap-0.5">
                <Link to={project.githubBack} target="_blank">
                  <div className="flex items-center justify-center w-12 h-12 bg-gray rounded-full hover:bg-white/10 transition">
                    <i className="fab fa-github text-lg hover:text-secondary"></i>
                  </div>
                </Link>
                <span className="text-xs text-white/40">Back</span>
              </div>
            </div>
          </div>

          <div className="w-full xl:w-[50%] xl:h-[480px] mb-8 xl:mb-0">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              onSlideChange={(swiper) => {
                setActiveIndex(swiper.activeIndex);
                setProject(projects[swiper.activeIndex]);
              }}
              className="h-full"
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index} className="h-full">
                  <div className="h-[300px] xl:h-[480px] relative group flex justify-center items-center border-2 border-secondary bg-transparent rounded-3xl overflow-hidden">
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-20">
                      <span className="sr-only">Open project</span>
                    </a>
                    <div className="absolute inset-0 bg-dark/10 z-10 rounded-3xl"></div>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="object-cover object-top w-full h-full"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-white/10 px-8 xl:px-0 flex items-center justify-between text-sm xl:text-base text-white/70">

          <button
            onClick={() => swiperRef.current.slidePrev()}
            disabled={activeIndex === 0}
            className="hover:text-secondary transition disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:text-white/70"
          >
            ← Anterior proyecto
          </button>

          <div className="text-center text-white/80">
            <span className="font-semibold">{activeIndex + 1}/{projects.length}</span>
            {" — "}
            <span className="capitalize hidden xl:inline">{project.title}</span>
          </div>

          <button
            onClick={() => swiperRef.current.slideNext()}
            disabled={activeIndex === projects.length - 1}
            className="hover:text-secondary transition disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:text-white/70"
          >
            Siguiente proyecto →
          </button>

        </div>

      </div>
    </motion.div>
  );
};

export default Projects;