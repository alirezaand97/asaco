import React from "react";
import { Route, Navigate } from "react-router-dom";
import routeNames from "./routeNames";
import { useAppSelector } from "store";

interface Props {
  path: string;
  component: React.ReactNode;
}

export const PrivateRoute = (props: Props) => {
  const isLoggedin = useAppSelector((s) => s.auth);
  return isLoggedin ? <Route {...props} /> : <Navigate to={routeNames.login} />;
};
