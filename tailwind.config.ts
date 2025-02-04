import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: '390px',
      sm: '640px',
      md: '768px',
      mdSm: '800px',
      mdLg: '900px',
      lg: '1024px',
      ipadPro: { 'raw': '(min-height: 1366px)' },
      xl: '1280px',
      '2xl': '1500px',
      '3xl': '1700px',
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
