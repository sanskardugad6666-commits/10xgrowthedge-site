/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brandBlue: "#0047AB",
        brandCyan: "#00D4FF",
        brandOrange: "#FF6B00",
        brandOrangeLight: "#FFB800"
      }
    },
  },
  plugins: [],
};
