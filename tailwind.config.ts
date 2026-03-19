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
        // Charcoal-green — dark base for nav, footer, overlays (NOT pure green)
        ink: {
          50:  "#F4F6F3",
          100: "#E3E8DF",
          200: "#C4CFC0",
          300: "#9FB49A",
          400: "#78976F",
          500: "#567A4B",
          600: "#415E37",
          700: "#314529",
          800: "#232F1E",
          900: "#171F14",  // Rich dark charcoal-green — for nav/footer/overlays
          950: "#0D1209",  // Near-black
        },
        // Brand green — primary accent, used sparingly
        copper: {
          50:  "#EEF9E3",
          100: "#D5F0BB",
          200: "#AEDF7E",
          300: "#87CB47",
          400: "#66B42E",
          500: "#4D9A1E",  // Main brand green — logo color
          600: "#3A7A15",
          700: "#2C5D0F",
          800: "#1D3F09",
          900: "#102404",
          950: "#060F01",
        },
        // Warm sage — secondary/soft green for subtle section accents
        sage: {
          50:  "#F2F5EF",
          100: "#E2E9DC",
          200: "#C4D3BB",
          300: "#A3BC97",
          400: "#82A473",
          500: "#628D54",
          600: "#4B6D3F",
          700: "#38512F",
          800: "#263820",
          900: "#152013",
          950: "#0A100B",
        },
        // Backgrounds
        parchment: "#F8FAF6",   // Very light, near-white with faint green tint
        stone:     "#EAEEe7",   // Soft gray-green for alternating sections
        chalk:     "#FFFFFF",   // Pure white
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
