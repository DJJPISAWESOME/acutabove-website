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
        pine: {
          50:  "#f0f7f2",
          100: "#d9eee0",
          200: "#b3dcc1",
          300: "#7fc49e",
          400: "#4da87b",
          500: "#2e8a5e",
          600: "#1f6e48",
          700: "#195a3b",
          800: "#154830",
          900: "#0f3322",
          950: "#081f14",
        },
        gold: {
          50:  "#fdf8ee",
          100: "#f9edcc",
          200: "#f2d98a",
          300: "#ebc34f",
          400: "#d4a83c",
          500: "#b8862e",
          600: "#9a6a20",
          700: "#7d5218",
          800: "#653f12",
          900: "#52300d",
        },
        slate: {
          950: "#0b1120",
        },
        cream: "#FAF7F2",
        charcoal: "#111827",
      },
      fontFamily: {
        display: ["Playfair Display", "Georgia", "serif"],
        body: ["Inter", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
