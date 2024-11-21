/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {

        ligth:{
          primary: "#007aff",
          secondary:{
            100: '#ffffff',
            400: '#f3f4f6'
          }
        },

        dark: {
          primary: "#EE6C4D",
          secondary: {
            100: "#1E1F25",
            900: "#131517"
          }
        },

      },
    },
  },
  plugins: [],
}

