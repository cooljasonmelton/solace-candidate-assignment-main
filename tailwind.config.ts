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
        "accent-gradient": "var(--bg-accent-gradient)",
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
          border: "var(--border-accent)",
          gradient: "var(--bg-accent-gradient)",
        },
        ghost: {
          bg: "var(--bg-ghost)",
          border: "var(--border-ghost)",
          hov: "var(--bg-ghost-hov)",
        },
      },

      borderRadius: {
        xl2: "1rem",
      },
      boxShadow: {
        card: "0 8px 24px rgba(0,0,0,0.06)",
        tile: "0 2px 8px 2px #e9e9e9",
        hovTile: "0 0 20px -1px #d4e2dd4d,0 2px 6px 0 #1d4339",
        float:
          "0 4px 6px -4px rgba(0,0,0,0.1), 0 10px 15px -3px rgba(0,0,0,0.1)",
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
