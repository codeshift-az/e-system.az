import { useTranslation } from "react-i18next";

// Assets
import { FeaturesBackground1, FeaturesBackground2 } from "@/assets/images";

const Features = () => {
  const { t } = useTranslation("pages", { keyPrefix: "home.features" });

  return (
    <div className="our-features-area default-padding bottom-less">
      <div
        className="fixed-bg"
        style={{ backgroundImage: `url(${FeaturesBackground2})` }}></div>
      <div className="container">
        <div className="feature-items">
          <div className="row">
            <div className="single-item col-lg-4 col-md-6">
              <div
                className="item service-banner"
                style={{ backgroundImage: `url(${FeaturesBackground1})` }}>
                <h4>{t("card1.title")}</h4>
                <h2>{t("card1.description")}</h2>
                <a className="btn circle btn-theme-effect btn-sm" href="#">
                  View More
                </a>
              </div>
            </div>

            <div className="single-item col-lg-4 col-md-6">
              <div className="item">
                <div className="icon">
                  <i className="flaticon-integration"></i>
                </div>
                <div className="info">
                  <h4>
                    <a href="#">{t("card2.title")}</a>
                  </h4>
                  <p>{t("card2.description")}</p>
                </div>
              </div>
            </div>

            <div className="single-item col-lg-4 col-md-6">
              <div className="item">
                <div className="icon">
                  <i className="flaticon-rgb-1"></i>
                </div>
                <div className="info">
                  <h4>
                    <a href="#">{t("card3.title")}</a>
                  </h4>
                  <p>{t("card3.description")}</p>
                </div>
              </div>
            </div>

            <div className="single-item col-lg-4 col-md-6">
              <div className="item">
                <div className="icon">
                  <i className="flaticon-resolution-1"></i>
                </div>
                <div className="info">
                  <h4>
                    <a href="#">{t("card4.title")}</a>
                  </h4>
                  <p>{t("card4.description")}</p>
                </div>
              </div>
            </div>

            <div className="single-item col-lg-4 col-md-6">
              <div className="item">
                <div className="icon">
                  <i className="flaticon-drag"></i>
                </div>
                <div className="info">
                  <h4>
                    <a href="#">{t("card5.title")}</a>
                  </h4>
                  <p>{t("card5.description")}</p>
                </div>
              </div>
            </div>

            <div className="single-item col-lg-4 col-md-6">
              <div className="item">
                <div className="icon">
                  <i className="flaticon-showcase"></i>
                </div>
                <div className="info">
                  <h4>
                    <a href="#">{t("card6.title")}</a>
                  </h4>
                  <p>{t("card6.description")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
