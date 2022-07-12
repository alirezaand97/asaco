const calcPriceWithDiscount = (price: number, discount: number) => {
  if (discount == 0) return price;
  return (price * (100 - discount)) / 100;
};

export default calcPriceWithDiscount;
