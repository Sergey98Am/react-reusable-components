/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          peach: "#E7816B",
          black: "#1D1C1E",
          white: "#FFF",
        },
        secondary: {
          lightPeach: "#FFAD9B",
          darkGrey: "#333136",
          lightGrey: "#DFDFDF",
        },
      },
    },
  },
  plugins: [],
};
