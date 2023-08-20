/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "gray-light": "var(--gray-light)",
        "bg-attorney": "var(--bg-attorney)"
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
}

