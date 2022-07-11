import routeNames from "routers/routeNames";
import config from "./config";
const headerItems = [
  { title: "home", url: routeNames.home },
  { title: "electronics", url: config.categoryUrl + "electronics" },
  { title: "men's clothing", url: config.categoryUrl + "men's clothing" },
  { title: "women's clothing", url: config.categoryUrl + "women's clothing" },
  { title: "jewelery", url: config.categoryUrl + "jewelery" },
];

export default headerItems;
