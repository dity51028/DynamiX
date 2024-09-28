/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       backgroundImage:{
        'custom-gradient':'linear-gradient(106.37deg, #ffe1bc 29.63%, #ffcfd1 51.55%, #f3c6f1 90.85%)',
        'yellow-gradient': 'linear-gradient(180deg, #F8D49A -146.42%, #FAD79D -46.42%)',
        'purple-gradient': 'linear-gradient(180deg, #BB67FF 0%, #C484F3 100%)',
       },
       colors: {
        orange: '#fca61f',
        black: '#242d49',
        gray: '#788097',
        pink: '#FF919D',
        activeItem: '#f799a354',
      },
     
      boxShadow: {
        box: '0px 19px 60px rgb(0 0 0 / 8%)',
        smbox: '-79px 51px 60px rgba(0, 0, 0, 0.08)',
      },
      backgroundColor: {
        glass: 'rgba(255, 255, 255, 0.54)',
      },
    },
  },
  plugins: [],
}