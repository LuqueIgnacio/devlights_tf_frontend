import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        white: {
          100: "#F5F5F5",
          200: "#DBDBDB"
        },
      },
      fontFamily:{
        montserrat: ["var(--font-montserrat)"]
      }
    },
  },
  plugins: [],
} satisfies Config;
