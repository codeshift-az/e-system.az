import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

// Motion
import { motion } from "framer-motion";

// Components
import MotionComponent from "@/components/MotionComponent";

// Assets
import {
  BannerBackground1,
  BannerBackground2,
  BannerBackground3,
} from "@/assets/images/index";

const Banner = () => {
  const { t } = useTranslation("pages", { keyPrefix: "home.banner" });

  return (
    <div
      className="banner-area banner-style-three text-light text-default"
      style={{ backgroundImage: `url(${BannerBackground1})` }}>
      <div
        className="shape-left"
        style={{ backgroundImage: `url(${BannerBackground2})` }}></div>
      <div className="container">
        <div className="double-items">
          <div className="row align-center">
            <div className="col-lg-6 info">
              <motion.h2
                initial={{ opacity: 0, x: 100 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5 }}
                className="wow fadeInRight"
                data-wow-defaul="300ms">
                {t("title")}
                <strong> {t("title2")}</strong>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 1.5 }}
                viewport={{ once: true }}
                className="wow fadeInLeft"
                data-wow-delay="500ms">
                {t("description")}
              </motion.p>

              <MotionComponent
                as={Link}
                to="/"
                className="btn btn-md circle btn-light effect wow fadeInUp"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                viewport={{ once: true }}>
                {t("button")}
                <i className="fas fa-angle-right"></i>
              </MotionComponent>
            </div>

            <div
              className="col-lg-6 thumb wow fadeInRight"
              data-wow-delay="900ms">
              <motion.img
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.5, duration: 1.5 }}
                viewport={{ once: true }}
                src={BannerBackground3}
                alt="Thumb"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
