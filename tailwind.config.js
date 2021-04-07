module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': ['Poppins', 'system-ui'],
      'serif': ['Poppins','ui-serif', 'Georgia'],
      'mono': ['Poppins','ui-monospace', 'SFMono-Regular'],
      'display': ['Poppins','Oswald'],
      'body': ['Poppins']
     },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
