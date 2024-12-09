/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        "cd-red": "#e71d36", //alternative: dc2626
        "cd-black": "#27272a",
      },
      width: Object.fromEntries(
        Array.from({ length: 100 }, (_, i) => [`w-${i + 1}/100`, `${i + 1}%`]),
      ),
      height: Object.fromEntries(
        Array.from({ length: 100 }, (_, i) => [`h-${i + 1}/100`, `${i + 1}%`]),
      ),
    },
  },
  plugins: [],
};
