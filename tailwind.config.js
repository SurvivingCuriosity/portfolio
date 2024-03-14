/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        text: "text 8s ease infinite",
        "infinite-scroll": "infinite-scroll 15s linear infinite",
        wave: "wave 1s ease-in-out 1.5s",
        "fade-in-top":
          "fade-in-top 0.8s cubic-bezier(0.390, 0.575, 0.565, 1.000)   both",
        "in-top": "in-top 0.8s cubic-bezier(0.390, 0.575, 0.565, 1.000)   both",
      },
      keyframes: {
        text: {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
        wave: {
          "0%": { transform: "rotate(0deg)" },
          "10%": { transform: "rotate(10deg)" },
          "20%": { transform: "rotate(-10deg)" },
          "30%": { transform: "rotate(10deg)" },
          "40%": { transform: "rotate(-10deg)" },
          "50%": { transform: "rotate(10deg)" },
          "60%": { transform: "rotate(-10deg)" },
          "70%": { transform: "rotate(10deg)" },
          "80%": { transform: "rotate(-10deg)" },
          "90%": { transform: "rotate(10deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
        "fade-in-top": {
          "0%": {
            transform: "translateY(-5px)",
            opacity: "0",
          },
          to: {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
        "in-top": {
          "0%": {
            transform: "translateY(-32px)",
          },
          to: {
            transform: "translateY(0)",
          },
        },
      },
    },
  },
  plugins: [],
};
