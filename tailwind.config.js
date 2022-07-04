module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#131b1f",
        primaryLight: "#131b1f",
        primaryBold: "#213743",
        secondary: "#ffa41b",
        grayLight: "#fafafa",
        grayBorder: "#ddd",
      },
      fontFamily: {
        yekan: "YekanBakh",
        yekanMedium: "YekanBakhMedium",
        yekanBold: "YekanBakhBold",
      },
      container: {
        center: true,
      },
      width: {
        'productImg': '190px',
      },
      height: {
        'productImg': '190px',
      }
    },
  },
  plugins: [],
};
