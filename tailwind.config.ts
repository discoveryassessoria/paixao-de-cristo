import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: "#C8A961",
          light: "#E8D9A8",
          lighter: "#F2E8C9",
          dark: "#8B6914",
          deep: "#6B4F10",
        },
        bronze: "#CD7F32",
        silver: "#C0C0C0",
      },
      fontFamily: {
        cinzel: ["Cinzel", "serif"],
        "cinzel-decorative": ["Cinzel Decorative", "serif"],
        cormorant: ["Cormorant Garamond", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
