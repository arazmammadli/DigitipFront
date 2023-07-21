/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      "main": {
        dark: "#23252C",
        darkPrimary: "#2E124C",
        darkSecondary: "#363C4F",
        darkBase: "#321335",
        light: "#F4F4F8",
        lightPrimary: "#E8E8EA",
        lightSecondary: "#F4FBF7",
        lightBase: "#FFF5F5",
        mainGray: "#747A88",
        primaryBlue: "#3C5BF5",
        lightBlue:"#52A8F2",
        greenPrimary: "#27AE60",
        greenDark:"#006351",
        orangePrimary: "#FF443B",
      },
      "white":"#ffffff"
    },
    extend: {},
  },
  plugins: [],
}