/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: ["light", "dark", "winter", "cupcake"],
  },
  theme: {
    extend: {},
  },
  plugins: [require("flowbite/plugin"), require("daisyui")],
};
