import ReactGA from "react-ga4";

/**
 * @param {Object} params
 * @param {string} params.section
 * @param {string} params.menu
 * @param {string} params.path
 */
export const trackNavigationClick = ({ section, menu, path }) => {
  ReactGA.event("navigation_click", {
    section,
    menu,
    path,
  });
};
