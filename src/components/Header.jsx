import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Header = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = isOpen ? "auto" : "hidden";
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  useEffect(() => {
    setLanguage(i18n.language);
  }, [i18n.language]);

  return (
    <>
      <header className="py-8 px-8 xl:py-12 xl:px-60 text-white">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/">
            <h1 className="text-white font-bold text-3xl">
              Jorge<span className="text-secondary font-bold text-4xl">.</span>
            </h1>
          </Link>
          <button
            className="block md:hidden text-secondary focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <nav className="hidden md:block">
            <ul className="md:flex items-center md:space-x-8 text-lg">
              <li className="mt-4 md:mt-0">
                <Link
                  className={`hover:text-secondary ${
                    location.pathname === "/"
                      ? "text-secondary border-b-2 border-secondary"
                      : ""
                  }`}
                  to="/"
                >
                  {t("home")}
                </Link>
              </li>
              <li className="mt-4 md:mt-0">
                <Link
                  className={`hover:text-secondary ${
                    location.pathname === "/resume"
                      ? "text-secondary border-b-2 border-secondary"
                      : ""
                  }`}
                  to="/resume"
                >
                  {t("resume")}
                </Link>
              </li>
              <li className="mt-4 md:mt-0">
                <Link
                  className={`hover:text-secondary ${
                    location.pathname === "/projects"
                      ? "text-secondary border-b-2 border-secondary"
                      : ""
                  }`}
                  to="/projects"
                >
                  {t("projects")}
                </Link>
              </li>
              <li className="mt-4 md:mt-0">
                <Link
                  className="bg-secondary text-dark py-2 px-4 rounded-2xl"
                  to="/contact"
                >
                  {t("contact")}
                </Link>
              </li>
              <li className="mt-4 md:mt-0">
                <button
                  onClick={() => changeLanguage("en")}
                  className={`ml-4 ${
                    language === "en"
                      ? "text-secondary border-2 rounded-full p-2 border-secondary"
                      : ""
                  }`}
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg/800px-Flag_of_the_United_Kingdom_%283-5%29.svg.png"
                    alt=""
                    className="w-6 h-6 rounded-full"
                  />
                </button>
                <button
                  onClick={() => changeLanguage("es")}
                  className={`ml-4 ${
                    language === "es"
                      ? "text-secondary border-2 rounded-full p-2 border-secondary"
                      : ""
                  }`}
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Bandera_de_Espa%C3%B1a_%28sin_escudo%29.svg/1200px-Bandera_de_Espa%C3%B1a_%28sin_escudo%29.svg.png"
                    alt="Spain flag"
                    className="w-6 h-6 rounded-full"
                  />
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Dark background overlay */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-dark bg-opacity-70 z-40 transition-opacity duration-300 ease-in-out ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMenu}
      ></div>

      {/* mobile nav */}
      <div
        className={`fixed top-0 right-0 h-full w-9/12 bg-primary shadow-lg transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <button
          className="absolute top-12 right-11 text-secondary focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="mt-32 mb-14 text-center text-2xl">
          <h1 className="text-white font-semibold text-4xl ml-6">
            Jorge<span className="text-secondary font-bold text-4xl">.</span>
          </h1>
        </div>
        <ul className="flex flex-col items-center space-y-8 text-lg p-4">
          <li>
            <Link
              className={`hover:text-secondary ${
                location.pathname === "/"
                  ? "text-secondary border-b-2 border-secondary"
                  : ""
              }`}
              to="/"
              onClick={toggleMenu}
            >
              {t("home")}
            </Link>
          </li>
          <li>
            <Link
              className={`hover:text-secondary ${
                location.pathname === "/resume"
                  ? "text-secondary border-b-2 border-secondary"
                  : ""
              }`}
              to="/resume"
              onClick={toggleMenu}
            >
              {t("resume")}
            </Link>
          </li>
          <li>
            <Link
              className={`hover:text-secondary ${
                location.pathname === "/projects"
                  ? "text-secondary border-b-2 border-secondary"
                  : ""
              }`}
              to="/projects"
              onClick={toggleMenu}
            >
              {t("projects")}
            </Link>
          </li>
          <li>
            <Link
              className="bg-secondary text-dark py-2 px-4 rounded-2xl"
              to="/contact"
              onClick={toggleMenu}
            >
              {t("contact")}
            </Link>
          </li>
        </ul>
        <ul className="flex items-center justify-center">
          <li className="mt-20 md:mt-0">
            <button
              onClick={() => {
                changeLanguage("en");
                toggleMenu();
              }}
              className={` ${
                language === "en"
                  ? "text-secondary border-2 rounded-full p-2 border-secondary"
                  : ""
              }`}
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg/800px-Flag_of_the_United_Kingdom_%283-5%29.svg.png"
                alt=""
                className="w-6 h-6 rounded-full"
              />
            </button>
            <button
              onClick={() => {
                changeLanguage("es");
                toggleMenu();
              }}
              className={`ml-4 ${
                language === "es"
                  ? "text-secondary border-2 rounded-full p-2 border-secondary"
                  : ""
              }`}
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Bandera_de_Espa%C3%B1a_%28sin_escudo%29.svg/1200px-Bandera_de_Espa%C3%B1a_%28sin_escudo%29.svg.png"
                alt="Spain flag"
                className="w-6 h-6 rounded-full"
              />
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
