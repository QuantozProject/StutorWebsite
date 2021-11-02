module.exports = {
  purge: [],
  darkMode: false,
  theme: {
    screens: {
      sm: '380px',
      md: '640px',
      lg: '768px',
      xl: '1024px',
      '2xl': '1280px',
      '3xl': '1536px',
    },
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
      '2xl': '20px',
      '3xl': '30px',
      '4xl': '40px',
      '5xl': '60px',
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
      borderRadius: {
        large: '2rem',
      },
      backgroundImage: (theme) => ({
        'auth-background': "url('@/assets/img/wave.svg')",
      }),
      keyframes: {
        'fade-in-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'fade-in-top-mob': {
          '0%': {
            opacity: '0',
            transform: 'translateY(300px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'fade-in-down-mob': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-300px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'expand-small-big': {
          '0%': {
            transform: 'scale(0.8)',
          },
          '100%': {
            transform: 'scale(1)',
          },
        },
      },
      animation: {
        'fade-in-down': 'fade-in-down 1s ease-out',
        'fade-in-top-mob': 'fade-in-top-mob 1s ease-out',
        'fade-in-down-mob': 'fade-in-down-mob 1s ease-out',
        'expand-small-big': 'expand-small-big .2s ease-in-out',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
