/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#E2852E',
        secondary: '#F5C857',
        highlight: '#FFEE91',
        accent: '#ABE0F0',
      },
    },
  },
  plugins: [],
}

