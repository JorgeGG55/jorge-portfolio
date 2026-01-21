import ReactGA from "react-ga4";

/**
 * @param {Object} params
 * @param {string} params.section - home | resume | projects | contact
 * @param {string} params.menu - desktop | mobile
 * @param {string} params.path - route path
 */
export const trackNavigationClick = ({ section, menu, path }) => {
  ReactGA.event("navigation_click", {
    section,
    menu,
    path,
  });
};
