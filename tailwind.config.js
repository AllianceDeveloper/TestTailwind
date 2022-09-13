/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./*.css", "./css/*.css"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        allianceblue: {
          500: "#00ADEB",
          900: "#004E9F",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
