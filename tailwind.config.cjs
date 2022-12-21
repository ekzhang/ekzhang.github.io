const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import("tailwindcss").Config} */
const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    // container: {
    //   center: true,
    //   padding: {
    //     DEFAULT: "1rem",
    //     sm: "2rem",
    //     md: "3rem",
    //     lg: "4rem",
    //     xl: "5rem",
    //   },
    //   screens: {
    //     sm: "640px",
    //     md: "768px",
    //     lg: "1024px",
    //     xl: "1280px",
    //   },
    // },
    extend: {
      fontFamily: {
        sans: ["Helvetica Neue", "Helvetica", ...defaultTheme.fontFamily.sans],
        serif: ["Newsreader", ...defaultTheme.fontFamily.serif],
      },
    },
  },

  plugins: [],
};

module.exports = config;
