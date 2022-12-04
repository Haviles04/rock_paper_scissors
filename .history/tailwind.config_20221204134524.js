/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      colors: {
        'mainBG1': '#1F3756',
        'mainBG2': '#141539',
        'sciss1' : '#EC9E0E',
        'sciss2' : '#ECA922',
        'rock1' : '#DC2E4E'
        'rock2' : '#DD405D'
      },
      
    },
  },
  plugins: [],
}
