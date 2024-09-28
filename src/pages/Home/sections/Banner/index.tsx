import {
  BannerBackground,
  BannerBackground2,
  BannerBackground3,
} from "@/assets/images/index";
import { Link } from "react-router-dom";

function Banner() {
  return (
    <div
      className="banner-area banner-style-three text-light text-default"
      style={{ backgroundImage: `url(${BannerBackground})` }}>
      <div
        className="shape-left"
        style={{ backgroundImage: `url(${BannerBackground2})` }}></div>
      <div className="container">
        <div className="double-items">
          <div className="row align-center">
            <div className="col-lg-6 info">
              <h2 className="wow fadeInRight" data-wow-defaul="300ms">
                We're building software<strong>to manage business</strong>
              </h2>
              <p className="wow fadeInLeft" data-wow-delay="500ms">
                Lasted hunted enough an up seeing in lively letter. Had judgment
                out opinions property the supplied.
              </p>
              <Link
                className="btn btn-md circle btn-light effect wow fadeInUp"
                to="#">
                Get Started <i className="fas fa-angle-right"></i>
              </Link>
            </div>

            <div
              className="col-lg-6 thumb wow fadeInRight"
              data-wow-delay="900ms">
              <img src={BannerBackground3} alt="Thumb" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
