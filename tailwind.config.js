/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./index.tsx",
    "./App.tsx",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./constants.tsx",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0c4a6e',
          light: '#0ea5e9',
        },
        accent: '#f59e0b',
      }
    },
  },
  plugins: [],
}
