import React from "react";
import { useTranslation } from "react-i18next";
const Loader = () => {

    const { t } = useTranslation()

    return (
        <div className="fixed text-xl font-bold top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-60 bg-white rounded-md">{t("loading")}</div>
    )
}

export default Loader;