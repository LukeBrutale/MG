/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      screens: {
        s: "375px",
        m: "480px",
        l: "768px",
      },
      fontSize: {
        xs: ["12px", "1.6"],
        sm: ["14px", "1.6"],
        base: ["16px", "1.6"],
        lg: ["18px", "1.6"],
        xl: ["20px", "1.6"],
        "2xl": ["24px", "1.6"],
        "3xl": ["30px", "1.6"],
        "4xl": ["36px", "1.6"],
        "5xl": ["48px", "1.6"],
      },
    },
  },
  plugins: [],
};
