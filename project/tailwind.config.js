/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand': {
          purple: '#CC00FF',
          dark: '#303030',
          muted: '#5C5D5E',
        }
      }
    },
  },
  plugins: [],
};