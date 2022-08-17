import { Home, Login, Product } from "pages";

import pageNames from "./routeNames";

const routes: { path: string; element: JSX.Element }[] = [
  { path: pageNames.home, element: <Home /> },
  { path: pageNames.login, element: <Login /> },
  { path: pageNames.product, element: <Product /> },
];
export default routes;
