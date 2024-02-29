/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        mainColor: '#b79662',
        mainColorLight: 'rgba(196,160,93,1)',


      },
      boxShadow: {
        inputFocus: '0 0 0 0.25rem #ed573d8f'
      },
      backgroundImage: {
        mainLinearColor: 'linear-gradient(to right,rgba(235,198,132,1),rgba(196,160,93,1))',
        mainLinearColorTwo: 'linear-gradient(to bottom, rgba(235, 198, 132, 1), rgba(196, 160, 93, 1)) ',
        mainBackColor: 'linear-gradient(-90deg, #912583, #e94057, #f27022) ',
      },
      container: {
        center: true,
        screens: {
          mobile: "640px",
          tablet: "1024px",
          desktop: "1280px",
        },
        padding: {
          DEFAULT: "1rem",
          mobile: "0rem",
          tablet: "2rem",
          desktop: "4rem",
        },
      },
    },
  },
  plugins: [],
}

