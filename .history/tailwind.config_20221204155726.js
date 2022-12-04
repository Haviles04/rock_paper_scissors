import bgTri from './src/assets/images/bg-triangle.svg'

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
        'btnInner': 'inset 0px 10px grey'
      },
      backgroundColor: {
        'bgTriangle': "url('./src/assets/images/bg-triangle.svg')",
        'bgPentagon': "url('./src/assets/images/bg-pentagon.svg)"
      }
      
    },
  },
  plugins: [],
}
