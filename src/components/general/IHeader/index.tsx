import { Interface } from "readline";

interface Props {
  children: any;
  className?: string;
}
const IHeader = ({ className, ...props }: Props) => {
  return (
    <h1
      {...props}
      className={`font-yekanBold relative text-xl text-primaryBold text-right  before:content-[''] before:w-8 before:h-[.1rem] before:bg-secondary before:absolute before:top-full ${className}`}
    />
  );
};
export default IHeader;
