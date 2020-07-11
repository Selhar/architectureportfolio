module.exports = {
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      xxl: '1600px',
    },
    fontFamily: {
      display: ['Gilroy', 'sans-serif'],
      body: ['Graphik', 'sans-serif'],
    },
    borderRadius: {
      'md': '0.25rem',
      'xl': '3rem'
    },
    borderWidth: {
      default: '1px',
      '0': '0',
      '2': '2px',
      '4': '4px',
    },
    backgroundColor: {
      black:        '#111',
      grey:         '#222',
      lightGrey:    '#333',
      orange:       '#955d21',
      yellow:       '#ffc100'
    },
    fill: {
      'orange': '#955d21',
      'white': 'white',
      'yellow': '#ffc100'
    },
    placeholder: {
      'grey': '#ffc100',
    },
    extend: {
      colors: {
        yellow:       '#ffc100',
        orange:       '#955d21',
        lightOrange:  '#FDC582',
      },
      spacing: {
        '96': '24rem',
        '128': '32rem',
      }
    }
  },
  variants: {
    fill: ['responsive, hover']
  },
  plugins: []
}
