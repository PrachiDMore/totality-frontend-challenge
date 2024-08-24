/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        bgWhite: "#F4F8F5",
        lightGray: "#7D7D7D",
        accentGreen : "#463f3f",
        darkGray : "#4b4f4c"
      },
    },
  },
  plugins: [],
};
