import { motion } from "framer-motion";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Education from "./Education";
import Skills from "./Skills";
import Projects from "./Projects";
import Experience from "./Experience";

const SectionButton = ({
  section,
  activeSection,
  setActiveSection,
  children,
}) => {
  return (
    <button
      onClick={() => setActiveSection(section)}
      className={`p-3 rounded-lg font-medium w-full inline-flex justify-center ${
        activeSection === section
          ? "bg-secondary text-dark"
          : "bg-gray text-white"
      }`}
    >
      {children}
    </button>
  );
};

const Resume = () => {
  const { t } = useTranslation();
  const [activeSection, setActiveSection] = useState("education");

  const renderContent = () => {
    switch (activeSection) {
      case "education":
        return <Education />;
      case "experience":
        return <Experience />;
      case "skills":
        return <Skills />;
      case "projects":
        return <Projects />;
      default:
        return <Education />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.2, duration: 0.5, ease: "easeIn" },
      }}
      className="flex items-center justify-center py-12 xl:py-0 xl:px-60"
    >
      <div className="container mx-auto">
        {/* buttons */}
        <div className="flex flex-col items-center px-8 xl:px-0 xl:flex-row xl:mt-10 xl:items-start gap-[60px]">
          <ul className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <li>
              <SectionButton
                section="education"
                activeSection={activeSection}
                setActiveSection={setActiveSection}
              >
                {t("education")}
              </SectionButton>
            </li>
            <li>
              <SectionButton
                section="experience"
                activeSection={activeSection}
                setActiveSection={setActiveSection}
              >
                {t("experience")}
              </SectionButton>
            </li>
            <li>
              <SectionButton
                section="skills"
                activeSection={activeSection}
                setActiveSection={setActiveSection}
              >
                {t("skills")}
              </SectionButton>
            </li>
          </ul>

          {/* content */}
          <div className="flex flex-col w-full max-w-[380px] lg:max-w-full items-center mx-auto xl:mx-0">
            {renderContent()}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Resume;
