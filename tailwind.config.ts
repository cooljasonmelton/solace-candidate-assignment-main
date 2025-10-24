import type { Config } from "tailwindcss";

/* Values derived from https://www.solace.health/  */
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        bg: "var(--bg)",
        surface: "var(--surface)",
        card: "var(--card)",
        text: "var(--text)",
        muted: "var(--muted)",
        border: "var(--border)",
        primary: {
          bg: "var(--bg-primary)",
          border: "var(--border-primary)",
        },
        accent: {
          bg: "var(--bg-accent)",
          border: "var(--border-accent)",
        },
        ghost: {
          bg: "var(--bg-ghost)",
          border: "var(--border-ghost)",
        },
      },
      borderRadius: {
        xl2: "1rem",
      },
      boxShadow: {
        card: "0 8px 24px rgba(0,0,0,0.06)",
      },
      fontFamily: {
        sans: [
          "Inter",
          "system-ui",
          "ui-sans-serif",
          "Segoe UI",
          "Arial",
          "sans-serif",
        ],
        display: ["Mollie Glaston", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
