const convertToPersianDigit = (n: any) => {
  const farsiDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];

  return n.toString().replace(/\d/g, (x: any) => farsiDigits[x]);
};

export default convertToPersianDigit;
