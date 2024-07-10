/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#fff",
        "secondary": "#8750F7",
        "accent": "#A8A8A8"
      },
      backgroundColor: {
        "primary": "#0F0715",
        "secondary": "#140C1C",
        "accent": "#8750F7",
      }
    },
  },
  plugins: [],
}