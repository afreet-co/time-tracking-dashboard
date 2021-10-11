const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/data/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Rubik", ...defaultTheme.fontFamily.sans],
      },
    },
    colors: {
      white: "hsl(0, 100%, 100%)",
      blue: "hsl(246, 80%, 60%)",
      work: "hsl(15, 100%, 70%)",
      play: "hsl(195, 74%, 62%)",
      study: "hsl(348, 100%, 68%)",
      exercise: "hsl(145, 58%, 55%)",
      social: "hsl(264, 64%, 52%)",
      "self-care": "hsl(43, 84%, 65%)",

      "v-dark-blue": "hsl(226, 43%, 10%)",
      "dark-blue": "hsl(235, 46%, 20%)",
      "de-saturated-blue": "hsl(235, 45%, 61%)",
      "pale-blue": "hsl(236, 100%, 87%)",
    },
  },
  variants: {
    extend: {
      height: {
        80: "20rem",
        84: "21rem",
        88: "22rem",
        92: "23rem",
        96: "24rem",
      },
    },
  },
  plugins: [],
};
