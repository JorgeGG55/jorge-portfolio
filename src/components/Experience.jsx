import React from "react";
import { useTranslation } from "react-i18next";
import Scrollbar from "./Scrollbar";
import ResumeItem from "./ResumeItem";

const Experience = () => {
  const { t } = useTranslation();

  return (
    <>
      <h2 className="w-full text-2xl font-bold mb-4 text-center lg:text-start">
        {t("myExperience")}
      </h2>
      <Scrollbar gridClass="grid-cols-1 lg:grid-cols-2">
        <ResumeItem
          year={t("workingPeriod")}
          title={t("position")}
          institution="Alebat"
        />
      </Scrollbar>
    </>
  );
};

export default Experience;
