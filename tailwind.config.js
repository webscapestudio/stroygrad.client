/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      black: "#1f1f1f",
    },
    screens: {
      xl: { max: "1680px" },

      lg: { max: "1440px" },

      md: { max: "960px" },

      sm: { max: "640px" },

      xs: { max: "480px" },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "1680px",
          "@screen xl": {
            maxWidth: "1440px",
          },
          "@screen lg": {
            maxWidth: "1200px",
          },
          "@screen md": {
            maxWidth: "640px",
          },
          "@screen sm": {
            maxWidth: "480px",
          },
          "@screen xs": {
            maxWidth: "100%",
          },
        },
      });
    },
  ],
};
