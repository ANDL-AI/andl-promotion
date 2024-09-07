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
        'hs-secondary': '#295F98', 
        'hs-third': '#CDC2A5',
        'hs-fourth': '#E1D7C6 ', 
        'hs-background': '#EAE4DD',
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
      }
    },
  },
  plugins: [],
};
export default config;
