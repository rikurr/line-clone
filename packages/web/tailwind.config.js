const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      primary: 'var(--primary-bg)',
      secondary: 'var(--secondary-bg)',
      textPrimary: 'var(--primary-text)',
      secondaryText: 'var(--secondary-text)',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
