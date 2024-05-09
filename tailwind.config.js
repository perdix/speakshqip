/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        'cd-red': '#a80707',
        'cd-black': '#1d1d1a'
      },
      width: Object.fromEntries(
        Array.from({ length: 100 }, (_, i) => [`w-${i + 1}/100`, `${i + 1}%`])
      ),
    },
  },
  plugins: [],
};
