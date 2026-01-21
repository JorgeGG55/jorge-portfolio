import React, { useState, useEffect } from "react";
import DownloadButton from "./DownloadButton";
import { motion } from "framer-motion";
import myImage from "../assets/jorge.jpg";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t, i18n } = useTranslation();

  const [featuredProject, setFeaturedProject] = useState(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const scrollToFeatured = () => {
    const section = document.getElementById("featured-projects");
    if (!section) return;

    const yOffset = 100;
    const y =
      section.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const loadFeaturedProject = async () => {
      const response = await fetch(`/locales/${i18n.language}/projects.json`);
      const data = await response.json();
      setFeaturedProject(data.projects[0]);
    };

    loadFeaturedProject();
  }, [i18n.language]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.2, duration: 0.5, ease: "easeIn" },
      }}
    >
      {/* HERO */}
      <section className="relative h-[70vh] px-4 sm:px-8 xl:px-60">
        <div className="container mx-auto h-full flex items-center">
          <div className="flex flex-col xl:flex-row items-center justify-between w-full">

            {/* LEFT */}
            <div className="text-center xl:text-left order-2 xl:order-none">
              <span className="text-lg sm:text-xl">
                {t("fullStackDeveloper")}
              </span>

              <h1 className="h1 mb-4 sm:mb-6">
                {t("hello")} <br />
                <span className="text-secondary text-[35px] sm:text-[45px] 2xl:text-8xl">
                  Jorge Gravel
                </span>
              </h1>

              <p className="max-w-[400px] sm:max-w-[500px] mb-6 sm:mb-9 text-white/80">
                {t("description")}
              </p>

              <div className="flex flex-col xl:flex-row items-center gap-4 sm:gap-8">
                <DownloadButton />

                <div className="flex gap-6">
                  <a
                    href="https://github.com/JorgeGG55"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-github text-xl border border-secondary rounded-full p-2 text-secondary hover:bg-secondary hover:text-dark transition-all" />
                  </a>

                  <a
                    href="https://www.linkedin.com/in/jorge-gravel/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-linkedin-in text-xl border border-secondary rounded-full p-2 text-secondary hover:bg-secondary hover:text-dark transition-all" />
                  </a>
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="order-1 xl:order-none mb-10 xl:mb-0">
              <div className="w-[200px] sm:w-[250px] 2xl:w-[480px] h-[200px] sm:h-[250px] 2xl:h-[480px]">
                <img
                  src={myImage}
                  alt="Jorge Gravel"
                  className="object-cover rounded-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SCROLL CTA SEPARATOR */}
      <section className="flex flex-col items-center justify-center">
        <motion.div
          className="flex flex-col items-center gap-2 cursor-pointer select-none"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
          onClick={scrollToFeatured}
        >
          <span className="text-xs tracking-widest uppercase text-white/60">
            {t("featuredTitle")} {t("featuredTitleHighlight")}
          </span>
          <i className="fa-solid fa-chevron-down text-secondary text-2xl" />
        </motion.div>
      </section>

      {/* FEATURED PROJECT */}
      <section
        id="featured-projects"
        className="min-h-screen px-4 sm:px-8 xl:px-60 py-20"
      >
        <div className="container mx-auto">
          <h2 className="text-3xl xl:text-5xl font-bold text-center mb-12">
            {t("featuredTitle")}{" "}
            <span className="text-secondary">
              {t("featuredTitleHighlight")}
            </span>
          </h2>

          {featuredProject && (
            <Link to="/projects" className="group block max-w-5xl mx-auto">
              <div className="relative overflow-hidden rounded-2xl border-2 border-white/60">
                <img
                  src={featuredProject.image}
                  alt={featuredProject.title}
                  className="w-full h-[300px] sm:h-[650px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-dark/60 group-hover:bg-dark/40 transition-all duration-500" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="text-sm uppercase tracking-widest text-secondary">
                    {t(featuredProject.category)}
                  </span>
                  <h3 className="text-2xl sm:text-4xl font-bold text-white mt-2">
                    {featuredProject.title}
                  </h3>
                  <p className="text-white/80 mt-2 max-w-xl">
                    {t(featuredProject.description)}
                  </p>
                </div>
              </div>
            </Link>
          )}
        </div>
      </section>

      {/* SCROLL TO TOP */}
      {showScrollTop && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-secondary text-dark flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        >
          <i className="fa-solid fa-chevron-up text-xl" />
        </motion.button>
      )}
    </motion.div>
  );
};

export default Home;
