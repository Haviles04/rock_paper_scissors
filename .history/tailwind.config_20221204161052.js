
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'easy': "url('./src/assets/images/bg-triangle.svg')"
      },
      colors: {
        'mainBG1': '#1F3756',
        'mainBG2': '#141539',
      },
      boxShadow: {
        'btnInner': 'inset 0px 10px grey'
      },
    },
  },
  plugins: [],
}
