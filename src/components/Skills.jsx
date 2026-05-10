import React from "react";
import { useTranslation } from "react-i18next";
import categories from "../data/technologies.json";

const SkillCategory = ({ title, icon, skills }) => {
  return (
    <div className="bg-gray w-full rounded-xl px-6 py-5 mb-4 flex flex-col gap-3">
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-md bg-secondary/10 border border-secondary/30 flex items-center justify-center text-secondary">
          <i className={icon} aria-hidden="true" />
        </div>
        <h3 className="text-lg font-bold text-white">{title}</h3>
      </div>
      <ul className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <li
            key={index}
            className="px-3 py-1 rounded-full bg-primary/60 border border-white/10 text-sm text-white/80"
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
      <h2 className="w-full text-2xl font-bold mb-4 text-center lg:text-start">
        {t("mySkills")}
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
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
