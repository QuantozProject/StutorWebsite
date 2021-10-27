module.exports = {
  purge: [],
  darkMode: false,
  theme: {
    colors: {
      primary: {
        default: '#487A71',
        light: '#6B948E',
        lighter: '#DAE4E3',
        lightest: '#F7FAFB',
      },
      secondary: '#6F6F6F',
      white: '#ffffff',
      black: '#1F1F1F',
      transparent: 'rgba(0,0,0,0)',
    },
    error: {
      default: '#DD4A4A',
    },
    fontFamily: {
      sans: ['Avenir', 'sans-serif'],
    },
    fontSize: {
      sm: '12px',
      base: '14px',
      lg: '16px',
      xl: '18px',
      '2xl': '60px',
    },
    extend: {
      boxShadow: {
        default: '0 3px 10px #0000000D',
      },
      spacing: {
        2.5: '0.625rem',
        7.5: '1.875rem',
        100: '25rem',
        66: '16.5rem',
      },
      borderWidth: {
        1: '1px',
        6: '6px',
      },
      backgroundImage: (theme) => ({
        'auth-background': "url('@/assets/img/wave.svg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
