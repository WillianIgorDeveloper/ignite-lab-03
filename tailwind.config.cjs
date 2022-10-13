/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    fontSize: {
      'xs': '0.75rem',
      'sm': '0.875rem',
      'md': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.75rem',
      '4xl': '2rem',
      '5xl': '2.25rem',
    },
    colors: {
      transparent: 'transparent',
      white: '#FFF',
      black: '#000',
      gray: {
        100: '#F2F2F2',
        200: '#E6E6E6',
        300: '#CACACA',
        600: '#404040',
        700: '#222222',
        800: '#191919',
      },
      purple: {
        500: '#3F3D56',
        600: '#2F2E41',
      },
      yellow: '#DE8F00',
      red: '#7F1D1D',
    },
    extend: {
      fontFamily: {
        sans: 'Roboto, sans-serif'
      }
    },
  },
  plugins: [],
}