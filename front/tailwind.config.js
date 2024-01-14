/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    screens:{
      'sm': "420px",
      'md':"692px",
      'lg':"900px",
      'xl':"1080px",
      "1.5xl":"1350px",
      '2xl':"1440px"
    },
    extend: {

    },
  },
  plugins: [],
}

