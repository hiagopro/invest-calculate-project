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
        'purple-500': "#6115dd",
        foreground: "var(--foreground)",
      },
      fontFamily:{
        Heebo: ['Heebo', 'sans-serif'],
      }
    },
  },
  plugins: [],
} satisfies Config;
