/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'merriweather': ['Merriweather', 'serif'],
      'barlow': ['Barlow', 'sans-serif'],
      'bebas': ['Bebas Neue', 'cursive']
    }
  },
  plugins: [require("daisyui")],
}

