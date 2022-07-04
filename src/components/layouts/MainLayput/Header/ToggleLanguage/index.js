import React, { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useTranslation } from "react-i18next";

const ToggleLanguage = () => {
  const { i18n } = useTranslation();
  const [lang, setLang] = useState(localStorage.getItem("i18nextLng"));

  const handleChangeLanguage = (event) => {
    setLang(event.target.value);
    i18n.changeLanguage(event.target.value);
  };

  return (
    <FormControl size="small">
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={lang}
        onChange={handleChangeLanguage}
        variant="standard"
      >
        <MenuItem value="en">English</MenuItem>
        <MenuItem value="fa">فارسی</MenuItem>
      </Select>
    </FormControl>
  );
};

export default ToggleLanguage;
