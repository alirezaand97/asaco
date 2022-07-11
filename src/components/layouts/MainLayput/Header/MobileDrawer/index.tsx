import Drawer from "@mui/material/Drawer";
import headerItems from "constants/headerItems";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Logo from "components/general/Logo";
import "./style.css";
import { useAppDispatch, useAppSelector } from "store";
import { toggleDrawer } from "store/modals";
interface Props {
  drawerIsOpen: boolean;
  setDrawerIsOpen: any;
}
const MobileDrawer = (props: Props) => {
  const { drawer } = useAppSelector((s) => s.modals);
  const dispatch = useAppDispatch();
  const handleToggleDrawer = () => {
    dispatch(toggleDrawer());
  };
  const { t } = useTranslation();

  return (
    <Drawer
      anchor="right"
      open={drawer.show}
      onClose={() => handleToggleDrawer()}
    >
      <div>
        <Logo className="my-4" />
        {headerItems.map((item, index) => (
          <div
            key={index}
            className="p-2 mx-2 text-md hover:text-primary hover:bg-primaryLight rounded-md"
          >
            <NavLink to={item.url}>{t(item.title)}</NavLink>
          </div>
        ))}
      </div>
    </Drawer>
  );
};

export default MobileDrawer;
