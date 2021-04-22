module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Sk-Modernist', 'system-ui'],
        display: ['Monument Extended', 'system-ui']
      },
      colors: {
        bluegray: {
          light: '#dee2ec',
          DEFAULT: '#9499a2'
        }
      },
      borderWidth: {
        '3/2': '1.5px'
      },
      maxWidth: {
        '5/2xl': '45rem'
      },
      transitionProperty: {
        navbar: 'height, background'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
