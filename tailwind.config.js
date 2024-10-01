/** @type {import('tailwindcss').Config} */
module.exports = {
  content:  ["./**/*.{html,js}"],
  theme: {
    extend: {

      screens: {
        'custom-sm': '500px',  // Custom breakpoint for min-width 500px
        'custom-lg': '900px',
        'custom-400': '400px', // Custom breakpoint for min-width 1100px
      },
      colors: {
        'custom-rgb': 'rgb(182 215 255 / 15%)',
      },
    },
  },
  plugins: [],
}

