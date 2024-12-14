import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        jakarta: ["Plus Jakarta Sans", "sans-serif"]
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        white: "#ffffff",
        lightGreyGreen: "#ADB2B1",
        darkGreyGreen: "#3D544D",
        mintGreen: "#80CB86",
        veryDarkGreyGreen: "#1A1E1C",
        baseGreen: "#2BB32A"
      },
    },
    screens: {
      xs: "391px",
      ss: "620px",
      sm: "768px",
      ip: "1000px",
      md: "1200px",
      lg: "1440px",
      xl: "1700px",
    },
  },
  plugins: [],
} satisfies Config;
