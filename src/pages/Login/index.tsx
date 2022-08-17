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
import "./style.css";
import ReCAPTCHA from "react-google-recaptcha";
import { useSelector } from "react-redux";

const Login = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  let navigate = useNavigate();
  const store = useSelector((state: any) => state.auth);


  console.log(store)

  const [formValues, setformValues] = useState({
    email: "alireza@gmail.com",
    password: "@Aa123456",
  });
  useEffect(() => {
    // setTimeout(() => {
    setformValues({ email: "alireza@gmail.com", password: "@Aa123456" });
    // }, 3000);
  }, []);

  const [login] = useLoginUserMutation();

  const handleLogin = (params: loginInterface, actions: any) => {
    dispatch(setCredentials({ token: "5ASDohinasCSXXasd5" }));

    login(params)
      .unwrap()
      .then((data) => {
        dispatch(setCredentials(data));
        Storage.set(namespace.token, data);
        navigate("/");
      });
  };

  const [profile, setProfile] = useState<string | ArrayBuffer | null>();

  const imageHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setProfile(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  return (
    <MainLayout showFooter={false} showHeader={false}>
      <div className="container flex h-screen justify-center items-center">
        <div className="w-[384px] max-w-sm border border-border rounded-md p-8">
          <Logo className="mx-auto mb-12" />
          <Formik
            initialValues={{
              email: "alireza@gmail.com",
              password: "@Aa123456",
            }}
            validationSchema={LoginSchema}
            enableReinitialize
            onSubmit={
              (values, { setErrors }) => {
                console.log(values);
              }
              // setErrors({ email: "email error", password: "password error" })
            }
            validateOnChange={true}
            validateOnBlur={true}
            validateOnMount={true}
          >
            {({ handleChange, errors, values }) => (
              <Form>
                <input
                  type="file"
                  accept="image/*"
                  name="image-upload"
                  id="input"
                  onChange={imageHandler}
                />

                <IInput
                  type="email"
                  name="email"
                  className="my-4"
                  placeholder={t("email")}
                  onChange={handleChange}
                  error={errors.email}
                  value={values.email}
                />
                <IInput
                  type="password"
                  name="password"
                  className="my-4"
                  placeholder={t("password")}
                  onChange={handleChange}
                  error={errors.password}
                  value={values.password}
                />

                <ReCAPTCHA sitekey="6LdMEhchAAAAAIrww0fl32K9-ONiFEEqyly6JRZS" />
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
