import React from "react";
import { useTranslation } from "react-i18next";
import categories from "../data/technologies.json";

const SkillCategory = ({ title, icon, skills }) => {
  return (
    <div className="bg-gray w-full rounded-xl px-4 sm:px-6 py-4 sm:py-5 mb-3 sm:mb-4 flex flex-col gap-2.5 sm:gap-3">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-md bg-secondary/10 border border-secondary/30 flex items-center justify-center text-secondary">
          <i className={icon} aria-hidden="true" />
        </div>
        <h3 className="text-base sm:text-lg font-bold text-white">{title}</h3>
      </div>
      <ul className="flex flex-wrap gap-1.5 sm:gap-2">
        {skills.map((skill, index) => (
          <li
            key={index}
            className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-primary/60 border border-white/10 text-xs sm:text-sm text-white/80"
          >
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

const Skills = () => {
  const { t } = useTranslation();

  return (
    <>
      <h2 className="w-full text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-center lg:text-start">
        {t("mySkills")}
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 w-full">
        {categories.map((cat, index) => (
          <SkillCategory
            key={index}
            title={t(`skillCategories.${cat.categoryKey}`)}
            icon={cat.icon}
            skills={cat.skills}
          />
        ))}
      </div>
    </>
  );
};

export default Skills;
