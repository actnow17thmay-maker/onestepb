/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        qwero: {
          blue: '#1DA1F2', // Approximation of the blue
          dark: '#0e1111',
          bg: '#e8f1f8',
          pink: '#ff98d8', // A pink from the design
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
