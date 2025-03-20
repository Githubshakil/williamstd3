/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Montserrat':   "'Montserrat', sans-serif",
      },
      maxWidth: {
        'customContainer': '1170px',
      },
      padding: {
        '50': '50px',
      },
      colors: {
        'navlink': '#838383',
        'secondary':'#8671FC',
        'lightBlack':'#222222',
        'ladyPink': '#F05D7B',
        'paraColor': '#838383'
        
        
      },
    },
  },
  plugins: [],
}
        




