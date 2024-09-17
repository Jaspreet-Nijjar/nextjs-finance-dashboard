import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        sidebarBG: 'hsl(210, 57%, 97%)',
        sidebarHoverBG: 'hsl(210, 57%, 93%)',
      },
    },
  },
  plugins: [],
};
export default config;
