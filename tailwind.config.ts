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
        // Deep forest green — primary dark (replaces navy)
        ink: {
          50:  "#EEF5E8",
          100: "#D4E8C4",
          200: "#AACF8B",
          300: "#80B655",
          400: "#5A9B36",
          500: "#3E7B1F",
          600: "#306017",
          700: "#234610",
          800: "#172E09",
          900: "#0D1C05",
          950: "#070E02",
        },
        // Brand green — primary action/accent (replaces copper/orange)
        copper: {
          50:  "#EDFADF",
          100: "#D3F2B4",
          200: "#ADDF78",
          300: "#88CC45",
          400: "#68B530",
          500: "#4D9A1E",  // Main brand green — close to logo
          600: "#3A7A15",
          700: "#2A5C0D",
          800: "#1B3F07",
          900: "#0E2403",
          950: "#060F01",
        },
        // Warm sage — secondary accent
        sage: {
          50:  "#F2F6F2",
          100: "#DEE9DE",
          200: "#BDD4BE",
          300: "#9BBE9D",
          400: "#7FA981",
          500: "#628D64",
          600: "#4D714F",
          700: "#3A553B",
          800: "#273A28",
          900: "#152016",
          950: "#0A100B",
        },
        // Backgrounds
        parchment: "#F2F8EC",
        stone:     "#E0EBD5",
        chalk:     "#F8FCF5",
      },
      fontFamily: {
        display: ["var(--font-bebas)", "Impact", "sans-serif"],
        heading: ["var(--font-outfit)", "system-ui", "sans-serif"],
        body:    ["var(--font-dm-sans)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
