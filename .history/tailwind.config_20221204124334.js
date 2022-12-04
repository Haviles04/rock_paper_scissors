/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'mainBG1': 'hsl(214, 47%, 23%)',
        'mainBG2': 'hsl(237, 49%, 15%)'
      }
    },
  },
  plugins: [],
}
