module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        primaryShadow: "0 4px 25px rgb(0 0 0 / 5%)",
        imgShadow: "0 15px 50px rgb(0 0 0 / 5%)",
      },
      colors: {
        primary: "#F7A700",
        primaryLight: "#FFF3DA",
        secondaryLight: "#727272",
        secondary: "#000",
        bodyColor: "#F9FAFD",
        grayLight: "#fafafa",
        border: "#DCDCDC",
      },
      fontFamily: {
        yekan: "YekanBakh",
        yekanMedium: "YekanBakhMedium",
        yekanBold: "YekanBakhBold",
      },
      container: {
        center: true,
        padding:'12px'
      },
      width: {
        productImg: "200px",
        logo:"150px"
      },
      height: {
        productImg: "200px",
        landing: "700px",
      
      },
    },
  },
  plugins: [],
};
