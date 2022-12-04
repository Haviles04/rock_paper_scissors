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
      },
      boxShadow: {
        'scissors1' : '0px 10px #EC9E0E',
        'scissors2' : '#ECA922',
        'rock1' : 'inset 0px 10px #DC2E4E',
        'rock2' : '#DD405D',
        'paper1': 'inset 0px 10px #4865F4',
        'paper2': '#5671F5',
        'spock1': 'inset 0px 10px #40B9CE',
        'spock2': '#53BDD0',
        'lizard1': 'inset 0px 10px #834FE3',
        'lizard2': '#8C5DE5',
      },
      
    },
  },
  plugins: [],
}
