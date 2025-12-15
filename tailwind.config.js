/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        defaultBlack: "#0f172a",
        "special-bg": "#1e293b",
        "special-bg2": "#94a3b8",
        "special-bg3": "#334155",
    
        "special-mainBg": "#f9fafb",
        "gray-05": "#f3f4f6",
        "gray-02": "#6b7280",


      },
    },
    
  },
  plugins: [],
};
