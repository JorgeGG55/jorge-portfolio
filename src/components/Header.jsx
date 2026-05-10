import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { trackNavigationClick } from "../utils/analytics";

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
    setLanguage(lng);
    localStorage.setItem("language", lng);
  };

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
    } else {
      i18n.changeLanguage("es");
      localStorage.setItem("language", "es");
    }
    setLanguage(i18n.language);
  }, [i18n]);

  return (
    <>
      <header className="py-5 px-6 sm:px-8 xl:py-12 xl:px-60 text-white">
        <div className="container mx-auto flex justify-between items-center">
          <Link
            to="/"
            onClick={() =>
              trackNavigationClick({
                section: "home",
                menu: "desktop",
                path: "/",
              })
            }
          >
            <h1 className="text-white font-bold text-2xl sm:text-3xl">
              Jorge<span className="text-secondary font-bold text-3xl sm:text-4xl">.</span>
            </h1>
          </Link>
          <button
            className="block md:hidden text-secondary focus:outline-none p-1"
            onClick={toggleMenu}
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
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
              <li>
                <Link
                  to="/"
                  onClick={() =>
                    trackNavigationClick({
                      section: "home",
                      menu: "desktop",
                      path: "/",
                    })
                  }
                  className={`hover:text-secondary ${location.pathname === "/"
                    ? "text-secondary border-b-2 border-secondary"
                    : ""
                    }`}
                >
                  {t("home")}
                </Link>
              </li>

              <li>
                <Link
                  to="/resume"
                  onClick={() =>
                    trackNavigationClick({
                      section: "resume",
                      menu: "desktop",
                      path: "/resume",
                    })
                  }
                  className={`hover:text-secondary ${location.pathname === "/resume"
                    ? "text-secondary border-b-2 border-secondary"
                    : ""
                    }`}
                >
                  {t("resume")}
                </Link>
              </li>

              <li>
                <Link
                  to="/projects"
                  onClick={() =>
                    trackNavigationClick({
                      section: "projects",
                      menu: "desktop",
                      path: "/projects",
                    })
                  }
                  className={`hover:text-secondary ${location.pathname === "/projects"
                    ? "text-secondary border-b-2 border-secondary"
                    : ""
                    }`}
                >
                  {t("projects")}
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  onClick={() =>
                    trackNavigationClick({
                      section: "contact",
                      menu: "desktop",
                      path: "/contact",
                    })
                  }
                  className="bg-secondary text-dark py-2 px-4 rounded-2xl"
                >
                  {t("contact")}
                </Link>
              </li>
              <li>
                <button
                  onClick={() => changeLanguage("en")}
                  aria-label="Switch language to English"
                  aria-pressed={language === "en"}
                  title="English"
                  className={`ml-4 ${language === "en"
                    ? "text-secondary border-2 rounded-full p-2 border-secondary"
                    : ""
                    }`}
                >
                  <img
                    src="/images/bandera-reino-unido.png"
                    className="w-6 h-6 rounded-full"
                    alt=""
                    aria-hidden="true"
                  />
                </button>

                <button
                  onClick={() => changeLanguage("es")}
                  aria-label="Cambiar idioma a español"
                  aria-pressed={language === "es"}
                  title="Español"
                  className={`ml-4 ${language === "es"
                    ? "text-secondary border-2 rounded-full p-2 border-secondary"
                    : ""
                    }`}
                >
                  <img
                    src="/images/bandera-espana.png"
                    className="w-6 h-6 rounded-full"
                    alt=""
                    aria-hidden="true"
                  />
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <div
        className={`fixed top-0 left-0 w-full h-full bg-dark bg-opacity-70 z-40 ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        onClick={toggleMenu}
      />
      <div
        id="mobile-nav"
        role="dialog"
        aria-label="Menú de navegación"
        aria-hidden={!isOpen}
        className={`fixed top-0 right-0 h-full w-9/12 max-w-xs bg-primary shadow-lg transform ${isOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 z-50 flex flex-col`}
      >
        <ul className="flex flex-col items-center space-y-6 text-lg mt-24">
          {[
            { label: "home", path: "/" },
            { label: "resume", path: "/resume" },
            { label: "projects", path: "/projects" },
            { label: "contact", path: "/contact" },
          ].map(({ label, path }) => (
            <li key={path}>
              <Link
                to={path}
                onClick={() => {
                  trackNavigationClick({
                    section: label,
                    menu: "mobile",
                    path,
                  });
                  toggleMenu();
                }}
                className={`hover:text-secondary ${location.pathname === path
                  ? "text-secondary border-b-2 border-secondary"
                  : ""
                  }`}
              >
                {t(label)}
              </Link>
            </li>
          ))}
        </ul>

        {/* Language switcher in mobile menu */}
        <div className="mt-auto mb-10 flex items-center justify-center gap-4">
          <button
            onClick={() => changeLanguage("en")}
            aria-label="Switch language to English"
            aria-pressed={language === "en"}
            className={language === "en" ? "border-2 rounded-full p-1 border-secondary" : "p-1"}
          >
            <img src="/images/bandera-reino-unido.png" className="w-6 h-6 rounded-full" alt="" aria-hidden="true" />
          </button>
          <button
            onClick={() => changeLanguage("es")}
            aria-label="Cambiar idioma a español"
            aria-pressed={language === "es"}
            className={language === "es" ? "border-2 rounded-full p-1 border-secondary" : "p-1"}
          >
            <img src="/images/bandera-espana.png" className="w-6 h-6 rounded-full" alt="" aria-hidden="true" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
