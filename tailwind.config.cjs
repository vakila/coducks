/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#495CEF",
        yellow: "#FFC328",
        "gray-dark": "#8D8D8D",
        "gray-med": "#D9D9D9",
        "gray-light": "#F3F3F3",
      },
    },
  },
  plugins: [],
};
