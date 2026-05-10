import React from "react";
import { useTranslation } from "react-i18next";
import Scrollbar from "./Scrollbar";
import ResumeItem from "./ResumeItem";

const Education = () => {
  const { t } = useTranslation();

  const engineeringDetails = t("educationDetails.engineering", {
    returnObjects: true,
  });
  const fullstackDetails = t("educationDetails.fullstack", {
    returnObjects: true,
  });
  const multiplataformDetails = t("educationDetails.multiplataform", {
    returnObjects: true,
  });

  return (
    <>
      <h2 className="w-full text-2xl font-bold mb-4 text-center lg:text-start">
        {t("myEducation")}
      </h2>
      <Scrollbar gridClass="grid-cols-1 lg:grid-cols-2">
        <ResumeItem
          year={t("engineeringPeriod")}
          title={t("engineering")}
          institution="UOC"
          details={engineeringDetails}
        />
        <ResumeItem
          year={t("fullstackPeriod")}
          title={t("fullstack")}
          institution="thePower"
          details={fullstackDetails}
        />
        <ResumeItem
          year={t("multiplataformPeriod")}
          title={t("multiplataform")}
          institution="U-tad"
          details={multiplataformDetails}
        />
      </Scrollbar>
    </>
  );
};

export default Education;
