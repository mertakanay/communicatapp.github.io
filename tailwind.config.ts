// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'  // <— important!
  ],
  theme: {
    extend: {
      colors: {
        pastelCream: '#f4ecd6',
        pastelBlue: '#a0e3f0',
      },
    },
  },
  plugins: [],
};

export default config;