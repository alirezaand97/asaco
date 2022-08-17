import * as Yup from "yup";
import i18next from "i18n";

const requireMessage = i18next.t("requireMessage");

const incorrectFormat = (field: string) =>
  i18next.t("incorrectFormat", { field: i18next.t(field) });

const minLengthMessage = (field: string, min: number) =>
  i18next.t("minLengthError", {
    field: i18next.t(field),
    min: min,
  });

const mobileRegex = /^(\+98|0)?9\d{9}$/;
const underCasePassRegex = /(?=.*[a-z])/;
const upperCasePassRegex = /(?=.*[A-Z])/;
const numberPasswordRegex = /(?=.*?[0-9])/;
const specialCharPassRegex = /(?=.*?[#?!@$%^&*-])/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[\W])(?=.*[0-9])(?=.*[a-z]).{8,}$/g;

export const username = Yup.string().label("username").required(requireMessage);

export const password = (label: string, isRequire = false) => {
  return Yup.string()
    .label(label)
    .matches(passwordRegex, incorrectFormat("password"))
    .required(requireMessage);
};

export const mobileNumber = Yup.string()
  .label("mobileNumber")
  .matches(mobileRegex, incorrectFormat("mobile"))
  .required(requireMessage);

export const email = (label: string, isRequire?: boolean) => {
  if (isRequire) {
    return Yup.string()
      .email(incorrectFormat("email"))
      .label(label)
      .required(requireMessage)
      .nullable();
  } else {
    return Yup.string().email(incorrectFormat("email")).label(label);
  }
};

export const date = (label: string, isRequire = false) => {
  if (isRequire) {
    return Yup.date()
      .label(label)
      .nullable(false)
      .typeError(incorrectFormat("date"))
      .required(requireMessage);
  } else {
    return Yup.number().label(label).nullable(false).typeError(requireMessage);
  }
};

export const genderTypeId = Yup.number()
  .typeError(requireMessage)
  .label("genderTypeId")
  .required(requireMessage);

const FILE_SIZE: number = 1;
const SUPPORTED_FORMATS: { type: string }[] = [];
export const Image = Yup.mixed()
  .required("A file is required")
  .test(
    "fileSize",
    "File too large",
    (value: { size: number }) => value && value.size <= FILE_SIZE
  )
  .test(
    "fileFormat",
    "Unsupported Format",
    (value) => value && SUPPORTED_FORMATS.includes(value.type)
  );
