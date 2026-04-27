/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./pakiShip_Driver-main/src/**/*.{js,jsx,ts,tsx}",
    "./pakiShip_Login-main/src/**/*.{js,jsx,ts,tsx}",
    "./pakiShip_Operator-main/src/**/*.{js,jsx,ts,tsx}",
    "./pakiShip_Sender-main/src/**/*.{js,jsx,ts,tsx}",
    "./pakiShip_Signup-main/src/**/*.{js,jsx,ts,tsx}",
    "../../pakipark-fe/pakipark-fe/src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#39B5A8",
        secondary: "#1A5D56",
        accent: "#FDB833",
        background: "#F0F9F8",
        dark: "#041614",
      },
    },
  },
  plugins: [],
}
