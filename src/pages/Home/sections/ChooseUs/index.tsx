import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

// Assets
import { ChooseUsBackground } from "@/assets/images";

const ChooseUs = () => {

  const { t } = useTranslation("pages", { keyPrefix: "home.chooseUs" });

  const [width, setWidth] = useState<number>(0);
  const progressBarRef = useRef<HTMLDivElement | null>(null);

  const isInViewport = (element: HTMLElement | null): boolean => {
    if (!element) return false;
    const rect = element.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
  };

  useEffect(() => {
    const handleScroll = () => {
      if (progressBarRef.current && isInViewport(progressBarRef.current)) {
        setWidth(Number(progressBarRef.current.getAttribute("data-width")));
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="choose-us-area default-padding bg-gray">
      <div className="container">
        <div className="row align-center">
          <div className="col-lg-6 thumb">
            <img src={ChooseUsBackground} alt="dashboard" />
          </div>

          <div className="col-lg-6 info">
            <div className="item-box">
              <h4>{t("slug")}</h4>
              <h2>
              {t("title1")} <br /> {t("title2")}
              </h2>
              <p>
              {t("description")} 
              </p>
              <ul>
                <li>
                  <i className="fas fa-layer-group"></i>
                  <h5>{t("text1")}</h5>
                </li>

                <li>
                  <i className="fas fa-fingerprint"></i>
                  <h5>{t("text2")}</h5>
                </li>
              </ul>

              <div className="progress-box">
                <h5>Success Rate</h5>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    data-width="78"
                    ref={progressBarRef}
                    style={{
                      width: `${width}%`,
                      opacity: width ? 1 : 0,
                      transition: "width 0.8s linear, opacity 0.8s",
                    }}>
                    <span>{width}%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
