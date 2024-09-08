import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        'hs-base': '#FFFFFF', 
        'hs-third': '#AF95E2', 
        'hs-secondary': '#6321E6 ', 
        'hs-fourth': '#504BDF',
        'hs-background': '#00171f',
        'linkedin-blue': '#0077B5',
        'hs-text': '#000000',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(0%)' },
        }
      },
      animation: {
        scroll: 'scroll 30s linear infinite',
      },
      screens: {
        'xl-plus': '1380px', // xl + 100px
      },
    },
  },
  plugins: [],
};
export default config;
