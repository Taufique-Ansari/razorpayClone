/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    // fontFamily:{fontFamily:"sans-serif"},
    extend: {
      boxShadow: {
        '3xl': '2px -2px 50px -5px rgba(0,0,0,0.75)',
        'nm' : '0px 0px 5px 0px rgba(235,226,235,1)',
      }
    },
  },
  plugins: [],
}

