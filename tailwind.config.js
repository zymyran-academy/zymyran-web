import plugin from 'tailwindcss/plugin';

/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        "primary-dark": "#00080E",
        "primary": "#01CBFB",
        "secondary": "#F9B101",
        "custom-grey": "#D9D9D9",
        "white": "#FFFFFF",
      },
    },
  },
  plugins: [
    // плагин на hover для touch экранов
    plugin(function ({ addVariant }) {
      addVariant("hover", [
        "@media (hover: hover) { &:hover }",
        "@media (hover: none) { &:active }",
      ]);
    }),
  ],
};