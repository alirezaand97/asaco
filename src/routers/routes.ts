const routesPath = {
  login: "login",
  signup: "signup",
  home: {
    index: "/",
  },
  dashboard: {
    index: "dashboard",
  },
  category: {
    list:"products/category/:slug"
  },
  search: "search/:slug",
};

export default routesPath;
