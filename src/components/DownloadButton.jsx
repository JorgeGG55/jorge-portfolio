// src/components/DownloadButton.jsx
import React from "react";
import { useTranslation } from "react-i18next";

const DownloadButton = () => {
  const { t } = useTranslation();

  return (
    <a
      href="/CV-Jorge-Gravel.pdf"
      download
      className="uppercase flex items-center gap-2 border-solid border border-secondary text-secondary py-3 px-8 rounded-full tracking-widest transition-all duration-500 hover:bg-secondary hover:text-dark hover:font-bold"
    >
      <span>{t("downloadCV")}</span>
      <i className="fas fa-download"></i>
    </a>
  );
};

export default DownloadButton;
