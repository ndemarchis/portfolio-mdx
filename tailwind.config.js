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
  },
  plugins: [],
};
