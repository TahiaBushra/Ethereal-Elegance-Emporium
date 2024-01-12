/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "0",
      },
    },
    fontFamily: {
      sans: ['Oswald', 'sans-serif'],
      serif: ['Lemon', 'serif'],

    },
    extend: {
      colors: {
        dark: "#0D160B",
        light: "#FBF5F3",
        green: "#A7CD95",
        peach: "#A07178",
      }
    },
  },
  plugins: [],
}

