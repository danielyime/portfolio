/** @type {import('tailwindcss').Config} */
import tailwindcssAnimated from 'tailwindcss-animated'
import tailwindcssIntersect from 'tailwindcss-intersect'

export default {
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