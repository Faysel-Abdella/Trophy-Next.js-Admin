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
        mainBlack: "#363941",
        secondBlack: "#4D4D4D",
        mainWhite: "#ffffff",
        mainGray: "#9D9D9D",
        lightGray: "#F5F5F5",
        textGray: "#7A7A7A",
        bgGray: "#F5F6F8",
        mainBlue: "#248DEE",
        borderGray: "#DCDCDC",
        mainRed: "#F05858",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
