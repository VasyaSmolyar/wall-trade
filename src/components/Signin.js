import { useTranslation } from "react-i18next";

const Signin = () => {
    const { t } = useTranslation();

    return (
        <div>
            <h1>{t("routes.signin")}</h1>
        </div>
    )
}

export default Signin;