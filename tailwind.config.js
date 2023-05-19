/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'ms': '580px',
        'mdlg':'895px'
       
      },
    },
  },
  plugins: [],
}

