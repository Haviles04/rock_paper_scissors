
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'easy': "url('assets/images/bg-triangle.svg')"
      },
      colors: {
        'mainBG1': '#1F3756',
        'mainBG2': '#141539',

      },
      boxShadow: {
        'btnInner': 'inset 0px 8px lightgrey'
      },
    },
  },
  plugins: [],
  safelist: [
    'col-start-1',
    'col-start-2',
    'col-start-3',
    'col-start-4',
    'col-start-5',
    'col-start-6',
    'col-start-7',
    'col-start-8',
    'col-start-9',
    'col-start-10',
    'row-start-1',
    'row-start-2',
    'row-start-3',
    'row-start-4',
    'row-start-5',
    'row-start-6',
    'row-start-7',
    'row-start-8',
    'row-start-9',
    'row-start-10',
    'border-[#5671f5]',
    'border-[#eca922]',
    'border-[#dd405d]',
    'border-[#52bed1]',
    'border-[#8c5de5]',
    'shadow-[0px_8px_#4865f4]',
    'shadow-[0px_8px_#ec9e0e]',
    'shadow-[0px_8px_#dc2e4e]',
    'shadow-[0px_8px_]',
    'shadow-[0px_8px_]',
  ]
}
