/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'back-wrappers': "url('./src/assets/Vector.png')"
      }
    },
  },
  plugins: [],
}

