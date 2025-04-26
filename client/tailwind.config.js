/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlue: "#003366",
        customYellow: "#FFDE59",
        whiteTransparent: 'rgba(255, 255, 255, 0.5)',
        blueTransparent: '#00336629',
      },
      boxShadow: {
        'custom': '10px 10px 10px rgba(0, 0, 0, 0.2)',
        'custom2': '0 4px 6px rgba(0, 0, 0.5, 0.5)',
        'custom3': '10px 10px 10px #0033661d',
        'custom4': '0 8px 12px rgba(0, 0, 0, 0.2)'
      }
    },
  },
  plugins: [],
}

