import { motion } from "framer-motion";
import DownloadButton from "./DownloadButton";
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
      {/* HERO */}
      <section className="relative h-[80vh] px-4 sm:px-8 xl:px-60">
        <div className="container mx-auto h-full flex items-center">
          <div className="flex flex-col xl:flex-row items-center justify-between w-full">

            {/* LEFT */}
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
    </motion.div>
  );
};

export default Home;
