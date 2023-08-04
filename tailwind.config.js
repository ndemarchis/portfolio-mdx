/** @type {import('tailwindcss').Config} */

const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx,md,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,md,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,md,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Inter", "var(--font-inter)", ...fontFamily.sans],
        secondary: ["Commissioner", ...fontFamily.sans],
        mono: ["Courier New", ...fontFamily.mono],
        serif: ["Libre Baskerville", "var(--font-libre)", ...fontFamily.serif],
      },
    },
    colors: {
      black: "#000101",
      white: "#ffffff",
      purple: "#7a1ddd",
      tan: "#6b8987",
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
