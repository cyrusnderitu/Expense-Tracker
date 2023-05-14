/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pops: 'Poppins'
      },
      backgroundImage:{
        notFound: "./src/components/Error/bg.jfif"
      }
    },
  },
  plugins: [],
}