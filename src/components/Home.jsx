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
      <section className="mt-2 xl:mt-0 h-full px-8 xl:px-60">
        <div className="container mx-auto h-full">
          <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-24 xl:pb-24">
            {/* Sección Izquierda */}
            <div className="text-center xl:text-left order-2 xl:order-none">
              <span className="text-xl">{t("fullStackDeveloper")}</span>
              <h1 className="h1 mb-6">
                {t("hello")} <br />{" "}
                <span className="text-secondary w-full text-[45px]">
                  Jorge Gravel
                </span>
              </h1>
              <p className="max-w-[500px] mb-9 text-white/80">
                {t("description")}
              </p>
              <div className="flex flex-col xl:flex-row items-center gap-8 mb-10 xl:mb-0">
                <DownloadButton />
                <div className="mb-8 xl:mb-0">
                  <div className="flex gap-6">
                    <a
                      href="https://github.com/JorgeGG55"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-github text-1xl border border-secondary rounded-full p-2 text-secondary transition-all duration-500 hover:text-dark hover:bg-secondary"></i>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/jorge-gravel/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-linkedin-in text-1xl border border-secondary rounded-full p-2 text-secondary transition-all duration-500 hover:text-dark hover:bg-secondary"></i>
                    </a>
                    <a
                      href="https://youtube.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-youtube text-1xl border border-secondary rounded-full p-2 text-secondary transition-all duration-500 hover:text-dark hover:bg-secondary"></i>
                    </a>
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-twitter text-1xl border border-secondary rounded-full p-2 text-secondary transition-all duration-500 hover:text-dark hover:bg-secondary"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Sección Derecha */}
            <div className="order-1 xl:order-none mb-8 xl:mb-0">
              <div className="h-full relative">
                <div className="w-[250px] h-[250px] xl:w-[498px] xl:h-[498px]">
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
