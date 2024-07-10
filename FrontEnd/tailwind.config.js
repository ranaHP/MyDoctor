/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#3fbaeb',
          DEFAULT: '#0fa9e6',
          dark: '#0c87b8',
        },
        secondary: {
          default: '#fc6058', // Complementary color
          analogous1: '#FFAF51', // First analogous color
          analogous2: '#FF51A1', // Second analogous color
        },
        tertiary: {
          default: '#3fabf3', // Complementary color
          
        },
        neutral: {
          light: '#f7f7f7',
          DEFAULT: '#f7f7f7',
          dark: '#cbd2d9',
        },
      }
    },
  },
  plugins: [],
}

