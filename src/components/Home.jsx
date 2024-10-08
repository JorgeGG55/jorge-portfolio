import React from "react";
import DownloadButton from "./DownloadButton";
import { motion } from "framer-motion";
import myImage from "../assets/jorge.jpg";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.2, duration: 0.5, ease: "easeIn" },
      }}
    >
      <section className="mt-2 sm:mt-4 xl:mt-0 h-[80vh] px-4 sm:px-8 xl:px-60">
        <div className="container mx-auto h-full flex">
          <div className="flex flex-col xl:flex-row items-center justify-between w-full">
            {/* Sección Izquierda */}
            <div className="text-center xl:text-left order-2 xl:order-none">
              <span className="text-lg sm:text-xl">{t("fullStackDeveloper")}</span>
              <h1 className="h1 mb-4 sm:mb-6">
                {t("hello")} <br />{" "}
                <span className="text-secondary w-full text-[35px] sm:text-[45px] 2xl:text-8xl">
                  Jorge Gravel
                </span>
              </h1>
              <p className="max-w-[400px] sm:max-w-[500px] mb-6 sm:mb-9 text-white/80">
                {t("description")}
              </p>
              <div className="flex flex-col xl:flex-row items-center gap-4 sm:gap-8 mb-6 sm:mb-10 xl:mb-0">
                <DownloadButton />
                <div className="mb-6 sm:mb-8 xl:mb-0">
                  <div className="flex gap-4 sm:gap-6">
                    <a
                      href="https://github.com/JorgeGG55"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-github text-xl sm:text-1xl border border-secondary rounded-full p-1 sm:p-2 text-secondary transition-all duration-500 hover:text-dark hover:bg-secondary"></i>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/jorge-gravel/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-linkedin-in text-xl sm:text-1xl border border-secondary rounded-full p-1 sm:p-2 text-secondary transition-all duration-500 hover:text-dark hover:bg-secondary"></i>
                    </a>
                    <a
                      href="https://youtube.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-youtube text-xl sm:text-1xl border border-secondary rounded-full p-1 sm:p-2 text-secondary transition-all duration-500 hover:text-dark hover:bg-secondary"></i>
                    </a>
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-twitter text-xl sm:text-1xl border border-secondary rounded-full p-1 sm:p-2 text-secondary transition-all duration-500 hover:text-dark hover:bg-secondary"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Sección Derecha */}
            <div className="order-1 xl:order-none mb-6 sm:mb-8 xl:mb-0">
              <div className="h-full relative">
                <div className="w-[200px] sm:w-[250px] 2xl:w-[498px] h-[200px] sm:h-[250px] 2xl:h-[498px]">
                  <img
                    src={myImage}
                    alt="Jorge Gravel"
                    className="object-cover rounded-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
