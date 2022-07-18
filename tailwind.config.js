/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'email':'hsl(4deg 69% 62%)',
      }
    },
  },
  plugins: [],
}
