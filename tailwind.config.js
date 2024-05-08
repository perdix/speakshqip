/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        'cd-red': '#a80707',
        'cd-black': '#1d1d1a'
      },
    },
  },
  plugins: [],
};