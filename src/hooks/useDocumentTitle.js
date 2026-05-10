import { useEffect } from "react";

/**
 * Sets the document <title> on mount and restores the previous value on unmount.
 * Convention used here: "<Page> — Jorge Gravel".
 *
 * @param {string} title - the page-specific part of the title
 * @param {string} [suffix="Jorge Gravel"] - portfolio brand suffix
 */
const useDocumentTitle = (title, suffix = "Jorge Gravel") => {
  useEffect(() => {
    const previous = document.title;
    document.title = title ? `${title} — ${suffix}` : suffix;
    return () => {
      document.title = previous;
    };
  }, [title, suffix]);
};

export default useDocumentTitle;
