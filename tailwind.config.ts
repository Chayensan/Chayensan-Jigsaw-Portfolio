import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./hooks/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#030303",
          900: "#080806",
          800: "#10100d",
          700: "#191916",
        },
        bone: "#e8e4d6",
        muted: "#858173",
        moss: "#9caa69",
        ember: "#c8a95b",
      },
      fontFamily: {
        display: ["IvyPresto", "Cormorant Garamond", "Georgia", "serif"],
        sans: ["Avenir Next", "Neue Haas Grotesk Text", "Segoe UI", "sans-serif"],
        label: ["Satoshi", "Avenir Next", "Segoe UI", "sans-serif"],
      },
      boxShadow: {
        underglow: "0 38px 120px -46px rgba(200, 169, 91, 0.72)",
        piece: "0 28px 80px rgba(0,0,0,0.48), inset 0 1px 0 rgba(255,255,255,0.26)",
      },
    },
  },
  plugins: [],
};

export default config;
