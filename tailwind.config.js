/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "Helvetica", "Arial", "sans-serif"],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "16px",
          sm: "2rem",
          lg: "4rem",
          xl: "6rem",
        },
      },
      colors: {
        "blue-circle": "rgba(5, 0, 255, 0.45)",
      },
    },
  },
  plugins: [],
};
