/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight: {
          50: "#f3f4f5",
          100: "#e8e8eb",
          200: "#c5c6cd",
          300: "#a2a3ae",
          400: "#5c5f72",
          500: "#161a35",
          600: "#141730",
          700: "#111428",
          800: "#0d1020",
          900: "#0b0d1a",
        },
      },
    },
  },
  plugins: [],
};
