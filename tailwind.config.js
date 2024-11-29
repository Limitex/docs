/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/app/**/*.{js,jsx,ts,tsx,md,mdx}",
    "./src/pages/**/*.{js,jsx,ts,tsx,md,mdx}",
    "./src/components/**/*.{js,jsx,ts,tsx,md,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
