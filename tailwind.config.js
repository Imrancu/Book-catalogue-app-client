/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#77B748",

          secondary: "#3EB489",

          accent: "#60db85",

          neutral: "#221F29",

          "base-100": "#FFFFFF",

          info: "#5585D8",

          success: "#3EE0AC",

          warning: "#BB690C",

          error: "#FA2A0A",
        },
      },
    ],
  },
  plugins: [require("daisyui")],

  // theme: {
  //   extend: {},
  // },
  // plugins: [],
};
