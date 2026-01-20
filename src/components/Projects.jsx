import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import SliderBtns from "./SliderBtns";

const Projects = () => {
  const { t, i18n } = useTranslation();
  const [projects, setProjects] = useState([]);
  const [project, setProject] = useState(null);

  useEffect(() => {
    const loadProjects = async () => {
      const response = await fetch(`/locales/${i18n.language}/projects.json`);
      const data = await response.json();

      const visibleProjects = data.projects.filter(
        (project) => project.visible !== false
      );

      setProjects(visibleProjects);
      setProject(visibleProjects[0]);
    };

    loadProjects();
  }, [i18n.language]);

  const handleSlideChange = (swiper) => {
    setProject(projects[swiper.activeIndex]);
  };

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
              onSlideChange={handleSlideChange}
              className="xl:h-[520px] mb-12"
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index}>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block h-full w-full"
                  >
                    <div className="h-[350px] xl:h-[460px] relative group flex justify-center items-center border-2 border-secondary bg-transparent rounded-3xl">
                      <div className="absolute inset-0 bg-dark/10 z-10"></div>
                      <img
                        src={project.image}
                        alt={project.title}
                        className="object-cover w-full h-full rounded-3xl"
                      />
                    </div>
                  </a>
                </SwiperSlide>
              ))}

              <SliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max"
                btnStyles="bg-secondary rounded-full hover:bg-secondary-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
