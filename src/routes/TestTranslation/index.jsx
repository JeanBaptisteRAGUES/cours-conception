import { useTranslation } from "react-i18next";

export default function  TestTranslation() {
    const { t, i18n } = useTranslation();

    console.log(i18n.language);
    console.log(t("welcome"));

    return <h1>{t("welcome")}</h1>;
}