/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './static/js/**/*.js'],
  theme: {
    extend: {
      fontFamily: {
        mono: ["'Roboto Mono'"]
      }
    },
  },
  plugins: [],
}

