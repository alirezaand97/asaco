import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import routeNames from "routers/routeNames";
import { useTranslation } from "react-i18next";
import { useLoginUserMutation } from "store/services/user";
import { setCredentials } from "store/auth";
import { useNavigate } from "react-router-dom";
import Storage from "storage";
import namespace from "storage/namespace";
import IInput from "components/general/IInput";
import { Form, Formik } from "formik";
import loginInterface from "models/login.model";
import LoginSchema from "validation/schemas/loginSchema";
import { useAppDispatch } from "store";
import IButton from "components/general/IButton";
import MainLayout from "components/layouts/MainLayput";
import Logo from "components/general/Logo";

const Login = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  let navigate = useNavigate();

  const [login] = useLoginUserMutation();

  const handleLogin = (params: loginInterface) => {
    dispatch(setCredentials({ token: "5ASDohinasCSXXasd5" }));

    // login(params)
    //   .unwrap()
    //   .then((data) => {
    //     dispatch(setCredentials(data));
    //     Storage.set(namespace.token, data);
    //     navigate("/");
    //   });
  };

  return (
    <MainLayout showFooter={false} showHeader={false}>
      <div className="container flex h-screen justify-center items-center">
        <div className="w-[384px] max-w-sm border border-border rounded-md p-8">
          <Logo className="mx-auto mb-12" />
          <Formik
            initialValues={{
              email: "",
              password: "",
              file: [],
            }}
            // validationSchema={LoginSchema}
            onSubmit={handleLogin}
          >
            {(props) => (
              <Form>
                <IInput
                  type="email"
                  name="email"
                  className="my-4"
                  placeholder={t("email")}
                />
                <IInput
                  type="password"
                  name="password"
                  className="my-4"
                  placeholder={t("password")}
                />
                <IButton
                  type="submit"
                  className="w-full mt-12 bg-primary text-white  rounded-md"
                >
                  {t("login")}
                </IButton>
              </Form>
            )}
          </Formik>
          <div className="text-right my-3 text-sm ltr:text-left">
            <span>{t("isSignUp")}</span>
            <Link
              to={routeNames.login}
              className="text-blue-800 inline-block mx-2 font-bold"
            >
              {t("signUp")}
            </Link>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Login;
