/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: ["winter"],
  },
  theme: {
    extend: {
      screens: {
        xsm: { max: "480px" },
        // @media (max-width:480px) {}
      },
    },
  },
  plugins: [require("daisyui")],
};
