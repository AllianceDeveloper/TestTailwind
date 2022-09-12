/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./*.css", "./css/*.css"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
