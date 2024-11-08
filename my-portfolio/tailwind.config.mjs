/** @type {import('tailwindcss').Config} */
const tailwindcssAnimated = require('tailwindcss-animated');
const tailwindcssIntersect = require('tailwindcss-intersect');

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    tailwindcssAnimated,
    tailwindcssIntersect
  ],
}