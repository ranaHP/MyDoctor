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
          
        },
        secondary: {
          default: '#fc6058', // Complementary color
         
        },
        tertiary: {
          default: '#3fabf3', // Complementary color
          
        },
        neutral: {
          light: '#f7f7f7',
        },
      }
    },
  },
  plugins: [],
}

