interface Props {
  className?: string;
}
const SliderCatCard = ({ className, ...props }: Props) => {
  return (
    <div
      className={`flex flex-col items-center justify-center  flex-wrap overflow-hidden mt-12 mx-3 mb-8 p-2 rounded-md text-secondary bg-white shadow-primaryShadow`}
    >
      <h1 className="font-yekanBold text-lg text-secondary mt-10">
        تخفیفانه شگفت انگیز
      </h1>
      <h3 className="text-sm text-secondary mt-1">
        تخفیفانه شگفت انگیز تا سقف 50 درصد
      </h3>
      <img
        src="images/discount-icon.png"
        className="w-[80px] h-[80px]"
        alt="best sell"
      />
    </div>
  );
};

export default SliderCatCard;
