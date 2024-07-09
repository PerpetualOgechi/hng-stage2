/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "480px",
        md: "768px",
        lg: "1020px",
        xl: "1440px",
        sb: "1200px",
      },
      backgroundImage: {
       homeHeroBg: "url('/polygon1.png')",
      },
    },
  },
  plugins: [],
};
