const convertToPersianDigit = (n: any) => {
  const farsiDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  if (n) {
    return n
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
      .replace(/\d/g, (x: any) => farsiDigits[x]);
  }
};

export default convertToPersianDigit;
