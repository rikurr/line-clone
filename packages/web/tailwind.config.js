module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      primary: 'var(--primary)',
      primaryLight: 'var(--primary-dark)',
      secondary: 'var(--secondary)',
      secondaryLight: 'var(--secondary-light)',
      primaryBg: 'var(--primary-bg)',
      secondaryBg: 'var(--secondary-bg)',
      borderColor: 'var(--border-color)',
      black: 'var(--black)',
      white: 'var(--white)',
      gray: 'var(--gray)',
      blue: 'var(--blue)',
      linkText: 'var(--link-text)',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
