module.exports = {
  content: [
    "./*.html",
    "./blog/*.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["Syne", "sans-serif"],
        body: ["Plus Jakarta Sans", "sans-serif"],
      },
      colors: {
        sage: "#A5AF79",
        charcoal: "#454040",
        sky: "#BBE0EF",
        butter: "#FFEF9F",
        paper: "#fcfcfc",
      },
      animation: {
        blob: "blob 8s infinite ease-in-out",
        "spin-slow": "spin 15s linear infinite",
      },
      keyframes: {
        blob: {
          "0%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
          "100%": { transform: "translate(0, 0) scale(1)" },
        },
      },
    },
  },
  plugins: [],
};
