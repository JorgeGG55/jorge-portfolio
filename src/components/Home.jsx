import { motion } from "framer-motion";
import DownloadButton from "./DownloadButton";
import myImage from "../assets/jorge.jpg";
import { useTranslation } from "react-i18next";
import useDocumentTitle from "../hooks/useDocumentTitle";

const Home = () => {
  const { t } = useTranslation();
  useDocumentTitle(t("pageTitles.home"));

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.2, duration: 0.5, ease: "easeIn" },
      }}
    >
      <section className="relative min-h-[calc(100vh-180px)] px-4 sm:px-8 xl:px-60 pt-6 pb-16 xl:pt-10 xl:pb-20">
        <div className="container mx-auto h-full flex items-center">
          <div className="flex flex-col xl:flex-row items-center justify-between w-full">
            <div className="text-center xl:text-left order-2 xl:order-none">
              <span className="text-lg sm:text-xl text-white/80">
                {t("fullStackDeveloper")}
              </span>

              <h1 className="h1 mb-4 sm:mb-6">
                {t("hello")} <br />
                <span className="text-secondary text-[35px] sm:text-[45px] 2xl:text-8xl">
                  Jorge Gravel
                </span>
              </h1>

              <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-full border border-secondary/40 bg-secondary/10">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
                </span>
                <span className="text-sm text-secondary font-medium">
                  {t("availableForWork")}
                </span>
              </div>

              <p className="max-w-[400px] sm:max-w-[500px] mb-8 text-white/80">
                {t("description")}
              </p>

              <div className="flex flex-col xl:flex-row items-center gap-6">
                <DownloadButton />

                <div className="flex gap-6">
                  <a
                    href="https://github.com/JorgeGG55"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub de Jorge Gravel"
                    title="GitHub"
                  >
                    <i className="fab fa-github text-xl border border-secondary rounded-full p-2 text-secondary hover:bg-secondary hover:text-dark transition-all" aria-hidden="true" />
                  </a>

                  <a
                    href="https://www.linkedin.com/in/jorge-gravel/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn de Jorge Gravel"
                    title="LinkedIn"
                  >
                    <i className="fab fa-linkedin-in text-xl border border-secondary rounded-full p-2 text-secondary hover:bg-secondary hover:text-dark transition-all" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
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

        {/* Scroll indicator */}
        <a
          href="#about"
          aria-label={t("aboutMeTitle")}
          className="hidden xl:flex absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-white/40 hover:text-secondary transition-colors group"
        >
          <span className="text-xs uppercase tracking-widest">{t("aboutMeTitle")}</span>
          <i className="fa-solid fa-chevron-down text-lg animate-bounce" aria-hidden="true" />
        </a>
      </section>

      {/* Sobre mí */}
      <section
        id="about"
        aria-labelledby="about-title"
        className="px-4 sm:px-8 xl:px-60 pb-20 xl:pb-32"
      >
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto bg-gray/40 border border-white/5 rounded-2xl p-6 sm:p-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-8 bg-secondary" aria-hidden="true" />
              <h2
                id="about-title"
                className="text-2xl sm:text-3xl font-bold text-white"
              >
                {t("aboutMeTitle")}
              </h2>
            </div>
            <div className="flex flex-col gap-4 text-white/75 leading-relaxed">
              {t("aboutMe", { returnObjects: true }).map((para, index) => (
                <p key={index}>{para}</p>
              ))}
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
