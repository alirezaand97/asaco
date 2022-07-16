// import logo from "./logo.svg";
import { lazy, Suspense, useEffect } from "react";
import "./App.css";
import "./i18n";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import routes from "routers/routes";
import { useTranslation } from "react-i18next";
import { PersistGate } from "redux-persist/integration/react";

const Loader = lazy(() => import("components/layouts/MainLayput/Loader"));

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    if (i18n.language === "fa") {
      document.documentElement.dir = "rtl";
    } else {
      document.documentElement.dir = "ltr";
    }
  }, [i18n.language]);

  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>
          {routes.map((route) => (
            <Route {...route} key={route.path} />
          ))}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
