const { nextui } = require("@nextui-org/react");
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        noto: ["Noto Sans KR", "sans-serif"],
      },

      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        mainBlack: "#363941",
        mainWhite: "#ffffff",
        mainPurple: "#9388FE",
        mainGray: "#A1A9A3",
        bgPurple: "#F6F5FF",
        bgGray: "#F5F6F8",
        grayBorder: "#D2D5D6",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
