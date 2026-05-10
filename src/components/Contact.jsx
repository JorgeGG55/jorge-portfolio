import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import info from "../data/info.json";
import useDocumentTitle from "../hooks/useDocumentTitle";

const Contact = () => {
  const { t } = useTranslation();
  useDocumentTitle(t("pageTitles.contact"));

  const linkFor = (item) => {
    switch (item.title) {
      case "Linkedin":
        return "https://www.linkedin.com/in/jorge-gravel/";
      default:
        return null;
    }
  };

  const isExternal = (item) => item.title === "Linkedin";

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.1, duration: 0.4, ease: "easeIn" },
      }}
      aria-labelledby="contact-title"
      className="min-h-[calc(100vh-180px)] flex items-center px-4 sm:px-8 xl:px-60 py-10"
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 xl:gap-20 items-center">
          {/* Left column: heading + CTA */}
          <div className="flex flex-col gap-5 text-center xl:text-left">
            <div className="flex items-center gap-3 justify-center xl:justify-start">
              <span className="h-px w-8 bg-secondary" aria-hidden="true" />
              <span className="uppercase tracking-widest text-secondary text-sm">
                {t("contact")}
              </span>
            </div>

            <h1
              id="contact-title"
              className="text-3xl sm:text-4xl xl:text-5xl font-bold text-white leading-tight"
            >
              {t("contactHeading")}
            </h1>

            <a
              href="mailto:jorge.gravel.g@gmail.com"
              className="inline-flex items-center justify-center gap-2 self-center xl:self-start mt-2 border border-secondary text-secondary py-3 px-6 rounded-full uppercase tracking-widest text-sm hover:bg-secondary hover:text-dark hover:font-bold transition-all duration-300"
            >
              <i className="fa-solid fa-paper-plane" aria-hidden="true" />
              <span>{t("sendEmail")}</span>
            </a>
          </div>

          {/* Right column: contact cards */}
          <ul className="flex flex-col gap-4">
            {info.map((item, index) => {
              const href = linkFor(item);
              const external = isExternal(item);

              const inner = (
                <>
                  <div className="w-12 h-12 sm:w-14 sm:h-14 shrink-0 bg-secondary/10 border border-secondary/30 text-secondary rounded-lg flex items-center justify-center text-lg">
                    <i className={item.icon} aria-hidden="true" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white/50 text-xs sm:text-sm uppercase tracking-wider">
                      {t(`info.${item.title}`)}
                    </p>
                    <p
                      className={`text-white text-base sm:text-lg truncate ${
                        href ? "group-hover:text-secondary transition-colors" : ""
                      }`}
                    >
                      {t(`info.${item.title} Description`)}
                    </p>
                  </div>
                  {href && (
                    <i
                      className="fa-solid fa-arrow-up-right-from-square text-white/30 group-hover:text-secondary transition-colors"
                      aria-hidden="true"
                    />
                  )}
                </>
              );

              return (
                <li key={index}>
                  {href ? (
                    <a
                      href={href}
                      {...(external && { target: "_blank", rel: "noopener noreferrer" })}
                      className="group flex items-center gap-5 bg-gray/60 border border-white/5 rounded-xl p-4 sm:p-5 hover:border-secondary/40 hover:bg-gray transition-all duration-300"
                      aria-label={`${t(`info.${item.title}`)}: ${t(`info.${item.title} Description`)}`}
                    >
                      {inner}
                    </a>
                  ) : (
                    <div className="flex items-center gap-5 bg-gray/60 border border-white/5 rounded-xl p-4 sm:p-5">
                      {inner}
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
