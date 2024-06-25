import React from "react";
import { useTranslation } from "react-i18next";
import Scrollbar from "./Scrollbar";
import ResumeItem from "./ResumeItem";

const Education = () => {
  const { t } = useTranslation();

  return (
    <>
      <h2 className="w-full text-2xl font-bold mb-4 text-center lg:text-start">
        {t("myEducation")}
      </h2>
      <Scrollbar gridClass="grid-cols-1 lg:grid-cols-2">
        <ResumeItem
          year="2023 - 2024"
          title="Full Stack Web Development Bootcamp"
          institution="thePower"
        />
        <ResumeItem
          year="2021 - 2023"
          title={t("multiplataform")}
          institution="U-tad"
        />
      </Scrollbar>
    </>
  );
};

export default Education;
