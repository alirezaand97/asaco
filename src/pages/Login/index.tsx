import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import routes from "routers/routes";
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
import IUploadInput from "components/general/IUploadInput";
import IButton from "components/general/IButton";
import MainLayout from "components/layouts/MainLayput";
const Login = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  let navigate = useNavigate();

  const [login] = useLoginUserMutation();

  const handleLogin = (params: loginInterface) => {
    login(params)
      .unwrap()
      .then((data) => {
        dispatch(setCredentials(data));
        Storage.set(namespace.token, data);
        navigate("/");
      });
  };

  return (
    <MainLayout showFooter={false} showHeader={false}>
      <div className="w-full h-screen  flex flex-row justify-center">
        <div className="w-full md:w-1/2 lg:w-1/4 flex justify-center items-center">
          <div className="w-full border rounded-md p-6">
            <h3 className="my-6 mb-10 text-center font-semibold text-xl">
              {t("siteName")}
            </h3>
            <Formik
              initialValues={{
                email: "eve.holt@reqres.in",
                password: "cityslicka",
                file: [],
              }}
              validationSchema={LoginSchema}
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
                    className="w-full my-3 bg-primary text-white  rounded-md"
                  >
                    {t("login")}
                  </IButton>
                </Form>
              )}
            </Formik>
            <div className="text-right my-1 text-sm ltr:text-left">
              <span>{t("isSignUp")}</span>
              <Link
                to={routes.signup}
                className="text-blue-800 inline-block mx-2 font-bold"
              >
                {t("signUp")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Login;
