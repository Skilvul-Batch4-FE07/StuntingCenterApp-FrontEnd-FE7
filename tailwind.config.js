/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        sc: {
          darkBlue: "#05799D",
          lightBlue: "#4BD2D7",
          tosca: "#BAF7FA",
          lightTosca: "#D4FDFD",
        },
      },
      animation: {
        bounce200: "bounce 1s infinite 200ms",
        bounce400: "bounce 1s infinite 400ms",
      },
    },
  },
  plugins: [],
};
