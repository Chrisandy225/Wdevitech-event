/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        orange: {
          600: '#F97316',
        },
        blue: {
          600: '#3B82F6',
          700: '#1D4ED8',
        }
      }
    },
  },
  plugins: [],
};