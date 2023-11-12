/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Jost", "sans-serif"],
      },
      fontSize: {
        sm: ["0.938rem" /* 15px */, { fontWeight: "500" }],
        base: [
          "1rem" /* 16px */,
          { lineHeight: "1.625rem" /* 26px */, fontWeight: "400" },
        ],
        lg: [
          "1.25rem" /* 20px */,
          {
            lineHeight: "1.625rem" /* 26px */,
            fontWeight: "500",
            letterSpacing: "5px",
          },
        ],
        xl: [
          "2.5rem" /* 40px */,
          { lineHeight: "3rem" /* 48px */, fontWeight: "500" },
        ],
        "2xl": [
          "3rem" /* 48px */,
          { lineHeight: "3rem" /* 48px */, fontWeight: "500" },
        ],
      },
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
