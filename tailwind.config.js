/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ["./src/**/*.{vue,js}", "./src/*.{vue,js}","./*.{html,js}"],
  theme: {
    extend: {
      spacing: {
        
        '112': '30rem',
        'bottom': '1.75rem',
      },
      borderRadius: {
        'base': '1rem'
      },
      dropShadow: {
        'button': '0 0 15px hsl(150, 100%, 66%)',
      }
    },
    screens: {
      'mobile': { max: '600px'},
      'tablet': { min: '601px', max: '1439px'},
      'desktop': { min: '1440px'}
    },
    colors: {
      'lCyan': 'hsl(193, 38%, 86%)',
      'nGreen': 'hsl(150, 100%, 66%)',
      'gBlue': 'hsl(217, 19%, 38%)',
      'dgBlue': 'hsl(217, 19%, 24%)',
      'dBlue': 'hsl(218, 23%, 16%)'
    },
    fontFamily: {
      'manrope': ['Manrope', ...defaultTheme.fontFamily.sans]
    },
    fontSize: {
      base: '0.75rem',
      quote: '28px'
    },
    letterSpacing: {
      label: '0.25rem',
    }
  },
  plugins: [],
}
