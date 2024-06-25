import React from "react";
import { useTranslation } from "react-i18next";
import Scrollbar from "./Scrollbar";
import technologies from "../data/technologies.json";

const SkillItem = ({ skill }) => {
  return (
    <div className="bg-gray w-full h-[184px] px-10 py-6 mb-4 rounded-xl flex flex-col justify-center items-center gap-1">
      <div className="flex items-center gap-3">
        <span className="w-[6px] h-[6px] rounded-full bg-secondary"></span>
        <p className="text-gray-400">{skill}</p>
      </div>
    </div>
  );
};

const Skills = () => {
  const { t } = useTranslation();

  return (
    <>
      <h2 className="w-full text-2xl font-bold mb-4 text-center lg:text-start">
        {t("mySkills")}
      </h2>
      <Scrollbar gridClass="grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
        {technologies.map((tech, index) => (
          <SkillItem key={index} skill={tech.name} />
        ))}
      </Scrollbar>
    </>
  );
};

export default Skills;
