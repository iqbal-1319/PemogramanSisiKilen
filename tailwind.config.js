/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#22c55e",
        "special-mainBg": "#f9fafb",
        "gray-05": "#f3f4f6",
        "gray-02": "#6b7280",
      },
    },
  },
  plugins: [],
};
