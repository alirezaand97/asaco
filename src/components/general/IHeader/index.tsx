interface Props {
  children: any;
  className?: string;
}
const IHeader = ({ className, ...props }: Props) => {
  return (
    <h1
      {...props}
      className={`font-yekanBold relative text-xl text-primaryBold text-right  before:content-[''] before:w-8 before:h-[.1rem] before:bg-primary before:absolute before:top-full ${className}`}
    >
      {props.children}
    </h1>
  );
};
export default IHeader;
