/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          100: "#ABABC4",
          200: "#6F6F9A",
          300: "#58587E",
          400: "#434360",
          500: "#2E2E42",
          600: "#191924",
        },
        primary: {
          100: "#96C0FF",
          200: "#6BA6FF",
          300: "#2B7FFF",
          400: "#0065FF",
          500: "#0047B3",
          600: "#003E9C",
        },
        secondary: {
          100: "#BAD7B2",
          200: "#9DC793",
          300: "#73AE64",
          400: "#569E44",
          500: "#3C6F30",
          600: "#346029",
        },
        tertiary: {
          100: "#FBDCCB",
          200: "#F59D6B",
          300: "#F27E3B",
          400: "#E95F10",
          500: "#B94B0D",
          600: "#8A380A",
        },
        color: {
          transparent: "transparent",
          white: "#ffffff",
          black: "#000000",
          transparentBlack: "#191924BF",
          primary: "#2775FF",
          secondary: "#50D1B2",
          tertiary: "#EC8C56",
          red: "#E23738",
          gray: "#F0F0F4",
        },
      },
    },
    backgroundImage: {
      union: "url('/src/assets/home/union.svg')",
    },
  },
  plugins: [],
};
