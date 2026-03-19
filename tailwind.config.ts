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
        // Deep slate navy — primary dark
        ink: {
          50:  "#EEF0F3",
          100: "#CDD3DB",
          200: "#9BAAB8",
          300: "#6A8094",
          400: "#3D5A71",
          500: "#1E3A52",
          600: "#162D42",
          700: "#0F2133",
          800: "#091626",
          900: "#060E1C",
          950: "#030810",
        },
        // Rich copper — primary accent
        copper: {
          50:  "#FDF4EE",
          100: "#FAE3CE",
          200: "#F5C49E",
          300: "#EFA070",
          400: "#E07A40",
          500: "#C4612A",
          600: "#A34D1D",
          700: "#7E3A10",
          800: "#582807",
          900: "#321503",
          950: "#1A0A00",
        },
        // Soft sage green — secondary accent
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
        // Warm parchment backgrounds
        parchment: "#F7F2EA",
        stone: "#E5D9C8",
        chalk: "#FDFAF5",
      },
      fontFamily: {
        display: ["var(--font-bebas)", "Impact", "sans-serif"],
        heading: ["var(--font-outfit)", "system-ui", "sans-serif"],
        body: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
