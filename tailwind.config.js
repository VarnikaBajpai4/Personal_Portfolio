/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        retro: {
          bg: "#bfbfbf",
          win: "#ffffff",
          title: "#e3e3e3",
          ink: "#000000",
        },
      },
      fontFamily: {
        chicago: ["Chikarego2", "ui-sans-serif", "system-ui"],
      },
      boxShadow: {
        'retro-hard': '8px 8px 0 rgba(0,0,0,0.30)',
      },
      borderRadius: {
        none: "0px",
      },
    },
  },
  plugins: [],
}
