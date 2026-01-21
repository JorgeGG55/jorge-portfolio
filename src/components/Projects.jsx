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

      const visibleProjects = data.projects.filter(
        (project) => project.visible !== false
      );

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
      animate={{
        opacity: 1,
        transition: { delay: 0.2, duration: 0.5, ease: "easeIn" }
      }}
      className="min-h-[80vh] flex flex-col justify-center xl:px-60"
    >
      <div className="container mx-auto">

        {/* MAIN CONTENT */}
        <div className="flex flex-col px-8 xl:px-0 xl:flex-row xl:gap-[30px]">

          {/* LEFT */}
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[17px] h-[50%]">

              <div className="text-[5rem] xl:text-7xl font-extrabold text-o">
                {project.num}
              </div>

              <h2 className="text-3xl xl:text-[43px] font-bold text-white capitalize">
                {t(project.category)}
              </h2>

              <p className="text-white/60">
                {t(project.description)}
              </p>

              {/* FEATURES */}
              {project.features && (
                <div>
                  <h3 className="text-white font-semibold mb-2">
                    {i18n.language === "es" ? "Funcionalidades" : "Key features"}
                  </h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-1 text-white/60 text-sm list-disc list-inside">
                    {project.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}

              <ul className="flex flex-wrap gap-4">
                {project.stack.map((item, index) => (
                  <li key={index} className="text-xl text-secondary">
                    {item.name}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>

              <div className="border border-white/20" />

              <div className="flex items-center gap-4">
                <Link to={project.live} target="_blank">
                  <div className="flex items-center justify-center w-16 h-16 bg-gray rounded-full">
                    <i className="fa-solid fa-arrow-up-right-from-square text-2xl hover:text-secondary"></i>
                  </div>
                </Link>
                <Link to={project.github} target="_blank">
                  <div className="flex items-center justify-center w-16 h-16 bg-gray rounded-full">
                    <i className="fab fa-github text-2xl hover:text-secondary"></i>
                  </div>
                </Link>
              </div>

            </div>
          </div>

          {/* RIGHT */}
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              onSlideChange={(swiper) => {
                setActiveIndex(swiper.activeIndex);
                setProject(projects[swiper.activeIndex]);
              }}
              className="xl:h-[520px]"
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index}>
                  <div className="h-[350px] xl:h-[460px] relative group flex justify-center items-center border-2 border-secondary bg-transparent rounded-3xl">

                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute inset-0 z-20"
                    >
                      <span className="sr-only">Open project</span>
                    </a>

                    <div className="absolute inset-0 bg-dark/10 z-10 rounded-3xl"></div>

                    <img
                      src={project.image}
                      alt={project.title}
                      className="object-cover w-full h-full rounded-3xl"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

        </div>

        {/* PROJECT NAVIGATION – FULL WIDTH + EXTRA */}
        <div className="mt-12 pt-6 border-t border-white/10 px-8 xl:px-0 flex items-center justify-between text-sm xl:text-base text-white/70">

          {/* PREVIOUS */}
          {activeIndex > 0 ? (
            <button
              onClick={() => swiperRef.current.slidePrev()}
              className="hover:text-secondary transition"
            >
              ← Anterior proyecto
            </button>
          ) : (
            <div />
          )}

          {/* CENTER */}
          <div className="text-center text-white/80">
            <span className="font-semibold">
              {activeIndex + 1}/{projects.length}
            </span>
            {" — "}
            <span className="capitalize hidden xl:inline">
              {project.title}
            </span>
          </div>

          {/* NEXT */}
          {activeIndex < projects.length - 1 ? (
            <button
              onClick={() => swiperRef.current.slideNext()}
              className="hover:text-secondary transition"
            >
              Siguiente proyecto →
            </button>
          ) : (
            <div />
          )}
        </div>

      </div>
    </motion.div>
  );
};

export default Projects;
