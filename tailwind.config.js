/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // extend: {},
    container: {
      center: true,
      width: {
        DEFAULT: 'w-2/4',
        sm: 'w-3/4',
        lg: 'w-3/4',
        xl: 'w-3/4',
        '2xl': 'w-3/4',
      },
    },
    colors: {
      'midnight': '#2a2c2d',
    },
  },
  plugins: [],
  darkMode: 'class',
}
