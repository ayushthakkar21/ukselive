/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
       fontFamily: {
        'custom': ['Roboto', 'sans-serif'],
        'navbar': ['Roboto', 'Arial', 'sans-serif'], //Navbar Font
      },
    },
  },
  plugins: [],
}

