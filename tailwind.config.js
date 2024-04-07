/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "black-one": "#383838",
        "black-two": "#2b2b2c",
        "black-main-one": "#202022",
        "black-main-two": "#1E1E1F",
        "white-one": "#ffffff",
        "white-two": "#fafafa",
        "orange-yellow-crayola": "#ffdb70",
        "vegas-gold": "#ceb15a",
        "light-gray": "#d6d6d6",
        "light-gray-70": "#d6d6d6b3",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

