import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import info from "../data/info.json";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 0.2, duration: 0.5, ease: "easeIn" },
        }}
        className="flex flex-col py-12 xl:px-0"
      >
        <div className="container mx-auto px-8 xl:px-0">
          <div className="flex flex-col items-center xl:items-start">
            <h2 className="w-full text-2xl font-bold mb-20 text-center lg:text-start">
              {t("contact")}
            </h2>
            <div className="w-full flex-1 flex items-center xl:justify-end mb-8 xl:mb-0">
              <ul className="flex flex-col xl:flex-row gap-10 xl:gap-0 xl:justify-between w-full">
                {info.map((item, index) => (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-gray text-secondary rounded-md flex items-center justify-center">
                      <i className={item.icon}></i>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-base xl:text-xl">
                        {item.description}
                      </h3>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Contact;
