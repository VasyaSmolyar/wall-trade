import { useTranslation } from "react-i18next";

const Trading = () => {
    const { t } = useTranslation();

    return (
        <div>
            <h1>{t("routes.trading")}</h1>
        </div>
    )
}

export default Trading;