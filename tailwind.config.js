/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: '#00409e',
          DEFAULT: '#0d6efd',
          light: '#6396e1',
        },
        secondary: {
          dark: '#3e4043',
          DEFAULT: '#6c757d',
          light: '#848484',
        },
        success: {
          dark: '#046438',
          DEFAULT: '#198754',
          light: '#0db568',
        },
        danger: {
          dark: '#c40c1e',
          DEFAULT: '#dc3545',
          light: '#f35d6c',
        },
        info: {
          dark: '#0a829a',
          DEFAULT: '#0dcaf0',
          light: '#4dc5dd',
        },
        warning: {
          dark: '#dda600',
          DEFAULT: '#ffc107',
          light: '#e6c150',
        },
        light: {
          dark: '#fafafa',
          DEFAULT: '#f8f9fa',
          light: '#4dc5dd',
        },
        dark: {
          dark: '#151616',
          DEFAULT: '#212529',
          light: '#3c4343',
        },
      },
    },
  },
  plugins: [],
}

