const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,md,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,md,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,md,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Inter", ...fontFamily.sans],
        secondary: ["Commissioner", ...fontFamily.sans],
        mono: ["Recursive", ...fontFamily.mono],
      },
    },
    colors: {
      black: "#000101",
      white: "#ffffff",
      purple: "#7a1ddd",
      tan: "#6b8987",
    },
  },
  plugins: [],
};
