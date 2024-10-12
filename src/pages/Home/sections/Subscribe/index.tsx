import { useTranslation } from "react-i18next";

// Assets
import { SubscribeBackground } from "@/assets/images";

const Subscribe = () => {
  const { t } = useTranslation("pages", { keyPrefix: "home.subscribe" });

  return (
    <div className="subscribe-area text-center text-light relative">
      <div className="half-bg-top-gray"></div>
      <div className="container">
        <div className="subscribe-items">
          <i className="flaticon-email"></i>
          <div className="fixed-shape-bottom">
            <img src={SubscribeBackground} alt="Shape" />
          </div>

          <div className="row align-center">
            <div className="col-lg-8 offset-lg-2">
              <h2>{t("title")}</h2>
              <p>
                {t("description")}
                <br />
                {t("description2")}
              </p>
              <form action="#">
                <input
                  type="email"
                  placeholder={t("placeholder")}
                  className="form-control"
                  name="email"
                />
                <button type="submit"> {t("button")}</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
