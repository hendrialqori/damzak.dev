import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        primary_purple: "var(--primary-purple)",
        sky_blue: "var(--sky-blue)",
        tosca: "var(--tosca)",
        purple: "var(--purple)"
      },
      fontFamily: {
        mulish: ["var(--font-mulish)"]
      }
    },
  },
  plugins: [],
};
export default config;
