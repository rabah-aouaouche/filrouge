/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#DC9750",

          secondary: "#2F3030",

          accent: "#F7FAF0",

          neutral: "#ABA6A0",

          "base-100": "#FFFFFF",

          info: "#a5f3fc",

          success: "#a3e635",

          warning: "#fbbf24",

          error: "#dc2626",
        },
      },
      {
        darktheme: {
          primary: "#975330",

          secondary: "#DFCFB0",

          accent: "#1D3110",

          neutral: "#151423",

          "base-100": "#151423",

          info: "#3ABFF8",

          success: "#36D399",

          warning: "#FBBD23",

          error: "#F87272",
        },
      },
    ],
  },
};
