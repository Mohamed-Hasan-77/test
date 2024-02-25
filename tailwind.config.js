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
      },
      boxShadow: {
        inputFocus: '0 0 0 0.25rem rgba(255,204,0,.30)'
      },
      backgroundImage: {
        mainLinearColor: 'linear-gradient(to right,rgba(235,198,132,1),rgba(196,160,93,1))',
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

