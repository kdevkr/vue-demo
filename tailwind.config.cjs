const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./index.html', './src/**/*.{html,vue,js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Pretendard', ...defaultTheme.fontFamily.sans],
        pretendard: ['Pretendard'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@headlessui/tailwindcss')],
}
