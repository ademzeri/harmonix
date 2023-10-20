/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily:{
      'mont':['Montserrat', 'sans-serif'],
      'rubik':['Rubik Wet Paint', 'Montserrat','sans-serif'],

    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors:{
        'bg':'#1E1E1E',
        'prim':'#4226BB',
        'sec':'#7857FE',
        'thir':'#909090'
      }
    },
  },
  plugins: [],
}
