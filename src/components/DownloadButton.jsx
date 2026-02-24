import React from "react";
import { useTranslation } from "react-i18next";

const DownloadButton = () => {
    const { t, i18n } = useTranslation();
    const currentLanguage = i18n.language;

    const cvFile = currentLanguage === "es" ? "/CV-Jorge-Gravel (ES).pdf" : "/CV-Jorge-Gravel-(EN).pdf";

    return (
        <a
            href={cvFile}
            download className="uppercase flex items-center gap-2 border-solid border border-secondary text-secondary py-3 px-8 rounded-full tracking-widest transition-all duration-500 hover:bg-secondary hover:text-dark hover:font-bold" >
            <span>{t("downloadCV")}</span>
            <i className="fas fa-download"></i>
        </a>
    );
};

export default DownloadButton;