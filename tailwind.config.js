const { colors } = require("tailwindcss/defaultTheme");

module.exports = {
  theme: {
    extend: {
      colors: {
        regal: "#243c5a",
        blue: {
          ...colors.blue,
          "650": "#228EFB",
          "550": "#6180E4",
          "750": "#201F28",
          "1050": "#121212",
        },
      },
      boxShadow: {
        xldark:
          "0 20px 25px -5px rgba(143,140,166, 0.7), 0 10px 10px -5px rgba(143,140,166, 0.7)",
        xltest: "0px 15px 35px 0px rgba(	32, 31, 40,.9)",
      },
      fontSize: {
        "8xl": "6rem",
      },
    },
  },
  variants: {
    backgroundColor: ["responsive", "hover", "focus", "active", "group-hover"],
    textColor: ["responsive", "hover", "focus", "active", "group-hover"],
  },
  plugins: [],
};
