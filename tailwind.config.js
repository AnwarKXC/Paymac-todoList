module.exports = {
  content: [ "./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}" ],
  theme: {
    extend: {
      colors: {
        "weather-primary": "#f2efe9",
        "weather-secondary": "#82745f",
      },
    },
    fontFamily: {
      Roboto: [ "Roboto, sans-serif" ],
    },
    container: {
      padding: ".7rem",
      center: true,
    },
    screens: {
      sm: "640px",
      md: "768px",
    },
  },
  plugins: [
    require( 'tailwindcss-rtl' ),
  ],
}
