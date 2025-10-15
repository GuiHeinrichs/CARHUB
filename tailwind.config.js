/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Poppins", "Inter", "system-ui", "sans-serif"],
        logo: ["Montserrat", "Poppins", "Inter", "system-ui", "sans-serif"],
      },
      colors: {
        brand: {
          50: "#eef4ff",
          100: "#d9e6ff",
          200: "#b3ceff",
          300: "#84afff",
          400: "#4d84ff",
          500: "#1f5aff",
          600: "#0b3ee6",
          700: "#072eb3",
          800: "#062680",
          900: "#051f66",
        },
      },
      boxShadow: {
        soft: "0 4px 16px -2px rgba(0,0,0,0.05), 0 2px 4px -2px rgba(0,0,0,0.04)",
      },
    },
  },
  plugins: [],
};

export default config;
