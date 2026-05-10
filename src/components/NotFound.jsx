import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import useDocumentTitle from "../hooks/useDocumentTitle";

const NotFound = () => {
  const { t } = useTranslation();
  useDocumentTitle(t("pageTitles.notFound"));

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.1, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[calc(100vh-180px)] flex items-center justify-center px-4 sm:px-8 xl:px-60"
    >
      <div className="text-center max-w-xl flex flex-col items-center gap-6">
        <div
          className="text-[110px] sm:text-[160px] xl:text-[200px] font-extrabold leading-none text-secondary"
          aria-hidden="true"
        >
          404
        </div>

        <h1 className="text-2xl sm:text-3xl font-bold text-white">
          {t("notFoundTitle")}
        </h1>

        <p className="text-white/70 leading-relaxed">
          {t("notFoundMessage")}
        </p>

        <Link
          to="/"
          className="inline-flex items-center gap-2 mt-2 border border-secondary text-secondary py-3 px-6 rounded-full uppercase tracking-widest text-sm hover:bg-secondary hover:text-dark hover:font-bold transition-all duration-300"
        >
          <i className="fa-solid fa-arrow-left" aria-hidden="true" />
          <span>{t("backToHome")}</span>
        </Link>
      </div>
    </motion.section>
  );
};

export default NotFound;
