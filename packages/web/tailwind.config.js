module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      primary: 'var(--primary-bg)',
      secondary: 'var(--secondary-bg)',
      tertiary: 'var(--tertiary-bg)',
      textPrimary: 'var(--primary-text)',
      secondaryText: 'var(--secondary-text)',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
