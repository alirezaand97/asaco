import routeNames from "routers/routeNames";
import config from "./config";
const headerItems = [
  { title: "home", url: routeNames.home },
  { title: "mobile", url: config.categoryUrl + "mobile" },
  { title: "laptop", url: config.categoryUrl + "laptop" },
  { title: "watch", url: config.categoryUrl + "watch" },
  { title: "game", url: config.categoryUrl + "game" },
];

export default headerItems;
