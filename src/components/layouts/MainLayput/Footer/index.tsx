import headerItems from "constants/headerItems";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
      <div className="container flex flex-col md:flex-row  pt-44">
        <div className="w-full md:w-1/2 p-4 leading-8">{t("about")}</div>
        <div className="w-full md:w-1/2 flex p-4">
          {headerItems.map((item, index) => (
            <div key={index} className="sm:mx-1 lg:mx-8 text-md hover:text-blue-700">
              <Link to={item.url}>{t(item.title)}</Link>
            </div>
          ))}
        </div>
      </div>
  );
};

export default Footer;
