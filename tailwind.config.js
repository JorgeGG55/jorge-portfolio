/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#1c1b22",
      secondary: "#00ff9a",
      dark: "#121212",
      white: "#fff",
      blue: "#1fb6ff",
      purple: "#7e5bef",
      pink: "#ff49db",
      orange: "#ff7849",
      transparent: "transparent",
      green: {
        500: "#00ff00",
        600: "#00cc00",
      },
      yellow: "#ffc82c",
      "gray-dark": "#273444",
      gray: "#28272c",
      "gray-light": "#a8a7ae",
    },

    fontSize: {
      sm: "0.8rem",
      base: "1rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
      "6xl": "3.75rem",
      "7xl": "4.5rem",
      "8xl": "6rem",
      "9xl": "8rem",
    },

    extend: {},
  },
  plugins: [],
};
