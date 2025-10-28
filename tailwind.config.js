/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        pastelCream: '#fffff0',
        pastelCharcoal: '#2f2f2f',
        pastelGreen: '#d5f5e3',
        pastelBlue: '#d0e8ff',
        pastelCoral: '#ffccbc',
        midnight: '#0d1b2a',
        appBackground: '#1b263b',
      },
    },
  },
  plugins: [],
};