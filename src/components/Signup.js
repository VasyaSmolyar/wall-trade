import { useTranslation } from "react-i18next";

const Signup = () => {
    const { t } = useTranslation();

    return (
        <div>
            <h1>{t("routes.signup")}</h1>
        </div>
    )
}

export default Signup;