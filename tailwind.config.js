const { colors } = require("tailwindcss/defaultTheme");

module.exports = {
  theme: {
    extend: {
      colors: {
        regal: "#243c5a",
        blue: {
          ...colors.blue,
          "650": "#228EFB"
        }
      }
    }
  },
  variants: {},
  plugins: []
};
