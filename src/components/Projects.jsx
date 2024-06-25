import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import projects from "../data/projects.json";
import "swiper/swiper-bundle.css";
import SliderBtns from "./SliderBtns";

const Projects = () => {
  const { t } = useTranslation();
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 0.2, duration: 0.5, ease: "easeIn" },
        }}
        className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
      >
        <div className="container mx-auto">
          <div className="flex flex-col px-8 xl:px-0 xl:flex-row xl:gap-[30px]">
            <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
              <div className="flex flex-col gap-[30px] h-[50%]">
                <div className="text-8xl leading-none font-extrabold text-o">
                  {project.num}
                </div>
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-secondary transition-all duration-500 capitalize">
                  {project.category} project
                </h2>
                <p className="text-white/60">{project.description}</p>
                <ul className="flex gap-4">
                  {project.stack.map((item, index) => {
                    return (
                      <li key={index} className="text-xl text-secondary">
                        {item.name}
                        {index !== project.stack.length - 1 && ","}
                      </li>
                    );
                  })}
                </ul>
                <div className="border border-white/20"></div>
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
            <div className="w-full xl:w-[50%]">
              <Swiper
                spaceBetween={30}
                slidesPerView={1}
                onSlideChange={handleSlideChange}
                className="xl:h-[520px] mb-12"
              >
                {projects.map((project, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <div className="h-[460px] relative group flex justify-center items-center bg-white/60">
                        <div className="absolute top-0 bottom-0 w-full h-full bg-dark/10 z-10"></div>
                        <div className="relative w-full h-full">
                          <img
                            src={project.image}
                            alt=""
                            className="object-cover w-full h-full"
                          />
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
                <SliderBtns
                  containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                  btnStyles="bg-secondary rounded-full hover:bg-secondary-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center trasition-all"
                />
              </Swiper>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Projects;