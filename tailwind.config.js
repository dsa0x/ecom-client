const { colors } = require("tailwindcss/defaultTheme");

module.exports = {
  theme: {
    screens: {
      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
    },
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
        gold: {
          "100": "#c69963",
        },
        custom: {
          "100": "#1F2327",
          "200": "#CA936A",
          "300": "#C5875A",
          "400": "#895E3F ",
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
    right: {
      2: "2rem",
    },
  },
  variants: {
    backgroundColor: ["responsive", "hover", "focus", "active", "group-hover"],
    textColor: ["responsive", "hover", "focus", "active", "group-hover"],
  },
  plugins: [],
};
