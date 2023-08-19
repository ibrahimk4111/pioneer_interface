/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "gray-light": "var(--gray-light)",
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
}

