module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var',
              "Montserrat",
              "-apple-system",
              "BlinkMacSystemFont",
              '"Segoe UI"',
              "Roboto",
              '"Helvetica Neue"',
              "Arial",
              '"Noto Sans"',
              "sans-serif",
              '"Apple Color Emoji"',
              '"Segoe UI Emoji"',
              '"Segoe UI Symbol"',
              '"Noto Color Emoji"',],
      },
    },
  },
  plugins: [
    require('@tailwindcss/ui'),
  ]
}
