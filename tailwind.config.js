/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors : {
        blue: "#2CBCE9",
        red : "#c71c36",
        yellow : "#FDCC49",
        grey: "#ededed",
        "deep-blue" : "#010026",
        "dark-grey" : "#757575",
        "opaque-black" : "rgba(0,0,0,0.35)"
      },
      backgroundImage: (theme) => ({
        "gradient-rainbow":
          "linear-gradient(81.66deg, #00B5EE 7.21%, #FF45A4 45.05%, #FFBA00 78.07%)",

        "gradient-rainblue":
          "linear-gradient(90deg, #7293F0 14.53%, #3F47EC 69.36%, #7FCAF2 117.73%)",
      }),
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        opensans: ["Sofia Sans", "sans-serif"],
      },
      content: {
        nameArt: "url('./assets/artImg.png')",
        person1: "url('./assets/person-1.png')",
        person2: "url('./assets/person-2.png')",
        person3: "url('./assets/person-3.png')",
        experience: "url('./assets/Experience.JPG')",
        creativity:"url('./assets/creativity.jpg')",
        innovative: "url('./assets/Innovative.JPG')",
        
      },
      backgroundImage:{
        // 'innovative' : `url(./assets/Innovative.JPG)`,
      }
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
}

