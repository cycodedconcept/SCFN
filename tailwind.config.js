/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary_dark: "#232323",
        primary_red: "#DF3331",
        primary_gold: "#FEA600",
        primary_tomato_red: "#F1592A",
        primary_faded_grey: "#434343",
        primary_green: "#4CAF50",
        primary_blue: "#159CD8",
      },
      fontFamily: {
        lexend: ["Lexend", "sans-serif"],
      },
    },
  },
  plugins: [],
};
