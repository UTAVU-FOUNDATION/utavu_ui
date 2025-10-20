/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  safelist: [
    // UTAVU Purple variants
    'bg-utavu-purple',
    'bg-utavu-purple-light',
    'bg-utavu-purple-dark',
    'text-utavu-purple',
    'text-utavu-purple-light',
    'text-utavu-purple-dark',
    'border-utavu-purple',
    'border-utavu-purple-light',
    'border-utavu-purple-dark',
    'hover:bg-utavu-purple',
    'hover:bg-utavu-purple-light',
    'hover:bg-utavu-purple-dark',
    'hover:text-utavu-purple',
    'hover:text-utavu-purple-light',
    'hover:text-utavu-purple-dark',
    'hover:border-utavu-purple',
    'hover:border-utavu-purple-light',
    'hover:border-utavu-purple-dark',
    
    // UTAVU Green variants
    'bg-utavu-green',
    'bg-utavu-green-light',
    'bg-utavu-green-dark',
    'text-utavu-green',
    'text-utavu-green-light',
    'text-utavu-green-dark',
    'border-utavu-green',
    'border-utavu-green-light',
    'border-utavu-green-dark',
    'hover:bg-utavu-green',
    'hover:bg-utavu-green-light',
    'hover:bg-utavu-green-dark',
    'hover:text-utavu-green',
    'hover:text-utavu-green-light',
    'hover:text-utavu-green-dark',
    'hover:border-utavu-green',
    'hover:border-utavu-green-light',
    'hover:border-utavu-green-dark',
    
    // Legacy camelCase support
    'bg-utavuPurple',
    'bg-utavuPurple-light',
    'bg-utavuPurple-dark',
    'bg-utavuGreen',
    'bg-utavuGreen-light',
    'bg-utavuGreen-dark'
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        brand: {
          900: '#0B3D91',
          600: '#2763D6',
        },
        accent: '#00BFA6',
        surface: '#F8FAFC',
        // Kebab-case versions (preferred)
        'utavu-green': {
          DEFAULT: '#32CD32',
          light: '#90EE90',
          dark: '#228B22',
        },
        'utavu-purple': {
          DEFAULT: '#8A2BE2',
          light: '#DDA0DD',
          dark: '#4B0082',
        },
        // Legacy camelCase support
        utavuGreen: {
          DEFAULT: '#32CD32',
          light: '#90EE90',
          dark: '#228B22',
        },
        utavuPurple: {
          DEFAULT: '#8A2BE2',
          light: '#DDA0DD',
          dark: '#4B0082',
        },
        // New theme colors
        primary: {
          bg: 'var(--bg-primary)',
          text: 'var(--text-primary)',
          border: 'var(--border-primary)',
        },
        secondary: {
          bg: 'var(--bg-secondary)',
          text: 'var(--text-secondary)',
          border: 'var(--border-secondary)',
        },
        tertiary: {
          bg: 'var(--bg-tertiary)',
          text: 'var(--text-tertiary)',
        },
      },
      backgroundColor: {
        surface: {
          primary: 'var(--surface-primary)',
          secondary: 'var(--surface-secondary)',
          tertiary: 'var(--surface-tertiary)',
        },
      },
      spacing: {
        '4': '1rem',
        '8': '2rem',
        '12': '3rem',
        '16': '4rem',
        '24': '6rem',
        '32': '8rem',
        '40': '10rem',
        '64': '16rem',
      },
      borderRadius: {
        'card': '12px',
        'button': '8px',
      },
      boxShadow: {
        'subtle': '0 6px 18px rgba(12,20,40,0.08)',
      },
    },
  },
  plugins: [],
};
