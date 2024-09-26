import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#000",
        greenny:'#111d13',
        primaryDark:"#124175",
        primaryGreen:'#245501',
        greenDark:"#104911",
        darkGray:"#1a1f25",
        lightGray:"#272c35",
      },
      container:{
        center: true,
        padding:{
          DEFAULT: "1rem",
          sm:"2rem",
        }
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
};
export default config;
